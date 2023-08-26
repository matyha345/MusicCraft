import { teamData } from './team-data/teamData'

const TeamMarketplace = () => {
	return (
		<section className='mb-32'>
			<h1 className='text-center font-bold text-4xl'>Meet our Team</h1>
			<p className='text-center text-xl text-slate-500 mt-5'>
				Our team diligently seeks out new artists so that you can enjoy new
				music every day.
			</p>

			<div className='flex mt-20'>
				<div className='flex flex-wrap gap-14 justify-center px-7'>
					{teamData.map((data, index) => (
						<div key={`team_${index}`} className='flex items-center flex-col'>
							<img className=' rounded-full' src={data.img} alt='' />
							<h1 className=' font-bold text-sm text-slate-500/75 mt-1'>
								{data.title}
							</h1>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default TeamMarketplace
