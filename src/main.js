// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from "./App";
import * as VeeValidate from "vee-validate";
import router from './router'
import './registerServiceWorker'

Vue.config.productionTip = false;

Vue.use(VeeValidate, {
    aria: true  
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
