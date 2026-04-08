import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
//let style={height:"300px", width:"1200px"}

function PreviewSlide() {
  return (
     <>
      <Swiper
        //style={style}
        spaceBetween={30}
        effect={'fade'}
        loop={true}
        navigation={true}
        pagination={{
          type: 'progressbar',
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/images/projects/WeatherMood/preview/WeatherMood_preview1.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/projects/WeatherMood/preview/WeatherMood_preview2.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/projects/WeatherMood/preview/WeatherMood_preview3.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/projects/WeatherMood/preview/WeatherMood_preview4.png" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/images/projects/WeatherMood/preview/WeatherMood_preview5.png" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default PreviewSlide