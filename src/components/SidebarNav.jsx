import Link from 'next/link'
import { AiOutlineCode } from 'react-icons/ai'
import { BiFoodMenu, BiUser, BiLibrary, BiHelpCircle } from 'react-icons/bi'

export const SidebarNav = () => {
  return (
    <nav className='bg-white dark:bg-zinc-900 dark:text-white hidden lg:flex flex-col justify-between items-center py-10 px-2 w-32 fixed h-screen left-0 top-0 border-r-2 border-stone-300 dark:border-zinc-700'>
      <div className='flex flex-col gap-12'>
        <header className='text-center flex items-center flex-col gap-1'>
          <AiOutlineCode className='text-4xl' />
          <h4 className='text-sm font-medium'>Vicente<br />Jorquera</h4>
        </header>
        <ul className='flex flex-col gap-12 mt-12'>
          <li className='rounded-sm py-1 flex gap-1 justify-center text-2xl hover:bg-stone-800 dark:hover:bg-teal-700 transition-all duration-500 hover:text-white'><Link href='/blog' title='Ver todos los artículos'><BiFoodMenu /></Link></li>
          <li className='rounded-sm py-1 flex gap-1 justify-center text-2xl hover:bg-stone-800 dark:hover:bg-teal-700 transition-all duration-500 hover:text-white'><Link href='/portfolio' title='Ver portafolio'><BiUser /></Link></li>
          <li className='rounded-sm py-1 flex gap-1 justify-center text-2xl hover:bg-stone-800 dark:hover:bg-teal-700 transition-all duration-500 hover:text-white'><Link href='/saved' title='Ver artículos guardados'><BiLibrary /></Link></li>
        </ul>
      </div>
      <Link href='/portfolio' title='Acerca de' className='rounded-sm py-1 px-5 flex gap-1 items-center text-2xl hover:bg-stone-800 dark:hover:bg-teal-700 transition-all duration-500 hover:text-white'><BiHelpCircle /></Link>
    </nav>
  )
}
