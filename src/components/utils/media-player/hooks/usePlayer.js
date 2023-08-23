import { useEffect, useRef, useState } from 'react'

import { MusicServices } from '../../../services/music.services'
import { useQuery } from 'react-query'

export const usePlayer = () => {
	const {
		isLoading,
		data: response,
		error
	} = useQuery('music tracks', MusicServices.getAllTracks)

	const [songs, setSongs] = useState(response?.tracks || {})
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentSong, setCurrentSong] = useState(response?.tracks[0])

	useEffect(() => {
		if (
			!isLoading &&
			response &&
			response.tracks &&
			response.tracks.length > 0
		) {
			setCurrentSong(response.tracks[2]) // Установите первую песню как начальное значение
		}
	}, [isLoading, response])

	const audioElem = useRef()

	useEffect(() => {
		if (audioElem.current) {
			isPlaying ? audioElem.current.play() : audioElem.current.pause()
		}
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

	const skipBack = () => {
		if (currentSong && currentSong.subtitle && songs.length > 0) {
			const index = songs.findIndex(
				track => track.subtitle === currentSong.subtitle
			)
			if (index === 0) {
				setCurrentSong(songs[songs.length - 1])
			} else {
				setCurrentSong(songs[index - 1])
			}
			if (audioElem.current) {
				audioElem.current.currentTime = 0
			}
		}
	}

	const skipNext = () => {
		const index = songs.findIndex(
			track => track.subtitle === currentSong.subtitle
		)

		if (index === songs.length - 1) {
			setCurrentSong(songs[0])
		} else {
			setCurrentSong(songs[index + 1])
		}
		audioElem.current.currentTime = 0
	}

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
		skipBack,
		skipNext,
		isLoading,
		error,
		isLoading,
		error
	}
}

