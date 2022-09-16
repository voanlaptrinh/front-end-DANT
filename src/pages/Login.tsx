import React from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

type Props = {}

const Login = (props: Props) => {
    return (
        <div>
            <div>
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
                                    <span className="login-breadcrumb"><em>/</em> Đăng Nhập</span>
                                </div>
                                <div className="login-right">
                                    <a href="#" className="btn btn-return"> <Link to="/">Return Home</Link></a>
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
                                        <form className="login-form">
                                            <div className="login-main-header">
                                                <h3>Đăng Nhập</h3>
                                            </div>
                                            <div className="input-div one">
                                                <div className="div lg-lable">
                                                    <h5>Username</h5>
                                                    <input type="text" className="input form-control-lgin" />
                                                </div>
                                            </div>
                                            <div className="input-div pass">
                                                <div className="div lg-lable">
                                                    <h5>Password</h5>
                                                    <input type="password" className="input form-control-lgin" />
                                                </div>
                                            </div>
                                            <div className="form-group d-block frm-text">
                                                <a href="#" className="fg-login d-inline-block">Quên mật khẩu</a>
                                                <a href="#modal" className="fg-login float-right d-inline-block">Bạn chưa có tài khoản? Đăng ký</a>
                                            </div>
                                            <button type="submit" className="btn btn-primary float-right btn-login d-block w-100">Đăng Nhập</button>
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
            {/* modal click chọn bên đăng ký */}
            <div className='bodymodal'>
                <div id="modal" className="overlay">
                    <div className="popup">
                        <h2>Chào bạn, </h2>
                        <a className="close" href="#">&times;</a>
                        <span>bạn hãy dành vài giây để xác nhận thông tin này nhé</span>
                        <div className="content">
                            <div>Để tối ưu tốt nhất cho trải nghiệm của bạn với Website,
                                vui lòng lựa chọn nhóm phù hợp nhất với bạn.</div>
                            <div className='bodyntd'>
                                <div className='contenrmodal'>
                                    <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714590/news2_pgluai.jpg" alt="" width="400px" height="300px" />
                                    <div>
                                        <a href="" className="btn btn-primary"> <Link to="signupempoly">Nhà tuyển dụng</Link></a>
                                    </div>
                                </div>
                                <div className='contenrmodal'>
                                    <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714590/news2_pgluai.jpg" alt="" width="400px" height="300px" />
                                    <div>
                                        <a href="" className="btn btn-primary"> <Link to="signupcandidate">Ứng viên</Link></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login