import Vue from 'vue';
import VueRouter from "vue-router";
import App from './App';
import Routes from "./routes/Routes";
import "../node_modules/spectre.css/dist/spectre.min.css";
import "../node_modules/spectre.css/dist/spectre-icons.min.css";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({
    routes: Routes,
    mode: 'history'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
