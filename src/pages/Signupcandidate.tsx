import React from 'react'

type Props = {}

const Signupcandidate = (props: Props) => {
  return (
    <div><div>
      <div className="container-fluid login-fluid clear-left clear-right">
        <div className="login-container">
          {/* login header */}
          <div className="login-header">
            <div className="w-login m-auto">
              <div className="login-logo">
                <h3>
                  {/* <a href="#">Tech<span class="txb-logo">Jobs.</span></a> */}
                  <a href="#">
                    <img src="img/techjobs_bgw.png" alt="TechJobs" />
                  </a>
                </h3>
                <span className="login-breadcrumb"><em>/</em> Register</span>
              </div>
              <div className="login-right">
                <a href="#" className="btn btn-return">Return Home</a>
              </div>
            </div>
          </div>
          {/* (end) login header */}
          <div className="clearfix" />
          <div className="padding-top-90" />
          {/* login main */}
          <div className="login-main">
            <div className="w-login m-auto">
              <div className="row">
                {/* login main descriptions */}
                <div className="col-md-6 col-sm-12 col-12 login-main-left">
                  <img src="img/banner-login.png" />
                </div>
                {/* login main form */}
                <div className="col-md-6 col-sm-12 col-12 login-main-right">
                  <form className="login-form reg-form">
                    <div className="login-main-header">
                      <h3>Đăng Ký</h3>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <h5>Họ Và Tên<span className="req">*</span></h5>
                        <input type="text" className="input form-control-lgin" />
                      </div>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <h5>Địa Chỉ Email<span className="req">*</span></h5>
                        <input type="text" className="input form-control-lgin" />
                      </div>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <h5>Số điện thoại<span className="req">*</span></h5>
                        <input type="text" className="input form-control-lgin" />
                      </div>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <h5>Mật khẩu<span className="req">*</span></h5>
                        <input type="password" className="input form-control-lgin" />
                      </div>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <h5>Nhập Lại Mật khẩu<span className="req">*</span></h5>
                        <input type="password" className="input form-control-lgin" />
                      </div>
                    </div>
                    <div className="form-group d-block frm-text">
                      <a href="#" className="fg-login d-inline-block" />
                      <a href="#" className="fg-login float-right d-inline-block">Bạn đã có tài khoản? Đăng Nhập</a>
                    </div>
                    <button type="submit" className="btn btn-primary float-right btn-login d-block w-100">Đăng Ký</button>
                    <div className="form-group d-block w-100 mt-5">
                      <div className="text-or text-center">
                        <span>Hoặc</span>
                      </div>
                      <div className="row">
                        <div className="col-sm-6 col-12 pr-7">
                          <button className="btn btn-secondary btn-login-facebook btnw w-100 float-left">
                            <i className="fa fa-facebook" aria-hidden="true" />
                            <span>Đăng nhập bằng Facebook</span>
                          </button>
                        </div>
                        <div className="col-sm-6 col-12 pl-7">
                          <button className="btn btn-secondary btn-login-google btnw w-100 float-left">
                            <i className="fa fa-google" aria-hidden="true" />
                            <span>Đăng nhập bằng Google</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* (end) login main */}
        </div>
      </div>
      <footer className="login-footer">
        <div className="w-login m-auto">
          <div className="row">
            {/* login footer left */}
            <div className="col-md-6 col-sm-12 col-12 login-footer-left">
              <div className="login-copyright">
                <p>Copyright © 2020 <a href="#"> TechJobs</a>. All Rights Reserved.</p>
              </div>
            </div>
            {/* login footer right */}
            <div className="col-md-6 col-sm-12 col-12 login-footer-right">
              <ul>
                <li><a href="#">Terms &amp; Conditions</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </div>
  )
}

export default Signupcandidate