<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import type { Microsite } from '../data'

const props = defineProps<{
  microsite: Microsite
}>()

const isScrolled = ref(false)
const isMenuOpen = ref(false)

const checkScroll = () => {
  isScrolled.value = window.scrollY > 50
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

const scrollToSection = (id: string) => {
  isMenuOpen.value = false
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header :class="{ 'scrolled': isScrolled }">
    <div class="container header-content">
      <div class="logo">
        <img v-if="microsite.logoUrl" :src="microsite.logoUrl" :alt="microsite.oferente.commercialName" class="logo-img" />
        <span v-else class="logo-text">{{ microsite.oferente.commercialName }}</span>
      </div>

      <button class="mobile-toggle" @click="toggleMenu" aria-label="Menu">
        <span class="hamburger"></span>
      </button>

      <nav :class="{ 'open': isMenuOpen }">
        <a href="#" @click.prevent="scrollToSection('products')">Productos</a>
        <a v-if="microsite.services.length" href="#" @click.prevent="scrollToSection('services')">Experiencias</a>
        <a href="#" @click.prevent="scrollToSection('about')">Historia</a>
        <a href="#" @click.prevent="scrollToSection('gallery')">Galería</a>
        <a href="#" @click.prevent="scrollToSection('contact')" class="btn btn-primary">Contacto</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  padding: 1.5rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

header.scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 0;
  box-shadow: 0 2px 20px rgba(0,0,0,0.05);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--text-color);
}

.logo-img {
  height: 40px;
  width: auto;
}

nav {
  display: flex;
  gap: 2rem;
  align-items: center;
}

nav a {
  text-decoration: none;
  color: var(--text-color);
  font-weight: 500;
  transition: color 0.3s ease;
}

nav a:not(.btn):hover {
  color: var(--primary-color);
}

.mobile-toggle {
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-color);
  position: relative;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  background: var(--text-color);
  left: 0;
  transition: 0.3s;
}

.hamburger::before { top: -8px; }
.hamburger::after { bottom: -8px; }

@media (max-width: 768px) {
  .mobile-toggle {
    display: block;
  }

  nav {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: white;
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  }

  nav.open {
    transform: translateY(0);
  }
}
</style>
