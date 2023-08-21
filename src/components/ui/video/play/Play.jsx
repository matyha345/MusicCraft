import { BsPlayFill } from 'react-icons/bs'

const PlayButton = () => {
	return (
		<div className='w-10 h-10 bg-white rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
			<BsPlayFill size={25} />
		</div>
	)
}

export default PlayButton
