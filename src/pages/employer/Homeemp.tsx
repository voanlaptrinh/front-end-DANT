import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addNews, listNews, createNews } from '../../api/home'
import { Select } from 'antd';
import * as yup from 'yup';
import { profile1 } from '../../api/auth';
import { yupResolver } from '@hookform/resolvers/yup';

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const { Option } = Select;

interface FormValues {
  id: number
  title: string
  Quatity: string
  sex: string
  describe: string
  level_id: string
  experience_id: string
  Wage_id: string
  skill_id: number
  benefit: string
  profession_id: string
  Address: string
  end_job_time: string
  time_work_id: string
  employer_id: string
  Candidate_requirements: string
  majors_id: string
  name: string
  address: string
  number_member: string
  Desceibe: string
  wk_form_id: string
  location_id: string
  nameEmployer: string
  email: string
  phone: number
  addressEmployer: string
  logo: string
  emailEmployer: string
  emailCompany: string
  id_Employer: number
}
const SelectSchema = yup.object().shape({
  sex: yup.string()
    .required('Vui lòng chọn giới tính'),
});
const schema = yup.object({
  title: yup.string()
    .required('Vui lòng nhập mô tả')
    .max(255, 'Tiêu đề không vượt quá 255 ký tự'),
  Quatity: yup.string()
    .required('vui lòng nhập là số'),
  sex: yup.string()
    .required('Vui lòng chọn giới tính'),
  describe: yup.string()
    .required('Vui lòng nhập mô tả công việc')
    .max(255, 'Mô tả không vượt quá 255 ký tự'),
  level_id: yup.string()
    .required('Vui lòng chọn trình độ học '),
  experience_id: yup.string()
    .required('Vui lòng chọ kinh nghiệm'),
  Wage_id: yup.string()
    .required('Vui lòng chọn mức lương'),
  skill_id: yup.number()
    .required('Vui lòng chọn kỹ năng '),
  benefit: yup.string()
    .required('Vui lòng nhập phúc lợi')
    .max(255, 'phúc lợi không vượt quá 255 ký tự'),
  profession_id: yup.string()
    .required('Vui lòng chọn chuyên ngành'),
  Address: yup.string()
    .required('Vui lòng địa chỉ làm việc ')
    .max(255, 'Địa chỉ không vượt quá 255 ký tự'),
  address: yup.string()
    .required('Vui lòng địa chỉ làm việc ')
    .max(255, 'Địa chỉ không vượt quá 255 ký tự'),
  end_job_time: yup.string()
    .required('Vui lòng chọn yêu cầu thời gian làm việc'),
  Candidate_requirements: yup.string()
    .required('Vui lòng nhập yêu cầu ứng viên')
    .max(255, 'không vượt quá 255 ký tự'),
  majors_id: yup.string()
    .required('Vui lòng chọn ngành nghề'),
  name: yup.string()
    .required('Vui lòng nhập tên công ty')
    .max(255, 'không vượt quá 255 ký tự'),
  number_member: yup.string()
    .required('Vui lòng chọn số lượng thành viên')
    .max(255, 'không vượt quá 255 ký tự'),
  Desceibe: yup.string()
    .required('Vui lòng nhập mô tả')
    .max(255, 'không vượt quá 255 ký tự'),
  location_id: yup.string()
    .required('Vui lòng chọn thành phố'),
  logo: yup.string()
    .required('Vui lòng chọn logo'),
  wk_form_id: yup.string()
    .required('Vui lòng chọn hình thức làm việc'),
  time_work_id: yup.string()
    .required('Vui lòng chọn thời gian làm việc'),
  email: yup.string()
    .required('Vui lòng nhập email công ty'),
  phone: yup.number()
    .required('Vui lòng chọn số điện thoại'),
  emailEmployer: yup.string()
    .required('Vui lòng nhập email'),
  emailCompany: yup.string()
    .required('Vui lòng nhập email'),
})

type Props = {}

