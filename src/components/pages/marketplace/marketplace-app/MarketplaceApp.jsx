import { useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'
import {GoArrowRight} from 'react-icons/go'
const MarketplaceApp = () => {
	const nav = useNavigate()
	return (
		<section className='flex flex-col px-3 md:flex-row md:px-0 items-center justify-between '>
			<div className='max-w-md'>
				<h1 className=' font-bold text-4xl'>
					Startup Mobile Apps & Completed design <br /> system
				</h1>
				<p className='text-xl text-slate-500 mt-5'>
					A complete design system with 70 pre-built screens for mobile apps to
					enable you to kick-off your mobile app design.
				</p>
				<div className='mt-10 '>
					<Button clickHandler={() => nav('/app-music')}>
						Get it Now <GoArrowRight size={20} />
					</Button>
				</div>
			</div>
			<div className='p-4'>
				<img src='images/marketplace/bg-mobile-app.svg' alt='appMobile' />
			</div>
		</section>
	)
}
export default MarketplaceApp
