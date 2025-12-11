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

const mongoProbe = reactive({
  path: '/find',
  body: '{ "db": "sample_mflix", "collection": "comments", "limit": 3 }',
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

function callServicio(endpoint: string, payload: Record<string, unknown>) {
  postJson(`${serviciosBaseUrl.value}${endpoint}`, payload, 'servicios')
}

function callMongo() {
  state.mongodb.error = ''
  let parsed: Record<string, unknown> = {}
  try {
    parsed = JSON.parse(mongoProbe.body)
  } catch (err) {
    state.mongodb.error = `JSON inválido: ${String(err)}`
    return
  }
  postJson(`${mongodbBaseUrl.value}${mongoProbe.path}`, parsed, 'mongodb')
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
        Servicios de cadenas
      </button>
      <button
        class="tab"
        :class="{ active: activeTab === 'mongodb' }"
        type="button"
        @click="activeTab = 'mongodb'"
      >
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
      <h2>MongoDB (API pendiente)</h2>
      <p class="hint">
        Cuando publiques un endpoint HTTP para el proyecto <code>/mongodb</code>,
        usa este probador simple. Define la ruta relativa y el cuerpo JSON a enviar
        por POST.
      </p>
      <div class="card wide">
        <label class="field">
          <span>Ruta relativa (por ejemplo /find)</span>
          <input v-model="mongoProbe.path" />
        </label>
        <label class="field">
          <span>Cuerpo JSON</span>
          <textarea rows="6" v-model="mongoProbe.body"></textarea>
        </label>
        <button type="button" :disabled="state.mongodb.loading" @click="callMongo">
          Probar POST
        </button>
        <p class="hint">
          Asegúrate de exponer un servicio HTTP en el proyecto MongoDB o ajusta este
          front para el contrato final.
        </p>
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
