import Teg from '../../../ui/teg/Teg'

const MarketplaceGlobal = () => {
	const textMarketplace = [
		{
			number: '384K+',
			text: 'Your progress will be growing alongside us.'
		},
		{
			number: '90%',
			text: 'Your progress will be growing alongside us.'
		},
		{
			number: '135+',
			text: 'Your progress will be growing alongside us.'
		},
		{
			number: '45+',
			text: 'Your progress will be growing alongside us.'
		}
	]

	return (
		<section className='mt-24'>
			<Teg>Global scale</Teg>
			<h1 className=' font-bold text-4xl'>Created for you.</h1>
			<p className='mt-5 text-lg text-slate-500'>
				A website for music, meticulously crafted and designed with you in mind. <br />
				Discover a world of melodies tailored just for you.
			</p>
			<div className='mt-10 flex flex-wrap gap-5'>
				{textMarketplace.map((text, index) => (
					<div
						key={`text__${index}`}
						className='px-6 py-8 border divide-slate-200 max-w-[240px] rounded-xl'
					>
						<h2 className='text-blue-500 text-2xl font-bold'>{text.number}</h2>
						<p className='text-sm text-slate-500'>{text.text}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default MarketplaceGlobal
