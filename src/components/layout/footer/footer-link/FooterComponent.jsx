import Burger from '../../header/burger/burger'
import FooterDataLink from '../footer-data/FooterData'
import FooterSection from './FooterSection'

const FooterComponent = () => {
	const { legalData, companyData, supportData, solutionsData } =
		FooterDataLink()
	return (
		<div className='grid grid-cols-2 items-center justify-center mb-4 sm:flex sm:flex-col md:flex md:flex-row  md:items-start'>
			<FooterSection title='Solutions' data={solutionsData} />
			<FooterSection title='Support' data={supportData} />
			<FooterSection title='Legal' data={legalData} />
			<FooterSection title='Company' data={companyData} />
		</div>
	)
}

export default FooterComponent
