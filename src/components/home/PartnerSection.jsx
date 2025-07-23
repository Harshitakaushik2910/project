import React from 'react'
import first from '../assets/p1.png'
import second from '../assets/p2.png'
import third from '../assets/p3.png'

function PartnerSection() {
    return (

        <div className='md:py-20 py-6 rounded-t-3xl bg-[#F3F3F3]'>
            <div className='w-[90%] mx-auto py-8'>
            <div className='flex md:flex-row flex-col gap-6 items-center'>
                {/* Card 1 */}
                <div className='md:w-[40%] w-full h-[220px] rounded-xl overflow-hidden shadow-md'>
                    <img
                        src={first}
                        alt="Partner 1"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Card 2 */}
                <div className='md:w-[30%] w-full h-[220px] rounded-xl overflow-hidden shadow-md'>
                    <img
                        src={second}
                        alt="Partner 2"
                        className="w-full h-full object-cover object-top"
                    />
                </div>

                {/* Card 3 */}
                <div className='md:w-[30%] w-full h-[220px] rounded-xl overflow-hidden shadow-md'>
                    <img
                        src={third}
                        alt="Partner 3"
                        className="w-full h-full object-cover object-top"
                    />
                </div>
            </div>
        </div>

        </div>
        
    )
}

export default PartnerSection
