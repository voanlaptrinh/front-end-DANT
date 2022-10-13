import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link, useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { signup } from '../../api/auth';
import Banner from '../../assets/images/banner-login.png';
import Logo from '../../assets/images/logo.jpg';

type Props = {}

interface FormValues {
  id: number,
  fullName: string,
  email: string,
  password: string,
  comfirmPassword: string
  phone: number,
  namecompany: string,
  workplace: string,
  address: string,
}

const schema = yup.object({
  fullName: yup.string().required('Vui lòng nhập tên'),
  phone: yup.number().required('Vui lòng số'),
  namecompany: yup.string().required('Vui lòng nhập tên công ty'),
  workplace: yup.string().required('Vui lòng nhập tên địa chỉ công ty'),
  address: yup.string().required('Vui lòng nhập chức vụ'),
  email: yup.string().required('Vui lòng nhập email').email('Không đúng định dạng email'),

  password: yup.string().required('Vui lòng nhập mật khẩu'),
  comfirmPassword: yup.string().required('Vui lòng nhập mật khẩu')
    .oneOf([yup.ref('password'), null], ('Mật khẩu không trùng khớp'))
}).required();

const Signupemployer = (props: Props) => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  })
  const onSignup: SubmitHandler<FormValues> = async (formData: any) => {
    const { data } = await signup(formData)
    // console.log(data);
    // navigate("/homecan")
  }
  return (
    <div><div>
      <div className="container-fluid login-fluid clear-left clear-right">
        <div className="login-container">
          {/* login header */}
          <div className="login-header">
            <div className="w-login m-auto">
              <div className="login-logo d-flex align-items-center">

                {/* <a href="#">Tech<span class="txb-logo">Jobs.</span></a> */}
                <Link to="">
                  <img src={Logo} alt="itwork" width={70} height={70} />
                </Link>

                <span className="login-breadcrumb"><em>/</em> Đăng ký Nhà tuyển dụng</span>
              </div>
              <div className="login-right">
                <Link to="/" className="btn btn-return">Trang chủ</Link>
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
                  <img src={Banner} />
                </div>
                {/* login main form */}
                <div className="col-md-6 col-sm-12 col-12 login-main-right">
                  <form className="login-form reg-form" method='POST' onSubmit={handleSubmit(onSignup)}>
                    <div className="login-main-header">
                      <h3>Đăng Ký Tài Khoản Nhà Tuyển Dụng</h3>
                    </div>
                    <div className="reg-info">
                      <h3>Tài khoản</h3>
                    </div>
                    <input type="text" hidden value='2' {...register('id')} />
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='Địa Chỉ Email của công ty' {...register('email', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.email?.message}</p>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="password" className="input form-control-lgin" placeholder='mật khẩu ' {...register('password', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.password?.message}</p>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="password" className="input form-control-lgin" placeholder='nhập lại mật khẩu' {...register('comfirmPassword', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.comfirmPassword?.message}</p>
                    </div>
                    <div className="reg-info">
                      <h3>Công ty</h3>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='họ tên người đăng ký' {...register('fullName', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.fullName?.message}</p>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='nhập số điện thoại' {...register('phone', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.phone?.message}</p>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='nhập tên công ty' {...register('namecompany', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.namecompany?.message}</p>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='nhập địa chỉ công ty' {...register('workplace', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.workplace?.message}</p>
                    </div>
                    <div className="input-div one">
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='nhận chức vụ trong công ty' {...register('address', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.address?.message}</p>
                    </div>
                    <div className="form-group d-block frm-text">
                      <a href="#" className="fg-login d-inline-block" />
                      <a href="#" className="fg-login float-right d-inline-block">Bạn đã có tài khoản? Đăng Nhập</a>
                    </div>
                    <button type="submit" className="btn btn-primary float-right btn-login d-block w-100">Đăng Ký Nhà Tuyển Dụng</button>
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

export default Signupemployer