import Vue from "vue";
import Index from "./components";
import router from "./router";
import VueProgrssBar from 'vue-progressbar'
Vue.use(VueProgrssBar,{
    color:'rgb(143,255,199)',
    failedColor:'red',
    height:'2px'
})
require('./bootstrap');


const app = new Vue({
    el: '#app',
    components:{
        Index
    },
    router
});
