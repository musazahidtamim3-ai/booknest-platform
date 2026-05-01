"use client"
import Image from 'next/image';
import Link from 'next/link';
import { FaBorderAll, FaHome, FaUser, FaUserAlt } from 'react-icons/fa';
import { FiLogIn, FiLogOut } from 'react-icons/fi';
import NavLink from './NavLink';
import { authClient, useSession } from '@/lib/auth-client';

const Navbar = () => {
     const { data: session, isPending } = useSession()
     const user = session?.user;
     console.log("User Data:", user);

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
          <div className='flex sticky z-50 bg-white/90 top-0 items-center justify-between gap-2 py-5 px-16 shadow-sm'>
               <Image height={300} width={2000} className='h-8 w-38' src='/booknest-01.png' alt=''></Image>
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
                                   <Image className='rounded-full' height={30} width={30} src={user.image || '/user.png'} alt=''></Image>
                                   <div>
                                        <h1>Hello ! {user.name}</h1>
                                   </div>
                                   
                              </div>
                              <button onClick={handleLogout} className='btn bg-[#4F46E5] text-white'>Logout<FiLogOut/></button>
                         </div>
                         : <Link href={'/login'}><button className='btn bg-[#4F46E5] text-white'>Login<FiLogIn /></button></Link> 
               }
          </div>
     );
};

export default Navbar;