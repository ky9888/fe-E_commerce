'use client'
import { productType } from "./ProductDetail";
import { memo } from "react";
type SetQuantityy ={
    cartProduct:productType;
    handleQtyIncrease:()=>void;
    handleQtyDecrease:()=>void
}

const SetQuantity:React.FC<SetQuantityy> = ({cartProduct,handleQtyIncrease,handleQtyDecrease}) => {{

}
    return ( 
        <div className="flex justify-center space-x-4  " >
           <div className="flex  space-x-4 max-sm:space-x-1">
              
                <button className="bg-slate-200 px-2 rounded-md" onClick={handleQtyDecrease}>-</button>
                <p>{cartProduct.quantity}</p>
                <button className="bg-slate-200 px-2 rounded-md" onClick={handleQtyIncrease}>+</button>
           </div>
        </div>

     );
     handleQtyIncrease
}
 
export default memo(SetQuantity);