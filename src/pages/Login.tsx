import Password from 'antd/lib/input/Password'
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, NavLink, Outlet, useNavigate } from 'react-router-dom'
import { signin } from '../api/auth'

type Props = {}

const Login = (props: Props) => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSignin: SubmitHandler<any> = async (user: any) => {
        const { data } = await signin(user)
        if (data.role_id) {
            if (data.role_id == 1) {
                navigate('/');
                return true
            }
            if (data.role_id == 2) {
                navigate('/employer');
                return true
            }
            return true
        } else {
            alert(data.mesegse)
        }
    }
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
                                    <a className="btn btn-return" href='/'> Return Home</a>
                                    <Link to="/">ádasd</Link>
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
                                        <form className="login-form" method='POST' onSubmit={handleSubmit(onSignin)}>
                                            <div className="login-main-header">
                                                <h3>Đăng Nhập</h3>
                                            </div>
                                            <div className="input-div one">
                                                <div className="div lg-lable">
                                                    <input type="text" className="input form-control-lgin" placeholder='nhận email' {...register('email', { required: true })} />
                                                </div>
                                            </div>
                                            <div className="input-div pass">
                                                <div className="div lg-lable">
                                                    <input type="password" className="input form-control-lgin" placeholder='nhập password'{...register('password', { required: true })} />
                                                </div>
                                            </div>
                                            <div className="form-group d-block frm-text">
                                                <Link to="/pickpassword" className="fg-login d-inline-block">Quên mật khẩu</Link>
                                                <a href="#modal" className="fg-login float-right d-inline-block">Bạn chưa có tài khoản? Đăng ký</a>
                                            </div>
                                            <button type="submit" className="btn btn-primary float-right btn-login d-block w-100">Đăng Nhập</button>
                                            <div className="form-group d-block w-100 mt-5">
                                                <div className="text-or text-center">
                                                    <span>Hoặc</span>
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 col-12 pr-7">
                                                        <button className="btn btn-secondary btn-login-facebook btnw w-100 float-left" >
                                                            <i className="fa fa-facebook" aria-hidden="true" />
                                                            <span>Đăng nhập bằng Facebook</span>
                                                        </button>
                                                    </div>
                                                    <div className="col-sm-6 col-12 pl-7">
                                                        <button className="btn btn-secondary btn-login-google btnw w-100 float-left" >
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