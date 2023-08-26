import { Link, useLocation, useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'

const LinkApp = () => {
	const { pathname } = useLocation()
	const nav = useNavigate()
	return (
		<>
			{pathname !== '/app-music' && (
				<Button clickHandler={() => nav('/app-music')}>
					Lets go listen to music
				</Button>
			)}
		</>
	)
}
export default LinkApp
