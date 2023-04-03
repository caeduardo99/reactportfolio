import React from 'react'
import Header from './Components/Head/Header'
import Home from './Components/Hero/Home'
import Features from './Components/Features/Features';
import Resume from './Components/Resume/Resume';
import "./App.css";

const App = () => {
  return (
    <>
    <Header />
      <Home />

      {/* <Portfolio /> */}
      <Resume />
      {/* <Testimonial />
      <Blog />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App