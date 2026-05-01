
import AllBooks from '@/app/components/pages/AllBooks';
import React from 'react';

const AllBooksPage = async() => {
     const res = await fetch('http://localhost:3000/data.json')
     const books = await res.json()


     
     return (
          <div className='max-w-7xl mx-auto my-10 px-5 lg:px-0'>
               <div className='text-center'>
                    <h1 className='text-3xl font-semibold pt-3'>All Books</h1>
                    <p className='text-gray-500'>Browse our collections of amazing books</p>
               </div>
               <AllBooks books={books}></AllBooks>
          </div>
     );
};

export default AllBooksPage;