"use client";
import { useCallback, useState, memo, useEffect } from "react";
import SetColor from "./SetColor";
import ProductImg from "./ProductImg";
import SetQuantity from "./SetQuantity";
import { useCart } from "@/app/hook/useCart";
import { useRouter } from "next/navigation";
import { FcOk } from "react-icons/fc";

export type productType = {
  _id: string;
  name: string;
  selectImg: seletImgtype;
  note: string;
  nameTitle: string;
  price: string;
  giam: string;
  priceG: string;
  title: string;
  describe: string;
  quantity: number;
};
export type seletImgtype = {
  _id: string;
  color: string;
  image: string;
};

type HomePageProps = {
  data: any;
};

const ProductDetail: React.FC<HomePageProps> = ({ data }) => {
  const { handleAddProducTocart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);
  const [cartProduct, setCartProduct] = useState<productType>({
    _id: data._id,
    name: data.name,
    selectImg: { ...data.images[0] },
    note: data.note,
    price: data.price,
    giam: data.giam,
    priceG: data.priceG,
    title: data.title,
    describe: data.describe,
    quantity: 1,
    nameTitle: data.nameTitle,
  });
  const router = useRouter();
  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item._id === data._id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);
  const handColorSelet = useCallback((value: seletImgtype) => {
    setCartProduct((prev) => {
      return { ...prev, selectImg: value };
    });
  }, []);
  console.log("alla", cartProducts);
  const handleQtyIncrease = useCallback(() => {
    if (cartProduct.quantity === 99) {
      return cartProduct.quantity;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity++ };
    });
  }, [cartProduct.quantity]);
  const handleQtyDecrease = useCallback(() => {
    if (cartProduct.quantity === 1) {
      return cartProduct.quantity;
    }
    setCartProduct((prev) => {
      return { ...prev, quantity: prev.quantity-- };
    });
  }, [cartProduct.quantity]);

  return (
    <div className=" my-10  px-[12%] overflow-auto py-10">
      <p className="mb-10 text-[15px] font-medium">
        <span className="text-blue-600">Trang chủ</span> /{" "}
        <span className="text-blue-600">{data.nameTitle} </span>/ {data.title}
      </p>

      <div className="flex justify-between max-lg:block">
        <div className="px-[10%]">
          <ProductImg
            cartProduct={cartProduct}
            data={data}
            handColorSelet={handColorSelet}
          />
        </div>
        <div className="basis-1/2">
          <h1 className="text-[25px] font-semibold">{data.title}</h1>
          <div>
            <SetColor
              cardProduct={cartProduct}
              images={data.images}
              handColorSelet={handColorSelet}
            />
          </div>
          <div className="mt-10 space-y-2 ">
            <p className="text-[20px] font-bold ">Thông tin sản Phẩm</p>
            <p className="text-[15px] font-medium">{data.describe}</p>
          </div>
          {isProductInCart ? (
            <>
              <div className="mt-10">
                <div className="flex items-center space-x-1 ">
                   <p><FcOk /></p>
                  <p className="text-[15px] font-semibold   ">  Đã thêm sản phẩm vào giỏ hàng</p>
                </div>
                <div className="mt-2">
                  <button
                    className="bg-slate-800 text-white py-2 px-20 rounded-md"
                    onClick={() => {
                      router.push("/cart");
                    }}
                  >
                    Đến giỏ hàng
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex items-center space-x-5 mt-10 ">
                <div className=" border max-sm:px-2 border-yellow-500 flex justify-center w-[250px] py-4 rounded-xl bg-gradient-to-b from-yellow-100 to-white">
                  <div className="">  
                    <p className="font-medium">Mua ngay với giá</p>
                    <p className="text-[28px] font-bold max-sm:text-[15px]  ">{data.priceG}đ</p>
                    <p className="line-through max-sm:text-[12px]">{data.price}đ</p>
                  </div>
                </div>
                <div className="border max-sm:pr-3 max-sm:items-center border-slate-500 py-2 px-6  rounded-md flex space-x-3">
                  <p>Số lượng:</p>
                 <div >
                    <SetQuantity
                      cartProduct={cartProduct}
                      handleQtyIncrease={handleQtyIncrease}
                      handleQtyDecrease={handleQtyDecrease}
                    />
                 </div>
                </div>
              </div>
              <div className="mt-3">
                <button
                  onClick={() => handleAddProducTocart(cartProduct)}
                  className="bg-slate-900 text-white p-3 rounded-xl"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetail);
