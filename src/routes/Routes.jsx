import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routesData } from './routes-data'
import ScrollToTop from '../components/hooks/scrollToTop'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

const Routs = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ScrollToTop />
				<Routes>
					{routesData.map(route => {
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
		</QueryClientProvider>
	)
}
export default Routs
