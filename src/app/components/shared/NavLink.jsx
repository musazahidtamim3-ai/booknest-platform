"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
     const path = usePathname();
     const active = href===path
     return (
          <Link className={`${active ? "bg-[#464FE5] px-5 py-2 rounded-md text-white" : ""}`} href={href}>
               {children}
               </Link>
     );
};

export default NavLink;