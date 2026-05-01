"use client"
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const registerPage = () => {
     const { register, handleSubmit, formState: { errors } } = useForm()
     const router = useRouter()
     const registerFunc = async(data) => {
          const { name, image, email, password } = data
          const { data: res, error } = await authClient.signUp.email({
               name: name,
               email: email,
               image: image,
               password: password,
          });
          if (res) {
               toast.success("Register Successfull ! Please Login now")
               router.push('/login')
          }
          if (error) {
               toast.error(error.message)
          }
     }
     return (
          <div>
               <div className='flex items-center justify-center min-h-screen'>
                    <form onSubmit={handleSubmit(registerFunc)}>

                         <fieldset className="fieldset bg-base-100 border-base-300 rounded-box border p-10 w-xl shadow-md">
                              <h1 className='text-3xl text-center'>Welcome Back!</h1>
                              <p className='text-[13px] max-w-90 text-center mx-auto text-gray-400 pb-5'>Create your account and meet a important library of books</p>

                              <label className="label text-[13px]">Name</label>
                              <input type="text" className="input w-full" placeholder="Enter your name" {...register("name", { required: true })} />
                              {errors.name && <span className='text-red-500'>This field is required</span>}

                              <label className="label text-[13px]">Photo url</label>
                              <input type="text" className="input w-full" placeholder="Paste your image url" {...register("image", { required: true })} />
                              {errors.image && <span className='text-red-500'>This field is required</span>}

                              <label className="label text-[13px]">Email</label>
                              <input type="email" className="input w-full" placeholder="Enter your email address" {...register("email", { required: true })} />
                              {errors.email && <span className='text-red-500'>This field is required</span>}

                              <label className="label text-[13px]">Password</label>
                              <input type="password" className="input w-full" placeholder="Enter your Password" {...register("password", { required: true })} />
                              {errors.password && <span className='text-red-500'>This field is required</span>}

                              <button className="btn btn-primary mt-4">Register</button>
                         </fieldset>
                    </form>
               </div>
          </div>
     );
};

export default registerPage;