"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useRef, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { GrGoogle } from "react-icons/gr";
import axios from "axios";
import { useRouter } from "next/navigation";
import dotenv from "dotenv";
dotenv.config();

type register = {
  userName: string;
  email: string;
  password: string;
};
const RegisterForm: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const router=useRouter()
  useEffect(() => {
    if (inputRef.current) {     
      inputRef.current.focus();
    }
  }, []);

  const formik = useFormik<register>({
    initialValues: {
      userName:"",
      email:"",
      password:"",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Không được để trống")
        .min(4, "Phải có ít nhất 4 kí tự"),
      email: Yup.string()
        .required("Không được để trống")
        .matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Email không đúng "),
      password: Yup.string()
        .required("Không được để trống")
        .matches(
          /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
          "Password phải có 8 ký tự,có ít nhất 1 chữ cái và 1 chứ số"
        ),
    }),
    onSubmit: (values) => {
     
       console.log(values);
         axios({
           method: 'POST',
           url: `${process.env.URL}/auth/singup`,
           data: values
         })
           .then(function (res) {
              console.log(res)
              alert('Đăng ký thành công');
              router.push("/login")
             
           })
           .catch(function (res) {
              console.log(res)
              alert("Email đã tồn tại")
         });
     },
  });

  return (
    <div className=" w-screen flex justify-center my-[5%] px-[30%] max-lg:px-[7%] ">
      <form
        className="rounded-lg space-y-2 w-full h-full shadow-[0_0px_70px_-5px_rgba(0,0,0,0.1)] p-5"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-center font-bold text-[23px]">Đăng ký</h1>
       
        <div className="border border-slate-400 rounded-md p-2 ">
          <label htmlFor="name" className="text-slate-700 px-1 ">
            Tên đăng ký
          </label>
          <br />
          <input
            autoComplete="off"
            id="name"
            ref={inputRef}
            name="userName"
            onChange={formik.handleChange}
            value={formik.values.userName}
            className="  outline-0 w-full p-1 text-[14px]"
            type="text"
            placeholder="Tên đăng ký"
          />
          {formik.errors.userName && (
            <span className="text-red-500 text-[12px] font-normal ">
              {formik.errors.userName}
            </span>
          )}
        </div>
        <div className="border border-slate-400 rounded-md p-2">
          <label className="text-slate-700 px-1 " htmlFor="email">
            Email
          </label>
          <br />
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className="outline-0 w-full p-1 text-[14px] "
            type="email"
            placeholder="Email"
          />
          {formik.errors.email && (
            <span className="text-red-500 text-[12px] font-normal ">
              {formik.errors.email}
            </span>
          )}
        </div>
        <div className="border border-slate-400 rounded-md p-2">
          <label
            
            className="text-slate-700 px-1"
            htmlFor="password"
          >
            Mật khẩu
          </label>
          <br />
          <div className="flex">
            <input
              id="password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full outline-0 p-1 text-[14px]"
              type={!visible ? "text" : "password"}
              placeholder="Mật khẩu"
            />
            <button onClick={() => setVisible(!visible)}>
              {visible ? (
                <FontAwesomeIcon icon={faEye} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} />
              )}
            </button>
          </div>
          {formik.errors.password && (
            <span className="text-red-500 text-[12px] font-normal ">
              {formik.errors.password}
            </span>
          )}
        </div>

        <div className="flex bg-slate-600 text-slate-100 justify-center pt-2 border border-slate-400 rounded-md py-2 px-5 hover:bg-slate-500    ">
          <button className="" type="submit">
            Xác nhận
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
