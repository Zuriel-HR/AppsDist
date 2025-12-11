<script setup lang="ts">
import { reactive, ref } from 'vue'

type TabKey = 'servicios' | 'mongodb'

type FetchState = {
  loading: boolean
  message: string
  error: string
}

const activeTab = ref<TabKey>('servicios')
const serviciosBaseUrl = ref(import.meta.env.VITE_SERVICIOS_URL || 'http://localhost:3000')
const mongodbBaseUrl = ref(import.meta.env.VITE_MONGODB_URL || 'http://localhost:4000')

const state = reactive<Record<TabKey, FetchState>>({
  servicios: { loading: false, message: '', error: '' },
  mongodb: { loading: false, message: '', error: '' },
})

const forms = reactive({
  mascara: { cadena1: '', cadena2: '' },
  menos: { cadena1: '', cadena2: '' },
  num: { cadena: '' },
  palindroma: { cadena: '' },
  concat: { cadena1: '', cadena2: '' },
  sha: { cadena: '' },
  verify: { cadena: '', sha256: '' },
})

const mongoForms = reactive({
  cols: { db: '' },
  find: { db: '', collection: '', filter: '{}', options: '{ "limit": 5 }' },
  insert: {
    db: '',
    collection: '',
    doc: `{
  "name": "pr-servicios",
  "creator": "Zuriel",
  "date": "08/10/2025 10:09 p. m.",
  "grade": 9.6
}`,
  },
  update: {
    db: '',
    collection: '',
    filter: `{
  "name": "pr-servicios",
  "creator": "Zuriel",
  "date": "08/10/2025 10:09 p. m.",
  "grade": 9.6
}`,
    update: '{ "$set": { "grade": 10 } }',
    options: '{}',
  },
  del: {
    db: '',
    collection: '',
    filter: `{
  "name": "pr-servicios",
  "creator": "Zuriel",
  "date": "08/10/2025 10:09 p. m.",
  "grade": 9.6
}`,
  },
})

function prettify(payload: unknown) {
  try {
    return JSON.stringify(payload, null, 2)
  } catch (err) {
    return String(payload)
  }
}

async function postJson(url: string, payload: Record<string, unknown>, tab: TabKey) {
  state[tab].loading = true
  state[tab].error = ''
  state[tab].message = ''
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    state[tab].message = `(${res.status}) ${prettify(data)}`
  } catch (err) {
    state[tab].error = `No se pudo contactar ${url}: ${String(err)}`
  } finally {
    state[tab].loading = false
  }
}

async function fetchJson(url: string, tab: TabKey) {
  state[tab].loading = true
  state[tab].error = ''
  state[tab].message = ''
  try {
    const res = await fetch(url)
    const data = await res.json().catch(() => ({}))
    state[tab].message = `(${res.status}) ${prettify(data)}`
  } catch (err) {
    state[tab].error = `No se pudo contactar ${url}: ${String(err)}`
  } finally {
    state[tab].loading = false
  }
}

function callServicio(endpoint: string, payload: Record<string, unknown>) {
  postJson(`${serviciosBaseUrl.value}${endpoint}`, payload, 'servicios')
}

function parseJsonInput(raw: string, label: string) {
  try {
    return raw ? JSON.parse(raw) : {}
  } catch (err) {
    state.mongodb.error = `${label} JSON inválido: ${String(err)}`
    return null
  }
}

function listDbs() {
  fetchJson(`${mongodbBaseUrl.value}/dbs`, 'mongodb')
}

function listCols() {
  state.mongodb.error = ''
  if (!mongoForms.cols.db) {
    state.mongodb.error = 'Especifica la base de datos'
    return
  }
  fetchJson(`${mongodbBaseUrl.value}/cols?db=${encodeURIComponent(mongoForms.cols.db)}`, 'mongodb')
}

