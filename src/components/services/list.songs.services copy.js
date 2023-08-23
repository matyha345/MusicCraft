import axios from 'axios'

const API_URL_TWO = 'https://shazam.p.rapidapi.com/shazam-songs'

axios.defaults.baseURL = API_URL_TWO
axios.defaults.headers.common['X-RapidAPI-Key'] =
	'325ba63411msh213f82e2f3f9ad8p103b32jsnc96d10f88c4f'
axios.defaults.headers.common['X-RapidAPI-Host'] = 'shazam.p.rapidapi.com'

export const MusicServices = {
	async getAllTracks() {
		const options = {
			method: 'GET',
			url: '/list-similarities',
			params: {
				id: 'track-similarities-id-424767377',
				locale: 'en-US'
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
