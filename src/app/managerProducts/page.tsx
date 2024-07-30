import ManagerProducts from "./ManagerProducts";


export default async function home() {
  const res =await fetch ("http://localhost:5000/api/products/getAllProducts",{cache: "no-store"})
  const ress=await res.json();
  const data=ress.data
  console.log("check data",data);
  
  return (
    <div className=" mx-auto py-10 w-full">
      <ManagerProducts data={data ? data :[]}/>
      
    </div>
  );
}