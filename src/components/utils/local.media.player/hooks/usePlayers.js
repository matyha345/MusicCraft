import { useEffect, useRef, useState } from 'react'

import { useQuery } from 'react-query'
import { LocalMusicServices } from '../../../services/local.music.services'

export const usePlayers = () => {
	const {
		isLoading,
		data: response,
		error
	} = useQuery('music track', () => LocalMusicServices.getAll())

	const [isPlaying, setIsPlaying] = useState(false)
	const [currentSongIndex, setCurrentSongIndex] = useState(0)
	const [audioElem] = useState(() => new Audio())

	const skipBack = () => {
		if (response && response.length > 0) {
			const newIndex =
				(currentSongIndex - 1 + response.length) % response.length
			setCurrentSongIndex(newIndex)
			audioElem.currentTime = 0
		}
	}

	const skipNext = () => {
		if (response && response.length > 0) {
			const newIndex = (currentSongIndex + 1) % response.length
			setCurrentSongIndex(newIndex)
			audioElem.currentTime = 0
		}
	}

	const currentSong = response ? response[currentSongIndex] : null

	return {
		isPlaying,
		setIsPlaying,
		currentSong,
		skipBack,
		skipNext,
		isLoading,
		error,
		audioElem,
		response,
		setCurrentSongIndex,
		currentSongIndex
	}
}
