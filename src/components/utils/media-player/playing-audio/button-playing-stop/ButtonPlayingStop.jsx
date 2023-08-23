import { BsFillPlayCircleFill } from 'react-icons/bs'
import { BsFillPauseCircleFill } from 'react-icons/bs'


const ButtonPlayingStop = ({ setIsPlaying, isPlaying }) => {
	const PlayPause = () => {
		setIsPlaying(!isPlaying)
	}
	return (
		<>
			{isPlaying ? (
				<BsFillPauseCircleFill
					size={40}
					onClick={PlayPause}
					className='cursor-pointer'
				/>
			) : (
				<BsFillPlayCircleFill
					size={40}
					onClick={PlayPause}
					className=' cursor-pointer'
				/>
			)}
		</>
	)
}
export default ButtonPlayingStop