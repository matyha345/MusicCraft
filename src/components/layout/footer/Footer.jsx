import { Link, useLocation } from 'react-router-dom'
import SocialIcons from '../../ui/social-icons/Socialcons'
import FooterComponent from './footer-link/FooterComponent'

const Footer = ({ bgBlack }) => {
	return (
		<footer style={bgBlack} className=' py-10 '>
			<div className='my-5 container mx-auto max-w-screen-lg m-0-auto'>
				<div className='flex flex-col md:flex-row items-center md:items-start justify-between'>
					<div className='flex flex-col items-center md:items-start min-w-max mb-5 md:mb-0'>
						<Link className='flex items-center ' to={'/'}>
							<img src='svg/logo.svg' alt='Logo' />
							<h1 className=' ml-1 text-blue-400 font-bold text-1xl'>
								MusicCraft
							</h1>
						</Link>

						<p className='font-normal text-sm text-slate-500 mt-5 '>
							Making the world a better place through <br /> constructing
							elegant hierarchies
						</p>
						<div className='mt-5'>
							<SocialIcons />
						</div>
					</div>

					<ul className='w-full flex justify-center'>
						<div className='w-full '>
							<FooterComponent />
						</div>
					</ul>
				</div>
				<div className='w-full mt-10'>
					<span className=' block border-t border-slate-500'></span>
					<p className='text-center font-normal text-sm text-slate-500 mt-5'>
						© 2020 Dlex, Inc. All rights reserved
					</p>
				</div>
			</div>
		</footer>
	)
}
export default Footer
