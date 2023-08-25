import axios from 'axios'

const API_URL = 'http://localhost:4200'

axios.defaults.baseURL = API_URL

export const LocalMusicServices = {
	async getAll() {
		const response = await axios.get('/tracks')
		return response.data
	},

	async getById(id) {
		const response = await axios.get(`/tracks?id=${id}`)
		return response.data[0]
	}
}
