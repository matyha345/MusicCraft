import Layout from '../../layout/Layout'
import Subscription from '../../ui/Subscription/Subscription'
import Video from '../../ui/video/Video'

import HomeBottom from './home-bottom/HomeBottom'
import HomeSection from './home-section/HomeSection'
import HomeSectionFree from './home-section-free/HomeSectionFree'
import HomeSectionTwo from './home-section-two/HomeSectionTwo'

const Home = () => {
	return (
		<Layout>
			<section className='container mx-auto max-w-screen-lg m-0-auto px-2  md:mt-20'>
				<div className=''>
					<h1
						className='relative text-center font-bold text-2xl md:text-5xl px-3 md:before:content-iconHome  before:block md:before:absolute before:top-0 before:left-[-150px] bg-no-repeat 
				after:absolute after:block after:content-iconMen after:top-[50px] after:right-[-50px]
				'
					>
						Have no fear of perfection, you'll never reach it.
					</h1>
					<p className='text-center font-normal text-lg md:text-xl text-slate-500 mt-5'>
						MusiCraft is an online platform designed for everyone who loves
						music. Our project brings together musicians, artists, and music
						enthusiasts in a unified space!
					</p>
				</div>

				<div className='flex flex-col md:flex-row items-center justify-center w-full md:mb-20 md:relative z-2 md:before:content-sendHome before:absolute before:bottom-[-50px] before:left-[-75px] before:w-40 before:h-40 md:before:inline-block'>
					<Video
						customStyles={'rounded mt-10 relative shadow-lg shadow-blue-500/50'}
						videoData={'video/video-home.mp4'}
						videoWidth={740}
						videoHeight={550}
						imgVideo={'images/home/video-home.jpg'}
					/>

					<Subscription
						customStyles={
							'hidden md:block md:absolute md:bottom-[-30px] md:right-[-100px] '
						}
					/>
				</div>

				<section className='mt-5 md:mb-20'>
					<HomeSection />
				</section>
				<section className='mt-5 md:mb-20'>
					<HomeSectionTwo />
				</section>
				<section className='my-10'>
					<HomeSectionFree />
				</section>
			</section>
			<HomeBottom customStyles={'w-full bg-blue-600'} />
		</Layout>
	)
}

export default Home
