import { Link, useLocation } from 'react-router-dom'
import { pagesData } from './pages'
import cn from 'clsx'

import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import Burger from './burger/burger'
import LinkApp from './link-app/LinkApp'

const Header = () => {
	const pathname = useLocation()

	const { isShow, ref, setIsShow } = useOnClickOutside(false)
	return (
		<header className='md:flex md:items-center py-10 px-2 container mx-auto max-w-screen-lg m-0-auto'>
			<div className='md:flex md:w-full relative'>
				<div className='max-w-[300px]'>
					<Link className='flex items-center ' to={'/'}>
						<img src='svg/logo.svg' alt='Logo' />
						<h1 className=' ml-1 text-blue-400 font-bold text-1xl'>
							MusicCraft
						</h1>
					</Link>
				</div>

				<div
					className={cn('md:flex md:w-full md:ml-5', {
						visible: isShow,
						hidden: !isShow
					})}
				>
					<div className='md:w-full md:flex md:items-center md:justify-between md:static bg-sky-500/90 md:bg-transparent fixed top-30 right-0 z-30 p-14 md:p-0 rounded-xl animate-fade'>
						<div ref={ref} className='flex items-center flex-col md:block'>
							{pagesData.map(index => {
								const isActive = location.pathname === index.link
								return (
									<Link
										key={index.link}
										className={cn(
											'px-3 py-2 mt-1 md:ml-1 hover:bg-gray-700 hover:text-white rounded-md text-sm ',
											{
												'bg-gray-900 text-white': isActive
											}
										)}
										to={index.link}
										aria-current='page'
									>
										{index.name}
									</Link>
								)
							})}
						</div>
						<div className='flex items-center mt-2 md:mt-0'>
							<LinkApp />
						</div>
					</div>
				</div>
				<Burger isShow={isShow} setIsShow={setIsShow} />
			</div>
		</header>
	)
}
export default Header
