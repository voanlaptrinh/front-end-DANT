import React, { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
  Checkbox,
  Upload,
} from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { createNews, editNews, listNews } from "../../../api/home";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

type Props = {};

const Edit = (props: Props) => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState<any>([]);
  const [editnews, setEditNews] = useState<any>([]);
  let { id } = useParams();
  const oncreate: SubmitHandler<any> = async (formData: any) => {
    const { data } = await createNews(formData);
  };

  useEffect(() => {
    getCategories();
    getEditNews(id);
  }, []);

  const getEditNews = async (id: any) => {
    const { data } = await editNews(id);
    setEditNews(data);
  };
  const getCategories = async () => {
    const { data } = await listNews();
    setCategories(data);
  };

  const user = categories?.user;
  const company = categories?.company;
  const job = editnews?.job;
  console.log(job);

  if (!user) {
    return null;
  }
  return (
    <div>
      <div className="col-md-8 col-sm-12 col-12 recuitment-inner">
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          className="recuitment-form"
          layout="horizontal"
          onFinish={oncreate}
          initialValues={{
            title: job?.title,
            Quatity: job?.Quatity,
            sex: job?.sex,
            describe: job?.describe,
            benefit: job?.benefit,
            Candidate_requirements: job?.Candidate_requirements,
            getprofession: job?.getprofession.name,
            // get_level: job?.name,
            // get_experience: job?.name,
            // get_wage: job?.name,
            // getwk_form: job?.name,
            // get_time_work: job?.name,
            // get_majors: job?.name,

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
                  <Form.Item
                    label="Tiêu đề"
                    name="title"
                    rules={[
                      { required: true, message: "bạn chưa nhập tiêu đề" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Số lượng cần tuyển"
                    name="Quatity"
                    rules={[
                      { required: true, message: "bạn chưa nhập số lượng" },
                    ]}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                  <Form.Item
                    label="chọn giới tính"
                    name="sex"
                    rules={[
                      { required: true, message: "bạn chưa chọn giới tính" },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">Chọn giới tính</Select.Option>
                      <Select.Option value="1">nam</Select.Option>
                      <Select.Option value="2">nữ</Select.Option>
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="mô tả công việc"
                    name="describe"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa nhập mô tả công việc",
                      },
                    ]}
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                  <Form.Item
                    label="yêu cầu công việc"
                    name="Candidate_requirements"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa nhập yêu cầu công việc",
                      },
                    ]}
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                  <Form.Item
                    label="chọn chuyên ngành"
                    name="profession_id"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa chọn chuyên nghành",
                      },
                    ]}
                  >
                    <Select defaultValue={job.getprofession.name}>
                      <Select.Option value="">Chọn chuyên ngành</Select.Option>
                      {categories.profession?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Trình độ"
                    name="level_id"
                    rules={[
                      { required: true, message: "bạn chưa chọn trình độ" },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">Trình độ</Select.Option>
                      {categories.lever?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="kinh nghiệp"
                    name="experience_id"
                    rules={[
                      { required: true, message: "bạn chưa chọn kinh nghiệm" },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">Chọn kinh nghiệm</Select.Option>
                      {categories.experience?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="chọn mức lương"
                    name="Wage_id"
                    rules={[
                      { required: true, message: "bạn chưa chọn mức lương" },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">Chọn giới tính</Select.Option>
                      {categories.wage?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}{" "}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Hình thức làm việc"
                    name="wk_form_id"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa chọn hình thức làm việc",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">Hình thức làm việc</Select.Option>
                      {categories.workingform?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}{" "}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="thời gian làm việc"
                    name="time_work_id"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa chọn thời gian làm việc",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">Thời gian làm việc</Select.Option>
                      {categories.timework?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}{" "}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="quyền lơi công việc"
                    name="benefit"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa nhập quyền lợi làm việc",
                      },
                    ]}
                  >
                    <TextArea rows={2} />
                  </Form.Item>
                  <Form.Item
                    label="chọn nghành nghề"
                    name="majors_id"
                    rules={[
                      { required: true, message: "bạn chưa chọn nghành nghề" },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">chọn nghành nghề</Select.Option>
                      {categories.majors?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}{" "}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="chọn nơi làm việc"
                    name="location_id"
                    rules={[
                      { required: true, message: "bạn chưa nhập nơi làm việc" },
                    ]}
                  >
                    <Select>
                      <Select.Option value="">nơi làm việc</Select.Option>
                      {categories.location?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}{" "}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="chọn địa chỉ cụ thể"
                    name="Address"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa nhập địa chỉ cụ thể",
                      },
                    ]}
                  >
                    <Select>
                      <Select.Option value="1">
                        chọn địa chỉ cụ thể
                      </Select.Option>
                      {categories.Address?.map((item: any) => {
                        return (
                          <Select.Option key={item.id} value={item.id}>
                            {item.name}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>
                  <Form.Item
                    label="Hạn nộp hồ sơ"
                    name="end_job_time"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa chọn hạn nộp hồ sơ",
                      },
                    ]}
                  >
                    <DatePicker />
                  </Form.Item>
                </div>
              </div>
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
            <div className="card recuitment-card">
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
                <div className="form-group row">
                  <Form.Item name="id_Employer">
                    <Input type="hidden" />
                  </Form.Item>
                </div>
                <div className="form-group row">
                  <Form.Item label={"name"} name="nameEmployer">
                    <Input />
                  </Form.Item>
                </div>
                <div className="form-group row">
                  <Form.Item label={"email"} name="emailEmployer">
                    <Input />
                  </Form.Item>
                </div>
                <div className="form-group row">
                  <Form.Item label={"phone"} name="phoneEmployer">
                    <Input />
                  </Form.Item>
                </div>
                <div className="form-group row">
                  <Form.Item label={"address"} name="addressEmployer">
                    <Input />
                  </Form.Item>
                </div>
              </div>
            </div>
            {/* comapny */}
            <div className="card recuitment-card">
              <div className="card-header recuitment-card-header" id="heading4">
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
              <div
                id="collapse4"
                className="collapse show"
                aria-labelledby="heading4"
                data-parent="#collapse4"
              >
                <div className="card-body recuitment-body">
                  <div className="form-group row">
                    <Form.Item name="id_company">
                      <Input type="hidden" />
                    </Form.Item>
                  </div>
                  <Form.Item
                    label="Tên công ty"
                    name="nameCompany"
                    rules={[
                      { required: true, message: "bạn chưa nhập tên công ty" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="email công ty"
                    name="emailCompany"
                    rules={[
                      { required: true, message: "bạn chưa email công ty" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="địa chỉ công ty "
                    name="addressCompany"
                    rules={[
                      { required: true, message: "bạn chưa địa chỉ công ty" },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="quy mô nhân sự"
                    name="number_member"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa chọn quy mô nhân sự",
                      },
                    ]}
                  >
                    <InputNumber min={1} />
                  </Form.Item>
                  <Form.Item
                    label="giới thiệu về công ty"
                    name="DesceibeCompany"
                    rules={[
                      {
                        required: true,
                        message: "bạn chưa nhập quy môn nhân sự",
                      },
                    ]}
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                  {/* <Form.Item
                    label="thêm logo"
                    valuePropName="fileList"
                    name="logo"
                  >
                    <Upload action="/upload.do" listType="picture-card">
                      <div>
                        <PlusOutlined />
                        <div style={{ marginTop: 8 }}>Upload</div>
                      </div>
                    </Upload>
                    <Input />
                  </Form.Item> */}
                  <Form.Item
                    label="thêm logo "
                    name="logo"
                    rules={[{ required: true, message: "bạn chưa thêm logo" }]}
                  >
                    <Input />
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
          <div className="rec-submit">
            <Form.Item label="">
              <Button type="primary" htmlType="submit">
                <i className="fa fa-floppy-o pr-2" />
                Lưu Tin
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Edit;
