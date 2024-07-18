import UpdateProduct from "./updateProducts"

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
    const res =await fetch (`http://localhost:5000/api/products/getDetailProducts/${id}`,{cache: "no-store"})
    const ress=await res.json();
    const data=ress.data
    console.log("check data",data);
  return (
    <div>
     <UpdateProduct data={data}/>
      
    </div>
  );
}