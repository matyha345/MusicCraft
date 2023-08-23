
import {SiShazam} from 'react-icons/si'
import { data } from '../music-tracks-copy/AppData'
import { useParams } from 'react-router-dom'
const MusicTrack = () => {
    const {id} = useParams()
	return (
		<>
			<div>
				<div>
					{data.map((item, index) => (
						<div key={index}>
							<img className='h-2' src={`item.img${id}`} alt='' />
							<div className='absolute bottom-0 left-0 w-full h-full flex items-center justify-end flex-col'>
								<div className='flex items-center'>
									<p className=' font-bold text-base'>{`item.title${id}`}</p>
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
					))}
				</div>
			</div>
		</>
	)
}
export default MusicTrack
