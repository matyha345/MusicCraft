import { SiShazam } from 'react-icons/si'

const MusicTracksCards = ({ isLoading, error, response, setSelectedTrack }) => {
	return (
		<>
			<div className='overflow-x-hidden overflow-scroll'>
				{isLoading ? (
					<div>Loading...</div>
				) : error ? (
					<div>Error: {error.message}</div>
				) : response && response && response.length > 0 ? (
					<div className='flex flex-wrap items-center justify-center h-96 md:h-[540px] max-w-3xl overscroll-contain'>
						{response.map((track, index) => (
							<div
								className='flex m-3 items-center bg-black/40 p-1 text-b rounded-lg cursor-pointer transition duration-300 ease-in-out hover:opacity-60 '
								key={track.key}
								onClick={() => setSelectedTrack(track)}
							>
								<div className='relative'>
									<img
										className='relative rounded-t-lg auto h-28 md:max-w-[200px] md:h-auto'
										src={track.images.background}
										height='auto'
										alt='Images Music'
									/>
									<div className=' absolute bottom-0 left-0 w-full h-full flex items-center justify-end flex-col'>
										<div className='flex items-center flex-col bg-slate-600/60 w-full'>
											<p className='text-xs text-center font-bold text-slate-100 md:text-sm  '>
												{track.subtitle}
											</p>
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
		</>
	)
}
export default MusicTracksCards
