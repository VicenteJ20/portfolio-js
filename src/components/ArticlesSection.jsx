import recent from '../json/recent.json'
import { Article } from './article'

export const ArticleSection = () => {
  return (
    <section className='w-full py-4 dark:text-stone-100 my-2 flex flex-col gap-4'>
      <h2 className='text-2xl font-semibold'>Artículos recientes</h2>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
        {
          recent.map(article => <Article key={article.id} title={article.title} description={article.description} image={article.image} />)
        }
      </div>
    </section>
  )
}
