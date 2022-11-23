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

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    const { data } = await listNews();
    setCategories(data);
    console.log(data);
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
    // console.log(formData);
  };

  const uploadImg = async (e: any) => {
    setAvatar(e.target.files[0]);
  };

  const user = categories?.user;
  const company = categories?.company;
  console.log(categories);

  if (!user) {
    return null;
  }

  return (
    <div>
      <div className="col-12 recuitment-inner">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          className="recuitment-form"
          layout="horizontal"
          onFinish={oncreate}
          initialValues={{
            nameEmployer: user[0]?.name,
            id_Employer: user[0]?.id,
            emailEmployer: user[0]?.email,
            phoneEmployer: user[0]?.phone,
            addressEmployer: user[0]?.address,
            nameCompany: company[0]?.namecompany ?? "",
            emailCompany: company[0]?.email ?? "",
            number_member: company[0]?.number_member ?? "",
            phoneCompany: company[0]?.phone ?? "",
            logo: company[0]?.logo ?? "",
            DesceibeCompany: company[0]?.Desceibe ?? "",
            addressCompany: company[0]?.address ?? "",
            id_company: company[0]?.id_company ?? "",
          }}
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
                  <button type="button" className="btn btn-primary">Đăng Tin</button>
                </div>

              </div>
            </div>
          </div>
        </Form>
      </div >
    </div >
  );
};

export default PostAdd;
