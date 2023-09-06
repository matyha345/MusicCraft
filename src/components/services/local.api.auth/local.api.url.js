
import axios from 'axios'
import Cookies from 'js-cookie'
import { TOKEN } from './app.token'


const API_AUTH = `${import.meta.env.VITE_SERVER_URL}/api`



export const $axios = axios.create({
	baseURL: API_AUTH,
	headers: {
		'Content-Type': 'application/json',
		Authorization: Cookies.get(TOKEN)
			? `Bearer ${Cookies.get(TOKEN)}`
			: 'AA Errors'
	}
})
$axios.interceptors.request.use(config => {
	const token = Cookies.get(TOKEN)
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`
	} else {
		//еще :))
	}
	return config
})
