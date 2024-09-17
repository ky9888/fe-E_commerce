import HederMain from "@/components/herderMain/HerderMain";
import HomePage from "@/components/home/Home";

export default async function home() {
  let data = [];

  try {
    const res = await fetch(`${process.env.URL}/products/getAllProducts`, { cache: "no-store" });
    const ress = await res.json();
    data = ress.data;
    console.log("check data", data);
  } catch (error) {
    console.error("Error fetching data:", error);import HederMain from "@/components/herderMain/HerderMain";
import HomePage from "@/components/home/Home";

export default async function home() {
  let data = [];

  const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 9000); // Timeout after 9 seconds

try {
  const res = await fetch(`${process.env.URL}/products/getAllProducts`, { 
    cache: "no-store", 
    signal: controller.signal 
  });
  clearTimeout(timeoutId); // Clear the timeout if the request completes
  const ress = await res.json();
  data = ress.data;
} catch (error) {
  console.error("Error fetching data:", error);
}

  return (
    <div className="bg-slate-200 overflow-x-auto">
      <div className=" "><HederMain/></div>
      <div className=" "><HomePage data={data} /></div>
    </div>
  );
}
  }

  return (
    <div className="bg-slate-200 overflow-x-auto">
      <div className=" "><HederMain/></div>
      <div className=" "><HomePage data={data} /></div>
    </div>
  );
}
