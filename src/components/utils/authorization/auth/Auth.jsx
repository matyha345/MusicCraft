import { useEffect, useState } from 'react'
import Field from '../../../ui/field/Field'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useMutation } from 'react-query'
import { useAuth } from '../../../hooks/useAuth'
import Button from '../../../ui/button/Button'
import AuthService from '../../../services/local.api.auth/service/auth.service'
import cn from 'clsx'
import Alert from '../../../ui/alert/Alert'
const Auth = ({ isShowAuth }) => {
	const [type, setType] = useState('login')
	const nav = useNavigate()

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset
	} = useForm({
		mode: 'onChange'
	})

	const { mutate, isLoading, isSuccess, error } = useMutation(
		['auth'],
		({ email, password }) => AuthService.main(email, password, type),
		{
			onSuccess: () => {
				setIsAuth(true)
				nav('/app-music')
				reset()
			}
		}
	)

	const onSubmit = data => {
		mutate(data)
	}

	const { isAuth, setIsAuth } = useAuth()

	useEffect(() => {
		if (isAuth) {

		}
	}, [isAuth])

	return (
		<>
			<div className='animate-fade fixed top-24 right-20 z-50'>
				{error && (
					<Alert
						type='error'
						text='Произошла ошибка при входе в систему. Пожалуйста, попробуйте снова.'
					/>
				)}
			</div>
			<div
				
				className={cn(
					'animate-fade  fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-slate-400/90  w-1/3 h-1/2 rounded-2xl',
					{
						visible: isShowAuth,
						hidden: !isShowAuth
					}
				)}
			>
				<div className=' w-full h-full flex items-center justify-center'>
					<div className='flex flex-coll p-16'>
						<form
							className='flex flex-col items-center'
							onSubmit={handleSubmit(onSubmit)}
						>
							{isLoading && <div>....</div>}
							<Field
								error={errors?.email?.message}
								name='email'
								register={register}
								options={{
									required: 'Требуется указать электронную почту'
								}}
								type={'text'}
								placeholder='Enter email'
							/>
							<Field
								error={errors?.password?.message}
								name='password'
								register={register}
								options={{
									required: 'Пароль обязателен'
								}}
								type={'password'}
								placeholder='Enter password'
							/>

							<div className='flex flex-col items-center mt-5'>
								<Button
									customStyle={{ marginBottom: '10px' }}
									clickHandler={() => setType('login')}
								>
									Войти
								</Button>
								<Button clickHandler={() => setType('register')}>
									Зарегистрироваться
								</Button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Auth
