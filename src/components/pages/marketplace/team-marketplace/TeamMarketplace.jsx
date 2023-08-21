import { teamData } from './team-data/teamData'

const TeamMarketplace = () => {
	return (
		<section className='mb-32'>
			<h1 className='text-center font-bold text-4xl'>Meet our Team</h1>
			<p className='text-center text-xl text-slate-500 mt-5'>
				Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
				sint.
			</p>

			<div className='flex mt-20'>
				<div className='flex flex-wrap gap-14 justify-center px-7'>
					{teamData.map((data, index) => (
						<div key={`team_${index}`} className='flex items-center flex-col'>
							<img className=' rounded-full' src={data.img} alt='' />
							<h1 className=' font-bold text-sm mt-1'>{data.title}</h1>
							<p className='text-sm text-slate-500 mt-1'>{data.cn}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TeamMarketplace
