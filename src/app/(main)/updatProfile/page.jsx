"use client"

import { useSession } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { FaUserEdit } from "react-icons/fa";
import { FaLocationDot, FaPersonCircleCheck } from "react-icons/fa6";
import { IoDocumentTextSharp, IoMailOpenSharp } from "react-icons/io5";
import { MdUpdate } from "react-icons/md";
import { RiErrorWarningFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";


const UpdateProfilePage = () => {
     const { data: session, isPending } = useSession();
     const user = session?.user;
     // const { id, createdAt, updatedAt, email, emailVerified, name, image } = user;
     if (isPending) {
          return <div className="flex justify-center items-center h-[70vh]">User Loading ...</div>
     }
     if (!user) {
          return <div>Please login</div>
     }
     return (
          <div className="max-w-7xl mx-auto my-10">
               <div className="flex justify-between items-center mb-3">
                    <div>
                         <h1 className="text-2xl font-bold pb-1">My Profile</h1>
                         <p className="pb-3 text-gray-400">View and manage your account information</p>
                         </div>
                    <Link href={'/updatProfile'} className="btn bg-blue-50 text-blue-500 border border-blue-500 flex items-center gap-3"><FaUserEdit /> Edit Profile</Link>
                         
                    </div>
               <div className="bg-white border border-blue-200 shadow-md rounded-md p-10">
                    
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                         <div className="pt-5 col-span-7 flex items-center gap-10">
                              <Image height={200} width={200} className='border-5 border-blue-500 rounded-full h-50 w-50' src={user?.image || '/user.png'} alt=''></Image>
                              <div>
                                   <h1 className="text-2xl font-bold pb-1">{user?.
                                        name}</h1>
                                   <p className="text-blue-500 text-lg font-semibold">Book Lover</p>
                                   <hr className="border border-blue-50 my-3"/>
                                   <p className="flex items-center gap-3 pb-3 text-gray-400"><IoMailOpenSharp/> {user?.email}</p>
                                   <p className="flex items-center gap-3 pb-3 text-gray-400"><FaLocationDot/> Dhaka, Bangladesh</p>
                                   
                              </div>
                              <div className="w-0.5 h-full bg-gray-200"></div>
                         </div>
                         
                         <div className="col-span-5">
                              <div className="flex items-center gap-5">
                                   <div className="bg-blue-50 text-blue-500 p-5 rounded-full">
                                        <IoDocumentTextSharp className="w-6 h-6"/>
                                   </div>
                                   <div>
                                        <p className="font-semibold"> ACCOUNT ID</p>
                                        <p className="text-gray-400 pt-2">{user?.id}</p>
                                   </div>
                              </div>
                              <div className="pt-5 flex items-center gap-5">
                                   <div className="bg-blue-50 text-blue-500 p-5 rounded-full">
                                        <IoMailOpenSharp className="w-6 h-6" /> 
                                   </div>
                                   <div>
                                        <p className="font-semibold">EMAIL STATUS</p>
                                        {
                                             (user?.emailVerified) ? <p className="text-green-400 pt-2 flex items-center gap-2"><TiTick /> Verifed</p> : <p className="text-yellow-400 pt-2 flex items-center gap-2"><RiErrorWarningFill /> Pending</p>
                                        }
                                   </div>

                              </div>
                              <div className="pt-5 flex items-center gap-5">
                                   <div className="bg-blue-50 text-blue-500 p-5 rounded-full">
                                        <FaPersonCircleCheck className="w-6 h-6" />
                                   </div>
                                   <div>
                                        <p className="font-semibold">MEMBER SINCE</p>
                                        <p className="text-gray-400 pt-2">{new Date(user?.createdAt).toLocaleDateString('en-GB')}</p>
                                   </div>
                              </div>
                              <div className="pt-5 flex items-center gap-5">
                                   <div className="bg-blue-50 text-blue-500 p-5 rounded-full">
                                        <MdUpdate className="w-6 h-6" />
                                   </div>
                                   <div>
                                        <p className="font-semibold">UPDATED AT</p>
                                        <p className="text-gray-400 pt-2">{new Date(user?.updatedAt).toLocaleDateString('en-GB')}</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div> 
     );
};

export default UpdateProfilePage;