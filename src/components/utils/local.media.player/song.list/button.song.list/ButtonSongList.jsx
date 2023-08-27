import { TbPlaylistOff } from 'react-icons/tb'
import { SlPlaylist } from 'react-icons/sl'

const ButtonSongList = ({ isShow, setIsShow }) => {
	return (
		<button
			className=' absolute top-5 right-0 md:top-1/4 md:right-10 hover:text-yellow-400 transition duration-300 ease-in-out'
			onClick={() => setIsShow(!isShow)}
		>
			{isShow ? <TbPlaylistOff size={25} /> : <SlPlaylist size={25} />}
		</button>
	)
}

export default ButtonSongList
