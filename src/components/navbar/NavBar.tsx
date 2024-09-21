'use client'

import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import Auth from "./Auth";
import { useCart } from "@/app/hook/useCart";
import React from 'react';
import axios from "axios";
import { useRouter } from 'next/navigation';



const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  const { getSearch, setGetSearch } = useCart();
const {dataSearch,setDataSearch} =useCart()
const router = useRouter();


  console.log('Data Search:', dataSearch);
  
  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://be-e-commerce-tohe.onrender.com/api/products/getAllProducts/?nameTitle=${getSearch}`);
      setDataSearch(response.data.data);
      setGetSearch('');
      router.push(`/?nameTitle=${getSearch}`);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div className="flex justify-between bg-slate-300 items-center fixed w-full px-[5%] py-4 max-md:block max-md:px-2 max-md:py-4 max-md:space-y-2">
     <p onClick={()=>router.push('/')} className={`${redressed.className} cursor-pointer  text-[20px] font-bold max-md:text-center`}>
        Thế Giới REP-Chuẩn REAL
      </p>
      <div>
        <div className="max-md:hidden">
          <input
            value={getSearch || ''} 
            onChange={(e) => setGetSearch(e.target.value)}
            className="outline-0 py-1 rounded-l-md text-[15px] px-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm"
          />
          <button 
            onClick={handleSearch} 
            className="bg-slate-800 hover:bg-slate-700 text-slate-100 p-1 rounded-r-md text-[15px] px-2"
          >
            Tìm kiếm
          </button>
        </div>
        <div className="hidden max-md:flex justify-center space-x-2">
          <div className="flex items-center space-x-1">
            <div>
            <input
           value={getSearch || ''} 
            onChange={(e) => setGetSearch(e.target.value)}
            className="outline-0 py-1 rounded-l-md text-[15px] px-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm"
          />
              <button 
                onClick={handleSearch} 
                className="bg-slate-800 hover:bg-slate-700 text-slate-100 p-1 rounded-r-md text-[15px] px-2"
              >
                Tìm kiếm
              </button>
            </div>
            <div className="text-[20px]">
              <CartCount />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-20">
        <div className="max-md:hidden text-[20px]">
          <CartCount />
        </div>
        <div className="max-md:hidden text-[20px]">
          <Auth />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
