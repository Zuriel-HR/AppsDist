<script setup lang="ts">
import type { Microsite } from '../data'

defineProps<{
  microsite: Microsite
}>()

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="brand">
          <h3>{{ microsite.oferente.commercialName }}</h3>
          <p>{{ microsite.home.subheadline }}</p>
        </div>

        <div class="links">
          <h4>Explorar</h4>
          <ul>
            <li><a href="#products">Productos</a></li>
            <li v-if="microsite.services.length"><a href="#services">Experiencias</a></li>
            <li><a href="#about">Historia</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>

        <div class="legal">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Términos y Condiciones</a></li>
            <li><a href="#">Política de Privacidad</a></li>
            <li><a href="#">Envíos y Devoluciones</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; {{ currentYear }} {{ microsite.oferente.commercialName }}. Todos los derechos reservados.</p>
        <p class="powered-by">
          Powered by <a href="#" target="_blank">México Profundo</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #1a1a1a;
  color: white;
  padding: 4rem 0 2rem;
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
}

.brand h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.brand p {
  color: #999;
  max-width: 300px;
}

h4 {
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: #fff;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 0.75rem;
}

a {
  color: #999;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: white;
}

.footer-bottom {
  border-top: 1px solid #333;
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  color: #666;
  font-size: 0.9rem;
}

.powered-by a {
  color: var(--primary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .footer-bottom {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>
