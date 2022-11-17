import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import Header2 from "../../layout/DefaultLayout/Header/Header2";
import { signup } from "../../api/auth";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import images from "../../assets/images/sec-safe.png";

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
    console.log(data.message);
    // window.location.href = "/"
    if (data.status == 200) {
      Swal.fire({
        icon: 'success',
        title: 'Đăng kí thành công!',
        text: 'Ấn Oke để tiếp tục đăng kí!',
        footer: '<a href="/">Mời bạn đăng nhập </a>'
      })
  
      return true;
    } else {
      toast.error(data.message);
    }
  };
  return (
    <div className="container">
      <blockquote className="blockquote text-center ">
        <p className="mb-0">
          Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý
          tưởng
        </p>
        <footer className="blockquote-footer">Đăng kí nhà tuyển dụng</footer>
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
                    <p className="text-danger pt-1">{errors.email?.message}</p>
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
                    <p className="text-danger pt-1">{errors.phone?.message}</p>
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
                    <a href="/" className="fg-login float-right d-inline-block">
                      Bạn đã có tài khoản? Đăng Nhập
                    </a>
                  </div>
                </div>

                <div className="form-group item-dnhap ">
                  <button
                    type="submit"
                    className=" btn btn-success btn-login d-block cocaicc"
                  >
                    Đăng Ký Nhà Tuyển Dụng
                  </button>
                  <br />
                  <div className="text-or text-center">
                    <span>Hoặc</span>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col ">
                      <button className="btn  btn-login-facebook  fb-empoly">
                        <FacebookOutlined className="fbIcon" />
                        <span> Facebook</span>
                      </button>
                    </div>
                    <div className="col ">
                      <button className="btn  btn-login-google  gg-empoly">
                        <GoogleOutlined className="ggIcon" />
                        <span> Google</span>
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
