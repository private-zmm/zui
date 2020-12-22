import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router, { setupRouter } from './router';
const app = createApp(App)
setupRouter(app)
router.isReady().then(() => {
  app.mount('#app')
})

