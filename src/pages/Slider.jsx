
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Slider = () => {
    return (
        <div className='rounded-2xl className="  md:w-1/2 rounded-2xl"'>
            <Swiper

                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-72 md:w-[580px] rounded-2xl"
            >
                <SwiperSlide className='rounded-2xl'><img src="https://i.ibb.co/kg3VcK9/cityscape-incheon-bridge-korea.jpg" alt="" className=' w-full h-[400px] rounded-xl' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/VLgNhDJ/balinese-people-traditional-clothes-religious-ceremony-pura-taman-ayun-temple-bali-indonesia.jpg" alt="" className='w-full h-[400px] rounded-xl' /></SwiperSlide>
                <SwiperSlide><img src="https://i.ibb.co/r0vnk3s/aerial-view-sandy-beach-with-tourists-swimming-beautiful-clear-sea-water-sumilon-island-beach-landin.jpg" alt="" className='w-full h-[400px] rounded-xl' /></SwiperSlide>

            </Swiper>


        </div>
    );
};

export default Slider;