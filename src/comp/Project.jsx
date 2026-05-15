import React, { useState } from 'react'
import ProjectData from '../json/project.json'
import ProjectPopup from './ProjectPopup'

function Project() {
  //어떤 프로젝트 클릭했는지 저장
  //project하나하나 map으로 돌리되 눌러서 각각 뜨는 팝업은 또 map할필요 없고 클릭된 하나의 state로 띄운다
  const [selectedProject,setSelectedProject]=useState(null)

  return (
    <>
    <div className='projectsCont'>
        {
          ProjectData.projects.map((pj)=>{
          return <div className='project' key={pj.id}>
                    <div className='projectImg' onClick={()=>{
                        setSelectedProject(pj)//클릭시 어떤 프로젝트 클릭했는지 저장
                        
                    }}>
                        <img src={pj.thumbnail} alt='{pj.title}썸네일'/>
                    </div>
                    <div className='projectTxt'>
                        <div className='projectTxt1'>
                            <h2>{pj.title}</h2>
                            <a href={pj.siteURL} target="_blank">사이트 바로가기</a>
                        </div>
                        <div className='projectTxt2'>
                            <div className='projectTxtKeyWord'>
                                {
                                    pj.projectKeyWord?.map((i)=>{
                                        return<span key={i}>{i}</span>
                                    })
                                }                              
                            </div>
                            <p className={pj.type==="팀 프로젝트" ? "team" : "personal"}>{pj.type}</p>
                        </div>
                        <div className='projectTxt3'>
                            <p>{pj.intro}</p>
                        </div>
                    </div>
                 </div>
            })
        }
    </div>
        {selectedProject && (
            <ProjectPopup
              data={selectedProject}
              selectedProject={selectedProject}
              onClose={()=>setSelectedProject(null)}
              />
        )}
    </>
        
    
  )
}

export default Project