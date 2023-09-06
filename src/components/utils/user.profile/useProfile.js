import { useQuery } from 'react-query'
import UserService from '../../services/local.api.auth/service/user.service'

export const useProfile = () => {
	return useQuery(['get profile'], () => UserService.getProfile(), {
		select: ({ data }) => data
	})
}
