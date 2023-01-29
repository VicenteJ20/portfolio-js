import recent from '../json/recent.json'
import { Article } from './article'
import { useState } from 'react'
import { MdCleaningServices } from 'react-icons/md'

export const ArticleSection = () => {
  const [visible, setVisible] = useState(false)
  const [filter, setFilter] = useState('')

  const handleVisible = () => {
    setVisible(!visible)
  }

  const handleFilter = (e) => {
    console.log(e.target.textContent)
    setFilter(e.target.textContent)
    setVisible(!visible)
  }

  const cleanFilter = () => {
    if (visible) setVisible(!visible)
    setFilter('')
  }

  return (
    <section className='w-full py-4 dark:text-stone-100 my-2 flex flex-col gap-4'>
      <header className='flex gap-4 justify-between'>
        <h2 className='text-2xl font-semibold'>Artículos recientes</h2>
        <div className='flex gap-4 items-center text-xl'>
          <MdCleaningServices onClick={cleanFilter} className='hover:fill-teal-500 cursor-pointer transition-all duration-500' />
          <div className='relative border-2 rounded-lg text-sm border-zinc-600 p-2 cursor-pointer select-none' onClick={handleVisible}>
            <p>Ordernar por</p>
            <div className={`${visible ? 'block' : 'hidden'} asbolute p-2 border-2 border-zinc-600 absolute top-9 left-0 bg-white dark:bg-zinc-900 rounded-lg select-none text-sm cursor-pointer leading-6`}>
              <p onClick={handleFilter}>Programación</p>
              <p onClick={handleFilter}>Servidores</p>
              <p onClick={handleFilter}>Sistemas</p>
              <p onClick={handleFilter}>Windows</p>
              <p onClick={handleFilter}>Linux</p>
            </div>
          </div>
        </div>
      </header>
      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4'>
        {
          recent.map(article => article.category.toLowerCase() === filter.toLocaleLowerCase() ? <Article key={article.id} title={article.title} description={article.description} image={article.image} /> : filter === '' ? <Article key={article.id} title={article.title} description={article.description} image={article.image} /> : '')
        }
      </div>
    </section>
  )
}
