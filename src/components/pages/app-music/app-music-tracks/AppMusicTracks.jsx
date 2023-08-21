import { useQuery } from 'react-query'
import { MusicServices } from '../../../services/music.services'
import AppMusicPlay from '../app-music-play/AppMusicPlay'

import {SiShazam} from 'react-icons/si'

const AppMusicTracks = () => {
	const {
		isLoading,
		data: response,
		error
	} = useQuery('music tracks', MusicServices.getAllTracks)

	return (
		<div className=' '>
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error: {error.message}</div>
			) : response && response.tracks && response.tracks.length > 0 ? (
				<div className='flex flex-wrap items-center  justify-end relative'>
					{response.tracks.map((track, index) => (
						<div
							className='flex m-3 items-center bg-black/40 p-5 text-b rounded-t-lg '
							key={track.key}
						>
							<div className='mr-3'>
								<img
									className=' rounded-t-lg'
									src={track.images.background}
									width={100}
									height='auto'
									alt='Images Music'
								/>
							</div>

							<div>
								<div className=' flex items-center justify-between'>
									<p className=' font-bold text-base'>{track.subtitle}</p>
									<a className=' hover:text-yellow-300' target='_blank' href={track.share.href}>
										<SiShazam size={30} />
									</a>
								</div>
								<audio className='mt-3 w-64 h-7' id={`audio-${index}`} controls>
									<source
										src={track.hub.actions[1].uri}
										type={track.hub.actions.type}
									/>
								</audio>
							</div>
						</div>
					))}
				</div>
			) : (
				<div>No tracks available...</div>
			)}
		</div>
	)
}

export default AppMusicTracks
