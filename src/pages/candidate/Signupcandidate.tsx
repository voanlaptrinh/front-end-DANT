import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useDispatch } from 'react-redux'
// import Header2 from "../../components/candidate/Header2";
// import { signUpByUser } from '../../features/auth/authSlice'
// import Logo from '../../assets/images/logo.jpg';
import images from "../../images/sec-safe.png";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";

type Props = {};
interface FormValues {
  id: number;
  fullName: string;
  email: string;
  password: string;
  comfirmPassword: string;
}

const schema = yup
  .object({
    fullName: yup.string().required("Vui lòng nhập tên"),
    email: yup
      .string()
      .required("Vui lòng nhập email")
      .email("Không đúng định dạng email"),
    password: yup.string().required("Vui lòng nhập mật khẩu"),
    comfirmPassword: yup
      .string()
      .required("Vui lòng nhập mật khẩu")
      .oneOf([yup.ref("password"), null], "Mật khẩu không trùng khớp"),
    // .val([yup.ref('password'),(val.length == 0 || (val.length >= 2 && val.length <= 10)])
  })
  .required();

const Signupcandidate = (props: Props) => {
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
    <div  className="container">
      <blockquote className="blockquote text-center ">
        <p className="mb-0">
        Cùng xây dựng một hồ sơ nổi bật và nhận được các cơ hội sự nghiệp lý tưởng
        </p>
        <footer className="blockquote-footer">
          Đăng kí <cite title="Source Title">Ứng viên</cite>
        </footer>
      </blockquote>
      <section className="middle">
        <div className="container">
          <div className="row">
            {/* login main descriptions */}
            <div className="col-md-6 login-main-left can1">
              <img src={images} alt="" />
              {/* Nhét ảnh vào đây */}
            </div>
            {/* login main form */}
            <div className="col-md-6 login-main w-100 item-login">
              <form
                className="login-form reg-form"
                method="POST"
                onSubmit={handleSubmit(onSignup)}
              >
                
                <input type="text" hidden value="1" {...register("id")} />
                <div className=" ">
                  <label htmlFor="fullName" className="fs-6 fw-normal py-2">
                    Họ và tên
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nhập họ và tên của bạn"
                      {...register("fullName", { required: true })}
                    />
                  </div>
                  <p className="text-danger pt-1">{errors.fullName?.message}</p>
                </div>
                <div className="">
                  <label htmlFor="email" className="fs-6 fw-normal py-2">
                    Email
                  </label>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control rounded"
                      placeholder="Nhập email của bạn"
                      {...register("email", { required: true })}
                    />
                  </div>
                  <p className="text-danger pt-1">{errors.email?.message}</p>
                </div>
                <div className="">
                  <label htmlFor="password" className="fs-6 fw-normal py-2">
                    Mật khẩu
                  </label>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control rounded"
                      placeholder="Nhập mật khẩu của bạn"
                      {...register("password", { required: true })}
                    />
                  </div>
                  <p className="text-danger pt-1">{errors.password?.message}</p>
                </div>
                <div className="">
                  <label
                    htmlFor="comfirmPassword"
                    className="fs-6 fw-normal py-2"
                  >
                    Nhập lại mật khẩu
                  </label>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control rounded"
                      placeholder="Nhập lại mật khẩu của bạn"
                      {...register("comfirmPassword", { required: true })}
                    />
                  </div>
                  <p className="text-danger pt-1">
                    {errors.comfirmPassword?.message}
                  </p>
                </div>
                <div className="form-group d-block frm-text">
                  <a href="#" className="fg-login d-inline-block" />
                  
                  <a href="#" className="fg-login float-right d-inline-block">
                    Bạn đã có tài khoản? Đăng Nhập
                  </a>
                </div>
                <button
                  type="submit"
                  className=" btn float-right btn-login d-block w-100 cocaicc"
                  
                >
                  Đăng Ký
                </button><br />
                <div className="form-group d-block w-100 mt-5">
                  <div className="text-or text-center">
                    <span>Hoặc</span>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-sm-6 col-12 pr-7">
                      <button className="btn  btn-login-facebook d-block w-100 float-left fb" >
                      <FacebookOutlined className="fbIcon" />
                        <span> Facebook</span>
                      </button>
                    </div>
                   
                    <div className="col-sm-6 col-12 pl-7">
                      <button className="btn  btn-login-google btnw w-100 float-left gg">
                      <GoogleOutlined className="ggIcon"/>
                        <span> Google</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
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
              <div className="col-md-6 col-sm-12 col-12 login-footer-right ml-5 ">
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

export default Signupcandidate;
