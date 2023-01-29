import Link from "next/link"

export const CarouselSlide = ({ id, title, subtitle, linkToArticle, imageURL } ) => {
  return (
    <div className="bg-gray-500 bg-cover inset-0 bg-center bg-no-repeat h-auto md:h-96 xl:h-130 rounded-lg " style={{backgroundImage: `url("${imageURL}")`}}>
      <Link href={linkToArticle} className='absolute cursor-pointer inset-0 bg-black bg-opacity-75 rounded-lg'>
        <div className='content absolute w-full bottom-8 px-8 flex flex-col gap-4'>
          <h2 className='text-xl md:text-3xl font-bold'>{title}</h2>
          <p className='font-light text-lg'>{subtitle}</p>
        </div>
      </Link>
    </div>
  )
}