import { Link } from 'react-router-dom'
import { HiOutlineHome } from 'react-icons/hi'
const MusicSearch = () => {
	return (
		<>
			<Link className='flex items-center bg-gray-900/40 text-slate-200 rounded-t-md p-2 hover:text-yellow-300 ' to={''}>
				<span className='mr-3'>
					<HiOutlineHome size={25} />
				</span>
				Home
			</Link>
			<input
				type='text'
				placeholder='Search'
				className=' mt-5 bg-transparent p-1 rounded-sm border border-transparent hover:border-inherit'
			/>

			<div>
				<h1 className=' text-sm font-normal text-slate-500 mt-10'>Playlists</h1>
				<div className='mt-5'>
					<button className='flex items-center text-sm font-normal text-slate-500'>
						<span className='mr-4'>
							<img src='images/app/puls.svg' alt=''/>
						</span>
                        Create Playlist
					</button>
					<button className='mt-5 flex items-center text-sm font-normal text-slate-500'>
						<span className='mr-4'>
							<img src='images/app/Frame.svg' alt=''/>
						</span>
                        Liked Songs
					</button>

                    <div className='mt-3 block border-t border-slate-500'></div>
				</div>
			</div>
		</>
	)
}

export default MusicSearch
