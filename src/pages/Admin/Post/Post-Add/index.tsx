import React, { useEffect, useState } from "react";

import {
  Form,
  Input,
  DatePicker,
  Checkbox,
} from "antd";
import { useNavigate } from "react-router-dom";
import { listNews, createNews } from "../../../../api/home";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";

// import { addDays } from "date-fns";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

type Props = {};

const PostAdd = (props: Props) => {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState("");
  const [categories, setCategories] = useState<any>([]);
  const { register, handleSubmit, formState: { errors } } = useForm()

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data } = await listNews();
    setCategories(data);
  };

  const oncreate: SubmitHandler<any> = async (dataform: any) => {
    const formData = new FormData();
    formData.append("file", avatar);
    formData.append("upload_preset", "dtertjeta");
    const {
      data: { url },
    } = await axios.post(
      `https://api.cloudinary.com/v1_1/dtertjeta/image/upload`,
      formData
    );
    const product = {
      ...dataform,
      logo: url,
    };
    const { data } = await createNews(product);
  };

  const uploadImg = async (e: any) => {
    setAvatar(e.target.files[0]);
  };

  console.log(categories);

  return (
    <div>
      <div className="col-12 recuitment-inner">
        <form
          className="recuitment-form"
          onSubmit={handleSubmit(oncreate)}
        >
          {/* new form create employer */}

          <div className="card-create-employer">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title"> Đăng tin tuyển dụng</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-6">
                    <div className="mb-4">
                      <label className="form-label">Tiêu đề<span className="required-lable">*</span></label>
                      <input type="text" className="form-control" {...register("title", { required: true })} />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Số lượng cần tuyển<span className="required-lable">*</span></label>
                      <input type="number" className="form-control" min="0"  {...register("Quatity", { required: true })} />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Giới tính<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example"  {...register("sex", { required: true })}>
                        <option value="">chọn giới tính</option>
                        <option value="0">không yêu cầu giới tính</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Mô tả công việc<span className="required-lable">*</span></label>
                      <textarea className="form-control" {...register("describe", { required: true })}></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Yêu cầu công việc<span className="required-lable">*</span></label>
                      <textarea className="form-control"  {...register("Candidate_requirements", { required: true, })}></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Quyền lơi công việc<span className="required-lable">*</span></label>
                      <textarea className="form-control"  {...register("benefit", { required: true })}></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Chọn nghành nghề<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example"  {...register("wk_form_id", { required: true, })}>
                        {categories.workingform?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Chọn nơi làm việc<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" {...register("location_id", { required: true, })}>
                        {categories.location?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Chọn địa chỉ cụ thể<span className="required-lable">*</span></label>
                      <input type="text" className="form-control" {...register("Address", { required: true })} />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Hạn nộp hồ sơ<span className="required-lable">*</span></label>
                      <input type="date" className="form-control"  {...register("end_job_time", { required: true, })} />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-4">
                      <label className="form-label">Chọn chuyên ngành<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" {...register("profession_id", { required: true, })}>
                        {categories.majors?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">chọn trình độ<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" {...register("level_id", { required: true })}>
                        {categories.lever?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">chọn kinh nghiệm<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example"  {...register("experience_id", { required: true, })}>
                        {categories.experience?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">chọn mức lương<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example"  {...register("Wage_id", { required: true })}>
                        {categories.wage?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Thời gian làm việc<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" {...register("time_work_id", { required: true, })}>
                        {categories.timework?.map((item: any) => (
                          <option key={item.id} value={item.id}>{item.name}</option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label"> Kỹ năng</label>
                      <div className="checkboxsec" id="checkboxSection">
                        <label className="label-container">
                          {categories.skill?.map((skill: any) => (
                            <div className="filter-topic" key={skill.id}>
                              <label className="label-container">
                                <span>{skill.name}</span>
                                <input
                                  type="checkbox"
                                  {...register("skill_id", {
                                    required: true,
                                  })}
                                  value={skill.id}
                                />
                                <span className="checkmark" />
                              </label>
                            </div>
                          ))}
                        </label>
                      </div>
                    </div>
                    <div>
                      <div>logo</div>
                      <input type="file" className="form-control" onChange={uploadImg} />
                    </div>
                  </div>
                </div>
                <div className="rec-submit">
                  <button type="submit" className="btn btn-primary">Đăng Tin</button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div >
    </div >
  );
};

export default PostAdd;
