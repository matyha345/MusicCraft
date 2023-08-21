import { Link } from 'react-router-dom'

const FooterSection = ({ title, data }) => (
	<ul className='md:block'>
		<div className='flex flex-col items-center sm:flex-row sm:justify-center md:flex-col px-8'>
			<h1 className='font-bold text-sm text-slate-500 md:mb-5'>{title}</h1>
			{data.map((item, index) => (
				<li className='px-1 md:px-0 py-0.5' key={`__map_${index}`}>
					<Link className='hover:text-yellow-600 ' to={item.link}>
						{item.name}
					</Link>
				</li>
			))}
		</div>
	</ul>
)
export default FooterSection
