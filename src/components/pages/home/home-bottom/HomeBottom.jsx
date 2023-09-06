import { useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'
import { useAuth } from '../../../hooks/useAuth'
import { useState } from 'react'
import Alert from '../../../ui/alert/Alert'

const HomeBottom = ({ customStyles }) => {
	const nav = useNavigate()

	const { isAuth } = useAuth()

	const [showAlert, setShowAlert] = useState(false)

	const handleButtonClick = () => {
		isAuth ? nav('/app-music') : setShowAlert(true)
	}

	return (
		<section className={customStyles}>
			<div className='container mx-auto max-w-screen-lg m-0-auto'>
				<div className=' py-[5.5rem] flex justify-center'>
					<div className=' max-w-2xl flex flex-col items-center'>
						<h1 className=' font-semibold md:text-4xl text-center text-white'>
							Increase your productivity wherever you are. Start using the
							workflow today.
						</h1>
						<div className='mt-5 relative'>
							<Button clickHandler={handleButtonClick}>
								Lets go listen to music
							</Button>
							{showAlert && (
								<Alert
									customStyles={{
										position: 'absolute',
										top: '50px',
										left: '-75px',
										width: '330px'
									}}
									type='error'
									text='Тебе нужно войти, чтобы продолжить'
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
export default HomeBottom
