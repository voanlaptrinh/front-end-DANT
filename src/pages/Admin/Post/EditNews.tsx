import { Checkbox, Form } from "antd";
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
                      <input type="email" className="form-control" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Số lượng cần tuyển<span className="required-lable">*</span></label>
                      <input type="number" className="form-control" min="0" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Giới tính<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">Chọn giới tính</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Mô tả công việc<span className="required-lable">*</span></label>
                      <textarea className="form-control" ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Yêu cầu công việc<span className="required-lable">*</span></label>
                      <textarea className="form-control" ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Quyền lơi công việc<span className="required-lable">*</span></label>
                      <textarea className="form-control" ></textarea>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Chọn nghành nghề<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">Chọn nghành nghề</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Chọn nơi làm việc<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">Chọn nơi làm việc</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Chọn địa chỉ cụ thể<span className="required-lable">*</span></label>
                      <input type="text" className="form-control" />
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Hạn nộp hồ sơ<span className="required-lable">*</span></label>
                      <input type="date" className="form-control" />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="mb-4">
                      <label className="form-label">Chọn chuyên ngành<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">Chọn chuyên ngành</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">chọn trình độ<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">chọn trình độ</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">chọn kinh nghiệm<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">chọn kinh nghiệm</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">chọn mức lương<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">chọn mức lương</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Hình thức làm việc<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">Hình thức làm việc</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label">Thời gian làm việc<span className="required-lable">*</span></label>
                      <select className="form-control" required aria-label="select example" >
                        <option value="">Thời gian làm việc</option>
                        <option value="1"></option>
                        <option value="2"></option>
                      </select>
                    </div>
                    <div className="mb-4">
                      <label className="form-label"> Kỹ năng</label>

                      <div className="card-body recuitment-body check-box-employer">
                        <Form.Item
                          name="skill_id"
                          valuePropName="checked"
                          rules={[
                            {
                              required: true,
                              message: "bạn chưa chọn kĩ năng",
                            },
                          ]}
                        >
                          <Checkbox.Group
                            options={categories.skill?.map((skill: any) => ({
                              label: skill.name,
                              value: skill.id,
                            }))}
                          ></Checkbox.Group>
                        </Form.Item>
                      </div>


                    </div>
                  </div>
                </div>
                <div className="rec-submit">
                  <button type="button" className="btn btn-primary">Lưu Tin</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default EditNews;
