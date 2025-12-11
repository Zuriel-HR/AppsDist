<script setup lang="ts">
import type { AboutSection } from '../data'

defineProps<{
  data: AboutSection
}>()
</script>

<template>
  <section class="container section about-section">
    <div class="content-wrapper">
      <div class="text-col">
        <h2 class="title">Nuestra Historia</h2>
        <p class="story">{{ data.story }}</p>
        
        <div class="values-list">
          <h3>Nuestros Valores</h3>
          <ul>
            <li v-for="value in data.values" :key="value">
              <span class="check">✓</span> {{ value }}
            </li>
          </ul>
        </div>
      </div>
      
      <div class="process-col">
        <div class="process-card">
          <h3>Proceso Artesanal</h3>
          <p>{{ data.process }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  background-image: radial-gradient(circle at top right, var(--surface-color) 0%, transparent 40%);
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 4rem;
  align-items: center;
}

.title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary-color);
}

.story {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  margin-bottom: 3rem;
}

.values-list h3 {
  margin-bottom: 1rem;
}

.values-list ul {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
}

.values-list li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 500;
}

.check {
  color: var(--primary-color);
  font-weight: bold;
}

.process-card {
  background: var(--surface-color);
  padding: 3rem;
  border-radius: 2rem;
  position: relative;
}

.process-card::before {
  content: '"';
  position: absolute;
  top: 1rem;
  left: 2rem;
  font-size: 8rem;
  line-height: 1;
  color: var(--primary-color);
  opacity: 0.1;
  font-family: serif;
}

.process-card h3 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

.process-card p {
  color: #555;
  line-height: 1.7;
}

@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
