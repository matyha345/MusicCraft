import { BsSnapchat, BsTwitter } from 'react-icons/bs'
import { SiShazam } from 'react-icons/si'
const Icons = ({ selectedTrack }) => {
	const openSnapchatLink = () => {
		if (selectedTrack && selectedTrack.share.html) {
			window.open(selectedTrack.share.html, '_blank')
		}
	}
	const openSiShazamLink = () => {
		if (selectedTrack && selectedTrack.share.href) {
			window.open(selectedTrack.share.href, '_blank')
		}
	}

	return (
		<>
			{selectedTrack ? (
				<div className='flex items-center justify-center w-full bg-slate-400/10 rounded-lg py-3 mt-5'>
					<BsSnapchat
						className='text-2xl mx-2 cursor-pointer hover:text-yellow-300 transition duration-300 ease-in-out'
						target='_blank'
						onClick={openSnapchatLink}
					/>
					<SiShazam
						className=' text-2xl mx-2 cursor-pointer hover:text-yellow-300 transition duration-300 ease-in-out'
						target='_blank'
						onClick={openSiShazamLink}
					/>
				</div>
			) : (
				<div>...</div>
			)}
		</>
	)
}

export default Icons
