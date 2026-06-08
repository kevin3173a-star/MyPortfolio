import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ProjectData from '../json/project.json'
import { useEffect, useState } from 'react';
//let style={height:"300px", width:"1200px"}

function PreviewSlide({data}) {
  const [loaded,setLoaded]=useState(false);
  useEffect(()=>{
    setLoaded(false);
  },[data])
  
  return (
     <>
      {!loaded && (
        <div className="previewSpinner"></div>
      )}
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

              return  <SwiperSlide key={p}> 
                        <img 
                          src={p} 
                          alt=""
                          onLoad={()=>setLoaded(true)}
                          />
                      </SwiperSlide>
            })
          }
        
      </Swiper>
    </>
  );
}

export default PreviewSlide