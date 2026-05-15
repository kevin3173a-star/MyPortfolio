import React, { useEffect, useRef } from 'react'
import ProjectData from '../json/project.json'
import PreviewSlide from '../comp/previewSlide';
import Divider from '@mui/material/Divider';

function ProjectPopup({data,onClose,selectedProject}) {
  const pop = useRef();
  const popupBox = useRef();
  useEffect(()=>{

    pop.current.addEventListener('wheel',(e)=>{
      document.body.style='overflow:hidden;';
      if(e.target.classList.contains('projectPopup')){
        e.preventDefault();
      }      
    })
    pop.current.addEventListener('click',(e)=>{
      if(e.target.classList.contains('projectPopup')){
        onClose();document.body.style='overflow:visible;'
      }
    })
  },[])
  if(!data) return null;
console.log(selectedProject)
  return (
    <div className='projectPopup' ref={pop}>
          <div className='popupBox' >
              <div className='popupClose' onClick={()=>{onClose(); document.body.style='overflow:visible;';}}></div>
              <div className='popupBoxPreview'>
                <PreviewSlide data={selectedProject}/>
              </div>
              <div className='popupBoxTxt'>
                <div className='popupBoxTxt1'>
                  <div className='txt1-1'>
                    <h2>{data.title}</h2>
                    <div>
                      <a href={data.siteURL} target="_blank">사이트 바로가기</a>
                      <Divider orientation="vertical" flexItem />
                      <a href={data.githubURL} target="_blank">Github 바로가기</a>
                    </div>
                  </div>
                  <div className='txt1-2'>
                    <div className='projectTxtKeyWord'>
                      {
                      data.projectKeyWord?.map((i)=>{
                        return<span key={i}>{i}</span>
                                    })

                      
                      }
                    </div>
                      <p className={data.type==="팀 프로젝트" ? "team" : "personal"}>{data.type}</p>
                  </div>
                  <div className='txt1-3'>
                    <p>{data.popupIntro}</p>
                  </div>
                  <div className='txt1-4'>
                    <div className='PJperiod'>
                      <h3>개발기간</h3>
                      <p>{data.period}</p>
                    </div>
                    <div className='PJrole'>
                      <h3>기여도</h3>
                      <div>
                        <p><b>개발</b> {data.role.dev}</p>
                        <p><b>디자인</b> {data.role.design}</p>
                        <p><b>기획</b> {data.role.plan}</p>
                      </div>
                    </div>
                    <div className='PJmember'>
                      <h3>구성원</h3>
                      <p>{data.member}</p>
                    </div>
                  </div> 
                </div>
                <div className='popupBoxTxt2'>
                  <div className='popupStacks'>
                    <h3>주요 기술 스택</h3>
                    <div className='popupStack'>
                      {
                        data.stack.map((pp,i)=>{
                          return <span key={i}>
                                  <img src={pp.img} alt='스택 아이콘'/>
                                  <p>{pp.stackName}</p>
                                </span>
                        })
                      }
                    </div>
                  </div>
                  {selectedProject.title!=='웹 포트폴리오' && 
                  <>
                    <div className='popupFeatures'>
                      
                        <h3>주요 기능</h3>
                        <ul>
                          {
                            data.features?.map((pp,i)=>{
                              return <li key={i} dangerouslySetInnerHTML={{__html:pp}} ></li>
                            })
                          }
                        </ul>
                      
                    </div>
                  
                  </>
                  }
                </div>
                <div className='popupBoxTxt3'>
                  <div className='popupTroubles'>
                    <h3>트러블슈팅</h3>
                    <div className='popupTrouble'>
                      {
                        data.troubles.map((pp,i)=>{
                          return <div className='trouble1' key={i}>
                                    <div className='trouble1_issue'>
                                      <span>발생된 이슈</span>
                                      <p dangerouslySetInnerHTML={{__html:pp.issue}}/>
                                    </div>
                                    <div className='trouble1_solution'>
                                      <span><b>ㄴ</b> 해결방안</span>
                                      <p dangerouslySetInnerHTML={{__html:pp.solution}}/>
                                    </div>
                                 </div>
                        })
                      }
                    </div>
                  </div>
                  <div className='popupReview'>
                    <h3>느낀점</h3>
                    <p dangerouslySetInnerHTML={{__html:data.review}}/>
                  </div>
                </div>
              </div>
          </div>
    </div>
  )
}

export default ProjectPopup