"use client";
import Link from "next/link";
import { useCart } from "../hook/useCart";
import ItemContent from "./ItemContent";
import { GoArrowLeft } from "react-icons/go";

const CartClient = () => {
  const { cartProducts,cartTotalAmout } = useCart();
  console.log(cartProducts);


  if (!cartProducts || cartProducts.length === 0) {
    return (
      <div className="flex justify-center  w-full py-5">
        <div className="space-y-3 ">
          <p className="text-[20px] font-bold ">Giỏ hàng trống</p>
          <div className="flex items-center space-x-1">
            <p><GoArrowLeft /></p>
            <p>
              <Link href={"/"} className="font-medium">
              Trở về trang chủ
              </Link>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="px-[15%] py-10 overflow-auto w-full">
      <h1 className="text-center text-[20px] font-bold mt-6">
        Giỏ hàng của bạn
      </h1>

      <ul className="grid grid-cols-4 justify-items-center  font-medium mt-4 border-b border-slate-500">
        <li>Sản phẩm </li>
        <li>Giá</li>
        <li>Số lượng</li>
        <li>Giá tiền</li>
      </ul>

      <div>
        {cartProducts &&
          cartProducts.map((item) => {
            console.log("adsa", item);

            return (
              <div key={item._id}>
                <ItemContent item={item} />
              </div>
            );
          })}
      </div>
      <div className="flex justify-end mt-4 pr-2">
       
        <div className=" w-[275px] space-y-1  ">
          <div
            className="flex space-x-10  text-[15px] font-bold
            "
          >
            <p>Tổng tiền:</p>
            <p >{cartTotalAmout.toLocaleString('vi-VN')}đ</p>
          </div>
          <div className="flex justify-center bg-slate-800 rounded-md text-white">
            <button className="py-2  ">Thanh Toán</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartClient;
