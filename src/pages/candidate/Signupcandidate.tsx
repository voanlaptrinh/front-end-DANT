import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../api/auth'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux'
import { signUpByUser } from '../../features/auth/authSlice'
// import Logo from '../../assets/images/logo.jpg';

type Props = {}
interface FormValues {
  id: number,
  fullName: string,
  email: string,
  password: string,
  comfirmPassword: string
}

const schema = yup.object({
  fullName: yup.string().required('Vui lòng nhập tên'),
  email: yup.string().required('Vui lòng nhập email').email('Không đúng định dạng email'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
  comfirmPassword: yup.string().required('Vui lòng nhập mật khẩu')
    .oneOf([yup.ref('password'), null], ('Mật khẩu không trùng khớp'))
  // .val([yup.ref('password'),(val.length == 0 || (val.length >= 2 && val.length <= 10)])
}).required();

const Signupcandidate = (props: Props) => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: yupResolver(schema)
  })
  const onSignup: SubmitHandler<FormValues> = async (formData: any) => {
    const { data } = await signup(formData)
    console.log(data);
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
                  {/* <img src={Logo} alt="itWork" width={70} height={70} /> */}
                </Link>
                <span className="login-breadcrumb"><em>/</em> Đăng kí</span>
              </div>
              <div className="login-right">
                <a href="/" className="btn btn-return">Trang chủ</a>
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
                </div>
                {/* login main form */}
                <div className="col-md-6 col-sm-12 col-12 login-main-right">
                  <form className="login-form reg-form" method='POST' onSubmit={handleSubmit(onSignup)}>
                    <div className="login-main-header">
                      <h3>Đăng Ký</h3>
                    </div>
                    <input type="text" hidden value='1' {...register('id')} />
                    <div className="input-div one">
                      <label htmlFor="fullName" className='fs-6 fw-normal py-2'>Họ và tên</label>
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='Nhập họ và tên của bạn' {...register('fullName', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.fullName?.message}</p>
                    </div>
                    <div className="input-div one">
                      <label htmlFor="email" className='fs-6 fw-normal py-2'>Email</label>
                      <div className="div lg-lable">
                        <input type="text" className="input form-control-lgin" placeholder='Nhập email của bạn' {...register('email', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.email?.message}</p>
                    </div>
                    <div className="input-div one">
                      <label htmlFor="password" className='fs-6 fw-normal py-2'>Mật khẩu</label>
                      <div className="div lg-lable">
                        <input type="password" className="input form-control-lgin" placeholder='Nhập mật khẩu của bạn' {...register('password', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.password?.message}</p>
                    </div>
                    <div className="input-div one">
                      <label htmlFor="comfirmPassword" className='fs-6 fw-normal py-2'>Nhập lại mật khẩu</label>
                      <div className="div lg-lable">
                        <input type="password" className="input form-control-lgin" placeholder='Nhập lại mật khẩu của bạn' {...register('comfirmPassword', { required: true })} />
                      </div>
                      <p className='text-danger pt-1'>{errors.comfirmPassword?.message}</p>
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
                            <span>Facebook</span>
                          </button>
                        </div>
                        <div className="col-sm-6 col-12 pl-7">
                          <button className="btn btn-secondary btn-login-google btnw w-100 float-left">
                            <i className="fa fa-google" aria-hidden="true" />
                            <span>Google</span>
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