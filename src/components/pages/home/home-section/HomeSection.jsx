import Teg from '../../../ui/teg/Teg'

const HomeSection = () => {
	const sectionData = [
		{
			svg: 'svg/home/pop.svg',
			title: 'Melancholic Pop',
			text: 'Melancholic Pop is a genre that combines emotional melodies with profound lyrics. This genre resides at the intersection of pop music and lyrical melancholy, creating music that envelops the listener in an atmosphere of sadness and contemplation.'
		},
		{
			svg: 'svg/home/rok.svg',
			title: 'Electro-Rock:',
			text: 'Electro-Rock is a genre that blends the power of rock with the drive of electronic sounds. Here, guitar riffs intertwine with electronic synthesizers and percussion, creating a potent sonic cocktail.'
		},
		{
			svg: 'svg/home/rap.svg',
			title: 'Rap',
			text: 'Rap, or rapping, also known as rhyming or freestyling, is a musical form of vocal delivery that encompasses "rhyme, rhythmic speech, and street slang," performed or spoken in various ways while typically accompanied by a background beat or music.'
		},
		{
			svg: 'svg/home/nu.svg',
			title: 'Nu metal',
			text: 'Nu-metal is a subgenre of alternative metal that combines elements of various metal subgenres with genres such as hip-hop, alternative rock, funk, and grunge. Nu-metal rarely features guitar solos, is heavily syncopated, and is based on guitar riffs.'
		}
	]

	return (
		<section>
			<Teg>Why dlex</Teg>
			<h1 className='max-w-xl font-bold text-xl md:text-4xl p-3 md:p-0 mt-1'>
				Creativity is nothing but the way to solve new problems.
			</h1>

			<div className='flex flex-wrap gap-x-2.5 gap-y-2.5 justify-center mt-10 mb-10'>
				{sectionData.map((path, index) => (
					<div
						key={index}
						className=' shadow-lg shadow-slate-500/25 px-3 py-5 sm:max-w-[500px] w-96 '
					>
						<img src={path.svg} alt='' />
						<h1 className=' font-bold text-base mt-5'>{path.title}</h1>
						<p className='mt-3 text-sm font-normal text-slate-400'>
							{path.text}
						</p>
					</div>
				))}
			</div>
		</section>
	)
}
export default HomeSection
