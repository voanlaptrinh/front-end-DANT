import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import { isAuthenticate, logout, signin } from "../../api/auth";
import { useAppDispatch } from "../../app/store";

type Props = {};

const Header = (props: Props) => {
  const user = isAuthenticate();
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSignin: SubmitHandler<any> = async (user: any) => {
    const { data } = await signin(user);
    localStorage.setItem('user', JSON.stringify(data));
    console.log(data);
    if (data.data) {
      if (data.data.role_id == 1) {
        navigate('/');
        return true
      }
      if (data.data.role_id == 2) {
        navigate('/employer');
        return true
      }
    }
  }
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
                  <li>
                    <a
                      href="#"
                      data-toggle="modal"
                      data-target="#login"
                      className="theme-cl fs-lg"
                    >
                      <i className="lni lni-user" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="dashboard-post-job.html"
                      className="crs_yuo12 w-auto text-white theme-bg"
                    >
                      <span className="embos_45">
                        <i className="fas fa-plus-circle mr-1 mr-1" />
                        Post Job
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="nav-menus-wrapper"
              style={{ transitionProperty: "none" }}
            >
              <ul className="nav-menu">
                <li>
                  <a href="#">Home</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
                      <a href="index.html">Home 1</a>
                    </li>
                    <li>
                      <a href="home-2.html">Home 2</a>
                    </li>
                    <li>
                      <a href="home-3.html">Home 3</a>
                    </li>
                    <li>
                      <a href="home-4.html">Home 4</a>
                    </li>
                    <li>
                      <a href="home-5.html">Home 5</a>
                    </li>
                    <li>
                      <a href="home-6.html">Home 6</a>
                    </li>
                    <li>
                      <a href="home-7.html">Home 7</a>
                    </li>
                    <li>
                      <a href="home-8.html">Home 8</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="javascript:void(0);">Find Job</a>
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
                      <a href="javascript:void(0);">Map Styles</a>
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
                      <a href="javascript:void(0);">Single Job</a>
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
                  <a href="javascript:void(0);">Candidates</a>
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
                  <a href="javascript:void(0);">Employers</a>
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
                <li>
                  <a href="javascript:void(0);">Pages</a>
                  <ul className="nav-dropdown nav-submenu">
                    <li>
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
              <ul className="nav-menu nav-menu-social align-to-right">
                <li>
                  {
                    user ? <li className="nav-item d-flex align-items-center">
                      <p className='text-white'>Xin chào, {user.email}</p>
                      <div className="nav-item">
                        <a className="btn btn-success" onClick={() => logout()}>Đăng xuất</a>
                      </div>
                    </li>
                      : <li className="nav-item d-flex align-items-center">
                        <div className="nav-item">
                          <a className="btn btn-success" data-toggle="modal"
                            data-target="#login"> Đăng nhập </a>
                        </div>
                      </li>
                  }
                </li>
                <li className="add-listing theme-bg">
                  <a data-toggle="modal" data-target="#exampleModal">
                    <i className="lni lni-circle-plus mr-1" /> Post a Job
                  </a>
                </li>
              </ul>
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
                      <i className="bnc-ico lni lni-search-alt" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i className="bnc-ico lni lni-target" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0">
                        <option value={1}>Choose Location</option>
                        <option value={2}>Los Angeles</option>
                        <option value={3}>San Francisco</option>
                        <option value={4}>San Diego</option>
                        <option value={5}>Philadelphia</option>
                        <option value={6}>Denver</option>
                        <option value={7}>Houston</option>
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
      <div
        className="modal fade"
        id="login"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="loginmodal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-xl login-pop-form" role="document">
          <div className="modal-content" id="loginmodal">
            <div className="modal-headers">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span className="ti-close" />
              </button>
            </div>
            <div className="modal-body p-5">
              <div className="text-center mb-4">
                <h2 className="m-0 ft-regular">Login</h2>
              </div>
              <form method="POST" onClick={handleSubmit(onSignin)}>
                <div className="form-group">
                  <label>email</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="email*"
                    {...register("email", { required: "bạn chưa nhập email" })}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password*"
                    {...register("password", { required: "bạn chưa nhập mật khẩu" })}
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
      {/* End Modal */}

      {/* modal đăng ký */}
      <div>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Chào bạn,
                  <div><span>Để có được trải nghiệm tốt nhất mới bạn chọn bên mà mình muôn đăng ký</span></div>
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span className="ti-close" />
                </button>              </div>
              <div className="modal-body">
                <div className='can'>
                  <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714594/news3_bcvsak.png" alt="" />
                </div>
                <div className='can'>
                  <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714594/news3_bcvsak.png" alt="" />
                </div>
                <div>
                  <a href="/login/signupempoly" className="btn btn-primary">Nhà tuyển dụng</a>
                </div>
                <div>
                  <a href="/login/signupcandidate" className="btn btn-primary">Ứng viên</a>
                </div>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
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
