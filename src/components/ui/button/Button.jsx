

const Button = ({ customStyle, children, clickHandler = null }) => {
	return (
		<button  onClick={clickHandler} className='flex items-center p-3 bg-blue-500 rounded-lg text-white text-sm font-medium border-solid border border-transparent hover:border-solid hover:border hover:border-indigo-600 hover:bg-white hover:text-black'
		style={{customStyle}}
		>
			{children}
		</button>
	)
}

export default Button