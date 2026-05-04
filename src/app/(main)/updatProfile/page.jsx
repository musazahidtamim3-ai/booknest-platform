"use client"
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { FaArrowLeft } from "react-icons/fa";
import { MdSave } from "react-icons/md";
import { toast } from "react-toastify";



const UpdateProfilePage = () => {
     const { data: session, isPending } = useSession();
     const user = session?.user;

     const { register, handleSubmit, formState: { errors } } = useForm({
          values: {
               name: user?.name || "",
               image: user?.image || "",
          }
     })


     const updateFunc = async (data) => {
          const { name, image, } = data
          const { data: res, error } = await authClient.updateUser({
               name: name,
               image: image,
          });
          if (res) {
               toast.success("Information Updated")
               await authClient.getSession()
               window.location.href = '/myProfile'
          }
          if (error) {
               toast.error(error.message)
          }
     }
     if (isPending) {
          return <div className="flex justify-center items-center h-[70vh]">User Loading ...</div>
     }
     
     return (
          <div className="max-w-3xl mx-auto my-10 px-5 lg:px-0">
               <div className="my-3">
                    <Link href={'/myProfile'} className="text-blue-500 flex items-center gap-3 pb-3"><FaArrowLeft />Back to Profile </Link>
                    <h1 className="text-2xl font-bold pb-1">Update Profile</h1>
                    <p className="pb-3 text-gray-400">Update your profile information below.</p>
               </div>
               <div className="bg-white border border-blue-200 shadow-md rounded-md p-10">
                    <div className="flex justify-center">
                         <Image height={200} width={200} className='border-5 border-blue-500 rounded-full h-50 w-50' src={user?.image || '/user.png'} alt=''></Image>
                    </div>
                    <form onSubmit={handleSubmit(updateFunc)}>

                         <fieldset className="pt-10">
                              <h1 className="text-xl font-semibold">Username</h1>
                              <label className="label pb-2 text-[13px]">Choose a username for your account</label>
                              <input type="text" className="input w-full" placeholder="Enter your name" {...register("name", { required: true })} />
                              {errors.name && <span className='text-red-500'>This field is required</span>}

                              <h1 className="text-xl font-semibold pt-5">Image Url</h1>
                              <label className="label pb-2 text-[13px]">Enter a link to your profile image</label>
                              <input type="text" className="input w-full" placeholder="Paste your image url" {...register("image", { required: true })} />
                              {errors.image && <span className='text-red-500'>This field is required</span>}

                              <button type="submit" className="btn btn-primary mt-4 w-full"><MdSave/> Update Information</button>
                         </fieldset>
                    </form>
               </div>
          </div>
     );
};

export default UpdateProfilePage;