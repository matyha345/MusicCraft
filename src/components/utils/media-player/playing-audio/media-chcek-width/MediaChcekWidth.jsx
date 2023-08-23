const MediaCheckWidth = ({ checkWidth, currentSong, clickRef }) => {
	const progressWidth = currentSong && currentSong.progress ? `${currentSong.progress}%` : '0%';
  
	return (
	  <div className='w-full flex justify-center mt-3'>
		<div className='w-96'>
		  <div
			className=' min-w-full bg-custom-gray h-1 rounded-3xl cursor-pointer'
			onClick={checkWidth}
			ref={clickRef}
		  >
			<div
			  style={{ width: progressWidth }}
			  className='w-0 h-full bg-green-800 rounded-3xl'
			></div>
		  </div>
		</div>
	  </div>
	);
  };
  
  export default MediaCheckWidth;
  