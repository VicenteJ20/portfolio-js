import { HeadLayout } from "@/components/HeadLayout"
import { SidebarNav } from "@/components/SidebarNav"
import { SidebarRight } from "@/components/SidebarRight"
import { Poppins } from '@next/font/google'


const poppins = Poppins({
  weight: ['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin']
})

export const BlogLayout = ({children, title, description}) => {
  return (
    <>
      <HeadLayout title={title} description={description} /> {/* html head */}
      <section className={`min-h-screen w-full pl-4 lg:pl-40 pr-4 lg:pr-80 py-8 dark:bg-zinc-900 ${poppins.className}`}>
        <SidebarNav />
        <SidebarRight />
        <div className='children-container lg:pr-14 dark:bg-zinc-900 dark:text-white text-zinc-900 px-8'>  
          {children}
        </div>
      </section>
    </>
  )
}