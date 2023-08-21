import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'

const SocialIcons = ({ customStyles }) => {
	const socialDataIcons = [
		{
			component: <BsFacebook size={20} />,
			link: ''
		},
		{
			component: <BsTwitter size={20} />,
			link: ''
		},
		{
			component: <BsInstagram size={20} />,
			link: ''
		},
		{
			component: <AiFillGithub size={20} />,
			link: ''
		}
	]

	return (
		<div className='flex'>
			{socialDataIcons.map((data, index) => (
				<a
					style={customStyles}
					className='px-2 hover:text-yellow-600 '
					key={index}
					href={data.link}
				>
					{data.component}
				</a>
			))}
		</div>
	)
}
export default SocialIcons
