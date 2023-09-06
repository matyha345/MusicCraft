import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/index.css'
import Routs from './routes/Routes'
import { QueryClient, QueryClientProvider } from 'react-query'
import AuthProvider from './components/providers/AuthProvider'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<Routs />
			</AuthProvider>
		</QueryClientProvider>
	</React.StrictMode>
)
