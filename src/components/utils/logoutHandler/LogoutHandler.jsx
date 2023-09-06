import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import Cookies from 'js-cookie'
import { TOKEN } from '../../services/local.api.auth/app.token'
import { FiLogOut } from 'react-icons/fi'

const LogoutHandler = () => {
	const { setIsAuth } = useAuth()

	const nav = useNavigate()

	const logoutHandlerToken = () => {
		Cookies.remove(TOKEN)
		setIsAuth(false)

		nav('/')
	}
	return (
		<button
			className='flex items-center hover:opacity-70'
			onClick={() => logoutHandlerToken()}
		>
			Выход
			<FiLogOut fontSize={22} className='ml-2' />
		</button>
	)
}

export default LogoutHandler
