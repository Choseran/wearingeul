import { createApp } from 'vue'
import App from './App.vue'

// router
import router from "./router";

// store
import store from './store/store.js';

const app = createApp(App);
app.use(router);
app.use(store);
window.app = app.mount('#app');
