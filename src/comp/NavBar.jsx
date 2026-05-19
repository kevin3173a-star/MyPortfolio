import React, { useEffect,useState } from 'react'

function NavBar() {
    const [open,setOpen]=useState(false);
    const [active,setActive]=useState('');
    useEffect(()=>{
        const el_header=document.querySelector("header")
    
        let pos={y:0, dy:0, status:true};
        pos.y=0;
        pos.dy=0;
        pos.status=true;

        const onscroll=()=>{
            //스크롤 업 다운 알아내는 방법
            pos.y=window.scrollY;
            pos.status=pos.y > pos.dy ? 'down' : 'up';
            pos.dy=pos.y;
            
            //헤더 내릴땐 숨기고 올릴땐 보이게
            if(el_header){//el_header가 있을때만
                if(pos.status=='down'){
                    el_header.classList.remove('active')
                }else{el_header.classList.add('active')}
            }
        };
        
        window.addEventListener('scroll',onscroll);
        
        const sections =document.querySelectorAll('section')
        const el_navBars=document.querySelectorAll(".ani")

        console.log(sections);
        

        let observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry,i)=>{
                if(entry.isIntersecting){
                    //setActive(entry.target.id);
                    const id=entry.target.id
                    el_navBars.forEach((el_navBar)=>{
                        el_navBar.classList.remove('active');

                        console.log(
                            el_navBar.getAttribute('href'),
                            `#${id}`
                        )

                        if(el_navBar.getAttribute('href')==`#${id}`){
                            el_navBar.classList.add('active')
                        }
                    })
                }
            })
        },{threshold:0.2})
    
        sections.forEach((section)=>{
            observer.observe(section)
        })

        return()=>{
            window.removeEventListener('scroll',onscroll);
            observer.disconnect();
        };
    },[]);

  return (
    <>
        <button
            className={`burger ${open ? 'open' : ''}`}
            onClick={()=>setOpen(!open)}
            >
            <span></span>
            <span></span>
            <span></span>
        </button>

        <ul  className={`navBar ${open ? 'open' : ''}`}>
            <li><a href='#skills' className={`ani ${active==='skills' ? 'active' : ''}`}
            onClick={(e)=>{
                e.preventDefault();
   
                setOpen(false);
                document.getElementById('skills').scrollIntoView({
                    behavior:"smooth"
                })
            }}>SKILLS</a></li>
            <li><a href='#projects' className={`ani ${active==='projects' ? 'active' : ''}`}
            onClick={(e)=>{
                e.preventDefault();
             
                setOpen(false);
                document.getElementById('projects').scrollIntoView({
                    behavior:"smooth"
                })
            }}>PROJECT</a></li>
            <li><a href='#contact' className={`ani ${active==='contact' ? 'active' : ''}`}
            onClick={(e)=>{
                e.preventDefault();
                
                setOpen(false);
                document.getElementById('contact').scrollIntoView({
                    behavior:"smooth"
                })
            }}>CONTACT</a></li>
        </ul>
    </>
  )
}

export default NavBar