import Button from '../../../ui/button/Button'
import {GoArrowRight} from 'react-icons/go'
const MarketplaceApp = () => {
	return (
		<section className='flex items-center justify-between '>
			<div className='max-w-md'>
				<h1 className=' font-bold text-4xl'>
					Startup Mobile Apps & Completed design <br /> system
				</h1>
				<p className='text-xl text-slate-500 mt-5'>
					A complete design system with 70 pre-built screens for mobile apps to
					enable you to kick-off your mobile app design.
				</p>
				<div className='mt-10 '>
					<Button>
						Get it Now <GoArrowRight size={20} />
					</Button>
				</div>
			</div>
			<div>
				<img src='images/marketplace/333.svg' alt='' />
			</div>
		</section>
	)
}
export default MarketplaceApp
