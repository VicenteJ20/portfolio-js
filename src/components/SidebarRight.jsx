import Image from "next/image";
import Link from "next/link";
import profilePic from '../../public/assets/vicente-jorquera-profile-pic.jpg'

export const SidebarRight = () => {
  return(
    <div className='flex flex-col gap-12 items-center py-10 px-6 bg-white fixed h-screen right-0 top-0 border-l-2 border-stone-300 w-80 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white'>
      <div className='w-full flex gap-4 items-center'>
        <Image src={profilePic} width={200} height={200} alt='vicente jorquera profile pic' className='rounded-full w-16 dark:brightness-75' />
        <div>
          <h4 className=' font-semibold'>Vicente Jorquera</h4>
          <a target='_blank' href='https://www.instagram.com/jvicente_20' rel="noreferrer" className='transition-all duration-500 hover:text-teal-500'>@jvicente_20</a>
        </div>
      </div>
      <div className='portfolio-promo bg-gray-500 dark:bg-zinc-800 w-full h-32 rounded-md flex flex-col text-center gap-4 items-center justify-center'>
        <h3 className='text-lg font-bold'>¿Te gusta el contenido?</h3>
        <Link href='/portfolio' className='text-white font-medium p-2 rounded-md border-none text-sm bg-teal-700 hover:bg-teal-900 hover:text-white transition-all duration-500'>Visita mi portafolio</Link>
      </div>
    </div>
  )
}