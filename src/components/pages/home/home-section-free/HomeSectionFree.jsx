import { useNavigate } from 'react-router-dom'
import Button from '../../../ui/button/Button'
import { useAuth } from '../../../hooks/useAuth'
import Alert from '../../../ui/alert/Alert'
import { useState } from 'react'

const HomeSectionFree = () => {
	const nav = useNavigate()

	const { isAuth } = useAuth()

	const [showAlert, setShowAlert] = useState(false)

	const handleButtonClick = () => {
		isAuth ? nav('/app-music') : setShowAlert(true)
	}
	return (
		<div className='flex flex-col md:flex-row items-center justify-between'>
			<div>
				<h1 className='text-center md:text-start font-bold text-lg md:text-3xl'>
					Everything you need for{' '}
					<span className='px-2 text-blue-600'>$0 a month</span>
				</h1>
			</div>
			<div className='mt-5 md:mt-0 flex flex-col items-center relative'>
				<Button clickHandler={handleButtonClick}>Get Started Now</Button>
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
	)
}
export default HomeSectionFree
