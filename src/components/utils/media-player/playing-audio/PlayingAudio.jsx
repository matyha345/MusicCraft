import { BsFillSkipStartCircleFill } from 'react-icons/bs'

import { BsFillSkipEndCircleFill } from 'react-icons/bs'

import PlayStop from './button-playing-stop/ButtonPlayingStop'

import { usePlaying } from '../hooks/usePlaying'

const PlayingAudio = ({
	audioElem,
	songs,
	isPlaying,
	setIsPlaying,
	currentSong,
	setCurrentSong
}) => {
	const { skipBack, skipNext } = usePlaying(
		audioElem,
		songs,
		currentSong,
		setCurrentSong
	)

	const PlayPause = () => {
		setIsPlaying(!isPlaying)
	}

	return (
		<>
			<div className='w-full flex flex-col items-center justify-center mt-2'>
				<h1>{currentSong.title}</h1>
				<div className='flex items-center'>
					<BsFillSkipStartCircleFill
						size={30}
						className='mr-3 cursor-pointer'
						onClick={skipBack}
					/>

					<PlayStop isPlaying={isPlaying} PlayPause={PlayPause} />

					<BsFillSkipEndCircleFill
						size={30}
						className='ml-3'
						onClick={skipNext}
					/>
				</div>
			</div>
		</>
	)
}
export default PlayingAudio