const Homeemp = (props: Props) => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    // resolver: yupResolver(schema)
  })
  const [news, setNews] = useState<any>([])
  const [profile, setprofile] = useState<any>([])

  const oncreate: SubmitHandler<FormValues> = async (formData: any) => {
    const { data } = await createNews(formData)
    console.log(data);
  }
  useEffect(() => {

    const getNews = async () => {
      const { data } = await listNews()
      setNews(data)
      console.log(data);
    }
    getNews()
    getProfile()
  }, [])
  const getNews = async () => {
    const { data } = await listNews()
    setNews(data)
    console.log(data);
  }
  const getProfile = async () => {
    const { data } = await profile1()
    setprofile(data)
    console.log(data);
  }
  return (
    <div>
      <div>
        {/* published recuitment */}
        <div className="container-fluid published-recuitment-wrapper">
          <div className="container published-recuitment-content">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-12 recuitment-inner">
                <form className="recuitment-form" method='POST' onSubmit={handleSubmit(oncreate)}>
                  <div className="accordion" id="accordionExample">
                    <div className="card recuitment-card">
                      <div className="card-header recuitment-card-header" id="headingOne">
                        <h2 className="mb-0">
                          <a className="btn btn-link btn-block text-left recuitment-header" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Đăng tin tuyển dụng
                            <span id="clickc1_advance2" className="clicksd">
                              <i className="fa fa fa-angle-up" />
                            </span>
                          </a>
                        </h2>
                      </div>
                      <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body recuitment-body">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Tiêu đề<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Nhập tiêu đề" {...register('title', { required: true })} />
                              <p className='text-danger pt-1'>{errors.title?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Số lượng cần tuyển</label>
                            <div className="col-sm-9">
                              <input type="number" className="form-control" placeholder="1" {...register('Quatity', { required: true })} min={1} />
                              <p className='text-danger pt-1'>{errors.Quatity?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Giới tính<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="number" className="form-control" defaultValue="lucy" id="jobGender" {...register('sex', { required: true })}>
                                <option value="">Chọn giới tính</option>
                                <option value={0}>Không yêu cầu</option>
                                <option value={'nam'}>Nam</option>
                                <option value={'nữ'}>Nữ</option>
                              </select>
                              <p className='text-danger pt-1'>{errors.sex?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Mô tả công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input typeof="text" className="form-control" placeholder="Nhập mô tả công việc"    {...register('describe', { required: true })} />
                              <p className='text-danger pt-1'>{errors.describe?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Yêu cầu công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input typeof="text" className="form-control" placeholder="Nhập yêu cầu công việc"    {...register('Candidate_requirements', { required: true })} />
                              <p className='text-danger pt-1'>{errors.Candidate_requirements?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Chuyên Ngành<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="natureWork" {...register('profession_id', { required: true })}>
                                <option value="" selected hidden>Chọn chuyên ngành</option>
                                {news.profession?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.profession_id?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Trình độ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobLevel" {...register('level_id', { required: true })}>
                                <option value="" selected hidden>Trình độ</option>
                                {news.lever?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.level_id?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Kinh nghiệm<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobExperience" {...register('experience_id', { required: true })}>
                                <option value="" selected hidden>Kinh Nghiệm</option>
                                {news.experience?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.experience_id?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Mức lương<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobSalary" {...register('Wage_id', { required: true })}>
                                <option value="">Chọn mức lương</option>
                                {news.wage?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.Wage_id?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Hình thức làm việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobWorkTime" {...register('wk_form_id', { required: true })}>
                                <option value="">Chọn mức lương</option>
                                {news.workingform?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.wk_form_id?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Thời gian làm việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select className="form-control" id="jobProbation" {...register('time_work_id', { required: true })}>
                                <option value="">Thời gian làm việc</option>
                                {news.timework?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.time_work_id?.message}</p>

                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Quyền lợi<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input typeof="text" className="form-control" placeholder="Quyền lợi công việc"   {...register('benefit', { required: true })} />
                              <p className='text-danger pt-1'>{errors.benefit?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Ngành nghề</label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobType" {...register('majors_id', { required: true })}>
                                {/* <option>Chọn ngành nghề</option> */}
                                {news.majors?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.majors_id?.message}</p>
                            </div>
                          </div>

                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Nơi làm việc</label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobProvince" {...register('location_id', { required: true })}>
                                <option value="">Chọn mức lương</option>
                                {news.location?.map((item: any) => {
                                  return <option key={item.id} value={item.id}>{item.name}</option>
                                })}
                              </select>
                              <p className='text-danger pt-1'>{errors.location_id?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Địa chỉ cụ thể</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" {...register('Address', { required: true })} />
                              <p className='text-danger pt-1'>{errors.Address?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Hạn nộp hồ sơ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="date" className="form-control" {...register('end_job_time', { required: true })} />
                              <p className='text-danger pt-1'>{errors.end_job_time?.message}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="card recuitment-card">
                      <div className="card-header recuitment-card-header" id="headingTwo">
                        <h2 className="mb-0">
                          <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Kỹ năng
                            <span id="clickc1_advance3" className="clicksd">
                              <i className="fa fa fa-angle-up" />
                            </span>
                          </a>
                        </h2>
                      </div>
                      <div id="collapseTwo" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body recuitment-body">
                          <div className="checkboxsec" id="checkboxSection">
                            <label className="label-container">
                              {news.skill?.map((item: any) => {
                                return (
                                  <div className="filter-topic">
                                    <label className="label-container">
                                      <span>{item.name}</span>
                                      <input type="checkbox" defaultValue={item.id} {...register('skill_id', { required: true })} />
                                      <span className="checkmark" />
                                    </label>
                                  </div>
                                )
                              })}
                            </label>

                          </div>

                        </div>

                      </div>
                      <p className='text-danger pt-1'>{errors.skill_id?.message}</p>

                    </div>

                    {profile?.map((item: any) => (
                      <div className="card recuitment-card">
                        <div className="card-header recuitment-card-header" id="headingThree">
                          <h2 className="mb-0">
                            <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                              Thông tin liên hệ
                              <span id="clickc1_advance1" className="clicksd">
                                <i className="fa fa fa-angle-up" />
                              </span>
                            </a>
                          </h2>
                        </div>
                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                          <div className="card-body recuitment-body">
                            <input type="hidden"  value={item[0].id} {...register('id_Employer', { required: true })} />
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">Tên người liên hệ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" placeholder="Tên người liên hệ" value={item[0].name} {...register('nameEmployer', { required: true })} />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">Email<span style={{ color: 'red' }} className="pl-2">*</span></label>
                              <div className="col-sm-9">
                                <input type="mail" className="form-control" placeholder="Địa chỉ email" value={item[0].email} {...register('emailEmployer', { required: true })} />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">Điện thoại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                              <div className="col-sm-9">
                                <input type="number" className="form-control" placeholder="Nhập số điện thoại" value={item[0].phone} {...register('phone', { required: true })} />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">Địa chỉ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                              <div className="col-sm-9">
                                <input type="text" className="form-control" placeholder="Nhập số điện thoại" value={item[0].address} {...register('addressEmployer', { required: true })} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))

                    }
                    <div className="card recuitment-card">
                      <div className="card-header recuitment-card-header" id="heading4">
                        <h2 className="mb-0">
                          <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                            Thông tin công ty
                            <span id="clickc1_advance4" className="clicksd">
                              <i className="fa fa fa-angle-up" />
                            </span>
                          </a>
                        </h2>
                      </div>
                      <div id="collapse4" className="collapse show" aria-labelledby="heading4" data-parent="#collapse4">
                        <div className="card-body recuitment-body">
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Tên công ty<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Tên công ty" {...register('name', { required: true })} />
                              <p className='text-danger pt-1'>{errors.name?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Địa chỉ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Nhập địa chỉ" {...register('address', { required: true })} />
                              <p className='text-danger pt-1'>{errors.address?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Email<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="email" className="form-control" placeholder="Nhập Email" {...register('emailCompany', { required: true })} />
                              <p className='text-danger pt-1'>{errors.email?.message}</p>
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Tỉnh/ Thành phô<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobProvince2" {...register('addressEmployer', { required: true })}>
                                {news.location?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Quy mô nhân sự<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Nhập số lượng nhân viên"  {...register('number_member', { required: true })} />
                              <p className='text-danger pt-1'>{errors.number_member?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Sơ lược về công ty<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <textarea typeof="text" className="form-control" placeholder="Sơ lược về công ty"  {...register('Desceibe', { required: true })} />
                              <p className='text-danger pt-1'>{errors.Desceibe?.message}</p>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Logo</label>
                            <div className="col-sm-9 ">
                              <div id="drop-area">
                                <label style={{ cursor: 'pointer' }} htmlFor="fileElem">Tải ảnh lên hoặc kéo thả vào đây</label>
                                {/* <progress id="progress-bar" max={100} value={0} className="d-none" /> */}
                                <input type="text" className='form-control' {...register('logo', { required: true })} />
                                <div id="gallery" />
                              </div>
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Website</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Website" />
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Quy mô nhân sự<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Nhập số lượng nhân viên"  {...register('number_member', { required: true })} />
                              <p className='text-danger pt-1'>{errors.number_member?.message}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rec-submit">
                    <button type="submit" className="btn-submit-recuitment" >
                      <i className="fa fa-floppy-o pr-2" />Lưu Tin
                    </button>
                  </div>
                </form>
              </div>
              {/* Side bar */}
              <div className="col-md-4 col-sm-12 col-12">
                <div className="recuiter-info">
                  <div className="recuiter-info-avt">
                    <img src="img/icon_avatar.jpg" />
                  </div>
                  <div className="clearfix list-rec">
                    <h4>NESTLE Inc.</h4>
                    <ul>
                      <li><a href="#">Việc làm đang đăng <strong>(0)</strong></a></li>
                      <li><a href="#">Follower <strong>(450)</strong></a></li>
                    </ul>
                  </div>
                </div>
                <div className="block-sidebar" style={{ marginBottom: 20 }}>
                  <header>
                    <h3 className="title-sidebar font-roboto bg-primary">
                      Trung tâm quản lý
                    </h3>
                  </header>
                  <div className="content-sidebar menu-trung-tam-ql menu-ql-employer">
                    <h3 className="menu-ql-ntv">
                      Quản lý tài khoản
                    </h3>
                    <ul>
                      <li>
                        <a href="#">
                          Tài khoản
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Giấy phép kinh doanh
                        </a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">
                      Quản lý dịch vụ
                    </h3>
                    <ul>
                      <li>
                        <a href="#">
                          Lịch sử dịch vụ
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          Báo giá
                        </a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">
                      Quản lý tin tuyển dụng
                    </h3>
                    <ul>
                      <li>
                        <a href="#">
                          Đăng tin tuyển dụng
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Danh sách tin tuyển dụng
                        </a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">
                      Quản lý ứng viên
                    </h3>
                    <ul>
                      <li>
                        <a href="#">
                          Tìm kiếm hồ sơ
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Hồ sơ đã lưu
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          Hồ sơ đã ứng tuyển
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Thông báo hồ sơ phù hợp">
                          Thông báo hồ sơ phù hợp
                        </a>
                      </li>
                    </ul>
                    <h3 className="menu-ql-ntv">
                      Hỗ trợ và thông báo
                    </h3>
                    <ul>
                      <li>
                        <a href="#" title="Gửi yêu cầu đến ban quản trị">
                          Gửi yêu cầu đến ban quản trị
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Ban quản trị thông báo">
                          Ban quản trị thông báo
                        </a>
                      </li>
                      <li>
                        <a href="#" title="Hướng dẫn thao tác">
                          Hướng dẫn thao tác
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank">
                          <span>Thông tin thanh toán</span>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          <span>Cổng tra cứu lương</span>
                        </a>
                      </li>
                      <li>
                        <a target="_blank" href="#">
                          <span> Cẩm nang tuyển dụng</span>
                        </a>
                      </li>
                    </ul>
                    <ul>
                      <li className="logout">
                        <a href="#" title="Đăng xuất">
                          Đăng xuất
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* (end) published recuitment */}
        <div className="clearfix" />

      </div>

    </div>
  )
}

export default Homeemp