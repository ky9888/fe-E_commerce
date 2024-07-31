import ManagerProducts from "./ManagerProducts";


export default async function home() {
  const res =await fetch (`${process.env.URL}/api/products/getAllProducts`,{cache: "no-store"})
  const ress=await res.json();
  const data=ress.data
  console.log("check data",data);
  
  return (
    <div className=" mx-auto py-10 w-full">
      <ManagerProducts data={data ? data :[]}/>
      
    </div>
  );
}