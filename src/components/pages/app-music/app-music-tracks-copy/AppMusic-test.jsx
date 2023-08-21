import { SiShazam } from 'react-icons/si'
import { data } from './AppData'

const AppMusicTest = () => {
	return (
		<div className='overflow-x-hidden overflow-scroll'>
			<div className='flex flex-wrap items-center justify-center h-[540px] overscroll-contain'>
				{data.map((track, index) => (
					<div
						className=' flex m-3 items-center bg-black/40 p-1 text-b rounded-lg '
						key={index}
					>
						<div className='relative'>
							<img
								className='relative rounded-t-lg max-w-[240px]'
								src={track.img}
								height='auto'
								alt='Images Music'
							/>
							<div className='absolute bottom-0 left-0 w-full h-full flex items-center justify-end flex-col'>
								<div className='flex items-center'>
									<p className=' font-bold text-base'>{track.title}</p>
									<a
										className='ml-5 hover:text-yellow-300'
										target='_blank'
										href={'track.share.href'}
									>
										<SiShazam size={30} />
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default AppMusicTest
