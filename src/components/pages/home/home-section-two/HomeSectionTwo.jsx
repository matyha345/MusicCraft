import Teg from '../../../ui/teg/Teg'
import { FiCheck } from 'react-icons/fi'
import { HomeDataSection } from './home-data-section'

const HomeSectionTwo = () => {
	return (
		<section>
			<Teg>Music World News</Teg>
			<h1 className='max-w-xl font-bold text-4xl mt-1'>New albums, concerts, events</h1>

			<div className='mt-10 flex justify-center flex-wrap gap-2'>
				{HomeDataSection.map((data, dataIndex) => (
					<div className='max-w-[440px]' key={dataIndex}>
						<div className='flex flex-col'>
							<h1 className=' text-blue-500 font-bold text-xl'>{data.title}</h1>
							<p className='text-sm font-normal text-slate-400 mt-3 h-16'>
								{data.text.split(' ').map((span, wordIndex) =>
									span.toLowerCase() === 'unauthorized' ? (
										<span key={wordIndex} className='text-blue-500'>
											{span}{' '}
										</span>
									) : (
										`${span} `
									)
								)}
							</p>
						</div>
						{dataIndex === 1 ? (
							<div className=' mt-8 relative  before:absolute md:before:content-groupBefor before:bottom-[-20px] before:right-[-117px] '>
								<img  src={data.svg} alt='' />
							</div>
						) : (
							<div className=' mt-8'>
								<img src={data.svg} alt='' />
							</div>
						)}

						{data.checkboxOne.map((checkbox, checkboxIndex) => (
							<div className='flex items-center mt-2' key={checkboxIndex}>
								<div className='rounded-full w-5 h-5 bg-blue-600 flex items-center justify-center py-1'>
									<span>
										<FiCheck size={14} color='white' />
									</span>
								</div>
								<p className='ml-3 text-sm font-normal text-slate-400'>
									{checkbox.text}
								</p>
							</div>
						))}
					</div>
				))}
			</div>
		</section>
	)
}

export default HomeSectionTwo
