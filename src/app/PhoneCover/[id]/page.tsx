import ProductDetail from "../../../components/product/ProductDetail"

export type productType={
  _id:string,
  name:string,
  selectImg:seletImgtype,

}
export type seletImgtype={
  title:string,
  image:string,
 

}


export default async  function home({
    params:{id}
}:{
    params:{id:string}
}) {
    const res =await fetch (`${process.env.URL}/products/getDetailProducts/${id}`,{cache: "no-store"})
    const ress=await res.json();
    const data=ress.data
    console.log("check data",data);
  return (
    <>
     <ProductDetail data={data} />
      
    </>
  );
}