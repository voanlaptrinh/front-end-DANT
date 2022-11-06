import { yupResolver } from '@hookform/resolvers/yup';
import React, { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useParams } from 'react-router-dom'
import * as yup from 'yup';
import { getProfileByToken } from '../../../api/profile';
import './Profile.css';

type Props = {}
interface FormValues {
   fullName: string,
   jobName: string,
   email: string,
   phoneNumber: string,
   skill_id: number[],
   experience_id: string,
   lever_id: number,
   wage_id: number,
   time_work_id: number
}

const schema = yup.object({
   fullName: yup.string().required('Vui lòng nhập họ và tên'),
   jobName: yup.string().required('Vui lòng nhập tên công việc'),
   email: yup.string().email('Vui nhập đúng định dạng email').required('Vui lòng nhập email'),
   phoneNumber: yup.string().required('Vui lòng nhập số điện thoại').length(10, 'Vui lòng nhập tối đa 10 chữ số'),
   experience_id: yup.number().required('Vui lòng chọn kinh nghiệm'),
   wage_id: yup.number().required('Vui lòng chọn mức lương '),
   skill_id: yup.number().required('Vui lòng chọn kỹ năng'),
   lever_id: yup.number().required('Vui lòng chọn cấp độ'),
   time_work_id: yup.number().required('Vui lòng chọn thời gian làm việc')

}).required();

const Profile = (props: Props) => {
   const { token } = useParams();

   useEffect(() => {
      const getProfile = async () => {
         try {
            const { data } = await getProfileByToken(token);
            console.log(data);
         } catch (error) {
            console.log(error);
         }
      }
      getProfile();
   }, [token])

   const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
      resolver: yupResolver(schema)
   });
   const onSubmit: SubmitHandler<FormValues> = (data: any) => {
      console.log(data);
   }
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
                        <form className="row" onSubmit={handleSubmit(onSubmit)}>
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
                                       <input type="text" className="form-control rounded" {...register('fullName')} placeholder='Nhập họ và tên' />
                                       <p className='text-danger'>{errors.fullName?.message}</p>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Tên công việc</label>
                                       <input type="text" className="form-control rounded" {...register('jobName')} placeholder='Nhập tên công việc' />
                                       <p className='text-danger'>{errors.jobName?.message}</p>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Số điện thoại</label>
                                       <input type="text" className="form-control rounded" {...register('phoneNumber')} placeholder='Nhập số điện thoại' />
                                       <p className='text-danger'>{errors.phoneNumber?.message}</p>
                                    </div>
                                 </div>
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Email</label>
                                       <input type="email" className="form-control rounded" {...register('email')} placeholder='Nhập email' />
                                       <p className="text-danger">{errors.email?.message}</p>
                                    </div>
                                 </div>
                                 {/* <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Loại công việc</label>
                                       <select className="custom-select form-control rounded"  {...register('jobTypeId')}>
                                          <option value="">Chọn loại công việc</option>
                                          <option value={'1'}>Full Time</option>
                                          <option value={'2'}>Part Time</option>
                                          <option value={'3'}>Freelance</option>
                                       </select>
                                       <p className="text-danger">{errors.jobTypeId?.message}</p>
                                    </div>
                                 </div> */}

                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Lương hiện tại</label>
                                       <select className="custom-select form-control rounded" placeholder='Chọn mức lương hiện tại'{...register('wage_id')}>
                                          <option value={1}>20-30 K</option>
                                          <option value={2}>30-40 K</option>
                                          <option value={3}>40-50 K</option>
                                       </select>
                                       <p className="text-danger">{errors.wage_id?.message}</p>
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

