import { useEffect, useRef, useState } from 'react'
import { data } from '../../../pages/app-music/app-music-tracks-copy/AppData'

export const usePlayer = () => {
	
	const [songs, setSongs] = useState(data)
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentSong, setCurrentSong] = useState(data[0])

	const audioElem = useRef()

	useEffect(() => {
		isPlaying ? audioElem.current.play() : audioElem.current.pause()
	}, [isPlaying])

	const onPlaying = () => {
		const duration = audioElem.current.duration
		const ct = audioElem.current.currentTime

		setCurrentSong({
			...currentSong,
			progress: (ct / duration) * 100,
			length: duration
		})
	}

	const clickRef = useRef()

	const checkWidth = event => {
		const width = clickRef.current.clientWidth
		const clickX =
			event.nativeEvent.clientX - clickRef.current.getBoundingClientRect().left
		const divProgress = (clickX / width) * 100
		const newTime = (divProgress / 100) * currentSong.length

		if (!isNaN(newTime) && isFinite(newTime)) {
			audioElem.current.currentTime = newTime
		}
	}

	// const skipBack = () => {
	// 	const index = songs.findIndex(x => x.title == currentSong.title)
	// 	if (index == 0) {
	// 		setCurrentSong(songs[songs.length - 1])
	// 	} else {
	// 		setCurrentSong(songs[index - 1])
	// 	}
	// 	audioElem.current.currentTime = 0
	// }
	// const skipNext = () => {
	// 	const index = songs.findIndex(x => x.title == currentSong.title)
	// 	if (index == songs.length - 1) {
	// 		setCurrentSong(songs[0])
	// 	} else {
	// 		setCurrentSong(songs[index + 1])
	// 	}
	// 	audioElem.current.currentTime = 0
	// }

	return {
		songs,
		setSongs,
		isPlaying,
		setIsPlaying,
		currentSong,
		setCurrentSong,
		audioElem,
		onPlaying,
		clickRef,
		checkWidth,
		
	}
}
