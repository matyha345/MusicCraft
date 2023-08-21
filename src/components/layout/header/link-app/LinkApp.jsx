import { Link, useLocation } from 'react-router-dom'

const LinkApp = () => {
	const { pathname } = useLocation()
	return (
		<>
			{pathname !== '/app-music' && (
				<Link
					to={'/app-music'}
					className=' bg-blue-500 text-white px-3 py-2 rounded  text-sm font-medium border-solid border border-transparent hover:border-solid hover:border hover:border-indigo-600 hover:bg-white hover:text-black'
				>
					Lets go listen to music
				</Link>
			)}
		</>
	)
}
export default LinkApp
