"use client";

import { productType } from "@/components/product/ProductDetail";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-hot-toast";
type User = {
  id:string
  userName:string
}
type cartContextType = {
  cartTotalQty: number;
  cartTotalAmout: number;
  getUserId: User | null;
  setGetUserId: React.Dispatch<React.SetStateAction<User | null>>;
  cartProducts: productType[] | null;
  handleAddProducTocart: (product: productType) => void;
  handleRemoveProducts: (product: productType) => void;
  handleCardQtyIncrease: (product: productType) => void;
  handleCardQtyDecrease: (product: productType) => void;
};
export const CartContext = createContext<cartContextType | null>(null);
type props = {
  [propName: string]: any;
};

export const CartContextProvider = (props: props) => {
  const [cartTotalQty, setCartTotalQly] = useState(0);
  const [cartTotalAmout, setCartTotalAmout] = useState(0);
  const [cartProducts, setCartProducts] = useState<productType[] | null>(null);
  const [getUserId, setGetUserId] = useState<User | null>(null);
  useEffect(() => {
    const getTotal = () => {
      if (cartProducts) {
        const { total, qty } = cartProducts?.reduce(
          (acc, item) => {
            const itemTotal =
              Number(item.priceG.replace(/\./g, "")) * item.quantity;

            acc.total += itemTotal;
            acc.qty += item.quantity;

            return acc;
          },
          {
            total: 0,
            qty: 0,
          }
        );
        setCartTotalQly(qty);
        setCartTotalAmout(total);
      }
    };
    getTotal();
  }, [cartProducts]);

  const handleAddProducTocart = useCallback((product: productType) => {
    setCartProducts((prev) => {
      let updateCart;
      if (prev) {
        updateCart = [...prev, product];
      } else {
        updateCart = [product];
      }
      toast.success("Đã thêm sản phẩm vào giỏ hàng!");
      localStorage.setItem("cartItem", JSON.stringify(updateCart));
      return updateCart;
    });
  }, []);
  const handleRemoveProducts = useCallback(
    (product: productType) => {
      if (cartProducts) {
        const fiterProduct = cartProducts.filter((item) => {
          return item._id !== product._id;
        });
        setCartProducts(fiterProduct);
        toast.success("Đã xóa sản phẩm!");
        localStorage.setItem("cartItem", JSON.stringify(fiterProduct));
      }
    },
    [cartProducts]
  );
  const handleCardQtyIncrease = useCallback(
    (product: productType) => {
      let updateCart;
      if (product.quantity === 99) {
        return toast.error("Đạt mức tối đa");
      }
      if (cartProducts) {
        updateCart = [...cartProducts];
        const extingIndex = cartProducts.findIndex(
          (item) => item._id === product._id
        );
        if (extingIndex > -1) {
          updateCart[extingIndex].quantity = ++updateCart[extingIndex].quantity;
        }
        setCartProducts(updateCart);

        localStorage.setItem("cartItem", JSON.stringify(updateCart));
      }
    },
    [cartProducts]
  );
  const handleCardQtyDecrease = useCallback(
    (product: productType) => {
      let updateCart;
      if (product.quantity === 1) {
        return toast.error("Đạt mức tối thiểu");
      }
      if (cartProducts) {
        updateCart = [...cartProducts];
        const extingIndex = cartProducts.findIndex(
          (item) => item._id === product._id
        );
        if (extingIndex > -1) {
          updateCart[extingIndex].quantity = --updateCart[extingIndex].quantity;
        }
        setCartProducts(updateCart);

        localStorage.setItem("cartItem", JSON.stringify(updateCart));
      }
    },
    [cartProducts]
  );

  const value = {
    cartTotalQty,
    cartProducts,
    cartTotalAmout,
    getUserId,
    setGetUserId,
    handleAddProducTocart,
    handleRemoveProducts,
    handleCardQtyIncrease,
    handleCardQtyDecrease,
  };
  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error("lỗi");
  }
  return context;
};

export default CartContextProvider;
