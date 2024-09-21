"use client";
import { memo } from "react";
import { productType, seletImgtype } from "./ProductDetail";
import Image from "next/image";
type productImage = {
  data: any;
  cartProduct: productType;
  handColorSelet: (value: seletImgtype) => void;
};

const ProductImg: React.FC<productImage> = ({
  data,
  cartProduct,
  handColorSelet,
}) => {
  return (
    <div className=" p-5">
      <div className="flex justify-center">
        <Image
          src={cartProduct.selectImg.image}
          alt={cartProduct.name}
          width={400}
          height={400}
          quality={100}
          className="bg-cover bg-center mb-7  "
        />
      </div>
      <div className="flex space-x-2 justify-center ">
        {data.images.map((image: seletImgtype) => {
          return (
            <div
              onClick={() => {
                handColorSelet(image);
              }}
              className={`${
                cartProduct.selectImg.color === image.color
                  ? "border  border-slate-600 rounded-xl"
                  : "border border-slate-400 rounded-xl"
              } cursor-pointer`}
              key={image._id}
            >
              <div className=" p-2  space-x-1 flex items-center h-full ">
                <div >
                  <div className="flex justify-center ">
                    <Image
                      src={image.image}
                      alt={cartProduct.name}
                      width={40}
                      height={40}
                      quality={100}
                      className="bg-cover bg-center   "
                    />
                  </div>
                  <p className="text-center ">{image.color}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(ProductImg);
