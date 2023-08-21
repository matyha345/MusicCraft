import PlayingAudio from './playing-audio/PlayingAudio'
// import { usePlayer } from './hooks/usePlayer'
import { useEffect, useRef, useState } from 'react'
import { data } from '../../pages/app-music/app-music-tracks-copy/AppData'
import { usePlayer } from './hooks/usePlayer'

const MediaPlayer = () => {
	
	const {
		songs,
		setSongs,
		isPlaying,
		setIsPlaying,
		currentSong,
		setCurrentSong,
		audioElem,
		onPlaying,
		clickRef,
		checkWidth
	} = usePlayer()

	return (
		<>
			<section className='flex bg-black/70 h-25 rounded-t-sm'>
				<div className='w-full flex flex-col'>
					<audio
						src={currentSong.audio}
						ref={audioElem}
						onTimeUpdate={onPlaying}
					/>
					<PlayingAudio
						songs={songs}
						setSongs={setSongs}
						isPlaying={isPlaying}
						setIsPlaying={setIsPlaying}
						audioElem={audioElem}
						setCurrentSong={setCurrentSong}
						currentSong={currentSong}
					/>
					<div className='w-full flex justify-center mt-3'>
						<div className='w-96'>
							<div
								className=' min-w-full bg-custom-gray h-2 rounded-3xl cursor-pointer'
								onClick={checkWidth}
								ref={clickRef}
							>
								<div
									style={{ width: `${currentSong.progress + '%'}` }}
									className='w-0 h-full bg-green-800 rounded-3xl'
								></div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
export default MediaPlayer
