const ProductOver = () => {
	const overData = [
		{
			title: '100%',
			text: 'User satisfaction'
		},
		{
			title: '24/7%',
			text: 'Customer support'
		},
		{
			title: '250K',
			text: 'Users served'
		}
	]

	return (
		<div className=' bg-slate-200 w-full h-[450px] pt-20 mt-20 '>
			<div className='px-3 md:px-0 container mx-auto max-w-screen-lg m-0-auto mt-16'>
				<h1 className='text-center text-lg md:text-6xl font-bold'>
					Trusted by developers from over 80 country
				</h1>
				<p className='text-center md:text-xl text-slate-500 mt-5'>
					Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
					sint.
				</p>
				<div>
					<div className='flex flex-wrap justify-center gap-2 md:flex md:items-center md:justify-between bg-white w-full md:px-24 pt-8 pb-2 md:pt-10 md:pb-10 mt-14 rounded-xl shadow-lg shadow-cyan-500/50'>
						{overData.map((data, index) => (
							<div
								className=' flex flex-col items-center'
								key={`data_${index}`}
							>
								<h1 className='text-blue-600 font-bold text-xl md:text-4xl'>
									{data.title}
								</h1>
								<p className='md:text-sm font-semibold text-slate-500 mt-5'>
									{data.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
export default ProductOver
