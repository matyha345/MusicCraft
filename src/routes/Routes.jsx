import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { routesData } from './routes-data'
import ScrollToTop from '../components/hooks/scrollToTop'
import { useAuth } from '../components/hooks/useAuth'

const Routs = () => {
	const { isAuth } = useAuth()
	return (
		<BrowserRouter>
			<ScrollToTop />
			<Routes>
				{routesData.map(route => {
					if (route.isAuth && !isAuth) {
						return false
					}
					return (
						<Route
							key={route.path}
							path={route.path}
							element={<route.component />}
						/>
					)
				})}
				<Route path='*' element={''} />
			</Routes>
		</BrowserRouter>
	)
}
export default Routs
