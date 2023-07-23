import React from "react";
import logo from "./../images/logo.svg";
export default function Header() {

  const toggleButton = () => {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const hamburgerMenu = document.getElementById("hamburger-menu");
    hamburgerMenu.classList.toggle('hidden');
  }

  return (
    <React.Fragment>
      <div className='w-full flex justify-between sm:justify-normal px-5 sm:px-20'>
        <a className='logo' href='/'><img className="text-lg" src={logo} alt='logo img' /></a>
        <div className="nav-bar1 w-full hidden sm:flex sm:justify-center text-primary-gray">
            <nav className="font-poppins ml-2 flex-grow">
              <a className="mx-2 hover:text-black" href='/'>Feature</a>
              <a className="mx-2 hover:text-black" href='/'>Pricing</a>
              <a className="mx-2 hover:text-black" href='/'>Resources</a>
            </nav>
            <nav className='nav-item font-poppins '>
              <a className="mx-2 hover:text-black" href='/'>Login</a>
              <a className="mx-2 px-8 py-1 rounded-2xl hover:text-black text-white bg-primary-gray" href='/'>Sign Up</a>
            </nav>
        </div>
        <button id="hamburger-btn" class="text-3xl sm:hidden relative w-8 h-8 cursor-pointer" onClick={toggleButton}>
          <div className="bg-primary-gray h-1 w-8 rounded absolute top-4 -mt-0.5 transition-all duration-500 
                before:content-[''] before:h-1 before:w-8 before:absolute before:rounded 
                before:-translate-y-3 before:-translate-x-4 before:bg-primary-gray before:transition-all before:duration-500
                after:content-[''] after:h-1 after:w-8 after:absolute after:rounded after:translate-y-3 
                after:-translate-x-4 after:bg-primary-gray after:transition after:duration-500 ">
          </div>
        </button>
      </div>
      <section id="hamburger-menu" className="py-1 px-6 rounded-lg hidden origin-top animate-open-menu text-white z-10 absolute w-full">
        <div className="w-full bg-primary-darkViolet py-6 px-4 text-lg font-bold flex flex-col rounded-xl justify-center items-center gap-y-4">
            <nav className="font-poppins flex flex-col justify-center items-center gap-y-3">
              <a className="hover:text-black" href='/'>Feature</a>
              <a className="hover:text-black" href='/'>Pricing</a>
              <a className="hover:text-black" href='/'>Resources</a>
            </nav>
            <hr className="w-full border-b-0 border-solid border-primary-gray "></hr>
            <nav className='w-full font-poppins flex flex-col justify-center items-center gap-y-4'>
              <a className=" hover:text-black" href='/'>Login</a>
              <a className="px-24 py-2 self-center rounded-2xl hover:text-black text-white bg-primary-gray" href='/'>Sign Up</a>
            </nav>
        </div>
      </section>
    </React.Fragment>
  )
}