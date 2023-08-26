import { useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'

const HomeSectionFree = () => {
	const nav = useNavigate()

	return (
		<div className='flex flex-col md:flex-row items-center justify-between'>
			<div>
				<h1 className='text-center md:text-start font-bold text-lg md:text-3xl'>
					Everything you need for{' '}
					<span className='px-2 text-blue-600'>$0 a month</span>
				</h1>
			</div>
			<div className='mt-5 md:mt-0'>
				<Button clickHandler={() => nav('/app-music')}>Get Started Now</Button>
			</div>
		</div>
	)
}
export default HomeSectionFree
