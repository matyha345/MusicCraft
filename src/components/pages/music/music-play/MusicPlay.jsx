import { useState } from 'react'

const MusicPlay = () => {
	const [currentTrackIndex, setCurrentTrackIndex] = useState(null)

	const playTrack = index => {
		if (currentTrackIndex !== null) {
			const audioElement = document.getElementById(`audio-${currentTrackIndex}`)
			audioElement.pause()
		}

		setCurrentTrackIndex(index)
		const audioElement = document.getElementById(`audio-${index}`)
		audioElement.play()
	}
	return <button onClick={() => playTrack(index)}>Play</button>
}

export default MusicPlay

