import Header from '../../layout/header/Header'
import MediaPlayers from '../../utils/local.media.player/SongMediaPlayer'
import MusicSearch from './music-search/MusicSearch'
import MusicTracks from './music.tracks/MusicTracks'
import { MusicProvider } from './MusicContext'

const AppMusic = () => {
	return (
		<MusicProvider>
			<section
				style={{
					background: 'linear-gradient(to top, #2C5364, #203A43, #0F2027)'
				}}
				className=' text-white h-screen flex flex-col justify-between'
			>
				<Header />

				<div className='flex items-start  px-10'>
					<div>
						<MusicSearch />
					</div>
					<MusicTracks />
				</div>
				<div>
					<MediaPlayers />
				</div>
			</section>
		</MusicProvider>
	)
}

export default AppMusic
