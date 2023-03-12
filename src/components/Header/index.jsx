import React from 'react'
// import logo from "../assets/images/astronout.png"
// import logo1 from "../assets/images/astronout1.png"
import bg from "../../assets/images/homelander.jpg"
import Navbar from './Navbar'
import { handleClickScroll } from './../../utils'
// import "../styles.css"

function Header() {
  return (
   <>
   
   <div id='home'
    style={{backgroundImage: `url(${bg})`}}
    className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    <section className=" text-white">
  <div
    className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div className="mx-auto max-w-3xl text-center">
      <h1
        className="bg-gradient-to-r from-green-300 to-blue-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Get Back to Your Active Lifestyle.

        {/* <span className="sm:block"> Increase Conversion. </span> */}
      </h1>

      <p className="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Providing personalized care and effective treatments for injury rehabilitation, pain management, and improved physical performance.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <a
          onClick={() => handleClickScroll('contact')}
          className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
        >
          Get Appointment
        </a>
        <button data-modal-target="small-modal" data-modal-toggle="small-modal"
          className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          type="button">
          Free Consultations
        </button>
      </div>
      
    </div>
  </div>
</section>

   </div>
   </>
  )
}

export default Header