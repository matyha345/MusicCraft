import { useQuery } from 'react-query'
// import { MusicServices } from '../../../services/music.services'
// import AppMusicPlay from '../app-music-play/AppMusicPlay'

import { SiShazam } from 'react-icons/si'
import { LocalMusicServices } from '../../../services/local.music.services'

const MusicTracks = () => {
	const {
		isLoading,
		data: response,
		error
	} = useQuery('music cards', () => LocalMusicServices.getAll())


	return (
		<div className='overflow-x-hidden overflow-scroll'>
			{isLoading ? (
				<div>Loading...</div>
			) : error ? (
				<div>Error: {error.message}</div>
			) : response && response && response.length > 0 ? (
				<div className='flex flex-wrap items-center justify-center h-[540px] overscroll-contain'>
					{response.map((track, index) => (
						<div
							className='flex m-3 items-center bg-black/40 p-1 text-b rounded-lg '
							key={track.key}
						>
							<div className='relative'>
								<img
									className='relative rounded-t-lg max-w-[200px]'
									src={track.images.background}
									height='auto'
									alt='Images Music'
								/>
								<div className=' absolute bottom-0 left-0 w-full h-full flex items-center justify-end flex-col'>
									<div className='flex items-center flex-col'>
										<p className=' font-bold text-base'>{track.subtitle}</p>
										<a
											className=' hover:text-yellow-300'
											target='_blank'
											href={track.share.href}
										>
											<SiShazam size={30} />
										</a>
									</div>
								</div>
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

export default MusicTracks
