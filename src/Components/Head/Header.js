import React , {useState} from 'react'

import '../../Components/Head/Header.css'
import logo from '../../images/logo1.png'


const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
  }
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <h3>Carlos.dev</h3>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
  
              <li>
                <a href='#home'>home</a>
              </li>
              <li>
                <a href='#resume'>resume</a>
              </li>
              <li>
                <button className='home-btn'
                onClick={() => openInNewTab('https://api.whatsapp.com/send?phone=593969034831')}
                ><i class="fab fa-whatsapp"></i> CONTACT</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
