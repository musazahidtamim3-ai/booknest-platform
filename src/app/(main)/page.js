import Image from "next/image";
import { FaArrowRight} from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import Marq from '../components/pages/Marq'
import Featured from "../components/pages/Featured";
import WhyChoosePage from "../components/pages/WhyChoose";
import PopularPage from "../components/pages/Popular";
import Link from "next/link";


export default async function Home() {
  return (
    <div>
      <div>
        <div className="relative">
          <Image height={100} width={3000} className='w-full h-100 lg:h-150 object-cover' src='/dark.png' alt=''></Image>
        </div>
        <div className="absolute text-white top-1/3 left-16">
          <div>
            <p className="rounded-full flex items-center gap-2 max-w-70 justify-center bg-white/10 text-white p-2 border border-white/30"><MdMenuBook className="text-yellow-400 h-6 w-6" />WELCOME TO BOOKNEST</p>
          </div>
          <h1 className="text-2xl lg:text-7xl pt-5 font-bold">Find Your <span className="bg-linear-to-r from-[#4F46E5] to-[#9b46e5] bg-clip-text text-transparent">Next</span> Read</h1>
          <p className=" text-sm md:text-md pt-3 max-w-140 text-white/80">Explore thousands of books, borrow your favorites, and embark on a journey of knowledge. Join a thriving community of lifelong learners and curious minds. </p>
          <Link href={'/allBooks'} className="btn mt-5 bg-[#4F46E5] text-white border-none shadow-none">Explore Books <FaArrowRight /> </Link>
        </div>
      </div>
      <Marq></Marq>
      <Featured></Featured>
      <WhyChoosePage></WhyChoosePage>
      <PopularPage></PopularPage>
    </div>
  );
}
