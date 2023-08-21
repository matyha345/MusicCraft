import Button from '../../../ui/button/Button'
import Teg from '../../../ui/teg/Teg'
import Video from '../../../ui/video/Video'
import ProductCompanies from './product-companies/ProductCompanies'

const ProductImages = () => {
	return (
		<div>
			<div className='px-3 md:px-0 md:flex items-center justify-between'>
				<div>
					<Teg>Customer Spotlight</Teg>
					<h2 className=' text-2xl md:text-4xl font-bold max-w-md mt-5'>
						DocuSign enables customer to succeed with Dlex
					</h2>
					<p className='max-w-md font-normal text-sm md:text-xl text-slate-500 mt-5'>
						DocuSign uses Dlex to track key metrics to improve customer
						experience, resulting in more conversions, onboarding completions,
						and paid upgrades.
					</p>
					<div className='mt-5'>
						<Button>Read full story</Button>
					</div>
				</div>
				<div className=' max-w-lg'>
					<Video
						customStyles={
							'rounded mt-10 relative shadow-lg shadow-blue-500/50'
						}
						videoData={'video/video-home.mp4'}
						videoWidth={552}
						videoHeight={311}
						imgVideo={'images/product/imgProduct.jpg'}
					/>
				</div>
			</div>
            
            <div className='mt-20'>
                <ProductCompanies />
            </div>
		</div>
	)
}

export default ProductImages
