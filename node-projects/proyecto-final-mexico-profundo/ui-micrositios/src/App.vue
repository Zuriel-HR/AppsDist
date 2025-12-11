<script setup lang="ts">
import { ref, computed } from 'vue'
import { microsites } from './data'
import MicrositeLayout from './components/MicrositeLayout.vue'

// State to simulate routing/selection
const currentMicrositeId = ref(microsites[0].id)

const currentMicrosite = computed(() => {
  return microsites.find(m => m.id === currentMicrositeId.value) || microsites[0]
})
</script>

<template>
  <!-- Dev Tool to switch microsites -->
  <div class="dev-switcher">
    <select v-model="currentMicrositeId">
      <option v-for="site in microsites" :key="site.id" :value="site.id">
        {{ site.oferente.commercialName }} ({{ site.theme }})
      </option>
    </select>
  </div>

  <MicrositeLayout 
    v-if="currentMicrosite"
    :microsite="currentMicrosite" 
  />
</template>

<style scoped>
.dev-switcher {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 9999;
  background: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

select {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 0.9rem;
}
</style>
