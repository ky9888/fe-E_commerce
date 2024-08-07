import ProductDetail from "../../../components/product/ProductDetail";

export type ProductType = {
  _id: string;
  name: string;
  selectImg: SelectImgType;
};

export type SelectImgType = {
  title: string;
  image: string;
};

export default async function Home({
  params: { id }
}: {
  params: { id: string };
}) {
  try {
    const res = await fetch(`${process.env.URL}/products/getDetailProducts/${id}`, { cache: "no-store" });

    if (!res.ok) {
      throw new Error(`Lỗi khi lấy dữ liệu sản phẩm: ${res.statusText}`);
    }

    const ress = await res.json();
    const data: ProductType = ress.data;
    console.log("check data", data);

    return (
      <>
        <ProductDetail data={data} />
      </>
    );
  } catch (error) {
    console.error('Đã xảy ra lỗi khi lấy chi tiết sản phẩm:', error);
    // Bạn có thể chọn cách xử lý lỗi khác như hiển thị một thông báo lỗi cho người dùng
    return <div>Đã xảy ra lỗi khi tải dữ liệu sản phẩm.</div>;
  }
}
