'use client'

import { BsCart } from "react-icons/bs";
import {useRouter} from 'next/navigation'
import { useCart } from "@/app/hook/useCart";

const CartCount = () => {
    const router=useRouter()
    const {cartTotalQty}=useCart()
    return ( 
        <div onClick={()=>router.push('/cart')} className="relative cursor-pointer ">
             <div className="text-[25px]"><BsCart /></div>
             <span className="bg-slate-600 rounded-full text-[12px] px-1 text-white top-[-9px] absolute right-[-5px] ">{cartTotalQty}</span>
        </div>
     );
}
 
export default CartCount;