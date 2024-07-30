'use client';
import { useState, useEffect } from 'react';
import { GiWatch } from 'react-icons/gi';
import { FaHeadphonesAlt, FaTabletAlt } from 'react-icons/fa';
import { IoPhonePortraitOutline } from 'react-icons/io5';
import { useRouter, usePathname } from 'next/navigation';
import Image from 'next/image';
import { useCart } from '@/app/hook/useCart';

const HederMain = () => {
  const { setDataSearch } = useCart();
  const router = useRouter();
  const pathname = usePathname();
  const [activePath, setActivePath] = useState(pathname);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const handleNavigation = (path: string) => {
    if (activePath !== path) {
      setDataSearch(null);
      router.push(path);
    }
  };

  return (
    <div className="px-[10%] pt-5 space-y-5">
        <ul className="flex  max-xl:space-x-[40px] py-3  overflow-x-auto space-x-[80px] px-[10%] text-[18px] font-medium">
          <li
            onClick={() => handleNavigation('/')} 
            className={`flex fixed-size-li border hover:bg-slate-300 cursor-pointer border-slate-500 rounded-full py-2 px-3 items-center ${
              activePath === '/' ? 'bg-slate-400' : ''
            }`}
          >
            <p>Tất cả</p>
          </li>
          <li
            onClick={() => handleNavigation('/watch')}
            className={`flex fixed-size-li border hover:bg-slate-300 cursor-pointer border-slate-500 rounded-full space-x-1 py-2 px-3 items-center ${
              activePath === '/watch' ? 'bg-slate-400' : ''
            }`}
          >
            <p>
              <GiWatch />
            </p>
            <p>Đồng hồ</p>
          </li>
          <li
            onClick={() => handleNavigation('/Airpods')}
            className={`flex fixed-size-li items-center hover:bg-slate-300 cursor-pointer border border-slate-700 space-x-1 rounded-full py-2 px-3 ${
              activePath === '/Airpods' ? 'bg-slate-400' : ''
            }`}
          >
            <p>
              <FaHeadphonesAlt />
            </p>
            <p>Tai nghe</p>
          </li>
          <li
            onClick={() => handleNavigation('/PhoneCover')}
            className={`flex fixed-size-li items-center hover:bg-slate-300 cursor-pointer border border-slate-500 space-x-1 rounded-full py-2 px-3 ${
              activePath === '/PhoneCover' ? 'bg-slate-400' : ''
            }`}
          >
            <p>
              <IoPhonePortraitOutline />
            </p>
            <p>Ốp lưng</p>
          </li>
          <li
            onClick={() => handleNavigation('/Ipad')}
            className={`flex fixed-size-li items-center hover:bg-slate-300 cursor-pointer border border-slate-500 space-x-1 rounded-full py-2 px-3 ${
              activePath === '/Ipad' ? 'bg-slate-400' : ''
            }`}
          >
            <p>
              <FaTabletAlt />
            </p>
            <p>Máy tính bảng</p>
          </li>
        </ul>
        <div className="w-full">
          <Image
            src="https://res.cloudinary.com/ditzbwb9t/image/upload/v1721050219/your-folder-name/irqnwkm2qjwo8bzwb6ur.png"
            alt="anh"
            height={50}
            width={2000}
            className="bg-cover"
          />
        </div>
      </div>
  );
};

export default HederMain;
