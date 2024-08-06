import HederMain from "@/components/herderMain/HerderMain";
import HomePage from "@/components/home/Home";

export default async function home() {
  let data = [];

  try {
    const res = await fetch(`${process.env.URL}/products/getAllProducts/?name=watch`, { cache: "no-store" });
    const ress = await res.json();
    data = ress.data;
    console.log("check data", data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <div className="bg-slate-200 overflow-x-auto">
      <div><HederMain /></div>
      <div><HomePage data={data} /></div>
    </div>
  );
}
