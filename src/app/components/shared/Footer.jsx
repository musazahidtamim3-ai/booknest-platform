import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FaLocationDot, FaLocationPin, FaMapLocation } from 'react-icons/fa6';
import { MdMail } from 'react-icons/md';
import { PiPhoneCallFill } from 'react-icons/pi';

const Footer = () => {
     return (
          <div className='bg-blue-950 py-10'>
               <div className='max-w-7xl mx-auto px-5 lg:px-0'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5'>
                         <div>
                              <Image height={300} width={2000} className='h-8 w-38' src='/footerLogo-01.png' alt=''></Image>
                              <p className='text-white/70 pt-5'>BookNest is your digital library companion. Discover, borrow and enjoy books like never before.</p>
                              <div className='flex items-center gap-2 mt-5'>
                                   <div className='bg-white/20 p-2 rounded-full'>
                                        <FaFacebook className='text-white'/>
                                   </div>
                                   <div className='bg-white/20 p-2 rounded-full'>
                                        <FaTwitter className='text-white'/>
                                   </div>
                                   <div className='bg-white/20 p-2 rounded-full'>
                                        <FaInstagram className='text-white'/>
                                   </div>
                                   <div className='bg-white/20 p-2 rounded-full'>
                                        <FaGithub className='text-white'/>
                                   </div>
                                   <div className='bg-white/20 p-2 rounded-full'>
                                        <FaYoutube className='text-white'/>
                                   </div>
                              </div>
                         </div>
                         <div>
                              <h1 className='text-white text-2xl'>Quick Links</h1>
                              <div className='flex flex-col gap-1 mt-3 text-white/70'>
                                   <Link href={'/'}>Home</Link>
                                   <Link href={'/'}>All Books</Link>
                                   <Link href={'/'}>My Profile</Link>
                                   <Link href={'/'}>Membership</Link>
                                   <Link href={'/'}>FAQ's</Link>
                              </div>
                         </div>
                         <div>
                              <h1 className='text-white text-2xl'>Categories</h1>
                              <div className='flex flex-col gap-1 mt-3 text-white/70'>
                                   <Link href={'/'}>Science</Link>
                                   <Link href={'/'}>Technology</Link>
                                   <Link href={'/'}>Story</Link>
                              </div>
                         </div>
                         <div>
                              <h1 className='text-white text-2xl'>Contact Us</h1>
                              <div className='flex flex-col space-y-3 gap-1 mt-3 text-white/70'>
                                   <p className='flex items-start gap-3'><FaLocationDot className='mt-1'/> 123 Library Street, Knowledge City, Dhaka, Bangladesh </p>
                                   <p className='flex items-center gap-3'><MdMail/> support@booknest.com</p>
                                   <p className='flex items-center gap-3'><PiPhoneCallFill/> +880 1234-567890</p>
                              </div>
                         </div>
                    </div>
                    <hr className='border border-white/10 my-5' />
                    <div className='flex flex-col md:flex-row justify-between text-white/70'>
                         <p>&copy; 2026 BookNest. all rights reserved.</p>
                         <div className='flex items-center gap-5'>
                              <p>Privacy Policy</p>
                         <div className='bg-white/70 h-4 w-0.5'></div>
                         <p>Terms of Service</p>
                         </div>
                    </div>
               </div> 
          </div>
     );
};

export default Footer;