import {
  CloseOutlined,
  DownOutlined,
  FileAddFilled,
  LoginOutlined,
  SearchOutlined,
  UploadOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticate, logout, signin } from "../../../api/auth";
import { listCandidate } from "../../../api/home";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type Props = {};

const Header = (props: Props) => {
  const [getAllSkill, setSkill] = useState<any>([]);
  const [getAllLocation, setLocation] = useState<any>([]);
  const navigate = useNavigate();
  const user = isAuthenticate();
  interface FormValues {
    email: string;
    password: string;
  }
  const schema = yup
    .object({
      email: yup
        .string()
        .required("Vui lòng nhập email")
        .email("Không đúng định dạng email"),
      password: yup.string().required("Vui lòng nhập mật khẩu"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    getSkill();
    getLocation();
  }, []);

  const getSkill = async () => {
    const { data } = await listCandidate();
    setSkill(data);
  };
  const getLocation = async () => {
    const { data } = await listCandidate();
    setLocation(data);
  };

  const onSignin: SubmitHandler<any> = async (user: any) => {
    const { data } = await signin(user);
    if (!(data.data)) {
     toast.error("Sai tài khoản hoặc mật khẩu");
    }else{
      localStorage.setItem("user", JSON.stringify(data));
      if (data.data.role_id == 1) {
        window.location.href ="/"
        // navigate("/");
        return true;
      }
      if (data.data.role_id == 2) {
        window.location.href ="/admin"
        // navigate("/admin");
        return true;
      }
    }
  };

  return (
    <div id="main-wrapper">
      {/* <!-- Start Navigation --> */}
      <div className="header header-transparent change-logo">
        <div className="container">
          <nav id="navigation" className="navigation navigation-landscape">
            <div className="nav-header">
              <a className="nav-brand static-logo" href="#">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583733/gd/logo-light_gmshg5.png"
                  className="logo"
                  alt=""
                />
              </a>
              <a className="nav-brand fixed-logo" href="#">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583733/gd/logo-light_gmshg5.png"
                  className="logo"
                  alt=""
                />
              </a>
              <div className="nav-toggle" />
              <div className="mobile_nav">
                <ul>
                  {user ? (
                    <>
                      <a
                        className="text-while"
                        type="button"
                        id="btnDropdownDemo"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <UserOutlined /> {user.name} <DownOutlined />
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="btnDropdownDemo"
                      >
                        <div>hello word</div>
                        {/* <Link
                          className="dropdown-item"
                          to={`profile`}
                        >
                          <UserSwitchOutlined /> Thông tin
                        </Link>
                        <Link className="dropdown-item" to={""}>
                          <FileAddFilled /> Job của bạn
                        </Link>
                        <Link className="dropdown-item" to={""}>
                          <UploadOutlined /> Post a Job
                        </Link> */}
                        <button className="dropdown-item logout">
                          <div onClick={() => logout()}>
                            <LoginOutlined /> Đăng xuất
                          </div>
                        </button>
                      </div>
                    </>
                  ) : (
                    <li className="nav-item d-flex align-items-center">
                      <div className="nav-item row nav-menu-social align-to-right">
                        <div className="nav-item">
                          <button
                            className="btn btn-success"
                            data-toggle="modal"
                            data-target="#login"
                          >
                            đăng nhập
                          </button>
                        </div>
                        <div className="nav-item">
                          <button
                            className="btn btn-primary"
                            data-toggle="modal"
                            data-target="#exampleModal"
                          >
                            đăng kí
                          </button>
                        </div>
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li>
                  <Link to="/product">Trang chủ</Link>
                </li>
                <li>
                  <Link to="job">Việc làm</Link>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="job-search-v1.html">Job Search V1</a>
                    </li>
                    <li>
                      <a href="job-search-v2.html">Job Search V2</a>
                    </li>
                    <li>
                      <a href="job-search-v3.html">Job Search V3</a>
                    </li>
                    <li>
                      <a href="job-list-v1.html">Job Search V4</a>
                    </li>
                    <li>
                      <a href="job-list-v2.html">Job Search V5</a>
                    </li>
                    <li>
                      <a href="job-list-v3.html">Job Search V6</a>
                    </li>
                    <li>
                      <a href="">Map Styles</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="job-half-map.html">Search On Map V1</a>
                        </li>
                        <li>
                          <a href="job-half-map-v2.html">Search On Map V2</a>
                        </li>
                        <li>
                          <a href="job-search-map-v1.html">Search On Map V3</a>
                        </li>
                        <li>
                          <a href="job-search-map-v2.html">Search On Map V4</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="">Single Job</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="single-job-1.html">Single Job V1</a>
                        </li>
                        <li>
                          <a href="single-job-2.html">Single Job V2</a>
                        </li>
                        <li>
                          <a href="single-job-3.html">Single Job V3</a>
                        </li>
                        <li>
                          <a href="single-job-4.html">Single Job V4</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="company">Công ty</Link>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="browse-jobs.html">Browse Jobs</a>
                    </li>
                    <li>
                      <a href="browse-resumes.html">Browse Resumes</a>
                    </li>
                    <li>
                      <a href="browse-category.html">Browse Categories</a>
                    </li>
                    <li>
                      <a href="candidate-detail.html">Candidate Detail</a>
                    </li>
                    <li>
                      <a href="candidate-dashboard.html">Candidate Dashboard</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="dropdown align-to-right top">
              {user ? (
                <>
                  <a
                    className="text-while"
                    type="button"
                    id="btnDropdownDemo"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <UserOutlined />
                    {user.name}
                    <DownOutlined />
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="btnDropdownDemo"
                  >
                    <Link
                      className="dropdown-item"
                      to={`profile/${user.token}`}
                    >
                      <UserSwitchOutlined /> Thông tin
                    </Link>
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target=""
                    >
                      <FileAddFilled /> Job của bạn
                    </a>
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target=""
                    >
                      <UploadOutlined /> Post a Job
                    </a>
                    <button className="dropdown-item">
                      <Link to="/" onClick={() => logout()}>
                        <LoginOutlined /> Đăng xuất
                      </Link>
                    </button>
                  </div>
                </>
              ) : (
                <ul className="nav-menu nav-menu-social align-to-right row">
                  <li className="nav-item d-flex align-items-center ">
                    <div className="nav-item">
                      <a
                        className="btn btn-success"
                        data-toggle="modal"
                        data-target="#login"
                      >
                        {" "}
                        Đăng nhập{" "}
                      </a>
                    </div>
                  </li>

                  <li className="nav-item d-flex align-items-center col-sm-4">
                    <div className="nav-item ">
                      <a
                        className="btn btn-primary"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        Đăng kí
                      </a>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </nav>
        </div>
      </div>
      {/* <!-- ======================= Home Banner ======================== --> */}
      <div
        className="home-banner margin-bottom-0"
        style={{
          background:
            "#00ab46 url(https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583728/gd/banner-5_rnetjw.jpg) no-repeat ",
        }}
        data-overlay={4}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  Explore More Than 10K+ Jobs
                </h1>
                <p className="fs-md ft-medium">
                  Hi Friends, Your Dream Jobs is Waiting in Your Local City
                </p>
              </div>
              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <SearchOutlined className="bnc-ico lni lni-search-alt"  />
          
                    </div>
                  </div>
                  {/* <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i className="bnc-ico lni lni-target" />
                    </div>
                  </div> */}
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0" name="" id="">
                        <option value="">Chọn Kĩ Năng</option>
                        {getAllSkill.skill?.map((item: any) => {
                          return (
                            <option value={item.id} key={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0">
                        <option value="">Chọn Vùng Miền</option>
                        {getAllLocation.location?.map((item: any) => {
                          return (
                            <option key={item.id} value={item.id}>
                              {item.name}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height-lg theme-bg text-white fs-md"
                        type="button"
                      >
                        Find Job
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* Log In Modal */}
      <div className="nav-item align-items-center">
        <div
          className="modal fade"
          id="login"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="loginmodal"
          aria-hidden="true"
        >
          <div className="modal-dialog row " role="document">
            <div className="modal-content mx-auto row" id="loginmodal">
              <div className="modal-headers">
                <button
                  type="button"
                  className="close "
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <CloseOutlined className="ti-close" />
                  {/* <span  /> */}
                </button>
              </div>
              <div className="p-5 rounded mx-auto d-block ">
                <form method="POST">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="email*"
                      {...register("email", {
                        required: "bạn chưa nhập email",
                      })}
                    />
                    <p className="text-danger pt-1">{errors.email?.message}</p>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password*"
                      {...register("password", {
                        required: "bạn chưa nhập mật khẩu",
                      })}
                    />
                    <p className="text-danger pt-1">
                      {errors.password?.message}
                    </p>
                  </div>
                  <div className="form-group">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="flex-1">
                        <input
                          id="dd"
                          className="checkbox-custom"
                          name="dd"
                          type="checkbox"
                        />
                        <label htmlFor="dd" className="checkbox-custom-label">
                          Remember Me
                        </label>
                      </div>
                      <div className="eltio_k2">
                        <a href="#" className="theme-cl">
                          Lost Your Password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <button
                      type="submit"
                      className="btn btn-md full-width theme-bg text-light fs-md ft-medium"
                      onClick={handleSubmit(onSignin)}
                    >
                      Login
                    </button>
                  </div>
                  <div className="form-group text-center mb-0">
                    <p className="extra">
                      Not a member?
                      <a href="#et-register-wrap" className="text-dark">
                        Register
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}

      {/* modal đăng ký */}
      <div>
        {/* Modal */}
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog row mx-auto" role="document">
            <div className="modal-content mx-auto d-block">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Chào bạn,
                  <div>
                    <span>
                      Để có được trải nghiệm tốt nhất mới bạn chọn bên mà mình
                      muốn đăng ký
                    </span>
                  </div>
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <CloseOutlined className="ti-close" />
                  {/* <span className="ti-close" /> */}
                </button>{" "}
              </div>
              <div className="modal-body">
                <div className="can">
                  <a href="/login/signupempoly">
                    <img
                      src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714594/news3_bcvsak.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="can">
                  <a href="/login/signupcandidate">
                    <img
                      src="https://www.tranphucable.com.vn/uploads/news/thumbs/hinh-anh-dep-ve-tuyen-dung012646338.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="btn-haz">
                  <a href="/login/signupempoly" className="btn btn-primary">
                    Nhà tuyển dụng
                  </a>
                </div>
                <div>
                  <a href="/login/signupcandidate" className="btn btn-primary">
                    Ứng viên
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end modal đăng ký */}
    </div>
  );
};

export default Header;
