import axios from 'axios'

const API_URL = 'https://shazam.p.rapidapi.com/charts'

axios.defaults.baseURL = API_URL
axios.defaults.headers.common['X-RapidAPI-Key'] =
	'8b4a619b8dmsh70bd989decd66fap153f47jsnf5bca67dd39a'
axios.defaults.headers.common['X-RapidAPI-Host'] = 'shazam.p.rapidapi.com'

export const MusicServices = {
	async getAllTracks() {
		const options = {
			method: 'GET',
			url: '/track',
			params: {
				locale: 'en-US',
				pageSize: '20',
				startFrom: '0'
			}
		}

		try {
			const response = await axios.request(options)
			return response.data
		} catch (error) {
			throw error
		}
	}
}
