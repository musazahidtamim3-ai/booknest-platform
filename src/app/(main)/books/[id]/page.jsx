import Borrow from '@/app/components/pages/Borrow';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const bookDetailsPage = async({ params }) => {
     const {id} = await params
     const res = await fetch(`https://booknest-platform.vercel.app/data.json`)
     const books = await res.json()
     const book = books.find(b => b.id.toString() === id)
     console.log(book)
     return (
          <div className='px-5 lg:px-0'>
               <div className='grid grid-cols-1 lg:grid-cols-12 bg-white border p-5 my-10 max-w-7xl mx-auto border-gray-200 rounded-md gap-5 lg:gap-20 shadow-md'>
                    <div className='bg-gray-100 rounded-lg justify-center items-center flex col-span-1 p-10 md:col-span-5 w-full'>
                         <Image src={book.image_url} alt='' className='w-full max-w-75 h-auto object-contain' height={500} width={100} />
                    </div>
                    <div className='col-span-1 lg:col-span-7'>
                         <h1 className='text-3xl font-semibold'> {book.title}</h1>
                         <p className='text-xl text-gray-500 pt-2'>Author's name : {book.author}</p>
                         <p className={`badge ${book.category === "Story" ? 'bg-red-50 text-red-500 border-red-500' : book.category === 'Tech' ? 'bg-purple-50 text-purple-500 border-purple-500' : 'bg-green-50 text-green-500 border-green-500'} rounded-full mt-5`}>{book.category}</p>
                         <p className='text-blue-500 pt-3'>Description :</p>
                         <p className='text-gray-400 pt-3 text-justify'>{book.description}</p>
                         <div className='flex items-center gap-3 pt-5'>
                              <p className='text-blue-500'>Available Quantity :</p>
                              <p className='text-gray-400'>{book.available_quantity} copies left</p>
                         </div>
                         <Borrow book={book} />
                    </div>
               </div>
          </div>
     );
};

export default bookDetailsPage;