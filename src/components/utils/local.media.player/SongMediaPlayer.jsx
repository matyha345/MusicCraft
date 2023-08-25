import React, { useEffect } from 'react'
import {
	BsFillSkipStartCircleFill,
	BsFillSkipEndCircleFill
} from 'react-icons/bs'
import ButtonPausePlay from './playing-audio/button-playing-stop/ButtonPausePlay'

import { usePlayers } from './hooks/usePlayers'

// TODO: доделать стили а точнее добавить функционал справа
//       также сделать элемент проигрывания

const SongMediaPlayer = () => {
	const {
		currentSong,
		onPlaying,
		clickRef,
		isPlaying,
		setIsPlaying,
		skipBack,
		skipNext,
		isLoading
	} = usePlayers()

	const handleAudio = () => {
		if (currentSong && currentSong.hub) {
			const audioElem = document.getElementById('audio-element')
			audioElem.src = currentSong.hub.actions[1].uri

			if (isPlaying) {
				audioElem.play().catch(error => {
					console.error('Error playing audio:', error)
				})
			} else {
				audioElem.pause()
			}
		}
	}

	useEffect(() => {
		handleAudio()
	}, [isPlaying, currentSong])

	return (
		<>
			{isLoading ? (
				<div>Loading...</div>
			) : currentSong ? (
				<section className='flex items-center bg-black/70 h-25 rounded-t-sm h-[100px] px-6  '>
					<audio
						id='audio-element'
						type='audio/mp4'
						ref={clickRef}
						onTimeUpdate={onPlaying}
					/>
					<div className='w-full flex justify-center relative'>
						<div className='flex items-center absolute top-1/4 left-0'>
							{currentSong ? (
								<img
									src={currentSong.images.coverart}
									className='h-10 rounded-lg'
									alt=''
								/>
							) : (
								<p>Error...</p>
							)}

							{currentSong ? (
								<p className='ml-5 text-2xl text-slate-300'>
									{currentSong.title}
								</p>
							) : (
								<p>Error...</p>
							)}
						</div>

						<div className='flex flex-col items-center max-w-lg justify-start w-full'>
							<div className='flex items-center'>
								<BsFillSkipStartCircleFill
									size={30}
									className='mr-3 cursor-pointer transition duration-700 ease-in-out border-2 border-transparent hover:border-yellow-300 rounded-full'
									onClick={skipBack}
								/>
								<ButtonPausePlay
									setIsPlaying={setIsPlaying}
									isPlaying={isPlaying}
								/>
								<BsFillSkipEndCircleFill
									size={30}
									className='ml-3 cursor-pointer transition duration-700 ease-in-out border-2 border-transparent hover:border-yellow-300 rounded-full'
									onClick={skipNext}
								/>
							</div>
						</div>
					</div>
				</section>
			) : (
				<div>error...</div>
			)}
		</>
	)
}

export default SongMediaPlayer
