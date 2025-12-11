<script setup lang="ts">
import type { GalleryItem } from '../data'

defineProps<{
  items: GalleryItem[]
}>()
</script>

<template>
  <section class="container section">
    <h2 class="section-title">Galería</h2>
    
    <div class="gallery-grid">
      <div 
        v-for="(item, index) in items" 
        :key="item.id" 
        class="gallery-item"
        :class="{ 'large': index % 3 === 0 }"
      >
        <div class="img-wrapper" :style="{ backgroundImage: `url(${item.imageUrl})` }">
          <div class="overlay">
            <div class="info">
              <span class="type">{{ item.type }}</span>
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: var(--primary-color);
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  grid-auto-flow: dense;
}

.gallery-item {
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  cursor: pointer;
}

.gallery-item.large {
  grid-column: span 2;
}

@media (max-width: 768px) {
  .gallery-item.large {
    grid-column: span 1;
  }
}

.img-wrapper {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  position: relative;
  transition: transform 0.5s ease;
}

.gallery-item:hover .img-wrapper {
  transform: scale(1.05);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  opacity: 0;
  transition: opacity 0.3s ease;
  display: flex;
  align-items: flex-end;
  padding: 2rem;
}

.gallery-item:hover .overlay {
  opacity: 1;
}

.info {
  color: white;
  transform: translateY(20px);
  transition: transform 0.3s ease;
}

.gallery-item:hover .info {
  transform: translateY(0);
}

.type {
  text-transform: uppercase;
  font-size: 0.75rem;
  letter-spacing: 1px;
  opacity: 0.8;
  margin-bottom: 0.5rem;
  display: block;
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

p {
  font-size: 0.9rem;
  opacity: 0.9;
}
</style>
