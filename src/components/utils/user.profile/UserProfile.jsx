import { useProfile } from './useProfile'
import { FaUserAstronaut } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
const UserProfile = () => {
	const { data } = useProfile()

	return (
		<div className='flex flex-col'>
			<h1 className='flex items-center'>
				<span className='mr-3'>
					<FaUserAstronaut size={25} />
				</span>
				{data?.name}
			</h1>
			<h2 className='flex items-center mt-2'>
				<span className='mr-3'>
					<HiOutlineMail size={25} />
				</span>
				{data?.email}
			</h2>
		</div>
	)
}

export default UserProfile
