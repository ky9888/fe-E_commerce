const Footer = () => {
    return (
        <footer className="bg-slate-800 py-16 text-slate-300 ">
          <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
              {/* <img alt="logo" src={Logo} /> */}
              <p className="my-5">
              Dịch vụ chăm sóc khách hàng tốt nhất là khi khách hàng không cần gọi cho bạn, không cần nói chuyện với bạn, mà dịch vụ đó chỉ đơn thuần diễn ra.
              </p>
              <p>© Đã đăng ký bản quyền</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Địa chỉ liên hệ</h4>
              <p className="my-5">Email: thegioirep-chuanrep@gmail.com</p>
              <p className="my-5">Phone: 0123555666</p>
              <p>Địa chỉ: Thành phố Hồ Chí Minh</p>
            </div>
            <div className="mt-16 basis-1/4 md:mt-0">
              <h4 className="font-bold">Liên hệ  chúng tôi</h4>
              <p className="my-5">Giải quyết các thắc mắc của bạn</p>
              <p>(333)425-6825</p>
            </div>
          </div>
        </footer>
      );
}
 
export default Footer;