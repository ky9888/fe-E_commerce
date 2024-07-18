import { Redressed } from "next/font/google";
import CartCount from "./CartCount";
import Auth from "./Auth";

const redressed = Redressed({ subsets: ["latin"], weight: ["400"] });

const NavBar = () => {
  return (
    <div className="flex justify-between bg-slate-300  items-center px-[5%] py-4 max-md:block max-md:px-2 max-md:py-4 max-md:space-y-2">
      <p className={`${redressed.className} text-[20px]  font-bold max-md:text-center`}>
        Thế Giới REP-Chuẩn REAL
      </p>
      <div>
        <div className="max-md:hidden">
            <input
              className="outline-0 py-1 rounded-l-md text-[15px] px-2"
              type="text"
              placeholder="Tìm kiếm sản phẩm"
            />
            <button className="bg-slate-800 text-slate-100 p-1 rounded-r-md text-[15px] px-2">
              Tìm kiếm
            </button>
        </div>
        <div className="hidden max-md:flex justify-center  space-x-2 ">
          <div className="flex items-center space-x-1 ">
              <div >
                <input
                  className="outline-0 py-1 rounded-l-md text-[15px] px-2"
                  type="text"
                  placeholder="Tìm kiếm sản phẩm"
                />
                <button className="bg-slate-800 text-slate-100 p-1 rounded-r-md text-[15px] px-2">
                  Tìm kiếm
                </button>
              </div>
              <div className="text-[20px]"> 
              <CartCount/>
              </div>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-20">
        <div className="max-md:hidden text-[20px]">
          <CartCount/>
         
        </div>
        <div className="max-md:hidden text-[20px]">
          <Auth/>
         
        </div>
      </div>
    </div>
  );
};
export default NavBar;
