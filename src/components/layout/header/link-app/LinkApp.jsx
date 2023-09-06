import { useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'
import Auth from '../../../utils/authorization/auth/Auth'
import { useAuth } from '../../../hooks/useAuth'
import LogoutHandler from '../../../utils/logoutHandler/LogoutHandler'

const LinkApp = ({ isShowAuth, setIsShowAuth }) => {
	const { pathname } = useLocation()
	const nav = useNavigate()

	const { isAuth } = useAuth()

	return (
		<>
			{isAuth ? (
				<div>
					{pathname !== '/app-music' && (
						<Button clickHandler={() => nav('/app-music')}>
							Lets go listen to music
						</Button>
					)}
				</div>
			) : (
				<Button clickHandler={() => setIsShowAuth(!isShowAuth)}>
					Sign in to MusicCraft
				</Button>
			)}
			{pathname === '/app-music' && <LogoutHandler />}
			<Auth isShowAuth={isShowAuth} setIsShowAuth={setIsShowAuth} />
		</>
	)
}
export default LinkApp
