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
          <div className='flex sticky z-50 bg-white top-0 items-center justify-start md:justify-between gap-5 md:gap-2 py-5 px-5 lg:px-16 shadow-sm'>
               <div className='text-blue-500 flex md:hidden' onClick={()=>setOpen(!open)}>
                    {
                         open===false ? <GrTextAlignLeft/> : <IoMdCloseCircleOutline />
                    }
               </div>
               <div className={`flex flex-col w-90% bg-base-100 p-5 border border-gray-200 shadow-md rounded-md md:hidden absolute  duration-1000 gap-3 ${open ? 'top-20 left-5 right-5' : '-top-100 left-5 right-5'}`}>
                    {
                         isPending ? <p>User is loading...</p> : user ?
                              <div className='flex items-center gap-5 pb-3'>
                                   <div className='flex items-center gap-5'>
                                        <Image className='rounded-full object-cover border-3 border-blue-500' height={60} width={60} src={user.image || '/user.png'} alt=''></Image>
                                        <div>
                                             <h1 className='text-xl font-semibold'>{user.name}</h1>
                                             <p className='text-gray-400'>{user.email}</p>
                                        </div>

                                   </div>
                              </div>:''
                    }
                    <NavLink href={'/'}><div className='flex items-center gap-2 border p-3 rounded-md border-gray-200'>
                         <FaHome />
                         <h1>Home</h1>
                    </div></NavLink>
                    <NavLink href={'/allBooks'}><div className='flex items-center gap-2 border p-3 rounded-md border-gray-200'>
                         <FaBorderAll />
                         <h1>All Books</h1>
                    </div></NavLink>
                    <NavLink href={'/myProfile'}><div className='flex items-center gap-2 border p-3 rounded-md border-gray-200'>
                         <FaUser />
                         <h1>My Profile</h1>
                    </div></NavLink>
                    {
                         user ? <button onClick={handleLogout} className='btn md:hidden flex bg-red-500 text-white'>Logout<FiLogOut /></button> : <Link href={'/login'}><button className='btn w-full md:hidden flex bg-green-500 text-white'>Login<FiLogIn /></button></Link>
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
                         <div className='md:flex items-center gap-5 hidden'>
                              <div className='flex items-center gap-3'>
                                   <Image className='rounded-full object-cover' height={30} width={30} src={user.image || '/user.png'} alt=''></Image>
                                   <div>
                                        <h1>Hello ! {user.name}</h1>
                                   </div>
                                   
                              </div>
                              <button onClick={handleLogout} className='btn hidden md:flex bg-red-500 text-white'>Logout<FiLogOut/></button>
                         </div>
                         : <Link href={'/login'}><button className='btn hidden md:flex bg-green-500 text-white'>Login<FiLogIn /></button></Link> 
               }
          </div>
     );
};

export default Navbar;