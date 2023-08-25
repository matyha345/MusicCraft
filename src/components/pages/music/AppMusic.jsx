import Header from '../../layout/header/Header'
import MediaPlayers from '../../utils/local.media.player/SongMediaPlayer'

// import MediaPlayer from '../../utils/media-player/MediaPlayer'
import MusicSearch from './music-search/MusicSearch'
import MusicTracks from './music-tracks/MusicTracks'
// import MusicTest from './music-tracks-copy/AppMusic-test'
// import MusicTracks from './music-tracks/MusicTracks'

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
					<MusicTracks />
				</div>
			</div>
			<div>
				<MediaPlayers />
			</div>
		</section>
	)
}

export default AppMusic
