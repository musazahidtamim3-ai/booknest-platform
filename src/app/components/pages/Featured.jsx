import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaBook, FaStar } from 'react-icons/fa';

const Featured = async() => {
     const res = await fetch('http://localhost:3000/data.json')
     const books = await res.json()
     return (
          <div className='max-w-7xl mx-auto my-10'>
               <h1 className='text-[#4F46E5] flex items-center gap-2'><FaBook></FaBook> Featured Books</h1> 
               <h1 className='text-3xl font-semibold pt-3'>Top Picks for You</h1>
               <div className='grid grid-cols-4 gap-5'>
                    {
                         books.slice(0,4).map(book => (
                              <div key={book.id} className='bg-white border border-gray-200 shadow-md p-5 my-5 rounded-md'>
                                   <div className='bg-gray-100 h-40 flex justify-center items-center'>
                                        <Image height={100} width={100} className='h-30 object-contain rounded-lg' src={book.image_url} alt=''></Image>
                                   </div>
                                   <h1 className='text-xl pt-5'>{book.title}</h1>
                                   <p className='text-sm text-gray-400'>{book.author}</p>
                                   <p className='badge rounded-full my-3 bg-[#e0dffc] text-[#4F46E5]'>{book.category}</p>
                                   <div className='flex gap-2 items-center'>
                                        <p className='text-yellow-500 flex gap-1 items-center'><FaStar className='pb-1'/> {book.rating}</p>
                                        <p className='text-gray-400'>( {book.reviews_count} )</p>
                                   </div>
                                   <Link href={`/books/${book.id}`}><button className='btn w-full bg-[#464fE5] text-white mt-5 hover:scale-102 hover:bg-white hover:text-[#464FE5] hover:border hover:border-[#464FE5]'>View Details <FaArrowRight></FaArrowRight> </button></Link>
                              </div>
                         ))
                    }
               </div>
          </div>
     );
};

export default Featured;