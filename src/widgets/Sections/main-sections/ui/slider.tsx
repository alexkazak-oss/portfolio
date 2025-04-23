import Image from 'next/image'

export default function Slider() {
	return (
		<div className='flex items-center justify-center h-screen'>
			<div className='w-full max-w-2xl'>
				<div className='relative w-full h-72 overflow-hidden rounded-lg shadow-lg'>
					<Image
						width={1000}
						height={800}
						src='/images/backgrounds/bg1.jpg'
						alt='Slide 1'
						className='absolute inset-0 object-cover w-full h-full transition-transform duration-500 ease-in-out transform hover:scale-105'
					/>
				</div>
			</div>
		</div>
	)
}
