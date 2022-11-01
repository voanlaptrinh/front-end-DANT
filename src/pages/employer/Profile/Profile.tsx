import React from 'react'
import { Link } from 'react-router-dom'
import './Profile.css';
// import {  } from "../../../api/home";

type Props = {}

const Profile = (props: Props) => {
   return (
      <div className='container-fluid'>
         <nav aria-label="breadcrumb">
            <ol className="breadcrumb bg-light py-4">
               <li className="breadcrumb-item" aria-current="page">
                  <Link to={'/'} className='text-dark'>Trang chủ</Link>
               </li>
               <li className="breadcrumb-item" aria-current="page">
                  <Link to={''} className='text-dark'>Hồ sơ của tôi</Link>
               </li>
            </ol>
         </nav>
         <div className="dashboard-widg-bar d-block">
            <div className="row">
               <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="_dashboard_content bg-white rounded mb-4">
                     <div className="_dashboard_content_header br-bottom py-3 px-3">
                        <div className="_dashboard__header_flex">
                           <h4 className="mb-0 ft-medium fs-md">
                              <i className="fa fa-user mr-1 theme-cl fs-sm"></i>
                              Tài khoản của tôi
                           </h4>
                        </div>
                     </div>

                     <div className="_dashboard_content_body py-3 px-3">
                        <form className="row">
                           <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                              <div className="custom-file avater_uploads">
                                 <input type="file" className="custom-file-input" id="customFile" />
                                 <label className="custom-file-label" htmlFor="customFile">
                                    <i className="fa fa-user"></i>
                                 </label>
                              </div>
                           </div>

                           <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                              <div className="row">
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Họ và tên</label>
                                       <input type="text" className="form-control rounded" placeholder='Nhập họ và tên' />
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Tên công việc</label>
                                       <input type="text" className="form-control rounded" placeholder='Nhập tên công việc' />
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Số điện thoại</label>
                                       <input type="text" className="form-control rounded" placeholder='Nhập số điện thoại' />
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Email</label>
                                       <input type="email" className="form-control rounded" disabled placeholder='Nhập email' />
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Loại công việc</label>
                                       <select className="custom-select rounded">
                                          <option value={0}>Chọn loại công việc</option>
                                          <option>Full Time</option>
                                          <option>Part Time</option>
                                          <option>Freelance</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Danh mục</label>
                                       <select className="custom-select rounded">
                                          <option value={0}>Chọn danh mục</option>
                                          <option>IT &amp; Software</option>
                                          <option>Bank Services</option>
                                          <option>Hospitals</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Kinh nghiệm</label>
                                       <select className="custom-select rounded">
                                          <option value={0}>Chọn kinh nghiệm</option>
                                          <option>Begginer</option>
                                          <option>01 Years</option>
                                          <option>02 Years</option>
                                          <option>03 Years</option>
                                          <option>04 Years</option>
                                          <option>05 Years</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Học vấn</label>
                                       <select className="custom-select rounded">
                                          <option value={0}>Chọn học vấn</option>
                                          <option>Cao đẳng</option>
                                          <option>Đại học</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Lương hiện tại</label>
                                       <select className="custom-select rounded">
                                          <option value={0}>Chọn mức lương hiện tại</option>
                                          <option>20-30 K</option>
                                          <option>30-40 K</option>
                                          <option>40-50 K</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Mức lương mong muốn</label>
                                       <select className="custom-select rounded">
                                          <option value={0}>Chọn mức lương mong muốn</option>
                                          <option>20-30 K</option>
                                          <option>30-40 K</option>
                                          <option>40-50 K</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Tuổi</label>
                                       <select className="custom-select rounded">
                                          <option value={0}>Chọn kinh nghiệm</option>
                                          <option>23+ Years</option>
                                          <option>25+ Years</option>
                                          <option>30+ Years</option>
                                       </select>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Ngôn ngữ</label>
                                       <input type="email" className="form-control rounded" placeholder='Nhập ngôn ngữ' />
                                    </div>
                                 </div>
                                 <div className="col-xl-12 col-lg-12">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Về bản thân</label>
                                       <textarea className="form-control with-light" placeholder='Nhập thông tin về bản thân'>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</textarea>
                                    </div>
                                 </div>

                                 <div className="col-xl-12 col-lg-12">
                                    <div className="form-group">
                                       <button type="submit" className="btn btn-md ft-medium text-light rounded theme-bg">Lưu</button>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div >
      </div>
   )
}

export default Profile