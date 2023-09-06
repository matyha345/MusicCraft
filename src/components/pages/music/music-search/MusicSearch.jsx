import { Link } from 'react-router-dom'
import UserProfile from '../../../utils/user.profile/UserProfile'
const MusicSearch = () => {
	return (
		<>
			<div className=' absolute top-24 left-0 px-8 md:px-2 md:static flex items-center bg-gray-900/40 text-slate-200 rounded-t-md py-2 hover:text-yellow-300 '>
				<UserProfile />
			</div>
			<input
				type='text'
				placeholder='Search'
				className='hidden md:block mt-5 bg-transparent p-1 rounded-sm border border-transparent hover:border-inherit'
			/>

			<div className='hidden md:block'>
				<h1 className=' text-sm font-normal text-slate-500 mt-10'>Playlists</h1>
				<div className='mt-5'>
					<div className='mt-3 block border-t border-slate-500'></div>
				</div>
			</div>
		</>
	)
}

export default MusicSearch
