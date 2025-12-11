<script setup lang="ts">
import { computed } from 'vue'
import type { Microsite } from '../data'
import MicrositeHeader from './MicrositeHeader.vue'
import HeroSection from './HeroSection.vue'
import ProductGrid from './ProductGrid.vue'
import AboutSection from './AboutSection.vue'
import GallerySection from './GallerySection.vue'
import ContactSection from './ContactSection.vue'
import MicrositeFooter from './MicrositeFooter.vue'

const props = defineProps<{
  microsite: Microsite
}>()

// Dynamic styles based on microsite configuration
const themeStyles = computed(() => {
  return {
    '--primary-color': props.microsite.primaryColor,
    '--secondary-color': props.microsite.secondaryColor,
  }
})
</script>

<template>
  <div class="microsite-layout" :style="themeStyles" :class="`theme-${microsite.theme}`">
    <MicrositeHeader :microsite="microsite" />
    
    <main>
      <HeroSection :data="microsite.home" />
      
      <div id="products" class="section-wrapper">
        <ProductGrid 
          title="Nuestros Productos" 
          :items="microsite.products" 
          type="product"
        />
      </div>

      <div v-if="microsite.services.length" id="services" class="section-wrapper bg-surface">
        <ProductGrid 
          title="Experiencias y Servicios" 
          :items="microsite.services" 
          type="service"
        />
      </div>

      <div id="about" class="section-wrapper">
        <AboutSection :data="microsite.about" />
      </div>

      <div id="gallery" class="section-wrapper bg-surface">
        <GallerySection :items="microsite.gallery" />
      </div>

      <div id="contact" class="section-wrapper">
        <ContactSection :contact="microsite.contact" />
      </div>
    </main>

    <MicrositeFooter :microsite="microsite" />
  </div>
</template>

<style scoped>
.microsite-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.section-wrapper {
  width: 100%;
}

.bg-surface {
  background-color: var(--surface-color);
}

/* Theme specifics could go here if needed beyond CSS vars */
.theme-dark {
  --bg-color: #121212;
  --text-color: #ffffff;
  --surface-color: #1e1e1e;
}
</style>
