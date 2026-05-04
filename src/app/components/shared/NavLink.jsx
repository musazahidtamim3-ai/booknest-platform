"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
     const path = usePathname();
     const active = href===path
     return (
          <Link className={`${active ? "bg-blue-100 lg:px-5 lg:py-2 rounded-md text-blue-700 border-l-5 border-blue-500 lg:border-none" : ""}`} href={href}>
               {children}
               </Link>
     );
};

export default NavLink;