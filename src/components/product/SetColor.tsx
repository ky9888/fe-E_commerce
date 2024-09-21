"use client";
import { memo } from "react";
import { productType, seletImgtype } from "./ProductDetail";
import Image from "next/image";
type setColorProps = {
  images: seletImgtype[];
  cardProduct: productType;
  handColorSelet: (value: seletImgtype) => void;
};

const SetColor: React.FC<setColorProps> = ({
  images,
  cardProduct,
  handColorSelet,
}) => {
  console.log(images);

  return (
    <div className="flex items-center justify-between max-sm:hidden ">
      <p>Màu sắc</p>
      <div className="flex space-x-2 ">
        {images.map((image) => {
          return (
            <div
              onClick={() => {
                handColorSelet(image);
              }}
              className={`${
                cardProduct.selectImg.color === image.color
                  ? "border border-red-500 rounded-xl"
                  : "border border-slate-400 rounded-xl"
              } cursor-pointer`}
              key={image._id}
            >
              <div className=" py-1 px-4 flex items-center justify-center">
                <div className=" ">
                  <Image
                    src={image.image}
                    alt={cardProduct.name}
                    width={30}
                    height={30}
                    quality={100}
                    className="bg-cover bg-center   "
                  />
                </div>
                <p>{image.color}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default memo(SetColor);
