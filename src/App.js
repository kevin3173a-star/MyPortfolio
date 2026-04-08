import './App.scss';
import Stack from './comp/Stack';//4. Stack 연결
import stackData from './json/stack.json'//1. stackData로 json받아서
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import NavBar from './comp/NavBar';
import Project from './comp/Project';
import ProjectPopup from './comp/ProjectPopup';
import axios from 'axios'
import { useEffect } from 'react';
import { BrowserRouter as Router,Routes, Route, NavLink } from 'react-router-dom'
import Admin from './Admin';

function App() {
  async function handleSubmit(e) {
    e.preventDefault();
    let formdata = new FormData(e.target);
    let date = new Date();
    formdata.append('date', date);
    let obj = Object.fromEntries(formdata);
    let res = await axios.post(`${process.env.REACT_APP_APIURL}/contact`, obj);
    if (res.data.success) {
      alert('성공')
      e.target.reset();
    } else {
      alert('실패')
    }
  }

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`${process.env.REACT_APP_APIURL}/contact`);
      console.log(res.data)
    }
    getData();
  }, [])
  return (
    <>
      <div className="App" >

        {/* 상단 헤더 */}
        <div className='header'>
          <div className='headerLogo' onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }}><div className='hl1'>
              <p className='Developer'>
                <b>Dev</b>
                <p>eloper</p>
              </p>
              <div className='headerLogoPlus'>
                <p className='Design'>
                  <p>De</p>
                  <b>sign</b>
                </p>
                <p>+</p>
              </div>
            </div>
          </div>
          <nav>
            <NavBar />
          </nav>
        </div>

        {/* 컨텐츠 */}
        <div className='contents'>

          {/* 컨텐츠 - 인트로 */}
          <section className='intro' id="intro">
            <h1>PORTFOLIO</h1>
            <div className='introBox'>
              <div className='introTxt'>
                <div><p>안녕하세요.</p>저는 디자인과 개발 사이를<br />
                  이해하는 개발자 <b>손영재</b>입니다.
                </div>
                <div>
                  <p>저는 디자인과 개발을 따로 보지 않습니다. <br />
                    <b> 사용자가 경험하는 것은 하나의 흐름이기 때문입니다.</b>
                  </p>
                  <p>디자인은 의도를 만들고, 개발은 그것을 실제로 구현합니다.<br />
                    저는 단순히 코드만 치는 개발자가 아닌 <b>의도를 읽고 코드로 풀어내어</b><br />
                    <b> 그 사이를 이해하고 연결하는 개발자가 되고자 합니다.</b>
                  </p>
                </div>
                <div className='introTxtKeyWord'>
                  <span>#집요함</span>
                  <span>#문제해결</span>
                  <span>#열정적인</span>
                  <span>#섬세함</span>
                </div>
              </div>
              <div className='introLogo'>
                <p className='Developer'>
                  <p>
                    <b>Dev</b>eloper
                  </p>
                </p>
                <div className='introLogoPlus'>
                  <p className='Design'>
                    <p>
                      De<b>sign</b>
                    </p>
                  </p>
                  <p>+</p>
                </div>
                <p className='devsign'>
                  <p>
                    <b>Devsign</b>
                  </p>
                </p>
              </div>
            </div>
            <div className='introUnder'></div>
          </section>

          {/* 컨텐츠 - 스킬 */}
          <section className='skills' id='skills'>
            <div className='skillsBox'>
              <h1>SKILLS</h1>
              {/* 핵심 역량 */}
              <div className='skillsCores'>
                <div className='skillsCore'>
                  <div className='skillsCoreImgT1'>
                    <p className='SKC1'></p>
                  </div>
                  <div className='skillsCoreTxt'>
                    <p>UX/UI 관점에서의 문제해결 능력</p>
                    <span>
                      저는 단순히 UX/UI 디자인을 넘어 사용자의 관점에서
                      어떻게 해야 그들이 덜 불편할까 등의 사용성을 고려하고
                      그들이 겪는 문제점들을 Persona, User Journey Map,
                      User Flow Chart를 통해 정확히 분석하여 해결하고자 합니다.
                    </span>
                  </div>
                </div>
                <div className='skillsCore'>
                  <div className='skillsCoreImgT2'>
                    <p className='SKC2'></p>
                  </div>
                  <div className='skillsCoreTxt'>
                    <p>다양한 프론트엔드 개발 경험</p>
                    <span>
                      Javascript,jQuery,React 등 다양한 언어를 통한
                      화면 구현 경험이 있으며 특히 React Library를 통해
                      다양한 상황에 대응이 가능합니다.
                    </span>
                  </div>
                </div>
                <div className='skillsCore'>
                  <div className='skillsCoreImgT2'>
                    <p className='SKC3'></p>
                  </div>
                  <div className='skillsCoreTxt'>
                    <p>백엔드의 관점에서의 이해</p>
                    <span>
                      Node.js 기반으로 서버를 설계,구축하고
                      MongoDB를 통해 데이터를 저장 및 관리하며
                      이를 다양한 인터페이스에서 활용한 경험이 있습니다.
                    </span>
                  </div>
                </div>
              </div>
              {/* 기술 스택 */}
              <div className='skillsStack'>
                <div className='skillsStackCont'>
                  <p>기술 스택</p>
                  <div className='stacks'>
                    <div className='stack'>
                      <p>많이 다뤄봤다</p>
                      <Stack item={stackData.A} />
                      {/* 2. Stack컴포넌트로 대체 */}
                      {/* 3. stackData의 각각의 데이터에 접근해서 item으로 보내줌 */}

                    </div>
                    <div className='stack'>
                      <p>조금 다뤄봤다</p>
                      <Stack item={stackData.B} />

                    </div>
                    <div className='stack'>
                      <p>경험만 해본 수준</p>
                      <Stack item={stackData.C} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 컨텐츠 - 프로젝트 */}
          <section className='projects' id='projects'>
            <div className='projectsBox'>
              <h1>PROJECT</h1>

              <Project />

            </div>
          </section>

          {/* 컨텐츠 - 컨택트 */}
          <section className='contact' id='contact'>
            <div className='contactTop'></div>
            <div className='contactBox'>
              <h1>CONTACT</h1>
              <div className='contactCont'>
                <div className='contactTxt'>
                  <p>흥미롭게 보셨다면 아래를 통해 연락해주세요!</p>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className='contactForm'>
                    <TextField
                      id='outlined-basic'
                      variant='filled'
                      label="제목"
                      name="title"
                    />
                    <TextField
                      id='outlined-basic'
                      variant='filled'
                      label="이메일(연락처)"
                      name="email"
                    />
                    <TextField
                      id='outlined-basic'
                      variant='filled'
                      label="내용"
                      name="msg"

                    //multiline 
                    //minRows={6} maxRows={8} 
                    //fullWidth
                    />
                    <button>보내기</button>
                  </div>
                </form>
                <div className='contactTelEmail'>
                  <p>kevin3173@naver.com</p>
                  <Divider orientation="vertical" flexItem />
                  <p>010-7551-6933</p>
                </div>
                <div className='contactLink'>
                  <div>
                    <a href='https://github.com/' target="_blank">
                      <img src='/images/contactLink/github.png'></img>
                    </a>
                    <a>
                      <img src='/images/contactLink/kakaoTalk.png'></img>
                    </a>
                    <a>
                      <img src='/images/contactLink/blog.png'></img>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>


        </div>
      </div>
      <Router>
          <Routes>
            <Route path='/admin' element={<Admin/>} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
