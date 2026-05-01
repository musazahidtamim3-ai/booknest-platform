import React from 'react';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { BsCollectionFill } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { FaMobileScreenButton } from 'react-icons/fa6';

const WhyChoosePage = () => {
     return (
          <div className='max-w-7xl mx-auto my-10 px-5 lg:px-0'>
               <h1 className='text-[#4F46E5] flex items-center gap-2'>Why Choose Booknest</h1>
               <h1 className='text-3xl font-semibold pt-3'>Your Reading Journey, Simplified</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-5'>
                    <div className="flex items-center gap-6 bg-white border border-gray-200 shadow-md p-3 rounded-md">
                         <div className='bg-purple-100 rounded-full p-4'>
                              <BsCollectionFill className='text-purple-600 w-6 h-6'/>
                         </div>
                         <div>
                              <h1 className='text-purple-600'>Vast Collection</h1>
                              <p className='text-sm text-gray-400'>Thousands of books across diverse genres and topics</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-5 bg-white border border-gray-200 shadow-md p-3 rounded-md">
                         <div className='bg-green-100 rounded-full p-4'>
                              <AiFillSafetyCertificate className='text-green-600 w-6 h-6'/>
                         </div>
                         <div>
                              <h1 className='text-green-600'>Sequre and Safe</h1>
                              <p className='text-sm text-gray-400'>Your data and privacy are always protected with us.</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-5 bg-white border border-gray-200 shadow-md p-3 rounded-md">
                         <div className='bg-yellow-100 rounded-full p-4'>
                              <FaClock className='text-yellow-600 w-6 h-6'/>
                         </div>
                         <div>
                              <h1 className='text-yellow-600'>Easy Borrowing</h1> 
                              <p className='text-sm text-gray-400'>Borrow books digitally in just a few clicks</p>
                         </div>
                    </div>
                    <div className="flex items-center gap-6 bg-white border border-gray-200 shadow-md p-3 rounded-md">
                         <div className='bg-blue-100 rounded-full p-4'>
                              <FaMobileScreenButton className='text-[#464fE5] w-6 h-6'/>
                         </div>
                         <div>
                              <h1 className='text-blue-600'>Read Anywhere</h1>
                              <p className='text-sm text-gray-400'>Access your books anytime, anywhere, on any device.</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default WhyChoosePage;