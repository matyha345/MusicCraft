import { LiaQuestionSolid } from 'react-icons/lia'
import { questionsData } from './questionsData/questionsData'
const ProductQuestions = () => {
	return (
		<div>
			<div className='text-center'>
				<h1 className='text-2xl md:text-4xl font-bold'>Frequently asked questions</h1>
				<p className='text-xl text-slate-500 mt-5'>
					Get the best services at the lowest price
				</p>
			</div>

			<div className='flex flex-wrap gap-3 justify-center mt-10'>
				{questionsData.map((questionsText, index) => (
					<div key={`_queText${index}`} className='flex'>
						<div>
							<div className='flex items-center justify-center w-7 h-7 rounded-full bg-blue-300 mr-5'>
								<span>
									<LiaQuestionSolid color='#444BD3' />
								</span>
							</div>
						</div>
						<div className='max-w-[285px]'>
							<h2 className='text-base font-bold'>{questionsText.title}</h2>
							<p className='text-xs text-slate-500'>{questionsText.text}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
export default ProductQuestions
