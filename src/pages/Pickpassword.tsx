import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { pick } from '../api/auth'

type Props = {}

const Pickpassword = (props: Props) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSpick: SubmitHandler<any> = async (formData:any) => {
        const {data} = await pick(formData)
        console.log(formData);
        
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
                                    <span className="login-breadcrumb"><em>/</em>Quên mật khẩu</span>
                                </div>
                                <div className="login-right">
                                    <a className="btn btn-return"> <Link to="/">Return Home</Link></a>
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
                                        <form className="login-form" method='POST' onSubmit={handleSubmit(onSpick)}>
                                            <div className="login-main-header">
                                                <h3>Quên mật khẩu</h3>
                                            </div>
                                            <div className="input-div one">
                                                <div className="div lg-lable">
                                                    <input type="text" className="input form-control-lgin" placeholder='nhận email' {...register('email', { required: true })} />
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary float-right btn-login d-block w-100">Đăng Nhập</button>
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

export default Pickpassword