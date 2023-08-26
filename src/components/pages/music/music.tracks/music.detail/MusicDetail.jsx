import React from 'react'
import Icons from './component/Icons'
import { useMusicContext } from '../../MusicContext'

const MusicDetail = ({ selectedTrack }) => {
	const { response } = useMusicContext()
	const firstItem = response && response.length > 0 ? response[0] : null

	return (
		<div>
			{selectedTrack || firstItem ? (
				<div className='flex flex-col items-center max-w-full '>
					<img
						className='rounded-t-lg max-w-full rounded-lg mt-2'
						src={(selectedTrack || firstItem)?.images.coverarthq}
						height='auto'
						alt='Images Music'
					/>
					<div className='flex flex-col items-start w-full'>
						<div className='flex flex-col mt-3'>
							<h2 className='text-sm font-bold text-slate-200 max-w-sm'>
								{(selectedTrack || firstItem)?.title}
							</h2>
							<h3 className='text-sm font-normal text-slate-300 mt-2'>
								{(selectedTrack || firstItem)?.subtitle}
							</h3>
						</div>
						<Icons selectedTrack={selectedTrack || firstItem} />
					</div>
				</div>
			) : (
				<div>No tracks available...</div>
			)}
		</div>
	)
}

export default MusicDetail
