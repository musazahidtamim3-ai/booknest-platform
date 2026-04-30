import React from 'react';
import Navbar from '../components/shared/Navbar';

const authLayout = ({children}) => {
     return (
          <div>
               <Navbar></Navbar>
               {children}
          </div>
     );
};

export default authLayout;