import React from 'react';

const registerPage = () => {
     return (
          <div>
               <div className='flex items-center justify-center min-h-screen'>
                    <form action="">

                         <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-10 w-xl shadow-md">
                              <h1 className='text-3xl text-center'>Welcome Back!</h1>
                              <p className='text-[13px] max-w-90 text-center mx-auto text-gray-400 pb-5'>Create your account and meet a important library of books</p>

                              <label className="label text-[13px]">Name</label>
                              <input type="text" className="input w-full" placeholder="Enter your name" />

                              <label className="label text-[13px]">Photo url</label>
                              <input type="text" className="input w-full" placeholder="Paste your image url" />

                              <label className="label text-[13px]">Email</label>
                              <input type="email" className="input w-full" placeholder="Enter your email address" />

                              <label className="label text-[13px]">Password</label>
                              <input type="password" className="input w-full" placeholder="Enter your Password" />

                              <button className="btn btn-primary mt-4">Register</button>
                         </fieldset>
                    </form>
               </div>
          </div>
     );
};

export default registerPage;