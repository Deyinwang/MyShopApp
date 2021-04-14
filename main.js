import Vue from 'vue'
import App from './App'
import {myRequest} from 'pages/util/api.js'

Vue.prototype.$myRequest = myRequest
Vue.filter('formatDate', (date)=>{
	const myDate = new Date(date)
	const year = myDate.getUTCFullYear()
	const month = (myDate.getMonth()+1).toString().padStart(2,0)
	const day = myDate.getDate().toString().padStart(2,0)
	return year + '-' + month + '-' + day
})

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