function mongoFind() {
  state.mongodb.error = ''
  const filter = parseJsonInput(mongoForms.find.filter, 'filter')
  const options = parseJsonInput(mongoForms.find.options, 'options')
  if (filter === null || options === null) return
  if (!mongoForms.find.db || !mongoForms.find.collection) {
    state.mongodb.error = 'db y collection son requeridos'
    return
  }
  postJson(
    `${mongodbBaseUrl.value}/find`,
    {
      db: mongoForms.find.db,
      collection: mongoForms.find.collection,
      filter,
      options,
    },
    'mongodb',
  )
}

function mongoInsert() {
  state.mongodb.error = ''
  const doc = parseJsonInput(mongoForms.insert.doc, 'doc')
  if (doc === null) return
  if (!mongoForms.insert.db || !mongoForms.insert.collection) {
    state.mongodb.error = 'db y collection son requeridos'
    return
  }
  postJson(
    `${mongodbBaseUrl.value}/insert`,
    { db: mongoForms.insert.db, collection: mongoForms.insert.collection, doc },
    'mongodb',
  )
}

function mongoUpdate() {
  state.mongodb.error = ''
  const filter = parseJsonInput(mongoForms.update.filter, 'filter')
  const update = parseJsonInput(mongoForms.update.update, 'update')
  const options = parseJsonInput(mongoForms.update.options, 'options')
  if (filter === null || update === null || options === null) return
  if (!mongoForms.update.db || !mongoForms.update.collection) {
    state.mongodb.error = 'db y collection son requeridos'
    return
  }
  postJson(
    `${mongodbBaseUrl.value}/update`,
    {
      db: mongoForms.update.db,
      collection: mongoForms.update.collection,
      filter,
      update,
      options,
    },
    'mongodb',
  )
}

function mongoDelete() {
  state.mongodb.error = ''
  const filter = parseJsonInput(mongoForms.del.filter, 'filter')
  if (filter === null) return
  if (!mongoForms.del.db || !mongoForms.del.collection) {
    state.mongodb.error = 'db y collection son requeridos'
    return
  }
  postJson(
    `${mongodbBaseUrl.value}/delete`,
    {
      db: mongoForms.del.db,
      collection: mongoForms.del.collection,
      filter,
    },
    'mongodb',
  )
}
</script>

