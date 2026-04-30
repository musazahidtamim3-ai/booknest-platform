import React from 'react';
import Marquee from 'react-fast-marquee';
import { BiSolidParty } from 'react-icons/bi';
import { PiShootingStarFill } from 'react-icons/pi';

const MaequeePage = () => {
     return (
          <div className="bg-blue-950 py-2 px-3 max-w-7xl mx-auto my-5 rounded-full flex gap-1 ">

               <p className="btn bg-blue-950 rounded-full border-none shadow-none w-40 flex gap-2 text-yellow-500 items-center"><PiShootingStarFill /> New Arrivals:</p>
               <Marquee pauseOnHover='true'>
                    <p className="text-white flex gap-5 pr-5 ">The Silent Echo</p>
                    <div className="bg-white h-4 w-0.5 mr-5"></div>
                    <p className="text-white flex gap-5 pr-5">Quantum Horizon</p>
                    <div className="bg-white h-4 w-0.5 mr-5"></div>
                    <p className="text-white flex gap-5 pr-5">Beyond the Nebula</p>
                    <div className="bg-white h-4 w-0.5 mr-5"></div>
                    <p className="text-white flex gap-5 pr-5">The Alchemist's Shadow</p>
                    <div className="bg-white h-4 w-0.5 mr-5"></div>
               </Marquee>
               <p className="btn flex gap-2 bg-blue-950 rounded-full border-none shadow-none text-yellow-500 items-center">special Discount on Memberships-<span className="flex items-center gap-2 text-lg">30% Off! <BiSolidParty /></span></p>
          </div>
     );
};

export default MaequeePage;