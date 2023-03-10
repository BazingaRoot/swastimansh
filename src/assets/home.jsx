import React from 'react'
import Header from "../components/Header"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import Testimonials from "../components/Testimonials"
import About from "../components/About"

function Home() {
  return (
    <>
     <Header/>
     <About />
     <Projects/>
     <Testimonials />
     <Contact/>
     <Footer/>
    </>
  )
}

export default Home