<template>
  <div class="page">
    <header class="header">
  <div>
        <p class="eyebrow">Aplicaciones Distribuidas</p>
        <h1>UI de pruebas para /pr-servicios y /mongodb</h1>
        <p class="lede">
          Ajusta las URLs base en los campos de arriba y ejecuta las llamadas
          POST a los endpoints disponibles. El objetivo es solo probar y ver
          respuestas JSON de forma rápida.
        </p>
      </div>
      <div class="env-inputs">
        <label class="field">
          <span>Base URL servicios</span>
          <input v-model="serviciosBaseUrl" placeholder="http://localhost:3000" />
        </label>
        <label class="field">
          <span>Base URL MongoDB API</span>
          <input v-model="mongodbBaseUrl" placeholder="http://localhost:4000" />
        </label>
      </div>
    </header>

    <div class="tabs">
      <button
        class="tab"
        :class="{ active: activeTab === 'servicios' }"
        type="button"
        @click="activeTab = 'servicios'"
      >
        <ion-icon name="swap-horizontal-outline" aria-hidden="true"></ion-icon>
        Servicios de cadenas
      </button>
      <button
        class="tab"
        :class="{ active: activeTab === 'mongodb' }"
        type="button"
        @click="activeTab = 'mongodb'"
      >
        <ion-icon name="server-outline" aria-hidden="true"></ion-icon>
        MongoDB API
      </button>
    </div>

    <section v-if="activeTab === 'servicios'" class="panel">
      <h2>Operaciones disponibles</h2>
      <p class="hint">
        Todos los endpoints son POST y regresan JSON. Completa los campos y presiona
        "Probar".
      </p>

      <div class="grid">
        <div class="card">
          <h3>/mascaracteres</h3>
          <label class="field">
            <span>Cadena 1</span>
            <input v-model="forms.mascara.cadena1" />
          </label>
          <label class="field">
            <span>Cadena 2</span>
            <input v-model="forms.mascara.cadena2" />
          </label>
          <button
            type="button"
            :disabled="state.servicios.loading"
            @click="callServicio('/mascaracteres', forms.mascara)"
          >
            <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
            Probar
          </button>
        </div>

        <div class="card">
          <h3>/menoscaracteres</h3>
          <label class="field">
            <span>Cadena 1</span>
            <input v-model="forms.menos.cadena1" />
          </label>
          <label class="field">
            <span>Cadena 2</span>
            <input v-model="forms.menos.cadena2" />
          </label>
          <button
            type="button"
            :disabled="state.servicios.loading"
            @click="callServicio('/menoscaracteres', forms.menos)"
          >
            <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
            Probar
          </button>
        </div>

        <div class="card">
          <h3>/numcaracteres</h3>
          <label class="field">
            <span>Cadena</span>
            <input v-model="forms.num.cadena" />
          </label>
          <button
            type="button"
            :disabled="state.servicios.loading"
            @click="callServicio('/numcaracteres', forms.num)"
          >
            <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
            Probar
          </button>
        </div>

        <div class="card">
          <h3>/palindroma</h3>
          <label class="field">
            <span>Cadena</span>
            <input v-model="forms.palindroma.cadena" />
          </label>
          <button
            type="button"
            :disabled="state.servicios.loading"
            @click="callServicio('/palindroma', forms.palindroma)"
          >
            <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
            Probar
          </button>
        </div>

        <div class="card">
          <h3>/concat</h3>
          <label class="field">
            <span>Cadena 1</span>
            <input v-model="forms.concat.cadena1" />
          </label>
          <label class="field">
            <span>Cadena 2</span>
            <input v-model="forms.concat.cadena2" />
          </label>
          <button
            type="button"
            :disabled="state.servicios.loading"
            @click="callServicio('/concat', forms.concat)"
          >
            <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
            Probar
          </button>
        </div>

        <div class="card">
          <h3>/applysha256</h3>
          <label class="field">
            <span>Cadena</span>
            <input v-model="forms.sha.cadena" />
          </label>
          <button
            type="button"
            :disabled="state.servicios.loading"
            @click="callServicio('/applysha256', forms.sha)"
          >
            <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
            Probar
          </button>
        </div>

        <div class="card">
          <h3>/verifysha256</h3>
          <label class="field">
            <span>Cadena</span>
            <input v-model="forms.verify.cadena" />
          </label>
          <label class="field">
            <span>SHA256</span>
            <input v-model="forms.verify.sha256" />
          </label>
          <button
            type="button"
            :disabled="state.servicios.loading"
            @click="callServicio('/verifysha256', forms.verify)"
          >
            <ion-icon name="flash-outline" aria-hidden="true"></ion-icon>
            Probar
          </button>
        </div>
      </div>

      <div class="result">
        <strong>Respuesta:</strong>
        <pre v-if="state.servicios.message">{{ state.servicios.message }}</pre>
        <p v-else class="hint">Aún no se ha realizado una petición.</p>
        <p v-if="state.servicios.error" class="error">{{ state.servicios.error }}</p>
      </div>
    </section>

    <section v-else class="panel">
      <h2>MongoDB API</h2>
      <p class="hint">
        Usa el servidor HTTP del proyecto <code>/mongodb</code> (npm run api) para ejecutar
        las utilidades CRUD sobre tu clúster.
      </p>

      <div class="grid">
        <div class="card">
          <h3>Listar bases</h3>
          <p class="hint">GET /dbs</p>
          <button type="button" :disabled="state.mongodb.loading" @click="listDbs">
            <ion-icon name="cloud-download-outline" aria-hidden="true"></ion-icon>
            Obtener bases
          </button>
        </div>

        <div class="card">
          <h3>Listar colecciones</h3>
          <p class="hint">GET /cols?db=</p>
          <label class="field">
            <span>Base de datos</span>
            <input v-model="mongoForms.cols.db" />
          </label>
          <button type="button" :disabled="state.mongodb.loading" @click="listCols">
            <ion-icon name="folder-open-outline" aria-hidden="true"></ion-icon>
            Obtener colecciones
          </button>
        </div>

        <div class="card">
          <h3>Find</h3>
          <p class="hint">POST /find</p>
          <label class="field">
            <span>DB</span>
            <input v-model="mongoForms.find.db" />
          </label>
          <label class="field">
            <span>Colección</span>
            <input v-model="mongoForms.find.collection" />
          </label>
          <label class="field">
            <span>filter (JSON)</span>
            <textarea rows="3" v-model="mongoForms.find.filter"></textarea>
          </label>
          <label class="field">
            <span>options (JSON)</span>
            <textarea rows="3" v-model="mongoForms.find.options"></textarea>
          </label>
          <button type="button" :disabled="state.mongodb.loading" @click="mongoFind">
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
            Ejecutar find
          </button>
        </div>

        <div class="card">
          <h3>Insert</h3>
          <p class="hint">POST /insert</p>
          <label class="field">
            <span>DB</span>
            <input v-model="mongoForms.insert.db" />
          </label>
          <label class="field">
            <span>Colección</span>
            <input v-model="mongoForms.insert.collection" />
          </label>
          <label class="field">
            <span>doc (JSON)</span>
            <textarea rows="3" v-model="mongoForms.insert.doc"></textarea>
          </label>
          <button type="button" :disabled="state.mongodb.loading" @click="mongoInsert">
            <ion-icon name="add-circle-outline" aria-hidden="true"></ion-icon>
            Insertar
          </button>
        </div>

        <div class="card">
          <h3>UpdateMany</h3>
          <p class="hint">POST /update</p>
          <label class="field">
            <span>DB</span>
            <input v-model="mongoForms.update.db" />
          </label>
          <label class="field">
            <span>Colección</span>
            <input v-model="mongoForms.update.collection" />
          </label>
          <label class="field">
            <span>filter (JSON)</span>
            <textarea rows="3" v-model="mongoForms.update.filter"></textarea>
          </label>
          <label class="field">
            <span>update (JSON)</span>
            <textarea rows="3" v-model="mongoForms.update.update"></textarea>
          </label>
          <label class="field">
            <span>options (JSON)</span>
            <textarea rows="2" v-model="mongoForms.update.options"></textarea>
          </label>
          <button type="button" :disabled="state.mongodb.loading" @click="mongoUpdate">
            <ion-icon name="refresh-circle-outline" aria-hidden="true"></ion-icon>
            Actualizar
          </button>
        </div>

        <div class="card">
          <h3>DeleteMany</h3>
          <p class="hint">POST /delete</p>
          <label class="field">
            <span>DB</span>
            <input v-model="mongoForms.del.db" />
          </label>
          <label class="field">
            <span>Colección</span>
            <input v-model="mongoForms.del.collection" />
          </label>
          <label class="field">
            <span>filter (JSON)</span>
            <textarea rows="3" v-model="mongoForms.del.filter"></textarea>
          </label>
          <button type="button" :disabled="state.mongodb.loading" @click="mongoDelete">
            <ion-icon name="trash-outline" aria-hidden="true"></ion-icon>
            Eliminar
          </button>
        </div>
      </div>

      <div class="result">
        <strong>Respuesta:</strong>
        <pre v-if="state.mongodb.message">{{ state.mongodb.message }}</pre>
        <p v-else class="hint">Aún no se ha realizado una petición.</p>
        <p v-if="state.mongodb.error" class="error">{{ state.mongodb.error }}</p>
      </div>
    </section>
  </div>
</template>
