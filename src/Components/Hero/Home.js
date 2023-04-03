import React from 'react'
import "./Home.css"
import hero from '../../images/hero.png'
import skill1 from '../../images/skill1.png'
import skill2 from '../../images/skill2.png'
import skill3 from '../../images/skill3.png'
import { Typewriter } from "react-simple-typewriter"
const Home = () => {


  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }

    return (
      <>
        <section className='hero' id='home'>
          <div className='container f_flex top'>
            <div className='left top'>
              <h3>WELCOME TO MY PORTFOLIO</h3>
              <h1>
                Hi, I’m <span>Carlos Soria</span>
              </h1>
              <h2>
                <span>
                  <Typewriter words={[" Software Engineer.", " Front End Developer."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                </span>
              </h2>
  
              <p>A passionate developer in Cuenca, Ecuador.</p>
  
              <div className='hero_btn d_flex'>
                <div className='col_3'>
                  <h4>FIND WITH ME</h4>
                  <div className='button'>
                    <button  className='btn_shadow'
                    onClick={() => openInNewTab('https://github.com/caeduardo99')}>
                    <i class="fab fa-github"></i>
                    </button>
                    <button className='btn_shadow'
                    onClick={() => openInNewTab('https://www.instagram.com/_itseduu/')}>
                      <i class='fab fa-instagram'></i>
                    </button>
                    <button className='btn_shadow'
                    onClick={() => openInNewTab('https://www.linkedin.com/in/carlos-soria-420398212/')}>
                      <i class='fab fa-linkedin-in'></i>
                    </button>
                  </div>
                </div>
                <div className='col_3'>
                  <h4>BEST SKILL ON</h4>
                  <button className='btn_shadow'>
                    <img src={skill1} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={skill2} alt='' />
                  </button>
                  <button className='btn_shadow'>
                    <img src={skill3} alt='' />
                  </button>
                </div>
              </div>
            </div>
            <div className='right'>
              <div className='right_img'>
                {/* <img src={hero} alt='' /> */}
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

export default Home

