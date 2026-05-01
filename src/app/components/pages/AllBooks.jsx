'use client'
import React, { useState } from 'react';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';


const AllBooks = ({ books }) => {
     const [searchValue, setSearchValue] = useState('')

     const [active, setActive] = useState("all")
     
     const displayedBooks = books.filter(book => {
          const matchedCategory = active === "all" ||
               (active === "story" && book.category === "Story") ||
               (active === "science" && book.category === "Science") ||
               (active === "tech" && book.category === "Tech");
          
          const matchedSeacrh = book.title.toLowerCase().includes(searchValue.toLowerCase())
          return matchedCategory && matchedSeacrh;
     })

     return (
          <div>
                    <label className="input mt-10 mb-5 w-full">
                         <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                              <g
                                   strokeLinejoin="round"
                                   strokeLinecap="round"
                                   strokeWidth="2.5"
                                   fill="none" stroke="currentColor"
                              >
                                   <circle cx="11" cy="11" r="8"></circle>
                                   <path d="m21 21-4.3-4.3"></path>
                              </g>
                         </svg>
                         <input onChange={(e) => setSearchValue(e.target.value)} type="search" required placeholder="Search books by title..." />
                    </label>
               <div className='grid grid-cols-12 gap-5'>
                    <div className='col-span-3 flex flex-col mt-3'>
                         <button onClick={()=>setActive('all')} className={` mt-3 ${active === "all" ? 'btn btn-primary' : 'btn'}`}>All</button>
                         <button onClick={()=>setActive('story')} className={` mt-3 ${active === "story" ? 'btn btn-primary' : 'btn'}`}>Stories</button>
                         <button onClick={()=>setActive('science')} className={` mt-3 ${active === "science" ? 'btn btn-primary' : 'btn'}`}>Science</button>
                         <button onClick={()=>setActive('tech')} className={` mt-3 ${active === "tech" ? 'btn btn-primary' : 'btn'}`}>Technologies</button>
                    </div>
                    <div className='grid grid-cols-3 gap-5 col-span-9'>
                         {
                              displayedBooks.length>0? (displayedBooks.map(book => (
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
                              ))):<p>No books found</p>
                         }
                    </div>
               </div>
          </div>
     );
};

export default AllBooks;