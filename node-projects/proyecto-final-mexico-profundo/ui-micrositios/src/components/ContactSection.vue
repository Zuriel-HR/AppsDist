<script setup lang="ts">
import type { ContactInfo } from '../data'

defineProps<{
  contact: ContactInfo
}>()
</script>

<template>
  <section class="container section">
    <div class="contact-wrapper">
      <div class="contact-info">
        <h2>Contacto</h2>
        <p class="subtitle">Estamos listos para atenderte</p>
        
        <div class="info-items">
          <div class="item">
            <span class="icon">📍</span>
            <div>
              <h3>Ubicación</h3>
              <p>{{ contact.address }}</p>
              <p>{{ contact.location }}</p>
            </div>
          </div>
          
          <div class="item">
            <span class="icon">📧</span>
            <div>
              <h3>Email</h3>
              <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
            </div>
          </div>
          
          <div class="item">
            <span class="icon">📞</span>
            <div>
              <h3>Teléfono</h3>
              <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
            </div>
          </div>

          <div class="social-links">
            <a v-if="contact.social.facebook" :href="contact.social.facebook" target="_blank" class="social-btn">FB</a>
            <a v-if="contact.social.instagram" :href="contact.social.instagram" target="_blank" class="social-btn">IG</a>
            <a v-if="contact.social.website" :href="contact.social.website" target="_blank" class="social-btn">WEB</a>
          </div>
        </div>
      </div>

      <div class="contact-form-card">
        <h3>Envíanos un mensaje</h3>
        <form @submit.prevent>
          <div class="form-group">
            <label>Nombre</label>
            <input type="text" placeholder="Tu nombre" />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" placeholder="tucorreo@ejemplo.com" />
          </div>
          <div class="form-group">
            <label>Mensaje</label>
            <textarea rows="4" placeholder="¿En qué podemos ayudarte?"></textarea>
          </div>
          <button class="btn btn-primary full-width">Enviar Mensaje</button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

h2 {
  font-size: 2.5rem;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.subtitle {
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 3rem;
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.item {
  display: flex;
  gap: 1.5rem;
}

.icon {
  font-size: 1.5rem;
  background: var(--surface-color);
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
}

.item h3 {
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.item p, .item a {
  color: #666;
  text-decoration: none;
}

.social-links {
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
}

.social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--primary-color);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.8rem;
  transition: transform 0.3s ease;
}

.social-btn:hover {
  transform: translateY(-3px);
}

.contact-form-card {
  background: white;
  padding: 2.5rem;
  border-radius: 1.5rem;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
}

.contact-form-card h3 {
  margin-bottom: 2rem;
  font-size: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  font-size: 0.9rem;
}

input, textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 0.5rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

input:focus, textarea:focus {
  outline: none;
  border-color: var(--primary-color);
}

.full-width {
  width: 100%;
}

@media (max-width: 768px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}
</style>
