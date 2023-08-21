import { useRef, useState } from 'react'
import PlayButton from './play/Play'

const Video = ({
	videoData,
	videoWidth,
	videoHeight,
	imgVideo,
	children,
	customStyles
}) => {
	const [isPlaying, setIsPlaying] = useState(false)

	const videoRef = useRef(null)

	const handlerPlay = () => {
		setIsPlaying(true)
		videoRef.current.play()
	}
	return (
		<div className='relative'>
			<video
				className={customStyles}
				src={videoData}
				width={videoWidth}
				height={videoHeight}
				poster={imgVideo}
				ref={videoRef}
				onPlay={() => setIsPlaying(true)}
				onPause={() => setIsPlaying(false)}
			></video>
			{!isPlaying && (
				<button onClick={handlerPlay}>
					<PlayButton
						
					/>
				</button>
			)}
		</div>
	)
}
export default Video
