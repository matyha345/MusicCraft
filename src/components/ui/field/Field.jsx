const Field = ({ register, name, options, error, ...rest }) => {
	return (
		<div className="my-3 w-full flex flex-col items-center">
			<input {...register(name, options)} {...rest} className="py-2 px-5 w-full rounded-xl"  />
			{error && <div className=' mt-1 text-lg text-red-500'>ошибка</div>}
		</div>
	)
}

export default Field
