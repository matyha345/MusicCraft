import { Link, useNavigate } from 'react-router-dom'

import Button from '../../ui/button/Button'
import HomeSection from '../home/home-section/HomeSection'
import ProductSection from './product-section/ProductSection'
import ProductImages from './product-images/productImages'
import ProductQuestions from './product-questions/ProductQuestions'
import ProductOver from './product-over/ProductOver'

import Layout from '../../layout/Layout'

const Product = () => {
	const nav = useNavigate()

	return (
		<>
			<section
				className='w-full h-full bg-no-repeat md:bg-contain bg-30% '
				style={{ backgroundImage: 'url(images/product/bg-product.jpg)' }}
			>
				<Layout bgBlack={{ backgroundColor: '#121127', color: 'white' }}>
					<section className='container mx-auto max-w-screen-lg m-0-auto md:mt-16'>
						<div>
							<h1 className='text-center text-xl md:text-6xl font-bold'>
								Build Better Playlists
							</h1>
							<p className='text-center text-sm md:text-xl text-slate-500 mt-5'>
								Powerful platform for creating your favorite playlists
							</p>
							<div className='flex justify-center mt-5'>
								<Button clickHandler={() => nav('/app-music')}>
									Watch Demo
								</Button>
							</div>
						</div>
						<div className='flex items-center justify-center mt-20 p-3'>
							<img
								className='rounded-xl'
								src='images/product/app.png'
								alt='img top'
							/>
						</div>

						<section className='mt-20'>
							<HomeSection />
						</section>
						<section className='mt-24'>
							<ProductSection />
						</section>
						<section className='my-20'>
							<ProductImages />
						</section>

						<section>
							{/* <ProductQuestions /> */}
						</section>
					</section>
					<section className='mb-44'>
						<ProductOver />
					</section>
				</Layout>
			</section>
		</>
	)
}

export default Product
