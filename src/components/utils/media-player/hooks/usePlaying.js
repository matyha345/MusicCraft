export const usePlaying = (audioElem, songs, currentSong, setCurrentSong) => {

	
	const skipBack = () => {
		const index = songs.findIndex(x => x.title == currentSong.title)
		if (index == 0) {
			setCurrentSong(songs[songs.length - 1])
		} else {
			setCurrentSong(songs[index - 1])
		}
		audioElem.current.currentTime = 0
	}
	const skipNext = () => {
		const index = songs.findIndex(x => x.title == currentSong.title)
		if (index == songs.length - 1) {
			setCurrentSong(songs[0])
		} else {
			setCurrentSong(songs[index + 1])
		}
		audioElem.current.currentTime = 0
	}
	

	return { skipBack, skipNext }
}
