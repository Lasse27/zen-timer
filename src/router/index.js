import { createRouter, createWebHashHistory } from 'vue-router'
import FocusPage from '@/components/pages/FocusPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: FocusPage
  }
  // Weitere Routen können hier ergänzt werden
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
