import {
  DownOutlined,
  FileAddFilled,
  LoginOutlined,
  UploadOutlined,
  UserOutlined,
  UserSwitchOutlined,
} from "@ant-design/icons";
import { Select } from "antd";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { isAuthenticate, logout, signin } from "../../api/auth";
import { listCandidate, listNews } from "../../api/home";
import { useAppDispatch } from "../../app/store";

type Props = {};

const Header2 = (props: Props) => {


  const user = isAuthenticate();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  // console.log(getAllSkill.skill);

  const onSignin: SubmitHandler<any> = async (user: any) => {
    const { data } = await signin(user);
    localStorage.setItem("user", JSON.stringify(data));
    console.log(data);
    if (data.data) {
      if (data.data.role_id == 1) {
        navigate("http://127.0.0.1:5173/");
        return true;
      }
      if (data.data.role_id == 2) {
        
        navigate("http://127.0.0.1:5173/admin");
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
              <div className="mobile_nav text-muted">
                <ul>
                  {user ? (
                    <>
                      <a
                        className="text-muted"
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
                        <a
                          className="dropdown-item"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <UserSwitchOutlined /> Thông tin
                        </a>
                        <a
                          className="dropdown-item"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <FileAddFilled /> Job của bạn
                        </a>
                        <a
                          className="dropdown-item"
                          data-toggle="modal"
                          data-target="#exampleModal"
                        >
                          <UploadOutlined /> Post a Job
                        </a>
                        <button className="dropdown-item logout">
                          <a className="" onClick={() => logout()}>
                            <LoginOutlined /> Đăng xuất
                          </a>
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
              <ul className="nav-menu ">
                <li>
                  <a href="#">Home</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="">Home 1</a>
                    </li>
                    <li>
                      <a href="">Home 2</a>
                    </li>
                    <li>
                      <a href="">Home 3</a>
                    </li>
                    <li>
                      <a href="">Home 4</a>
                    </li>
                    <li>
                      <a href="">Home 5</a>
                    </li>
                    <li>
                      <a href="">Home 6</a>
                    </li>
                    <li>
                      <a href="">Home 7</a>
                    </li>
                    <li>
                      <a href="">Home 8</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">Find Job</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="">Job Search V1</a>
                    </li>
                    <li>
                      <a href="">Job Search V2</a>
                    </li>
                    <li>
                      <a href="">Job Search V3</a>
                    </li>
                    <li>
                      <a href="">Job Search V4</a>
                    </li>
                    <li>
                      <a href="">Job Search V5</a>
                    </li>
                    <li>
                      <a href="">Job Search V6</a>
                    </li>
                    <li>
                      <a href="">Map Styles</a>
                      <ul className="nav-dropdown nav-submenu">
                        <li>
                          <a href="">Search On Map V1</a>
                        </li>
                        <li>
                          <a href="">Search On Map V2</a>
                        </li>
                        <li>
                          <a href="">Search On Map V3</a>
                        </li>
                        <li>
                          <a href="">Search On Map V4</a>
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
                  <a href="">Candidates</a>
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
                <li>
                  <a href="">Employers</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="browse-employers.html">Browse Employers V1</a>
                    </li>
                    <li>
                      <a href="browse-employers-list.html">
                        Browse Employers V2
                      </a>
                    </li>
                    <li>
                      <a href="employer-detail.html">Employer Detail</a>
                    </li>
                    <li>
                      <a href="employer-dashboard.html">Employer Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li className="text-muted">
                  <a href="">Pages</a>
                  <ul className="nav-dropdown nav-submenu ">
                    <li className="">
                      <a href="blog.html">Blog Style</a>
                    </li>
                    <li>
                      <a href="about-us.html">About Us</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                    <li>
                      <a href="404.html">404 Page</a>
                    </li>
                    <li>
                      <a href="privacy.html">Privacy Policy</a>
                    </li>
                    <li>
                      <a href="faq.html">FAQs</a>
                    </li>
                    <li>
                      <a href="docs.html">Docs</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="dropdown align-to-right top">
              {user ? (
                <>
                  <a
                    className="text-muted"
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
                    <a
                      className="dropdown-item"
                      data-toggle="modal"
                      data-target=""
                    >
                      <UserSwitchOutlined /> Thông tin
                    </a>
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
                      <a className="" onClick={() => logout()}>
                        <LoginOutlined /> Đăng xuất
                      </a>
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
                  <span className="ti-close" />
                </button>
              </div>
              <div className="p-5 rounded mx-auto d-block ">
                <form method="POST" onClick={handleSubmit(onSignin)}>
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
                  <span className="ti-close" />
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

export default Header2;
