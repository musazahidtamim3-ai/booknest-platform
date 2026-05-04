import Image from 'next/image';
import React from 'react';
import { GrTechnology } from 'react-icons/gr';
import { MdScience } from 'react-icons/md';
import { RiChatHistoryFill } from 'react-icons/ri';

const PopularPage = () => {
     return (
          <div className='max-w-7xl mx-auto my-10 px-5 lg:px-0'>
               <h1 className='text-[#4F46E5] flex items-center gap-2'> Popular Categories</h1>
               <h1 className='text-3xl font-semibold pt-3'>Explore Books by Categories</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5'>
                    <div className='h-50 relative rounded-md hover:scale-102'>
                         <Image height={20} width={500} className='w-full h-full rounded-md acsolute inset-0' src='/science.jpg' alt=''></Image>
                         <div className='bg-black/50 rounded-md absolute inset-0'></div>
                         <div className='absolute top-1/4 left-5'>
                              <div className='bg-green-500 h-12 w-12 rounded-full flex justify-center items-center'>
                                   <MdScience className='text-white w-8 h-8' />
                              </div>
                              <h1 className='text-white text-xl mt-3'>Science</h1>
                              <p className='text-white/70'>1,320 Books</p>
                         </div>
                    </div>
                    <div className='h-50 relative rounded-md hover:scale-102'>
                         <Image height={20} width={500} className='w-full h-full rounded-md acsolute inset-0' src='/tech.avif' alt=''></Image>
                         <div className='bg-black/70 rounded-md absolute inset-0'></div>
                         <div className='absolute top-1/4 left-5'>
                              <div className='bg-purple-500 h-12 w-12 rounded-full flex justify-center items-center'>
                                   <GrTechnology  className='text-white w-8 h-8' />
                              </div>
                              <h1 className='text-white text-xl mt-3'>Technology</h1>
                              <p className='text-white/70'>1,100 Books</p>
                         </div>
                    </div>
                    <div className='h-50 relative rounded-md hover:scale-102'>
                         <Image height={20} width={500} className='w-full h-full rounded-md acsolute inset-0' src='/stories.webp' alt=''></Image>
                         <div className='bg-black/50 rounded-md absolute inset-0'></div>
                         <div className='absolute top-1/4 left-5'>
                              <div className='bg-red-500 h-12 w-12 rounded-full flex justify-center items-center'>
                                   <RiChatHistoryFill className='text-white w-8 h-8' />
                              </div>
                              <h1 className='text-white text-xl mt-3'>Story</h1>
                              <p className='text-white/70'>1,650 Books</p>
                         </div>
                    </div>
               </div>

          </div>
     );
};

export default PopularPage;