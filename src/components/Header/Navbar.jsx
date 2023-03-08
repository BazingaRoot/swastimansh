import React from "react";
import "../../style.css";
import logo1 from "../../assets/images/letter-s.png"

function Navbar() {

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      document.querySelector(".navbarcon").style.backgroundColor = "#008db9";
    } else {
      document.querySelector(".navbarcon").style.backgroundColor =
        "rgba(0, 0, 0, 0)";
      document.querySelector(".tl").style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
  }

  const handleClickScroll = (item) => {
      const element = document.getElementById(item);
      var headerOffset = 45;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      if (element) {
        
        window.scrollTo({ behavior: 'smooth', top: offsetPosition });
      }
    };

  return (
    <>
    <header aria-label="Site Header" className="bg-white dark:bg-gray-900 fixed width-100 z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600 dark:text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <img className='width-50 ast-img' src={logo1} alt="" />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Site Nav">
              <ul className="flex items-center gap-6 text-sm">
                <li onClick={() => handleClickScroll('about')}>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    About Me
                  </button>
                </li>

                <li onClick={() => handleClickScroll('projects')}>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Services
                  </button>
                </li>

                <li onClick={() => handleClickScroll('testi')}>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Testimonials
                  </button>
                </li>

                <li onClick={() => handleClickScroll('contact')}>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Contact Us
                  </button>
                </li>
                
                <li onClick={() => handleClickScroll('blog')}>
                  <button
                    className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                  >
                    Blog
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                  href="/"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}

export default Navbar;