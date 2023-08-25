import { createContext, useContext, useState } from 'react'

const MusicContext = createContext()

export function useMusicContext() {
	return useContext(MusicContext)
}

export function MusicProvider({ children }) {
	const [response, setResponse] = useState([])

	return (
		<MusicContext.Provider value={{ response, setResponse }}>
			{children}
		</MusicContext.Provider>
	)
}
