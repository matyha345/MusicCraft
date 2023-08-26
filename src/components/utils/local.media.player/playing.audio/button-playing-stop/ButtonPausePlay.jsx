import { BsFillPlayCircleFill } from 'react-icons/bs'
import { BsFillPauseCircleFill } from 'react-icons/bs'

const ButtonPausePlay = ({ setIsPlaying, isPlaying }) => {
	const PlayPause = () => {
		setIsPlaying(!isPlaying)
	}
	return (
		<>
			{isPlaying ? (
				<BsFillPauseCircleFill
					size={40}
					onClick={PlayPause}
					className='cursor-pointer transition duration-700 ease-in-out border-2 border-transparent hover:border-yellow-300 rounded-full'
				/>
			) : (
				<BsFillPlayCircleFill
					size={40}
					onClick={PlayPause}
					className='cursor-pointer transition duration-700 ease-in-out border-2 border-transparent hover:border-yellow-300 rounded-full'
				/>
			)}
		</>
	)
}
export default ButtonPausePlay
