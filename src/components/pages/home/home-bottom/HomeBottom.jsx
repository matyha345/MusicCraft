
import { useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'

const HomeBottom = ({customStyles}) => {

	const nav= useNavigate()

	return (
		<section  className={customStyles}>
			<div className='container mx-auto max-w-screen-lg m-0-auto'>
				<div className=' py-[5.5rem] flex justify-center'>
					<div className=' max-w-2xl flex flex-col items-center'>
						<h1 className=' font-semibold md:text-4xl text-center text-white'>
						Increase your productivity wherever you are. Start using the workflow today.
						</h1>
						<div className='mt-5'>
							<Button clickHandler={() => nav('/app-music')}>Lets go listen to music</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HomeBottom
