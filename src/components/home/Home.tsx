
import Image from "next/image";
import Link from "next/link";

type Product = {
  _id: string;
  name: string;
  images: [
    {image: string;},
    {image: string;},
    {image: string;},
    {image: string;},
    {image: string;}
  ]
   
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

const HomePage: React.FC<HomePageProps> = ({ data }) => {
  return (
    <div className="  grid grid-cols-4 gap-4 justify-center px-[10%]  bg-slate-200 py-10 " >
      {data.map((item) => (
        <div  key={item._id} className="hover:shadow-lg hover:outline  hover:outline-[1px] hover:outline-blue-300 flex justify-center rounded-2xl py-6 px-3 bg-white" >
          <Link href={`/${item.name}/${item._id}`} className="hover:-translate-y-1 hover:scale-105 duration-300"> 
            <div className="flex justify-center  ">
              <Image
                src={item.images[0].image}
                alt={item.name}
                width={170}
                height={150}
                quality={100} 
              className="bg-cover bg-center mb-7  "
              />
            </div>
            <p className="text-center   text-[12px] mb-3"><span className="bg-slate-200 rounded-full  py-1 px-2">{item.note}</span></p>
           <p className="text-center  space-x-1 ">
              <span className=" text-[13px] line-through">{item.price}đ</span>
              <span className="text-[13px] font-medium text-red-600 ">{item.giam}</span>
           </p>
            <p className=" text-center text-[18px] font-semibold mb-4">{item.priceG}</p>
            <h3 className=" text-center text-[18px]">{item.title}</h3>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
