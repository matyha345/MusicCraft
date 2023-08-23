import Header from '../../layout/header/Header'


import MediaPlayer from '../../utils/media-player/MediaPlayer'
import MusicSearch from './music-search/MusicSearch'
import MusicTest from './music-tracks-copy/AppMusic-test'
import MusicTracks from './music-tracks/MusicTracks'


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
					<MusicSearch />
				</div>
				<div>
					{/* <MusicTest /> */}
					<MusicTracks />
				</div>
			</div>
			<div>
				<MediaPlayer />
			</div>
		</section>
	)
}

export default AppMusic
