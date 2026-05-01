import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowRight, FaBook, FaSearch, FaStar } from 'react-icons/fa';

const AllBooksPage = async() => {
     const res = await fetch('http://localhost:3000/data.json')
     const books = await res.json()
     return (
          <div className='max-w-7xl mx-auto my-10'>
               <div className='text-center'>
                    <h1 className='text-3xl font-semibold pt-3'>All Books</h1>
                    <p className='text-gray-500'>Browse our collections of amazing books</p>
               </div>
               <div className='mt-10 mb-5 grid grid-cols-12 gap-3'>
                    <label className="input col-span-10 w-full">
                         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <g
                                   strokeLinejoin="round"
                                   strokeLinecap="round"
                                   strokeWidth="2.5"
                                   fill="none"
                                   stroke="currentColor"
                              >
                                   <circle cx="11" cy="11" r="8"></circle>
                                   <path d="m21 21-4.3-4.3"></path>
                              </g>
                         </svg>
                         <input type="search" required placeholder="Search books by title..." />
                    </label>
                    <button className='btn btn-primary col-span-2'><FaSearch/> Search</button>
               </div>
               <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3 flex flex-col mt-3'>
                         <button className="btn mt-3">All</button>
                         <button className="btn mt-3">Stories</button>
                         <button className="btn mt-3">Science</button>
                         <button className="btn mt-3">Technologies</button>
                    </div>
                    <div className='grid grid-cols-3 gap-5 col-span-9'>
                         {
                              books.map(book => (
                                   <div key={book.id} className='bg-white border border-gray-200 shadow-md p-5 my-5 rounded-md'>
                                        <div className='bg-gray-100 h-40 flex justify-center items-center'>
                                             <Image height={100} width={100} className='h-30 object-contain rounded-lg' src={book.image_url} alt=''></Image>
                                        </div>
                                        <h1 className='text-xl pt-5 flex-1'>{book.title}</h1>
                                        <p className='text-sm text-gray-400'>{book.author}</p>
                                        <p className={`badge ${book.category === "Story" ? 'bg-red-50 text-red-500 border-red-500' : book.category === 'Tech' ? 'bg-purple-50 text-purple-500 border-purple-500' : 'bg-green-50 text-green-500 border-green-500'} rounded-full my-2`}>{book.category}</p>
                                        <div className='flex gap-2 items-center'>
                                             <p className='text-yellow-500 flex gap-1 items-center'><FaStar className='pb-1' /> {book.rating}</p>
                                             <p className='text-gray-400'>( {book.reviews_count} )</p>
                                        </div>
                                        <Link href={`/books/${book.id}`}><button className='btn w-full bg-[#464fE5] text-white mt-5 hover:scale-102 hover:bg-white hover:text-[#464FE5] hover:border hover:border-[#464FE5]'>View Details <FaArrowRight></FaArrowRight> </button></Link>
                                   </div>
                              ))
                         }
                    </div>
               </div>
          </div>
     );
};

export default AllBooksPage;