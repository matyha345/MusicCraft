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
				<div ref={ref} className=' absolute bottom-1 left-0 animate-fade'>
					<div className='gird grid-cols-1 bg-slate-400/90 py-3 px-10 rounded-lg'>
						{response?.map((item, index) => (
							<div key={item.key} className='flex items-center w-[300px]'>
								<button
									onClick={() => setCurrentSongIndex(index)}
									className='flex items-center justify-between w-full mt-1  text-black/70 hover:text-black transform duration-150 ease-in-out hover:scale-110 '
								>
									<div className='flex items-center '>
										<img
											src={item.images.coverart}
											className='h-8 rounded-lg'
											alt={item.images.subject}
										/>
										<p className='ml-5 mt-1 font-semibold text-sm'>
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
		</>
	)
}

export default SongList
