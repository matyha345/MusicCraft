import { usePlayer } from './hooks/usePlayer'
import MediaCheckWidth from './playing-audio/media-chcek-width/MediaChcekWidth'
import {
	BsFillSkipStartCircleFill,
	BsFillSkipEndCircleFill
} from 'react-icons/bs'
import ButtonPlayingStop from './playing-audio/button-playing-stop/ButtonPlayingStop'

const MediaPlayer = () => {
	const {
		currentSong,
		onPlaying,
		clickRef,
		checkWidth,
		isPlaying,
		setIsPlaying,
		audioElem,
		skipBack,
		skipNext
	} = usePlayer()

	return (
		<>
			<section className='flex items-center bg-black/70 h-25 rounded-t-sm h-[100px] px-6 '>
				{currentSong ? (
					<div>
						<audio
							src={currentSong.hub.actions[1].uri}
							type={currentSong.hub.actions.type}
							ref={audioElem}
							onTimeUpdate={onPlaying}
						/>
					</div>
				) : (
					<p>Loading...</p>
				)}

				<div className=' w-full flex justify-center relative'>
					<div className='flex items-center absolute top-1/4 left-0 '>
						{currentSong ? (
							<img
								src={currentSong.share.avatar}
								className='h-10 rounded-lg'
								alt=''
							/>
						) : (
							<p>Loading...</p>
						)}

						{currentSong ? (
							<p className='ml-5 text-2xl text-slate-300'>
								{currentSong.subtitle}
							</p>
						) : (
							<p>Loading...</p>
						)}
					</div>

					<div className='flex flex-col items-center max-w-lg justify-start w-full'>
						<div className='flex items-center'>
							<BsFillSkipStartCircleFill
								size={30}
								className='mr-3 cursor-pointer'
								onClick={skipBack}
							/>
							<ButtonPlayingStop
								setIsPlaying={setIsPlaying}
								isPlaying={isPlaying}
							/>
							<BsFillSkipEndCircleFill
								size={30}
								className='ml-3 cursor-pointer'
								onClick={skipNext}
							/>
						</div>
						<MediaCheckWidth
							checkWidth={checkWidth}
							currentSong={currentSong}
							clickRef={clickRef}
						/>
					</div>
				</div>
			</section>
		</>
	)
}
export default MediaPlayer
