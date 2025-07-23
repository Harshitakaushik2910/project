



// import React from "react";
// import bgImageHero from "../assets/bgImageHero.png";
// import image_icon from "../assets/image_icon.png";
// import Logo from "../assets/white_logo.png";
// import { ChevronDownIcon, MapPinIcon, MagnifyingGlassIcon } from '@heroicons/react/24/solid';

// function Home() {
//   return (
//     <div className="relative min-h-screen overflow-hidden">
//       {/* Main background */}
//       <div
//         className="absolute inset-0 bg-cover rounded-xl bg-center z-0"
//         style={{ backgroundImage: `url(${bgImageHero})` }}
//       ></div>

//       {/* Navigation Bar */}
//       <div className="relative z-10 w-[90%] mx-auto pt-4">
//         <div className="bg-[#2C223A] text-white rounded-xl px-6 py-3 flex items-center shadow-lg w-full justify-between">
//           <div className="flex items-center gap-3">
//             <img src={Logo} alt="Logo" className="w-[150px] h-[30px]" />
//           </div>
//           <div className="flex items-center gap-8 text-sm">
//             <a href="#">Home</a>
//             <div className="flex items-center gap-1 cursor-pointer">
//               <span>Discover services</span>
//               <ChevronDownIcon className="h-4 w-4" />
//             </div>
//             <a href="#">Deals & offers</a>
//             <a href="#">Contact</a>
//           </div>
//           <div className="flex items-center gap-1 text-sm">
//             <MapPinIcon className="h-5 w-5 text-white" />
//             <span>Gurugram, India</span>
//           </div>
//         </div>
//       </div>

//       {/* Hero Section */}
//       <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-4">
//         {/* Image background - positioned to end before the text section */}
//         <div className="absolute inset-0 flex items-end">
//           <div 
//             className="w-full h-[60%] bg-contain bg-no-repeat bg-bottom"
//             style={{ 
//               backgroundImage: `url(${image_icon})`,
//               backgroundSize: 'contain'
//             }}
//           ></div>
//         </div>
        
//         {/* Content overlay */}
//         <div className="relative md:w-[80%] w-full mx-auto z-20 text-center w-full  mx-auto">
//           <span className="inline-block text-sm bg-white/30 rounded-full text-[#BF6AE0] px-4 py-1 mb-6">
//             Trusted by 2000+ women
//           </span>
          
//           <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 mt-8">
//             WE KNOW WHAT YOU NEED
//           </h1>
          
//           <p className="text-xl w-[60%] mx-auto text-right  text-[#BF6AE0] mb-8  italic">
//             - and we've got you covered!
//           </p>
          
//           <p className="text-lg text-gray-700 mb-10 px-4">
//             From therapy to nutrition to coaching — discover services from trusted businesses, 
//             built around your life
//           </p>
          
//           {/* Search Bar */}
//           <div className="relative  mx-auto md:w-[70%] w-[80%] bg-white rounded-full shadow-lg">
//             <div className="flex items-center px-6 py-3">
//               <MagnifyingGlassIcon className="h-5 w-5 text-gray-500 mr-2" />
//               <input 
//                 type="text" 
//                 placeholder="Search services" 
//                 className="flex-grow outline-none text-gray-800 bg-transparent"
//               />
//               <div className="flex items-center gap-1 text-gray-500 border-l border-gray-300 pl-3 ml-3">
//                 <MapPinIcon className="h-5 w-5" />
//                 <span>Gurugram, India</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useState } from "react";
import bgImageHero from "../assets/bgImageHero.png";
import image_icon from "../assets/image_icon.png";
import Logo from "../assets/white_logo.png";
import { ChevronDownIcon, MapPinIcon, MagnifyingGlassIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="relative min-h-[70vh] overflow-hidden">
      {/* Main background */}
      <div
        className="absolute inset-0 bg-cover rounded-xl bg-center z-0"
        style={{ backgroundImage: `url(${bgImageHero})` }}
      ></div>

      {/* Navigation Bar - Responsive with mobile menu */}
      <div className="relative z-10 w-[90%] mx-auto pt-4">
        <div className="bg-[#2C223A] text-white rounded-xl px-4 sm:px-6 py-3 flex flex-col md:flex-row items-center shadow-lg w-full justify-between gap-4 md:gap-0">
          {/* Logo and mobile menu button */}
          <div className="flex items-center justify-between w-full md:w-auto">
            <img src={Logo} alt="Logo" className="w-[120px] sm:w-[150px] h-[24px] sm:h-[30px]" />
            {/* Mobile menu toggle button - visible below md breakpoint */}
            <button 
              className="md:hidden p-1"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Navigation links - hidden on mobile when menu is closed */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row items-center gap-4 sm:gap-8 text-xs sm:text-sm w-full md:w-auto mt-4 md:mt-0`}>
            <a href="#top" className="hover:text-[#BF6AE0] transition w-full md:w-auto text-center py-2 md:py-0">Home</a>
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#BF6AE0] transition w-full md:w-auto justify-center py-2 md:py-0">
              <a href="#Service">Discover services</a>
              <ChevronDownIcon className="h-3 w-3 sm:h-4 sm:w-4" />
            </div>
            <a href="#Deals" className="hover:text-[#BF6AE0] transition w-full md:w-auto text-center py-2 md:py-0">Deals & offers</a>
            <a href="#Contact" className="hover:text-[#BF6AE0] transition w-full md:w-auto text-center py-2 md:py-0">Contact</a>
          </div>

          {/* Location - hidden on mobile when menu is closed */}
          <div className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex items-center gap-1 text-xs sm:text-sm w-full md:w-auto justify-center py-2 md:py-0`}>
            <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            <span>Gurugram, India</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 flex items-center justify-center min-h-[70vh] px-4">
        {/* Image background */}
        <div className="absolute inset-0 flex items-end">
          <div 
            className="w-full h-[50%] sm:h-[60%] bg-contain bg-no-repeat bg-bottom"
            style={{ 
              backgroundImage: `url(${image_icon})`,
              backgroundSize: 'contain'
            }}
          ></div>
        </div>
        
        {/* Content overlay */}
        <div className="relative w-full md:w-[80%] mx-auto z-20 text-center">
          <span className="inline-block text-xs sm:text-sm bg-white/30 rounded-full text-[#BF6AE0] px-3 sm:px-4 py-1 mb-4 sm:mb-6">
            Trusted by 2000+ women
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 mt-6 sm:mt-8 px-2">
            WE KNOW WHAT YOU NEED
          </h1>
          
          <p className="text-base sm:text-xl w-full md:w-[60%] mx-auto text-right text-[#BF6AE0] mb-6 sm:mb-8 italic">
            - and we've got you covered!
          </p>
          
          <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-8 sm:mb-10 px-2 sm:px-4">
            From therapy to nutrition to coaching — discover services from trusted businesses, 
            built around your life
          </p>
          
          {/* Search Bar */}
          <div className="relative mx-auto w-full sm:w-[90%] md:w-[70%] bg-white rounded-full shadow-lg">
            <div className="flex items-center px-4 sm:px-6 py-2 sm:py-3">
              <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5 text-gray-500 mr-1 sm:mr-2" />
              <input 
                type="text" 
                placeholder="Search services" 
                className="flex-grow outline-none text-gray-800 bg-transparent text-xs sm:text-base"
              />
              <div className="flex items-center gap-1 text-gray-500 border-l border-gray-300 pl-2 sm:pl-3 ml-2 sm:ml-3">
                <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm">Gurugram, India</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
