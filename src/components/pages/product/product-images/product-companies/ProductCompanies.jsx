const ProductCompanies = () => {
	const dataCompanies = [
		'svg/product/netflix.svg',
		'svg/product/medium.svg',
		'svg/product/google.svg',
		'svg/product/youtube.svg',
		'svg/product/vercel.svg',
		'svg/product/docker.svg'
	]

	return (
		<div>
			<div className='mb-20'>
				<span className=' block border-t border-slate-500'></span>
			</div>

			<div className='flex flex-wrap gap-5 justify-center md:flex md:items-center md:justify-between mt-10 px-10'>
				{dataCompanies.map(data => (
					<div key={`__ke_${data}`}>
						<img src={data} alt='' />
					</div>
				))}
			</div>
			<div className='mt-20'>
				<span className=' block border-t border-slate-500'></span>
			</div>
		</div>
	)
}
export default ProductCompanies
