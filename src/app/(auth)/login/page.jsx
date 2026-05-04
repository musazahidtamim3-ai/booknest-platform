"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import "animate.css"

const LoginPage = () => {
     const { register, handleSubmit, formState: { errors } } = useForm()
     const googleSignIn = async() => {
          const data = await authClient.signIn.social({
               provider: "google",
          });
     }
     
     const handleLogin = async (data) => {
          const { email, password } = data
          const { data: res, error } = await authClient.signIn.email({
               email: email,
               password: password,
               callbackURL: '/',
          });
          if (res) {
               toast.success("Login Successfull ! you can access all page now")
          }
          if (error) {
               toast.error(error.message)
          }
     }
     return (
          <div className='flex items-center justify-center min-h-screen px-5 animate__animated animate__fadeInDown'>
               <form onSubmit={handleSubmit(handleLogin)}>

                    <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border px-10 py-5 w-sm lg:w-xl shadow-md">
                         <h1 className='text-3xl text-center font-bold'>Welcome Back!</h1>
                         <p className='text-[13px] max-w-90 text-center mx-auto text-gray-400 pb-5'>Login to continue to your account and meet a important library of books</p>

                         <label className="label text-[13px]">Email</label>
                         <input type="email" name='email' className="input w-full" placeholder="Enter your email address" {...register("email", { required: true })} />
                         {errors.email && <span className='text-red-500'>This field is required</span>}

                         <label className="label text-[13px]">Password</label>
                         <input type="password" name='password' className="input w-full" placeholder="Enter your Password" {...register("password", { required: true })} />
                         {errors.password && <span className='text-red-500'>This field is required</span>}

                         <button className="btn btn-primary mt-4">Login</button>
                         <div className="divider"><p className='text-gray-400'>OR</p></div>
                         <button type='button' onClick={googleSignIn} className="btn flex gap-3 bg-white text-blue-500 border-blue-500">
                              <FaGoogle />
                              Login with Google
                         </button>
                         
                         <p className='text-blue-500 flex gap-3 justify-center pt-3'>Forgot password ? <Link href={'/register'}><span className='text-red-500'>Register</span></Link> </p>
                    </fieldset>
               </form>
          </div>
     );
};

export default LoginPage;