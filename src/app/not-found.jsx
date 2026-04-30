import Image from 'next/image';
import React from 'react';
import { FaHome } from 'react-icons/fa';

const notFoundPage = () => {
     return (
          <div className='flex items-center justify-center flex-col h-screen'>
               <Image height={200} width={200} src='/404.jpg' alt=''></Image>
               <h1 className='text-3xl text-[#464FE5] pt-5'>Oops! Page not found</h1>
               <p className='text-gray-400 max-w-80 pt-3 mx-auto text-center'>It seems the page you are looking for does not exist or has moved</p>
               <button className='btn mt-5 bg-[#4F46E5] text-white'><FaHome />Go Back home</button>
          </div>
     );
};

export default notFoundPage;