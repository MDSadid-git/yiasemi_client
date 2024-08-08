import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import img1 from "../../../Assets/home/slide1.jpg"
import img2 from "../../../Assets/home/slide2.jpg"
import img3 from "../../../Assets/home/slide3.jpg"
import img4 from "../../../Assets/home/slide4.jpg"
import img5 from "../../../Assets/home/slide5.jpg"
import SectionTitle from '../../../ComponentShered/SectionTitile/SectionTitle';
// import img6 from "../../../Assets/home/slide6.jpg"
// import img7 from "../../../Assets/home/slide7.jpg"

const FoodCategory = () => {
    return (
        <section className='max-w-screen-xl mx-auto my-5'>
          <SectionTitle heading={"From 12pm to 5pm"} subHeading={"Order Online"}/>
             <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className=' ml-[25px]'><img src={img1} /><h3 className='text-4xl text-white uppercase font-semibold -mt-16 ml-2'>Salads</h3></SwiperSlide>
        <SwiperSlide className=' ml-[25px]'><img src={img2} /><h3 className='text-4xl text-white uppercase font-semibold -mt-16 ml-2'>Pizzas</h3></SwiperSlide>
        <SwiperSlide className=' ml-[25px]'><img src={img3} /><h3 className='text-4xl text-white uppercase font-semibold -mt-16 ml-2'>Soups</h3></SwiperSlide>
        <SwiperSlide className=' ml-[25px]'><img src={img4} /><h3 className='text-4xl text-white uppercase font-semibold -mt-16 ml-2'>Desserts</h3></SwiperSlide>
        <SwiperSlide className=' ml-[25px]'><img src={img5} /><h3 className='text-4xl text-white uppercase font-semibold -mt-16 ml-2'>Salads</h3></SwiperSlide>
      </Swiper>
        </section>
    );
};

export default FoodCategory;