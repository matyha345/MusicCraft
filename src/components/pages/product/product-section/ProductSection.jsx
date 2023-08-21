import cn from 'clsx'

const ProductSection = () => {
	const productData = [
		{
			logo: 'Article',
			title: 'Guide for designing better mobile apps typography',
			text: 'In this article, I won’t talk about the general concepts of typography, which can be used both in print...',
			img: 'images/product/imgOne.jpg'
		},
		{
			logo: 'Video',
			title: 'New Dashboard features to save you time',
			text: 'Dashboard is the hub for millions of businesses to take action. We’ve launched dozens of new features in the Dashboard...',
			img: 'images/product/imgThree.jpg'
		},
		{
			logo: 'Case study',
			title: 'Noom sees an 8% increase in authorization rates with Dlex',
			text: 'The health platform boosted acceptance rates and expanded global coverage by switching to Dlex',
			img: 'images/product/ImgTwo.jpg'
		}
	]

	return (
		<div>
			<div className='flex flex-col items-center justify-center'>
				<div className=' max-w-lg text-center'>
					<p className=' text-blue-500 font-medium md:text-sm '>From the blog</p>
					<h1 className=' text-2xl md:text-5xl font-bold mt-1'>From our blog</h1>
					<p className='font-normal text-sm md:text-xl text-slate-500 mt-3'>
						Creativity is a highfalutin word for the work I have to do between
						now and Tuesday.
					</p>
				</div>
			</div>

			<div className=' flex flex-wrap gap-3 justify-center mt-20'>
				{productData.map((data, index) => (
					<div key={`_data__${index}`} className='max-w-xs'>
						<div>
							<img className='rounded-t-lg' src={data.img} alt='' />
						</div>
						<div className='p-3'>
							<p
								className={cn('text-sm font-semibold', {
									'text-purple-500': data.logo === 'Article',
									'text-blue-500': data.logo === 'Video',
									'text-green-600': data.logo === 'Case study'
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
									<p>Jun 27, 2020 · 6 min read</p>
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
