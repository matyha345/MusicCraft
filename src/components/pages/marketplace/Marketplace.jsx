import Header from '../../layout/header/Header'
import SocialIcons from '../../ui/social-icons/Socialcons'
import HomeBottom from '../home/home-bottom/HomeBottom'
import MarketplaceApp from './marketplace-app/MarketplaceApp'
import MarketplaceGlobal from './marketplace-global/MarketplaceGlobal'
import TeamMarketplace from './team-marketplace/TeamMarketplace'
import TopMarketplace from './top-marketplace/TopMarketplace'

const Marketplace = () => {
	const data = [
		{
			title: '100%',
			text: 'Manage your time more efficiently and effectively.'
		},
		{
			title: '24/7',
			text: 'We are excited to introduce our 24/7 support system'
		},
		{
			title: '250K',
			text: 'Manage your time more efficiently and effectively.'
		}
	]
	return (
		<section
			style={{
				height: '100svh',
				background:
					'radial-gradient(circle, rgba(255, 150, 200, 1) 0%, rgba(255, 211, 144, 1) 100%)'
			}}
			className=''
		>
			<div className='container mx-auto max-w-screen-lg m-0-auto'>
				<Header />
				<TopMarketplace />
				<TeamMarketplace />
				<MarketplaceApp />
			</div>
			<HomeBottom customStyles={'w-full bg-gray-400'} />
			<div className='container mx-auto max-w-screen-lg m-0-auto'>
				<MarketplaceGlobal />
				<div className='flex flex-col items-center justify-center bg-blue-700 rounded-lg text-white mt-24'>
					<h1 className=' mt-24 font-bold text-4xl'>
						Always Here for You: 24/7 Support Article
					</h1>
					<div className='flex flex-wrap gap-3 mt-9 mb-24'>
						{data.map((data, index) => (
							<div
								key={`data__${index}`}
								className='flex flex-col max-w-[296px]'
							>
								<h1 className=' text-4xl font-bold'>{data.title}</h1>
								<span className=' inline-block w-12 border-t-4 bg-indigo-600 mt-1'></span>
								<p className=' text-base text-slate-400 mt-4'>{data.text}</p>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className='mt-24 py-12 bg-gray-100'>
				<div className='container mx-auto max-w-screen-lg m-0-auto'>
					<div className='flex items-center justify-between'>
						<h4 className=' text-slate-600 text-sm'>
							© 2020 Dlex, Inc. All rights reserved
						</h4>
						<SocialIcons customStyles={{ color: '#1211278F' }} />
					</div>
				</div>
			</div>
		</section>
	)
}
export default Marketplace
