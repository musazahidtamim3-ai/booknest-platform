import Image from 'next/image';
import Link from 'next/link';
import { FaBorderAll, FaHome, FaUser } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';
import NavLink from './NavLink';


const Navbar = () => {
     return (
          <div className='flex items-center justify-between gap-2 py-5 px-16 shadow-sm'>
               <Image height={300} width={2000} className='h-8 w-38' src='/booknest-01.png' alt=''></Image>
               <div className='flex items-center gap-8'>
                    <NavLink href={'/'}><div className='flex items-center gap-2'>
                         <FaHome />
                         <h1>Home</h1>
                    </div></NavLink>
                    <NavLink href={'/allBooks'}><div className='flex items-center gap-2'>
                         <FaBorderAll />
                         <h1>All Books</h1>
                    </div></NavLink>
                    <NavLink href={'/'}><div className='flex items-center gap-2'>
                         <FaUser />
                         <h1>My Profile</h1>
                    </div></NavLink>

               </div>
               <Link href={'/login'}><button className='btn bg-[#4F46E5] text-white'>Login<FiLogIn /></button></Link> 
          </div>
     );
};

export default Navbar;