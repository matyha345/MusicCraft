import Teg from '../../../ui/teg/Teg'

const MarketplaceGlobal = () => {
	const textMarketplace = [
		{
			number: '384K+',
			text: 'Once you’re set up, payouts arrive in your bank account.'
		},
		{
			number: '90%',
			text: 'Once you’re set up, payouts arrive in your bank account.'
		},
		{
			number: '135+',
			text: 'Once you’re set up, payouts arrive in your bank account.'
		},
		{
			number: '45+',
			text: 'Once you’re set up, payouts arrive in your bank account.'
		},
	]

	return (
		<section className='mt-24'>
			<Teg>Global scale</Teg>
			<h1 className=' font-bold text-4xl'>
				The backbone for internet business
			</h1>
			<p className='mt-5 text-lg text-slate-500'>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint. Velit officia consequat duis enim velit mollit. Exercitation
				veniam consequat sunt nostrud amet.
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
