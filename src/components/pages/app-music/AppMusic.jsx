import Header from '../../layout/header/Header'
import AppMusicSearch from './app-music-search/appMusicSearch'
import AppMusicTest from './app-music-tracks-copy/AppMusic-test'
import MediaPlayer from '../../utils/media-player/MediaPlayer'

const AppMusic = () => {
	return (
		<section
			style={{
				background: 'linear-gradient(to top, #2C5364, #203A43, #0F2027)'
			}}
			className=' text-white h-screen flex flex-col justify-between'
		>
			<Header />

			<div className='flex items-start justify-between  px-10'>
				<div>
					<AppMusicSearch />
				</div>
				<div>
					<AppMusicTest />
				</div>
			</div>
			<div>
				<MediaPlayer />
			</div>
		</section>
	)
}

export default AppMusic
