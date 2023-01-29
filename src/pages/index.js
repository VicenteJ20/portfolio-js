import { ArticleSection } from '@/components/ArticlesSection'
import { Carousel } from '@/components/Carousel'
import { BlogLayout } from '@/layout/BlogLayout'
import { BiLibrary, BiSearch } from 'react-icons/bi'
import { IoMdNotificationsOutline } from 'react-icons/io'

export default function Home () {
  return (
    <BlogLayout title='Home - Vicente Jorquera'>
      <header className='flex items-center justify-between gap-4'>
        <form className='relative w-96'>
          <input className='form-control w-full text-base py-2 pl-2 pr-12 outline-none text-stone-800 bg-transparent border-2 border-stone-600 dark:border-zinc-600 rounded-md dark:text-gray-300' placeholder='Buscar artículos' />
          <BiSearch className='absolute right-4 top-2.5 fill-stone-700 dark:fill-gray-300 text-2xl'/>
        </form>
        <div className='flex items-center gap-4 pl-5 pr-8 text-2xl'>
          <IoMdNotificationsOutline className='cursor-pointer hover:text-teal-600 transition-all duration-500' />
          <BiLibrary className='cursor-pointer hover:text-teal-600 transition-all duration-500' />
        </div>
      </header>
      <div className='hidden md:block'>
        <h2 className='text-2xl font-semibold my-6 dark:text-stone-100 border-t-2 pt-6 border-zinc-700'>Artículos destacados</h2>
        <Carousel />
      </div>
      <ArticleSection />
    </BlogLayout>
  )
}
