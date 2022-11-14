import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { getProfileByToken, updateProfileById } from '../../../api/profile';
import { Experience, Lever, Profession, Profile, Timework, Wage } from '../../../types/profile';
import './Profile.css';
import { listNews } from '../../../api/home';
import { User } from '../../../types/user';

type Props = {}
interface FormValues {
   name: string,
   Address: string,
   Phone: string,
   experience_id: number,
   lever_id: number,
   wage_id: number,
   time_work_id: number,
   profession_id: number
}

const profileSchema = yup.object().shape({
   name: yup.string().required('Vui lòng nhập họ và tên'),
   Address: yup.string().required('Vui lòng nhập địa chỉ'),
   Phone: yup.string().required('Vui lòng nhập số điện thoại').length(10, 'Vui lòng nhập tối đa 10 chữ số'),
   experience_id: yup.number().positive('Vui lòng chọn kinh nghiệm'),
   wage_id: yup.number().positive('Vui lòng chọn mức lương '),
   // skill_id: yup.number().positive('Vui lòng chọn kỹ năng'),
   lever_id: yup.number().positive('Vui lòng chọn cấp độ'),
   time_work_id: yup.number().positive('Vui lòng chọn thời gian làm việc'),
   profession_id: yup.number().positive('Vui lòng chọn chuyên ngành')
}).required()

const ProfileDetail = (props: Props) => {
   const [user, setUser] = useState<any | null>(null);
   const [category, setCategory] = useState<any | null>(null);
   const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>({
      resolver: yupResolver(profileSchema),
   });

   useEffect(() => {
      getUser();
      getCategory();
   }, [])


   const getUser = async () => {
      try {
         const { data } = await getProfileByToken();
         setUser(data);
         console.log(data.user.id);
         console.log(data);

      } catch (error) {
         console.log(error);
      }
   }

   const getCategory = async () => {
      try {
         const { data } = await listNews();
         setCategory(data);
         console.log(data);
      } catch (error) {
         console.log(error);
      }
   }

   const Submit: SubmitHandler<FormValues> = async (data: any) => {
      try {
         await updateProfileById(user?.user.id, data)
         alert('Cập nhật thành công')
         console.log(user?.id);

      } catch (error: any) {
         console.log(error);
         alert('Có lỗi xảy ra')
      }
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
                        <form className="row" onSubmit={handleSubmit(Submit)}>
                           <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                              <div className="custom-file avater_uploads" >
                                 <input type="file" className="custom-file-input" style={{ cursor: 'pointer' }} id="customFile" />
                                 <label className="custom-file-label" htmlFor="customFile">
                                    <i className="fa fa-user" ></i>
                                 </label>
                              </div>
                           </div>
                           <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                              <div className="row">
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Họ và tên</label>
                                       <input type="text" className="form-control rounded"   {...register('name')} placeholder='Nhập họ và tên' />
                                       <p className='text-danger'>{errors.name?.message}</p>
                                    </div>
                                 </div>
                                 {/* address */}
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Địa chỉ</label>
                                       <input type="text" className="form-control rounded"  {...register('Address')} placeholder='Nhập địa chỉ' />
                                       <p className='text-danger'>{errors.Address?.message}</p>
                                    </div>
                                 </div>
                                 {/* nhoneNumber */}
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="text-dark ft-medium">Số điện thoại</label>
                                       <input type="text" className="form-control rounded"  {...register('Phone')} placeholder='Nhập số điện thoại' />
                                       <p className='text-danger'>{errors.Phone?.message}</p>
                                    </div>
                                 </div>
                                 {/* job_type */}
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Loại công việc</label>
                                       <select className="custom-select form-control rounded"  {...register('time_work_id')}>
                                          <option value={-1}>Chọn loại công việc</option>
                                          {category?.timework ? category.timework.map((item: Timework) => {
                                             return <option key={item.id} value={+item.id} >{item.name}</option>
                                          }) : null}
                                       </select>
                                       <p className="text-danger">{errors.time_work_id?.message}</p>
                                    </div>
                                 </div>
                                 {/* experience */}
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Kinh nghiệm</label>
                                       <select className="custom-select form-control rounded" placeholder='Chọn mức kinh nghiệm'{...register('experience_id')}>
                                          <option value={-1} >Chọn kinh nghiệm</option>
                                          {category?.experience ? category.experience.map((item: Experience) => {
                                             return <option key={item.id} value={+item.id} >{item.name}</option>
                                          }) : null}
                                       </select>
                                       <p className="text-danger">{errors.experience_id?.message}</p>
                                    </div>
                                 </div>
                                 {/* wage */}
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Mức lương</label>
                                       <select className="custom-select form-control rounded" placeholder='Chọn mức lương'{...register('wage_id')}>
                                          <option value={-1}>Chọn kinh nghiệm</option>
                                          {category?.wage ? category.wage.map((item: Wage) => {
                                             return <option key={item.id} value={+item.id} >{item.name}</option>
                                          }) : null}
                                       </select>
                                       <p className="text-danger">{errors.wage_id?.message}</p>
                                    </div>
                                 </div>
                                 {/* lever */}
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Bằng cấp</label>
                                       <select className="custom-select form-control rounded" placeholder='Chọn bằng cấp'{...register('lever_id')}>
                                          <option value={-1}>Chọn bằng cấp</option>
                                          {category?.lever ? category.lever.map((item: Lever) => {
                                             return <option key={item.id} value={+item.id} >{item.name}</option>
                                          }) : null}
                                       </select>
                                       <p className="text-danger">{errors.lever_id?.message}</p>
                                    </div>
                                 </div>
                                 {/* profession */}
                                 <div className="col-xl-6 col-lg-6">
                                    <div className="form-group">
                                       <label className="d-block text-dark ft-medium">Chuyên ngành</label>
                                       <select className="custom-select form-control rounded" {...register('lever_id')}>
                                          <option value={-1} >Chọn chuyên ngành</option>
                                          {category?.profession ? category.profession.map((item: Profession) => {
                                             return <option key={item.id} value={+item.id} >{item.name}</option>
                                          }) : null}
                                       </select>
                                       <p className="text-danger">{errors.lever_id?.message}</p>
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
      </div >
   )
}

export default ProfileDetail

