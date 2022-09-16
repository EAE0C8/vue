import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' //Vuex 저장소 추가

createApp(App).use(router).use(router).use(store).mount('#app')
