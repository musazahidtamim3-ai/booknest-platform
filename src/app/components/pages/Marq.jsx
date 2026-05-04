import React from 'react';
import Marquee from 'react-fast-marquee';
import { BiSolidParty } from 'react-icons/bi';
import { PiShootingStarFill } from 'react-icons/pi';

const MaequeePage = () => {
     return (
          <div className='px-5 lg:px-0'>
               <div className="bg-black/80 py-2 px-1 lg:px-3 max-w-7xl mx-auto my-5 rounded-md flex gap-1 ">

                    
                    <Marquee pauseOnHover='true'>
                         <p className="flex gap-2 text-yellow-500 items-center pr-5"><PiShootingStarFill /> New Arrivals:</p>
                         <p className="text-white flex gap-5 pr-5 ">The Alchemist</p>
                         <div className="bg-white h-4 w-0.5 mr-5"></div>
                         <p className="text-white flex gap-5 pr-5">A Brief History of Time</p>
                         <div className="bg-white h-4 w-0.5 mr-5"></div>
                         <p className="text-white flex gap-5 pr-5">Eloquent JavaScript</p>
                         <div className="bg-white h-4 w-0.5 mr-5"></div>
                         <p className="text-white flex gap-5 pr-5">To Kill a Mockingbird</p>
                         <div className="bg-white h-4 w-0.5 mr-5"></div>
                         <p className="flex gap-2 text-yellow-500 items-center">special Discount on Memberships-<span className="flex items-center gap-2 text-lg pr-20">30% Off! <BiSolidParty /></span></p>
                    </Marquee>
                    
               </div>
          </div>
     );
};

export default MaequeePage;