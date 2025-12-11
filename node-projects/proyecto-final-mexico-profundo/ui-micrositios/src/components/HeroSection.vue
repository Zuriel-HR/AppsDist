<script setup lang="ts">
import type { HomeSection } from '../data'

defineProps<{
  data: HomeSection
}>()

const scrollToTarget = (target: string) => {
  const element = document.getElementById(target)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="hero">
    <div class="hero-bg">
      <!-- In a real app, we would handle image loading/optimization here -->
      <div class="overlay"></div>
      <img :src="data.heroImage" :alt="data.headline" class="bg-img" />
    </div>
    
    <div class="container hero-content">
      <h1>{{ data.headline }}</h1>
      <p>{{ data.subheadline }}</p>
      <button 
        class="btn btn-primary btn-lg"
        @click="scrollToTarget(data.ctaTargetSection)"
      >
        {{ data.ctaLabel }}
      </button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  min-height: 600px;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
  margin-top: -80px; /* Offset header height */
}

.hero-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  overflow: hidden;
}

.bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  animation: zoomIn 20s infinite alternate;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6));
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  text-align: center;
  margin: 0 auto;
}

h1 {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

p {
  font-size: 1.25rem;
  margin-bottom: 2.5rem;
  opacity: 0.9;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
}

@keyframes zoomIn {
  from { transform: scale(1); }
  to { transform: scale(1.1); }
}

@media (max-width: 768px) {
  h1 {
    font-size: 2.5rem;
  }
}
</style>
