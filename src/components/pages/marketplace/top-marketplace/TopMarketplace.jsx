import { Link, useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'

const TopMarketplace = () => {
	const nav = useNavigate()
	return (
		<section className='h-[680px] md:h-[800px]'>
			<div className='block border-t border-slate-500'></div>
			<div className='flex h-full items-center'>
				<div className='w-full flex flex-col'>
					<h1 className='text-center font-bold md:text-4xl'>
						Your musical imagination.
					</h1>
					<p className='text-center text-xl text-slate-500 mt-5'>
						Incorporate musical playlists into your routine and continue to <br />
						derive pleasure from each day.
					</p>

					<div className='w-full flex flex-col items-center mt-10'>
						<div>
							<Button clickHandler={() => nav('/app-music')}>Purchase for $0</Button>
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
