import React from 'react';
import { FaGithub, FaGoogle, FaMailBulk } from 'react-icons/fa';

const LoginPage = () => {
     return (
          <div className='flex items-center justify-center min-h-screen'>
               <form action="">
                    
                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border px-10 py-5 w-xl shadow-md">
                    <h1 className='text-3xl text-center'>Welcome Back!</h1>
                         <p className='text-[13px] max-w-90 text-center mx-auto text-gray-400 pb-5'>Login to continue to your account and meet a important library of books</p>
                         
                    <label className="label text-[13px]">Email</label>
                    <input type="email" className="input w-full" placeholder="Enter your email address" />

                         <label className="label text-[13px]">Password</label>
                         <input type="password" className="input w-full" placeholder="Enter your Password" />

                         <button className="btn btn-primary mt-4">Login</button>
                         <div className="divider"><p className='text-gray-400'>OR</p></div>
                         <button className="btn flex gap-3 bg-white text-blue-500 border-blue-500">
                              <FaGoogle/>
                              Login with Google
                         </button>
                         <button className="btn mt-2 flex gap-3 bg-black text-white border-black">
                              <FaGithub/>
                              Login with GitHub
                         </button>
                         <p className='text-blue-500 flex gap-3 justify-center pt-3'>Forgot password ? <span className='text-red-500'>Register</span> </p>
               </fieldset>
               </form>
          </div>
     );
};

export default LoginPage;