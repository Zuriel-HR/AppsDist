<script setup lang="ts">
import type { Product, Service } from '../data'

defineProps<{
  title: string
  items: (Product | Service)[]
  type: 'product' | 'service'
}>()

const formatPrice = (price: number, currency: string = 'MXN') => {
  return new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: currency
  }).format(price)
}
</script>

<template>
  <section class="container section">
    <h2 class="section-title">{{ title }}</h2>
    
    <div class="grid">
      <div v-for="item in items" :key="item.id" class="card">
        <div class="card-image">
          <!-- Placeholder for real images -->
          <div class="img-placeholder" :style="{ backgroundImage: `url(${item.images[0]})` }"></div>
          <span v-if="!item.isAvailable" class="badge sold-out">Agotado</span>
        </div>
        
        <div class="card-content">
          <div class="card-header">
            <h3>{{ item.name }}</h3>
            <span class="price">
              {{ formatPrice('price' in item ? item.price : item.pricePerPerson) }}
            </span>
          </div>
          
          <p class="description">{{ item.description }}</p>
          
          <div class="tags">
            <span v-for="tag in item.tags" :key="tag" class="tag">#{{ tag }}</span>
          </div>
          
          <button class="btn btn-outline full-width">
            {{ type === 'product' ? 'Agregar al Carrito' : 'Reservar' }}
          </button>
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.card-image {
  position: relative;
  height: 250px;
  background: #f0f0f0;
}

.img-placeholder {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
}

.card:hover .img-placeholder {
  transform: scale(1.05);
}

.badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.8rem;
  font-weight: 600;
  color: white;
}

.sold-out {
  background: #ef4444;
}

.card-content {
  padding: 1.5rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

h3 {
  font-size: 1.25rem;
  margin-right: 1rem;
}

.price {
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
  white-space: nowrap;
}

.description {
  font-size: 0.95rem;
  color: #666;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tag {
  font-size: 0.8rem;
  color: #888;
  background: #f5f5f5;
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
}

.full-width {
  width: 100%;
}
</style>
