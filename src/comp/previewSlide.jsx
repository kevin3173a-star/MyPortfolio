import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ProjectData from '../json/project.json'
//let style={height:"300px", width:"1200px"}

function PreviewSlide({data}) {
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
        
          {
            data.popupPreview?.map((p)=>{

              return  <SwiperSlide> 
                        <img src={p} key={p}/>
                      </SwiperSlide>
            })
          }
        
      </Swiper>
    </>
  );
}

export default PreviewSlide