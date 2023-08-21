import { useLocation } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({ children, bgBlack }) => {
	const { pathname } = useLocation()

	return (
		<div className=' z-0 overflow-x-hidden'>
			<Header />
			{children}
			{pathname !== '/marketplace' && pathname !== '/app-music' && (
				<Footer bgBlack={bgBlack} />
			)}
		</div>
	)
}

export default Layout
