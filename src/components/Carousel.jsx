import slides from '../json/slides.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import 'swiper/css'
import { CarouselSlide } from './CarouselSlide'

export const Carousel = () => {
  SwiperCore.use([Autoplay])

  return (
    <section className='w-100'>
      <Swiper spaceBetween={20} slidesPerView={1} autoplay={{ delay: 3000 }}>
        {
          slides.map(x => <SwiperSlide key={x.id} ><CarouselSlide id={x.id} title={x.title} subtitle={x.subtitle} linkToArticle='/' imageURL={x.url} /></SwiperSlide>)
        }
      </Swiper>
    </section>
  )
}
