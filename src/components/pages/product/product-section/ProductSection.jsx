import cn from 'clsx'

const ProductSection = () => {
	const productData = [
		{
			logo: 'Loreen',
			title: 'Guide to Enjoyment',
			text: 'Such a cool and catchy song ! Congrats Loreen 🎶✨💖',
			img: 'images/product/400One.jpg'
		},
		{
			logo: 'Peggy Gou',
			title: 'Guide to Enjoyment',
			text: 'I love when they chose such a limited yet iconic sound pallette...',
			img: 'images/product/400Three.jpg'
		},
		{
			logo: 'Jain',
			title: 'Guide to Enjoyment',
			text: 'This song makes my body dance uncontrollably to its infectious rhythm.',
			img: 'images/product/400Two.jpg'
		}
	]

	return (
		<div>
			<div className='flex flex-col items-center justify-center'>
				<div className=' max-w-lg text-center'>
					<p className=' text-blue-500 font-medium md:text-sm '>Testimonials</p>
					<h1 className=' text-2xl md:text-5xl font-bold mt-1'>Testimonials</h1>
					<p className='font-normal text-sm md:text-sm text-slate-500 mt-3'>
						Creativity is what will live forever, transcending time and leaving
						an indelible mark on the world. It's the spark that ignites
						innovation and drives progress, shaping the course of history.
					</p>
				</div>
			</div>

			<div className=' flex flex-wrap gap-3 justify-center mt-10'>
				{productData.map((data, index) => (
					<div key={`_data__${index}`} className='max-w-xs'>
						<div>
							<img className='rounded-t-lg' src={data.img} alt='' />
						</div>
						<div className='p-3'>
							<p
								className={cn('text-sm font-semibold', {
									'text-purple-500': data.logo === 'Loreen',
									'text-blue-500': data.logo === 'Peggy Gou',
									'text-green-600': data.logo === 'Jain'
								})}
							>
								{data.logo}
							</p>
							<h2 className='text-xl font-bold mt-2'>{data.title}</h2>
							<p className=' text-sm text-slate-500 mt-3'>{data.text}</p>

							<div className='flex items-center mt-8'>
								<div>
									<img
										className=' rounded-full'
										src='images/people/sisa.png'
										alt='Kristin Watson'
									/>
								</div>
								<div className='flex flex-col p-2'>
									<h2>Kristin Watson</h2>
									<p>Jun 27, 2020</p>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default ProductSection
