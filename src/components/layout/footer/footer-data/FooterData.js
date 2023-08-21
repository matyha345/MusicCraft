const FooterDataLink = () => {
	const nameData = ['Solutions', 'Support', 'Company', 'Legal']

	const legalData = [
		{
			name: 'Claim',
			link: ''
		},
		{
			name: 'Privacy',
			link: ''
		},
		{
			name: 'Terms',
			link: ''
		}
	]

	const companyData = [
		{
			name: 'About',
			link: ''
		},
		{
			name: 'Blog',
			link: ''
		},
		{
			name: 'Jobs',
			link: ''
		},
		{
			name: 'Press',
			link: ''
		},
		{
			name: 'Partners',
			link: ''
		}
	]

	const supportData = [
		{
			name: 'Pricing',
			link: ''
		},
		{
			name: 'Documentation',
			link: ''
		},
		{
			name: 'Guides',
			link: ''
		},
		{
			name: 'API Status',
			link: ''
		}
	]

	const solutionsData = [
		{
			name: 'Marketing',
			link: ''
		},
		{
			name: 'Analytics',
			link: ''
		},
		{
			name: 'Commerce',
			link: ''
		},
		{
			name: 'Insights',
			link: ''
		}
	]

	return {
		nameData,
		legalData,
		companyData,
		supportData,
		solutionsData
	}
}

export default FooterDataLink
