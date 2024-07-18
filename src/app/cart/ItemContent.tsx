"use client";

import { productType } from "@/components/product/ProductDetail";
import Image from "next/image";
import { useCart } from "../hook/useCart";
import SetQuantity from "@/components/product/SetQuantity";

type itemContent = {
  item: productType;
};
const ItemContent: React.FC<itemContent> = ({ item }) => {
  const {handleRemoveProducts,handleCardQtyIncrease,handleCardQtyDecrease}= useCart()
  const money=(Number((item.priceG).replace(/\./g, '')) * item.quantity).toLocaleString('vi-VN')
  return (
    
    <div className="grid grid-cols-4 justify-items-center border-b border-slate-500 py-2 items-center">
      <div className="flex items-center space-x-1 ">
        <div className="">
            <Image
              src={item.selectImg.image}
              alt={item.name}
              height={40}
              width={40}
            />
        </div>
        <div className="">
            <p className="text-[12px]">{item.title}</p>
            <p className="text-[12px]">{item.selectImg.color}</p>
            <button onClick={()=>handleRemoveProducts(item)} className="text-[14px] font-medium underline">Xóa</button>
        </div>
      </div>
      <div>
        <p className="text-[14px] font-medium">{item.priceG}đ</p>
      </div>
      <div>
      <SetQuantity
                    cartProduct={item}
                    handleQtyIncrease={()=>{handleCardQtyIncrease(item)}}
                    handleQtyDecrease={()=>{handleCardQtyDecrease(item)}}
                  />
      </div>
      <div>
      <p className="text-[14px] font-medium">{money}đ</p>
      </div>

    </div>
  );
};

export default ItemContent;
