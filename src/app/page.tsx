import HederMain from "@/components/herderMain/HerderMain";
import HomePage from "@/components/home/Home";

export default async function home() {
  let data = [];

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 20000); 

  try {
    const res = await fetch('https://be-e-commerce-tohe.onrender.com/api/products/getAllProducts', {
      cache: "no-store",
      signal: controller.signal,
    });
    clearTimeout(timeoutId); 
    const ress = await res.json();
    data = ress.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="bg-slate-200 overflow-x-auto">
      <div className=" ">
        <HederMain />
      </div>
      <div className=" ">
        <HomePage data={data} />
      </div>
    </div>
  );
}

