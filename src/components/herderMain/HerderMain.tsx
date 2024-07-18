'use client'
import { GiWatch } from "react-icons/gi";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaTabletAlt } from "react-icons/fa";
import {useRouter} from 'next/navigation'
import Image from "next/image";

const HederMain = () => {
  const router=useRouter()
  return (
    <div className="px-[10%] pt-5 space-y-5">
      <ul className="flex justify-between px-[10%] text-[18px] font-medium">
      <li onClick={()=>router.push('/')}  className="flex border hover:bg-slate-300 cursor-pointer border-slate-500 rounded-full py-2 px-3 items-center">
         
          <p>Tất cả</p>
        </li>
        <li onClick={()=>router.push('/watch')}  className="flex border hover:bg-slate-300 cursor-pointer border-slate-500 rounded-full space-x-1 py-2 px-3 items-center">
          <p>
            <GiWatch />
          </p>
          <p>Đồng hồ</p>
        </li>
        <li onClick={()=>router.push('/Airpods')}  className="flex items-center hover:bg-slate-300 cursor-pointer border border-slate-700 space-x-1 rounded-full py-2 px-3">
         <p><FaHeadphonesAlt /></p>
          <p>Tai nghe</p>
        </li>
        <li onClick={()=>router.push('/PhoneCover')}  className="flex items-center hover:bg-slate-300 cursor-pointer border border-slate-500 space-x-1 rounded-full py-2 px-3">
            <p><IoPhonePortraitOutline /></p>
          <p>Ốp lưng</p>
        </li>
        <li onClick={()=>router.push('/Ipad')}  className="flex items-center hover:bg-slate-300 cursor-pointer border border-slate-500 space-x-1 rounded-full py-2 px-3 " >
           <p><FaTabletAlt /></p>
          <p>Máy tính bảng</p>
        </li>
      </ul>
      <div className=" w-">
        <Image src='https://res.cloudinary.com/ditzbwb9t/image/upload/v1721050219/your-folder-name/irqnwkm2qjwo8bzwb6ur.png' alt="anh" height={50} width={2000} className="bg-cover"/>
      </div>
    </div>
  );
};

export default HederMain;
