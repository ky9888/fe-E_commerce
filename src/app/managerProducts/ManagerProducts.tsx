
'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type Product = {
  _id: string;
  name: string;
  images: { image: string }[];
  note: string;
  price: string;
  giam: string;
  priceG: string;
  title: string;
  describe: string;
};

type HomePageProps = {
  data: Product[];
};

const ManagerProducts: React.FC<HomePageProps> = ({ data }) => {
  const [products, setProducts] = useState(data);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/deleteProducts/${id}`, { method: "DELETE" });
      if (!res.ok) {
        throw new Error("Failed to delete product");
      }

      // Remove the deleted product from the state
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w ">
      <div className="flex justify-between space-x-10 pr-[38%] pl-[22%] mb-2 text-[20px] font-bold">
        <p>Thông tin sản phẩm</p>
        <p>Giá</p>
      </div>
      {products.map((item) => (
        <div key={item._id} className="flex py-1 space-x-10 justify-between px-[20%] items-center mb-1">
          <div className="flex space-x-2 items-center">
            <div>
              <Image
                src={item.images[0]?.image}
                alt={item.name}
                height={30}
                width={30}
              />
            </div>
            <p>{item.title}</p>
          </div>
          <div className="flex items-center space-x-4">
            <p>{item.priceG}</p>
            <Link href={`managerProducts/${item._id}`} className="py-1 px-2 rounded-md bg-slate-400">
              Sửa
            </Link>
            <button onClick={() => handleDelete(item._id)} className="py-1 px-2 rounded-md bg-red-500">
              Xóa
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManagerProducts;
