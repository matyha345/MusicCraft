import { subData } from './sub-data'

const  Subscription = ({ customStyles }) => {
	return (
		<div className={customStyles}>
			<div className='inline-block max-w-260 p-3 bg-slate-50 rounded-xl'>
				<div className='flex'>
					<div className=' bg-yellow-600 w-14 h-14 rounded-full flex items-center justify-center '>
						<img src='svg/sub.svg' alt='' />
					</div>
					<div className='flex flex-col ml-2'>
						<h3 className=' text-xl font-bold'>Successfully sent</h3>
						<p className=' text-xs text-slate-400'>200+ send total</p>
					</div>
				</div>

				<div className='mt-1 '>
					<div className='flex'>
						{subData.map((images, index) => (
							<img
                                key={`_img_${index}`}
								className={`w-11 h-11 rounded-full relative ${
									index === 0 ? 'ml-0' : index === 1 ? 'right-2' : 'right-4'
								}`}
								src={images.img}
								alt='sss'
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Subscription
