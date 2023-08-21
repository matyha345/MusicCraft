import { Link } from 'react-router-dom'
import Button from '../../../ui/button/Button'

const TopMarketplace = () => {
	return (
		<section className='md:h-[800px]'>
			<div className='block border-t border-slate-500'></div>
			<div className='flex h-full items-center'>
				<div className='w-full flex flex-col'>
					<h1 className='text-center font-bold md:text-4xl'>
						Your business phone, <br /> reimagined.
					</h1>
					<p className='text-center text-xl text-slate-500 mt-5'>
						Dlex adds a work phone number to your existing devices. <br /> No
						need to carry two phones or extra SIM cards.
					</p>

					<div className='w-full flex flex-col items-center mt-10'>
						<div>
							<Button>Purchase for $58</Button>
						</div>
						<Link className='mt-5 text-blue-700' to={'/'}>
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</section>
	)
}
export default TopMarketplace
