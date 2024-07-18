

import CartContextProvider from "../hook/useCart";
type cartProviderProp={
children:React.ReactNode
}

const CartProvider:React.FC<cartProviderProp> = ({children}) => {
    return (  
        <CartContextProvider>{children}</CartContextProvider>
    ); 
}
 
export default CartProvider;