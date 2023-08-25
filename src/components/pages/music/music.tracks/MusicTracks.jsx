import { useQuery } from 'react-query'

import { LocalMusicServices } from '../../../services/local.music.services'
import MusicTracksCards from './music.tracks.cards/MusicTracksCards'
import { useEffect, useState } from 'react'
import MusicDetail from './music-detail/MusicDetail'
import { useMusicContext } from '../MusicContext'

const MusicTracks = () => {
	const { response, setResponse } = useMusicContext()

	const {
		isLoading,
		data: responseData,
		error
	} = useQuery('music cards', () => LocalMusicServices.getAll())

	useEffect(() => {
		if (responseData) {
			setResponse(responseData)
		}
	}, [responseData, setResponse])	


	const [selectedTrack, setSelectedTrack] = useState(null);

	return (
		<div className='w-full flex justify-between '>
			<MusicTracksCards
				isLoading={isLoading}
				response={response}
				error={error}
				setSelectedTrack={setSelectedTrack}
			/>
			<MusicDetail selectedTrack={selectedTrack} />
		</div>
	)
}

export default MusicTracks
