import Image from 'next/image'
import Link from 'next/link'
import { BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs'
import profilePic from '../../public/assets/vicente-jorquera-profile-pic.jpg'

export const SidebarRight = () => {
  return (
    <div className='hidden lg:flex flex-col gap-12 items-center py-10 px-6 bg-white fixed h-screen right-0 top-0 border-l-2 border-stone-300 w-80 dark:bg-zinc-900 dark:border-zinc-700 dark:text-white'>
      <div className='w-full flex gap-4 items-center'>
        <Image src={profilePic} width={200} height={200} alt='vicente jorquera profile pic' className='rounded-full w-16 dark:brightness-75' />
        <div>
          <h4 className=' font-semibold'>Vicente Jorquera</h4>
          <a target='_blank' href='https://www.instagram.com/jvicente_20' rel="noreferrer" className='transition-all duration-500 hover:text-teal-500'>@jvicente_20</a>
        </div>
      </div>
      <div className='portfolio-promo bg-gray-500 dark:bg-zinc-800 w-full h-32 rounded-md flex flex-col text-center gap-4 items-center justify-center py-8'>
        <h3 className='text-lg font-bold'>¿Te gusta el contenido?</h3>
        <Link href='/portfolio' className='text-white font-medium p-2 rounded-md border-none text-sm bg-teal-700 hover:bg-teal-900 hover:text-white transition-all duration-500'>Visita mi portafolio</Link>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <h2 className='font-bold text-lg'>Recomendado</h2>
        <div className='relative rounded-lg w-full h-52 bg-cover inset-0 bg-center bg-no-repeat' style={{ backgroundImage: 'url(\'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80\')' }}>
          <Link href='/' className='absolute cursor-pointer inset-0 bg-black bg-opacity-75 rounded-lg'>
            <div className='content absolute w-full bottom-4 px-4 flex flex-col gap-4'>
              <h2 className='text-sm font-bold'>Necesitas aprender máquinas virtuales y necesitas hacerlo ahora</h2>
            </div>
          </Link>
        </div>
      </div>
      <div className='w-48 h-20 flex items-center gap-4 justify-between'>
        <a className='block text-xl' href='https://www.instagram.com/jvicente_20'><BsInstagram className='transition-all durantion-500 hover:fill-pink-700' /></a>
        <a className='block text-xl' href='https://www.twitter.com/jvicente_20'><BsTwitter className='transition-all durantion-500 hover:fill-cyan-600'/></a>
        <a className='block text-xl' href='https://www.github.com/vicentej20'><BsGithub className='transition-all durantion-500 hover:fill-gray-600'/></a>
      </div>
    </div>
  )
}
