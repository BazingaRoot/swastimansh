import React from 'react'
// import logo from "../assets/images/astronout.png"
// import logo1 from "../assets/images/astronout1.png"
import bg from "../../assets/images/homelander.jpg"
import Navbar from './Navbar'
// import "../styles.css"

function Header() {
  return (
   <>
   
   <div id='home'
    style={{backgroundImage: `url(${bg})`}}
    className=' bg-center bg-cover bg-no-repeat h-screen flex flex-col '>
    <Navbar/>
    {/* <div className="wrapper flex justify-between items-center h-screen w-full px-4 lg:px-20 lg:justify-center lg:px-6">
      <div className="content lg:text-center">
        <div className="btn py-3">
          <button  className=' border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl'>Welcome</button>
        </div>
        <h1 className='text-white text-5xl font-bold'>Hi!</h1>
        
        <p className='text-white py-4 max-w-lg '>Lorem ipsum dolor tiae ullam. Saepe voluptatum ducimus adipisci pariatur. adipisicing elit.  In qui impedit ipsum dolor sit amet consectetur</p>
        <button className='  text-white text-2xl'> Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i> </button>
      </div>
   
    </div> */}
    <section class=" text-white">
  <div
    class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center"
  >
    <div class="mx-auto max-w-3xl text-center">
      <h1
        class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl"
      >
        Understand User Flow.

        <span class="sm:block"> Increase Conversion. </span>
      </h1>

      <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap justify-center gap-4">
        <a
          class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
          href="/get-started"
        >
          Get Started
        </a>

        <a
          class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
          href="/about"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>

   </div>
   </>
  )
}

export default Header