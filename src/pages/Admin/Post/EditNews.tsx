import { Checkbox } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { createNews, editNews, listNews } from "../../../api/home";

type Props = {};

const EditNews = (props: Props) => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({});
  const [news, setNews] = useState<any>([]);
  const [editnews, setEditNews] = useState<any>([]);
  let { id } = useParams();
  useEffect(() => {
    getNews();
    getEditNews(id);
  }, []);

  const onupdate: SubmitHandler<any> = async (data: any) => {
    await axios.put(`http://datnweb19.herokuapp.com/api/employer/update/${id}`, data);
    navigate('/admin/post')
  }

  const getEditNews = async (id: any) => {
    const { data } = await editNews(id);
    reset(data.job[0])
    setEditNews(data)
  };

  console.log(editnews.job);

  const getNews = async () => {
    const { data } = await listNews()
    setNews(data)
  }

  const job = editnews?.job?.[0];
  const checkedSkill = (data: any) =>
    job?.getskill?.map((item: any) => item.id).includes(data);

  return (
    <div>
      <div>
        <div>
          {/* published recuitment */}
          <div className="container-fluid published-recuitment-wrapper">
            <div className="container published-recuitment-content">
              <div className="row">
                <div className="col-md-8 col-sm-12 col-12 recuitment-inner">
                  <form
                    className="recuitment-form"
                    method="POST"
                    onSubmit={handleSubmit(onupdate)}
                  >
                    <div className="accordion" id="accordionExample">
                      <div className="card recuitment-card">
                        <div
                          className="card-header recuitment-card-header"
                          id="headingOne"
                        >
                          <h2 className="mb-0">
                            <a
                              className="btn btn-link btn-block text-left recuitment-header"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseOne"
                              aria-expanded="true"
                              aria-controls="collapseOne"
                            >
                              Đăng tin tuyển dụng
                              <span id="clickc1_advance2" className="clicksd">
                                <i className="fa fa fa-angle-up" />
                              </span>
                            </a>
                          </h2>
                        </div>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body recuitment-body">
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Tiêu đề
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="Nhập tiêu đề"
                                  {...register("title", { required: true })}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Số lượng cần tuyển
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="number"
                                  className="form-control"
                                  placeholder="1"
                                  {...register("Quatity", { required: true })}
                                  min={1}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Giới tính
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="number"
                                  className="form-control"
                                  id="jobGender"
                                  {...register("sex", { required: true })}
                                >
                                  <option value="">Chọn giới tính</option>
                                  <option value={0}>Không yêu cầu</option>
                                  <option value={1}>Nam</option>
                                  <option value={2}>Nữ</option>
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Mô tả công việc
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <input
                                  typeof="text"
                                  className="form-control"
                                  placeholder="Nhập mô tả công việc"
                                  {...register("describe", { required: true })}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Yêu cầu công việc
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <input
                                  typeof="text"
                                  className="form-control"
                                  placeholder="Nhập yêu cầu công việc"
                                  {...register("Candidate_requirements", {
                                    required: true,
                                  })}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Chuyên Ngành
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="text"
                                  className="form-control"
                                  id="natureWork"
                                  {...register("profession_id", {
                                    required: true,
                                  })}
                                >
                                  <option value="" selected hidden>
                                    Chọn chuyên ngành
                                  </option>
                                  {news.profession?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Trình độ
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="text"
                                  className="form-control"
                                  id="jobLevel"
                                  {...register("level_id", { required: true })}
                                >
                                  <option value="" selected hidden>
                                    Trình độ
                                  </option>
                                  {news.lever?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Kinh nghiệm
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="text"
                                  className="form-control"
                                  id="jobExperience"
                                  {...register("experience_id", {
                                    required: true,
                                  })}
                                >
                                  <option value="" selected hidden>
                                    Kinh Nghiệm
                                  </option>
                                  {news.experience?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Mức lương
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="text"
                                  className="form-control"
                                  id="jobSalary"
                                  {...register("Wage_id", { required: true })}
                                >
                                  <option value="">Chọn mức lương</option>
                                  {news.wage?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Hình thức làm việc
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="text"
                                  className="form-control"
                                  id="jobWorkTime"
                                  {...register("wk_form_id", {
                                    required: true,
                                  })}
                                >
                                  <option value="">Chọn mức lương</option>
                                  {news.workingform?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Thời gian làm việc
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <select
                                  className="form-control"
                                  id="jobProbation"
                                  {...register("time_work_id", {
                                    required: true,
                                  })}
                                >
                                  <option value="">Thời gian làm việc</option>
                                  {news.timework?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Quyền lợi
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <input
                                  typeof="text"
                                  className="form-control"
                                  placeholder="Quyền lợi công việc"
                                  {...register("benefit", { required: true })}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Ngành nghề
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="text"
                                  className="form-control"
                                  id="jobType"
                                  {...register("majors_id", { required: true })}
                                >
                                  {/* <option>Chọn ngành nghề</option> */}
                                  {news.majors?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>

                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Nơi làm việc
                              </label>
                              <div className="col-sm-9">
                                <select
                                  typeof="text"
                                  className="form-control"
                                  id="jobProvince"
                                  {...register("location_id", {
                                    required: true,
                                  })}
                                >
                                  <option value="">Chọn mức lương</option>
                                  {news.location?.map((item: any) => {
                                    return (
                                      <option key={item.id} value={item.id}>
                                        {item.name}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Địa chỉ cụ thể
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="text"
                                  className="form-control"
                                  {...register("Address", { required: true })}
                                />
                              </div>
                            </div>
                            <div className="form-group row">
                              <label className="col-sm-3 col-form-label text-right label">
                                Hạn nộp hồ sơ
                                <span style={{ color: "red" }} className="pl-2">
                                  *
                                </span>
                              </label>
                              <div className="col-sm-9">
                                <input
                                  type="date"
                                  className="form-control"
                                  {...register("end_job_time", {
                                    required: true,
                                  })}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* ))} */}
                      </div>
                      <div className="card recuitment-card">
                        <div
                          className="card-header recuitment-card-header"
                          id="headingTwo"
                        >
                          <h2 className="mb-0">
                            <a
                              className="btn btn-link btn-block text-left collapsed recuitment-header"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapseTwo"
                              aria-expanded="false"
                              aria-controls="collapseTwo"
                            >
                              Kỹ năng
                              <span id="clickc1_advance3" className="clicksd">
                                <i className="fa fa fa-angle-up" />
                              </span>
                            </a>
                          </h2>
                        </div>
                        <div
                          id="collapseTwo"
                          className="collapse show"
                          aria-labelledby="headingTwo"
                          data-parent="#accordionExample"
                        >
                          <div className="card-body recuitment-body">
                            <div className="checkboxsec" id="checkboxSection">
                              <label className="label-container">
                                {news.skill?.map((skill: any) => (
                                  <div className="filter-topic" key={skill.id}>
                                    <label className="label-container">
                                      <span>{skill.name}</span>
                                      <input
                                        type="checkbox"
                                        {...register("skill_id", {
                                          required: true,
                                        })}
                                        defaultChecked={checkedSkill(skill.id)}
                                        value={skill.id}
                                      />
                                      <span className="checkmark" />
                                    </label>
                                  </div>
                                ))}
                                {/* {news.skill?.map((skill: any, index: number) => (
                                <Checkbox
                                  key={skill.id}
                                  defaultChecked={checkedSkill(skill.id)}
                                >
                                  {skill.name}
                                </Checkbox>
                              ))} */}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                      {news.user?.map((item: any) => (
                        <div className="card recuitment-card" key={item.id}>
                          <div
                            className="card-header recuitment-card-header"
                            id="headingThree"
                          >
                            <h2 className="mb-0">
                              <a
                                className="btn btn-link btn-block text-left collapsed recuitment-header"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseThree"
                                aria-expanded="false"
                                aria-controls="collapseThree"
                              >
                                Thông tin liên hệ
                                <span id="clickc1_advance1" className="clicksd">
                                  <i className="fa fa fa-angle-up" />
                                </span>
                              </a>
                            </h2>
                          </div>
                          <div
                            id="collapseThree"
                            className="collapse show"
                            aria-labelledby="headingThree"
                            data-parent="#accordionExample"
                          >
                            <div className="card-body recuitment-body">
                              <input
                                type="hidden"
                                value={item.id}
                                {...register("id_Employer", { required: true })}
                              />
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Tên người liên hệ
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên người liên hệ"
                                    defaultValue={item.name}
                                    {...register("nameEmployer", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Email
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="mail"
                                    className="form-control"
                                    placeholder="Địa chỉ email"
                                    defaultValue={item.email}
                                    {...register("emailEmployer", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Điện thoại
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="number"
                                    className="form-control"
                                    placeholder="Nhập số điện thoại"
                                    defaultValue={item.phone}
                                    {...register("phoneEmployer", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Địa chỉ
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập số điện thoại"
                                    defaultValue={item.address}
                                    {...register("addressEmployer", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="card recuitment-card">
                        <div
                          className="card-header recuitment-card-header"
                          id="heading4"
                        >
                          <h2 className="mb-0">
                            <a
                              className="btn btn-link btn-block text-left collapsed recuitment-header"
                              type="button"
                              data-toggle="collapse"
                              data-target="#collapse4"
                              aria-expanded="false"
                              aria-controls="collapse4"
                            >
                              Thông tin công ty
                              <span id="clickc1_advance4" className="clicksd">
                                <i className="fa fa fa-angle-up" />
                              </span>
                            </a>
                          </h2>
                        </div>
                        {news.company?.map((item: any) => (
                          <div
                            id="collapse4"
                            className="collapse show"
                            aria-labelledby="heading4"
                            data-parent="#collapse4"
                            key={item.id}
                          >
                            <input
                              type="hidden"
                              defaultValue={item.id}
                              {...register("id_company", { required: true })}
                            />
                            <div className="card-body recuitment-body">
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Tên công ty
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên công ty"
                                    defaultValue={item.namecompany}
                                    {...register("nameCompany", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Địa chỉ
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập địa chỉ"
                                    defaultValue={item.address}
                                    {...register("addressCompany", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Email
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Nhập Email"
                                    defaultValue={item.email}
                                    {...register("emailCompany", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              {/* <div className="form-group row">
                            <label className="col-sm-3 col-form-label text-right label">Tỉnh/ Thành phô<span style={{ color: 'red' }} className="pl-2">*</span></label>
                            <div className="col-sm-9">
                              <select typeof="text" className="form-control" id="jobProvince2" {...register('addressEmployer', { required: true })}>
                                {news.location?.map((item: any) => {
                                  return <option key={item.id} defaultValue={item.name}>{item.name}</option>
                                })}
                              </select>
                            </div>
                          </div> */}
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Quy mô nhân sự
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nhập số lượng nhân viên"
                                    defaultValue={item.number_member}
                                    {...register("number_member", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Sơ lược về công ty
                                  <span
                                    style={{ color: "red" }}
                                    className="pl-2"
                                  >
                                    *
                                  </span>
                                </label>
                                <div className="col-sm-9">
                                  <textarea
                                    typeof="text"
                                    className="form-control"
                                    placeholder="Sơ lược về công ty"
                                    defaultValue={item.Desceibe}
                                    {...register("DesceibeCompany", {
                                      required: true,
                                    })}
                                  />
                                </div>
                              </div>
                              <div className="form-group row">
                                <label className="col-sm-3 col-form-label text-right label">
                                  Logo
                                </label>
                                <div className="col-sm-9 ">
                                  <div id="drop-area">
                                    <label
                                      style={{ cursor: "pointer" }}
                                      htmlFor="fileElem"
                                    >
                                      Tải ảnh lên hoặc kéo thả vào đây
                                    </label>
                                    {/* <progress id="progress-bar" max={100} defaultValue={0} className="d-none" /> */}
                                    <input
                                      type="text"
                                      className="form-control"
                                      defaultValue={item.logo}
                                      {...register("logo", { required: true })}
                                    />
                                    <div id="gallery" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rec-submit">
                      <button type="submit" className="btn-submit-recuitment">
                        <i className="fa fa-floppy-o pr-2" />
                        Lưu Tin
                      </button>
                    </div>
                  </form>
                </div>
                {/* Side bar */}
              </div>
            </div>
          </div>
          {/* (end) published recuitment */}
          <div className="clearfix" />
        </div>
      </div>
    </div>
  );
};

export default EditNews;
