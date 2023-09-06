import { $axios } from "../local.api.url"


const USERS = '/users'

class UserService {
    async getProfile () {
        return $axios.get(`${USERS}/profile`)
    }
}

export default new UserService()