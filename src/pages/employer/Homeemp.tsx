import React, { useEffect, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { addNews, listNews } from '../../api/home'

type Props = {}

const Homeemp = (props: Props) => {
  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [news, setNews] = useState<any>([])

  const onAdd: SubmitHandler<any> = async (Data: any) => {
    const { data } = await addNews(Data)
  };
  useEffect(() => {
    const getNews = async () => {
      const { data } = await listNews()
      setNews(data)
      console.log(data);
    }
    getNews()
  }, [])
  return (
    <div>
      <div>
        {/* published recuitment */}
        <div className="container-fluid published-recuitment-wrapper">
          <div className="container published-recuitment-content">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-12 recuitment-inner">
                <form className="recuitment-form">
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
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Số lượng cần tuyển</label>
                            <div className="col-sm-9">
                              <input type="number" className="form-control" placeholder="1" {...register('quatity', { required: true })} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Giới tính<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobGender" {...register('sex', { required: true })}>
                                <option value="">Chọn giới tính</option>
                                <option value={0}>Không yêu cầu</option>
                                <option value={1}>Nam</option>
                                <option value={2}>Nữ</option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Mô tả công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <textarea typeof="text" className="form-control" placeholder="Nhập mô tả công việc" rows={5} defaultValue={""}   {...register('describe', { required: true })} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Yêu cầu công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <textarea typeof="text" className="form-control" placeholder="Nhập yêu cầu công việc" rows={5} defaultValue={""}   {...register('Candidate_requirements', { required: true })} />
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Tính chất công việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="natureWork">
                                <option value={18}>Giờ hành chính</option>
                                <option value={10}>Việc làm thu nhập cao</option>
                                <option value={11}>Việc làm thêm/Làm việc ngoài giờ</option>
                                <option value={20}>Việc làm cho trí thức lớn tuổi (trên 50 tuổi)</option>
                              </select>
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Trình độ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobLevel" {...register('lever_id', { required: true })}>
                                <option value="" selected hidden>Trình độ</option>
                                {news.lever?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}

                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Kinh nghiệm<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">

                              <select typeof="text" className="form-control" id="jobExperience" {...register('experience_id', { required: true })}>
                                <option value="" selected hidden>Kinh Nghiệm</option>
                                {news.experience?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Mức lương<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobSalary" {...register('wage_id', { required: true })}>
                                <option value="">Chọn mức lương</option>
                                {news.wage?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Hình thức làm việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobWorkTime">
                                <option >Chọn hình thức làm việc</option>
                                <option value={1}>Nhân viên chính thức</option>
                              </select>
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Thời gian làm việc<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select className="form-control" id="jobProbation" {...register('time_work_id', { required: true })}>
                                <option value="">Thời gian làm việc</option>
                                {news.timework?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Quyền lợi<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <textarea typeof="text" className="form-control" placeholder="Quyền lợi công việc" rows={5} defaultValue={""} {...register('benefit', { required: true })} />
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Ngành nghề</label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobType" {...register('majors_id', { required: true })}>
                                <option >Chọn ngành nghề</option>
                                {news.majors?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Nơi làm việc</label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobProvince" {...register('location_id', { required: true })}>
                                {news.location?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Địa chỉ cụ thể</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" {...register('Address', { required: true })} />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Hạn nộp hồ sơ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="date" className="form-control" {...register('time_job', { required: true })} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="card recuitment-card">
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
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Tên người liên hệ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Tên người liên hệ" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Email<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="mail" className="form-control" placeholder="Địa chỉ email" />
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Điện thoại<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="number" className="form-control" placeholder="Nhập số điện thoại" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Địa chỉ<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Nhập địa chỉ" {...register('address', { required: true })} />
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Email<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="email" className="form-control" placeholder="Nhập Email" />
                            </div>
                          </div> */}
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Tỉnh/ Thành phô<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobProvince2">
                                {news.location?.map((item: any) => {
                                  return <option key={item.id} value={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Quy mô nhân sự<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Nhập số lượng nhân viên"  {...register('number_member', { required: true })}/>
                            </div>
                          </div>
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Sơ lược về công ty<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <textarea typeof="text" className="form-control" placeholder="Sơ lược về công ty" rows={5} defaultValue={""} {...register('Desceibe', { required: true })} />
                            </div>
                          </div>
                          {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Logo</label>
                            <div className="col-sm-9 ">
                              <div id="drop-area">
                                <input type="file" id="fileElem" multiple accept="image/*" />
                                <label style={{ cursor: 'pointer' }} htmlFor="fileElem">Tải ảnh lên hoặc kéo thả vào đây</label>
                                <progress id="progress-bar" max={100} value={0} className="d-none" />
                                <div id="gallery" />
                              </div>
                            </div>
                          </div> */}
                          <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Website</label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" placeholder="Website" />
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