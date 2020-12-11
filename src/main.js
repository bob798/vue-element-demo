import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import test from './App.vue'
import App from './App.vue'
import animated from 'animate.css' // npm install animate.css --save安装，在引入

Vue.use(ElementUI)
Vue.use(animated)

new Vue({
  el: '#app',
  render: h => h(App)
})
