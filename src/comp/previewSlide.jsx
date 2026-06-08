import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import ProjectData from '../json/project.json'
import { useState } from 'react';
//let style={height:"300px", width:"1200px"}

function PreviewSlide({data}) {
  const [loadedCount,setLoadedCount]=useState(0);
  const totalImages=data.popupPreview?.length || 0;
  const isLoading=loadedCount<totalImages;
  return (
     <>
      {isLoading && (
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
                          onLoad={()=>setLoadedCount(prev=>prev+1)}
                          />
                      </SwiperSlide>
            })
          }
        
      </Swiper>
    </>
  );
}

export default PreviewSlide