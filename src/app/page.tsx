import HederMain from "@/components/herderMain/HerderMain";
import HomePage from "@/components/home/Home";
import { HomePageProps } from "@/components/home/Home";

export async function getServerSideProps() {
  let data = [];
  try {
    const res = await fetch(`${process.env.URL}/products/getAllProducts`, { cache: "no-store" });
    const ress = await res.json();
    data = ress.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }:HomePageProps) {
  return (
    <div className="bg-slate-200 overflow-x-auto">
      <div><HederMain /></div>
      <div><HomePage data={data} /></div>
    </div>
  );
}
