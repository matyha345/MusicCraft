import { useOnClickOutside } from '../../../hooks/useOnClickOutside'
import ButtonSongList from './button.song.list/ButtonSongList'
import cn from 'clsx'
import { AiFillPlayCircle } from 'react-icons/ai'

const SongList = ({ response, setCurrentSongIndex, currentSongIndex }) => {
	const { isShow, ref, setIsShow } = useOnClickOutside(false)

	return (
		<>
			<ButtonSongList isShow={isShow} setIsShow={setIsShow} />
			<div
				className={cn('relative', {
					visible: isShow,
					hidden: !isShow
				})}
			>
				<div className='absolute bottom-20 left-[-200px]  md:h-auto md:bottom-10 md:left-0 animate-fade'>
					<div ref={ref} className=' w-52 md:w-96 h-96 overflow-auto '>
						<div className=' bg-slate-800/80 py-1 px-5 md:py-3 md:px-10 rounded-lg'>
							{response?.map((item, index) => (
								<div key={item.key} className='md:w-[300px]'>
									<button
										onClick={() => setCurrentSongIndex(index)}
										className='flex items-center justify-between w-full mt-1  text-white hover:text-white/30 transform duration-150 ease-in-out hover:scale-110 '
									>
										<div className='flex items-center '>
											<img
												src={item.images.coverart}
												className='h-8 rounded-lg'
												alt={item.images.subject}
											/>
											<p className=' text-start ml-5 mt-1 font-semibold text-sm'>
												{item.title}
											</p>
										</div>
										{setCurrentSongIndex && (
											<AiFillPlayCircle
												size={20}
												className={cn('text-white', {
													' hidden': index !== currentSongIndex
												})}
											/>
										)}
									</button>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default SongList
