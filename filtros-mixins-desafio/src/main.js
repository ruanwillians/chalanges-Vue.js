import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('count', function(str){
		const arr = str.split(' ')
		 return arr.map(a => `${a}  ${a.length}`).join(' ')
})

new Vue({
	render: h => h(App),
}).$mount('#app')
