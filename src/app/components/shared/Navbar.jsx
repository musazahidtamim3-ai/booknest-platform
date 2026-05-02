"use client"
import Image from 'next/image';
import { FaBorderAll,FaHome, FaUser} from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import NavLink from './NavLink';
import { authClient, useSession } from '@/lib/auth-client';
import { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { GrTextAlignLeft } from 'react-icons/gr';
import Link from 'next/link';

const Navbar = () => {
     const[open,setOpen]=useState(false)
     const { data: session, isPending } = useSession()
     const user = session?.user;

     const handleLogout = async () => {
          await authClient.signOut({
               fetchOptions: {
                    onSuccess: () => {
                         window.location.reload();
                    },
               },
          })

     };
     return (
          <div className='flex sticky z-50 bg-white/90 top-0 items-center justify-start md:justify-between gap-5 md:gap-2 py-5 px-5 lg:px-16 shadow-sm'>
               <div className='text-blue-500 flex md:hidden' onClick={()=>setOpen(!open)}>
                    {
                         open===false ? <GrTextAlignLeft/> : <IoMdCloseCircleOutline />
                    }
               </div>
               <div className={`flex flex-col bg-base-100 p-5 border border-gray-200 shadow-md rounded-md md:hidden absolute  duration-1000 gap-5 ${open ? 'top-15 left-5' : '-top-70 left-5'}`}>
                    <NavLink href={'/'}><div className='flex items-center gap-2'>
                         <FaHome />
                         <h1>Home</h1>
                    </div></NavLink>
                    <NavLink href={'/allBooks'}><div className='flex items-center gap-2'>
                         <FaBorderAll />
                         <h1>All Books</h1>
                    </div></NavLink>
                    <NavLink href={'/myProfile'}><div className='flex items-center gap-2'>
                         <FaUser />
                         <h1>My Profile</h1>
                    </div></NavLink>
                    {
                         user ? <button onClick={handleLogout} className='btn md:hidden flex bg-red-500 text-white'>Logout<FiLogOut /></button> : <Link href={'/login'}><button className='btn w-full md:hidden flex bg-red-500 text-white'>Login<FiLogIn /></button></Link>
                    }

               </div>
               <Link href={'/'}><Image height={300} width={2000} className='h-8 w-38' src='/booknest-01.png' alt=''></Image></Link>
               <div className='hidden md:flex items-center gap-8 '>
                    <NavLink href={'/'}><div className='flex items-center gap-2'>
                         <FaHome />
                         <h1>Home</h1>
                    </div></NavLink>
                    <NavLink href={'/allBooks'}><div className='flex items-center gap-2'>
                         <FaBorderAll />
                         <h1>All Books</h1>
                    </div></NavLink>
                    <NavLink href={'/myProfile'}><div className='flex items-center gap-2'>
                         <FaUser />
                         <h1>My Profile</h1>
                    </div></NavLink>

               </div>
               {
                    isPending ? <p>User is loading...</p> : user ?
                         <div className='flex items-center gap-5'>
                              <div className='flex items-center gap-3'>
                                   <Image className='rounded-full object-cover' height={30} width={30} src={user.image || '/user.png'} alt=''></Image>
                                   <div>
                                        <h1>Hello ! {user.name}</h1>
                                   </div>
                                   
                              </div>
                              <button onClick={handleLogout} className='btn hidden md:flex bg-[#4F46E5] text-white'>Logout<FiLogOut/></button>
                         </div>
                         : <Link href={'/login'}><button className='btn hidden md:flex bg-[#4F46E5] text-white'>Login<FiLogIn /></button></Link> 
               }
          </div>
     );
};

export default Navbar;