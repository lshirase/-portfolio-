import Image from 'next/image'
const CarouselItem = ({ title, content, img }) => {
  return (
    <div className="swiper-slide h-full w-[300px] p-4 md:w-[400px] lg:w-[600px]">
      <Image src={img} alt="image from list" />
    </div>
  )
}

export default CarouselItem
