import Image from 'next/image'

export default function Header() {
	return (
		<header className='flex justify-center select-none bg-whiteee z-10 w-full h-[75px]'>
			<Image alt='' src={'https://narxoz.edu.kz/images_1/tild3966-3736-4666-b434-333337386661__1_obr.svg'} width={128} height={75} />
		</header>
	)
}
