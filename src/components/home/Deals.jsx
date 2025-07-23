import React from 'react';
import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';
import d4 from '../assets/d4.png';
import d5 from '../assets/d5.png';
import d6 from '../assets/d6.png';

import DealCard from '../utils/DealCard';
function ServicesHeading() {

    const DealsData = [
  {
    image: d1,
    
    heading: "Yogasana Workshop",
    title: "The Rusty Spur Saloon",
    location: "Gurugram, India",
  },
  {
    image: d2,
   
    heading: "Yogasana Workshop",
    title: "The Tranquil Haven Wellness",
    location: "Gurugram, India",
  },
  {
    image: d3,
    
    heading: "Yogasana Workshop",
    title: "The Revitalizing Embrace Therapy",
    location: "Gurugram, India",
  },
  {
    image: d4,
    
    heading: "Yogasana Workshop",
    title: "The Rusty Spur Saloon",
    location: "Gurugram, India",
  },
  {
    image: d5,
    
    heading: "Yogasana Workshop",
    title: "The Tranquil Haven Wellness",
    location: "Gurugram, India",
  },
  {
    image: d6,
   
    heading: "Yogasana Workshop",
    title: "The Revitalizing Embrace Therapy",
    location: "Gurugram, India",
  },
];

    return (
        

        <div className ="bg-[#F3F3F3]">
            <div className="relative w-[90%] mx-auto py-8 md:py-20">
                {/* Background Text */}
                <h2 className="absolute text-[40px] sm:text-[60px] md:text-[80px] lg:text-[140px] font-bold text-gray-200 uppercase left-0 top-1/2 -translate-y-1/2 select-none z-0 tracking-widest leading-none">
                    DEALS
                </h2>

                {/* Foreground Heading Row */}
                <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-black tracking-wider ml-0 sm:ml-[60px] md:ml-[100px]">
                       DEALS FOR YOU
                    </h3>

                    <div className="flex-1 w-full  sm:w-auto mx-0 sm:mx-4 h-[2px] bg-black/70 hidden sm:block"></div>

                    <button className="text-sm sm:pt-0 pt-4 sm:text-base text-[#BF6AE0]">
                        View all
                    </button>
                </div>
            </div>

            <div>
                <div className="md:w-[75%] w-[90%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-20 gap-6 md:pt-10 pt-4 md:pb-20 pb-6">
                    {DealsData.map((deal, idx) => (
                        <DealCard key={idx} {...deal} />
                    ))}
                </div>
            </div>

        </div>

    );
}

export default ServicesHeading;
