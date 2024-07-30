"use client";
import { useState, useEffect, useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/hook/useCart";



const Auth: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openUseRef = useRef<HTMLDivElement>(null);
  const blackUseRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { getUserId,setGetUserId } = useCart();
  // console.log("aloooooooo", getUserGG);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const open = openUseRef.current;
      const black = blackUseRef.current;

      if (open && black && !open.contains(event.target as Node)) {
        setIsOpen(false);
        resetBlackOverlay();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const resetBlackOverlay = () => {
    const black = blackUseRef.current;
    if (black) {
      setIsOpen(false);
      black.style.position = "";
      black.style.top = "";
      black.style.left = "";
      black.style.width = "";
      black.style.height = "";
      black.style.backgroundColor = "";
      black.style.zIndex = "";
    }
  };

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      const black = blackUseRef.current;
      if (black) {
        black.style.position = "fixed";
        black.style.top = "0";
        black.style.left = "0";
        black.style.width = "100vw";
        black.style.height = "100vh";
        black.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
        black.style.zIndex = "1";
      }
    } else {
      resetBlackOverlay();
    }
  };
  const handleNavigation = (path: string):void => {
    resetBlackOverlay();
    router.push(path);
  };
  const Logout = () => {
    localStorage.removeItem("accessToken");
    setGetUserId(null)
    router.push("/")
  };
  
  
  return (
    <div className="cursor-pointer">
      <div ref={blackUseRef}></div>
      <div
        ref={openUseRef}
        className="relative z-20 border bg-slate-300 border-slate-600 py-3 px-3 rounded-full"
      >
        <div
          onClick={handleToggleDropdown}
          className="flex space-x-1 justify-center items-center cursor-pointer"
        >
          {!getUserId?.userName ? (
            <div>
              <div className="flex">
                <span className="text-[22px]">
                  <FaUserAlt />
                </span>
                <span className="text-[22px]">
                  <FaCaretDown />
                </span>
              </div>
              <div>
                {isOpen && (
                  <div className="absolute z-10 left-[-100px]  bg-slate-100 w-[170px] top-[47px]    rounded-md">
                    <div
                      onClick={() => handleNavigation("/login")}
                      className="hover:bg-slate-300 rounded-md flex justify-center py-1 text-[18px] font-medium"
                    >
                      <button>Đăng nhập</button>
                    </div>
                    <div
                      onClick={() => handleNavigation("/register")}
                      className="hover:bg-slate-300 rounded-md py-1 flex justify-center text-[18px] font-medium"
                    >
                      <button>Đăng ký</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex">
                <span className="text-[15px]">{getUserId.userName}</span>
                <span className="text-[22px]">
                  <FaCaretDown />
                </span>
              </div>
              <div>
                {isOpen && (
                  <div className="absolute z-10 right-[0]  bg-slate-100 w-[170px] top-[47px]    rounded-md">
                    <div
                      onClick={() => handleNavigation("/addProduct")}
                      className="hover:bg-slate-300 rounded-md py-1 flex justify-center text-[18px] font-medium"
                    >
                      <button>Thêm sản phẩm</button>
                    </div>
                    <div
                      onClick={() => handleNavigation("/managerProducts")}
                      className="hover:bg-slate-300 rounded-md py-1 flex justify-center text-[18px] font-medium"
                    >
                      <button>Quản lý sản phẩm</button>
                    </div>
                    <div
                      onClick={Logout}
                      className="hover:bg-slate-300 rounded-md py-1 flex justify-center text-[18px] font-medium"
                    >
                      <button>Đăng xuất</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
