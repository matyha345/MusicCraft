import { GiHamburgerMenu } from 'react-icons/gi'
import {AiOutlineClose} from 'react-icons/ai'
const Burger = ({ isShow, setIsShow }) => {

	

	return (
		<button
			className='flex md:hidden fixed top-10 right-2 z-50 w-10 h-10 rounded-full bg-white items-center justify-center text-black'
			onClick={() => setIsShow(!isShow)}
		>
			<span>{isShow ? <AiOutlineClose size={25}/> : <GiHamburgerMenu size={25} />}</span>
		</button>
	)
}

export default Burger
