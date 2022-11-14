import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Header2 from "../../layout/DefaultLayout/Header2/Header2";
import { signup } from "../../api/auth";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import images from "../../images/sec-safe.png";

type Props = {};

interface FormValues {
  id: number;
  fullName: string;
  email: string;
  password: string;
  comfirmPassword: string;
  phone: number;
  namecompany: string;
  workplace: string;
  address: string;
}

const schema = yup
  .object({
    fullName: yup.string().required("Vui lòng nhập tên"),
    phone: yup
      .number()
      .typeError("Vui lòng nhập số điện thoại")
      .required("Please provide plan cost.")
      .min(5, "Too little"),
    // .max(11, "Tuyệt vời"),
    namecompany: yup.string().required("Vui lòng nhập tên công ty"),
    workplace: yup.string().required("Vui lòng nhập tên địa chỉ công ty"),
    address: yup.string().required("Vui lòng nhập chức vụ"),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Không đúng định dạng email"),

    password: yup.string().required("Vui lòng nhập mật khẩu"),
    comfirmPassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
  })
  .required();

const Signupemployer = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const onSignup: SubmitHandler<FormValues> = async (formData: any) => {
    const { data } = await signup(formData);
    // console.log(data);
    // navigate("/homecan")
  };
  return (
    // <div className="container float-right btn-login d-block w-100">
    //   <div className="container-fluid">
    //     <div className="container-fluid login-fluid clear-right">
    //       <div className="">
    //         {/* login header */}
    //         <div className="container">
    //           <div className="login-header">
    //             <div className="container w-login m-auto">
    //               {/*  */}
    //               <div className="container">
    //                 <Header2 />
    //               </div>
    //             </div>
    //           </div>
    //           <blockquote className="blockquote text-center">
    //             <p className="mb-0">
    //               Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    //               Integer posuere erat a ante.
    //             </p>
    //             {/* <footer className="blockquote-footer">
    //               Someone famous in
    //               <cite title="Source Title">Source Title</cite>
    //             </footer> */}
    //           </blockquote>
    //         </div>
    //         {/* (end) login header */}
    //         <div className="clearfix" />
    //         <div className="padding-top-100" />
    //         {/* login main */}
    //         <div className="login-main">
    //           <div className=" w-login m-auto">
    //             <div>

    //             </div>
    //             {/* login main descriptions */}
    //             <form method="POST" onSubmit={handleSubmit(onSignup)}>
    //               <div className="row w-100">
    //                 <div className="col-md-6 col-sm-12 col-12 login-main-left">
    //                   <input type="text" hidden value="2" {...register("id")} />
    //                   <div className="">
    //                     <div className="">
    //                       <div className="form-group">
    //                         <input
    //                           type="text"
    //                           className="form-control rounded"
    //                           placeholder="họ tên người đăng ký"
    //                           {...register("fullName", { required: true })}
    //                         />
    //                       </div>
    //                       <p className="text-danger pt-1">
    //                         {errors.fullName?.message}
    //                       </p>
    //                     </div>
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="Địa Chỉ Email của công ty"
    //                         {...register("email", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.email?.message}
    //                     </p>
    //                   </div>
    //                   <div className="">
    //                     <div className="form-group">
    //                       <input
    //                         type="password"
    //                         className="form-control rounded"
    //                         placeholder="mật khẩu "
    //                         {...register("password", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.password?.message}
    //                     </p>
    //                   </div>
    //                   <div className="">
    //                     <div className="form-group">
    //                       <input
    //                         type="password"
    //                         className="form-control rounded"
    //                         placeholder="nhập lại mật khẩu"
    //                         {...register("comfirmPassword", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.comfirmPassword?.message}
    //                     </p>
    //                   </div>
    //                 </div>
    //                 <div className="col-md-6 col-sm-12 col-12 login-main-right">
    //                   <div className="">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhập số điện thoại"
    //                         {...register("phone", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.phone?.message}
    //                     </p>
    //                   </div>
    //                   <div className="">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhập tên công ty"
    //                         {...register("namecompany", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.namecompany?.message}
    //                     </p>
    //                   </div>
    //                   <div className="">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhập địa chỉ công ty"
    //                         {...register("workplace", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.workplace?.message}
    //                     </p>
    //                   </div>
    //                   <div className="">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhận chức vụ trong công ty"
    //                         {...register("address", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.address?.message}
    //                     </p>
    //                   </div>
    //                   <div className="form-group d-block frm-text">
    //                     <a href="#" className="fg-login d-inline-block" />
    //                     <a
    //                       href="#"
    //                       className="fg-login float-right d-inline-block"
    //                     >
    //                       Bạn đã có tài khoản? Đăng Nhập
    //                     </a>
    //                   </div>
    //                   <button
    //                     type="submit"
    //                     className="btn btn-success float-right btn-login d-block w-100"
    //                   >
    //                     Đăng Ký Nhà Tuyển Dụng
    //                   </button>
    //                   <div className="form-group d-block w-100 mt-5">
    //                     <div className="text-or text-center">
    //                       <span>Hoặc</span>
    //                     </div>
    //                     <div className="row">
    //                       <div className="col-sm-6 ">
    //                         <button className="btn btn-primary btn-login-facebook btnw w-100 float-left">
    //                           <FacebookOutlined />
    //                           <span> Đăng nhập bằng Facebook</span>
    //                         </button>
    //                       </div>
    //                       <div className="col-sm-6 col-12 pl-7">
    //                         <button className="btn btn-danger btn-login-google btnw w-100 float-left">
    //                           <GoogleOutlined />
    //                           <span> Đăng nhập bằng Google</span>
    //                         </button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </form>
    //             {/* login main form */}
    //             {/* <div className="col-md-6 col-sm-12 col-12 login-main-right">
    //                 <form
    //                   className="login-form reg-form"
    //                   method="POST"
    //                   onSubmit={handleSubmit(onSignup)}
    //                 >
    //                   <div className="login-main-header">
    //                     <h3>Đăng Ký Tài Khoản Nhà Tuyển Dụng</h3>
    //                   </div>
    //                   <div className="reg-info">
    //                     <h3>Tài khoản</h3>
    //                   </div>

    //                   <input type="text" hidden value="2" {...register("id")} />
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="Địa Chỉ Email của công ty"
    //                         {...register("email", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.email?.message}
    //                     </p>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="password"
    //                         className="form-control rounded"
    //                         placeholder="mật khẩu "
    //                         {...register("password", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.password?.message}
    //                     </p>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="password"
    //                         className="form-control rounded"
    //                         placeholder="nhập lại mật khẩu"
    //                         {...register("comfirmPassword", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.comfirmPassword?.message}
    //                     </p>
    //                   </div>
    //                   <div className="reg-info">
    //                     <h3>Công ty</h3>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="họ tên người đăng ký"
    //                         {...register("fullName", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.fullName?.message}
    //                     </p>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhập số điện thoại"
    //                         {...register("phone", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.phone?.message}
    //                     </p>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhập tên công ty"
    //                         {...register("namecompany", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.namecompany?.message}
    //                     </p>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhập địa chỉ công ty"
    //                         {...register("workplace", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.workplace?.message}
    //                     </p>
    //                   </div>
    //                   <div className="col-xl-6 col-lg-6 col-md-6">
    //                     <div className="form-group">
    //                       <input
    //                         type="text"
    //                         className="form-control rounded"
    //                         placeholder="nhận chức vụ trong công ty"
    //                         {...register("address", { required: true })}
    //                       />
    //                     </div>
    //                     <p className="text-danger pt-1">
    //                       {errors.address?.message}
    //                     </p>
    //                   </div>
    //                   <div className="form-group d-block frm-text">
    //                     <a href="#" className="fg-login d-inline-block" />
    //                     <a
    //                       href="#"
    //                       className="fg-login float-right d-inline-block"
    //                     >
    //                       Bạn đã có tài khoản? Đăng Nhập
    //                     </a>
    //                   </div>
    //                   <button
    //                     type="submit"
    //                     className="btn btn-success float-right btn-login d-block w-100"
    //                   >
    //                     Đăng Ký Nhà Tuyển Dụng
    //                   </button>
    //                   <div className="form-group d-block w-100 mt-5">
    //                     <div className="text-or text-center">
    //                       <span>Hoặc</span>
    //                     </div>
    //                     <div className="row">
    //                       <div className="col-sm-6 col-12 pr-7">
    //                         <button className="btn btn-primary btn-login-facebook btnw w-100 float-left">
    //                         <FacebookOutlined />
    //                           <span> Đăng nhập bằng Facebook</span>
    //                         </button>
    //                       </div>
    //                       <div className="col-sm-6 col-12 pl-7">
    //                         <button className="btn btn-danger btn-login-google btnw w-100 float-left">
    //                           <GoogleOutlined/>
    //                           <span> Đăng nhập bằng Google</span>
    //                         </button>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 </form>
    //               </div> */}
    //           </div>
    //         </div>
    //         {/* (end) login main */}
    //       </div>
    //     </div>
    //     <footer className="login-footer">
    //       <div className="w-login m-auto">
    //         <div className="row">
    //           {/* login footer left */}

    //           {/* login footer right */}
    //         </div>
    //       </div>
    //     </footer>
    //   </div>
    // </div>
    <div className="container">
      <blockquote className="blockquote text-center ">
        <p className="mb-0">
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
        </p>
        <footer className="blockquote-footer">
          Đăng kí nhà tuyển dụng
        </footer>
      </blockquote>
      <section className="middle">
        <div className="container container-empoloyer">
          <div className="row">
            {/* login main descriptions */}
            <div className="col-md-6 login-main-left can1">
              <img src={images} alt="" />
              {/* Nhét ảnh vào đây */}
            </div>
            {/* login main form */}
            <form method="POST" onSubmit={handleSubmit(onSignup)}>
              <div className="row w-100 item-login">
                <div className="col-md-6 col-sm-12 col-12 login-main-left">
                  <input type="text" hidden value="2" {...register("id")} />
                  <div className="">
                    <div className="">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control rounded"
                          placeholder="họ tên người đăng ký"
                          {...register("fullName", { required: true })}
                        />
                      </div>
                      <p className="text-danger pt-1">
                        {errors.fullName?.message}
                      </p>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="Địa Chỉ Email của công ty"
                        {...register("email", { required: true })}
                      />
                    </div>
                    <p className="text-danger pt-1">
                      {errors.email?.message}
                    </p>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control rounded"
                        placeholder="mật khẩu "
                        {...register("password", { required: true })}
                      />
                    </div>
                    <p className="text-danger pt-1">
                      {errors.password?.message}
                    </p>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <input
                        type="password"
                        className="form-control rounded"
                        placeholder="nhập lại mật khẩu"
                        {...register("comfirmPassword", { required: true })}
                      />
                    </div>
                    <p className="text-danger pt-1">
                      {errors.comfirmPassword?.message}
                    </p>
                  </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12 login-main-right">
                  <div className="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="nhập số điện thoại"
                        {...register("phone", { required: true })}
                      />
                    </div>
                    <p className="text-danger pt-1">
                      {errors.phone?.message}
                    </p>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="nhập tên công ty"
                        {...register("namecompany", { required: true })}
                      />
                    </div>
                    <p className="text-danger pt-1">
                      {errors.namecompany?.message}
                    </p>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="nhập địa chỉ công ty"
                        {...register("workplace", { required: true })}
                      />
                    </div>
                    <p className="text-danger pt-1">
                      {errors.workplace?.message}
                    </p>
                  </div>
                  <div className="">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="nhận chức vụ trong công ty"
                        {...register("address", { required: true })}
                      />
                    </div>
                    <p className="text-danger pt-1">
                      {errors.address?.message}
                    </p>
                  </div>
                  <div className="form-group d-block frm-text">
                    <a href="#" className="fg-login d-inline-block" />
                    <a
                      href="#"
                      className="fg-login float-right d-inline-block"
                    >
                      Bạn đã có tài khoản? Đăng Nhập
                    </a>
                  </div>
                  <button
                    type="submit"
                    className=" btn btn-success float-right btn-login d-block w-100 cocaicc"
                  >
                    Đăng Ký Nhà Tuyển Dụng
                  </button>
                  
                </div>
                
                <div className="form-group item-dnhap ">
                  <br />
                    <div className="text-or text-center">
                      <span>Hoặc</span>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col ">
                        <button className="btn  btn-login-facebook  fb-empoly">
                          <FacebookOutlined className="fbIcon"/>
                          <span> Facebook</span>
                        </button>
                      </div>
                      <div className="col ">
                        <button className="btn  btn-login-google  gg-empoly">
                          <GoogleOutlined className="ggIcon"/>
                          <span>  Google</span>
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </form>
            {/* login main form */}
          </div>
        </div>
      </section>

      <div>
        <footer className="login-footer">
          <div className="w-login m-auto">
            <div className="row">
              {/* login footer left */}
              <div className="col-md-6 col-sm-12 col-12 login-footer-left">
                <div className="login-copyright">
                  <p>
                    Copyright © 2020 <a href="#"> TechJobs</a>. All Rights
                    Reserved.
                  </p>
                </div>
              </div>
              {/* login footer right */}
              <div className="col-md-6 col-sm-12 col-12 login-footer-right ml-5">
                <ul>
                  <li>
                    <a href="#">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Signupemployer;
