"use client"

import Link from "next/link";
import { toast } from "react-toastify";

const Borrow = ({book}) => {
     return (
          <div className='flex  mt-10'>
               <Link href={'/'}><button onClick={() => toast.success(`${book.title} borrowed successfully`)} className='btn btn-primary '>Borrow this book</button></Link>
          </div>
     );
};

export default Borrow;