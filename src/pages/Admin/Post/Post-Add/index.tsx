import React, { useEffect, useState } from 'react'
import { PlusOutlined } from '@ant-design/icons';
import { Form, Input, Button, Radio, Select, Cascader, DatePicker, InputNumber, TreeSelect, Switch, Checkbox, Upload, } from 'antd';
import { useNavigate } from 'react-router-dom';
import { createNews, listNews } from '../../../../api/home';
import { SubmitHandler, useForm } from 'react-hook-form';
import '../../../../js/bootstrap.min.js'

const { RangePicker } = DatePicker;
const { TextArea } = Input;

type Props = {}

const PostAdd = (props: Props) => {

   const onSuccess = (values: any) => {
      console.log(values);
   }
   const onFailed = (errorInfo: any) => {
      console.log(errorInfo);
   }
   const navigate = useNavigate()
   const [news, setNews] = useState<any>([])
   const oncreate: SubmitHandler<any> = async (formData: any) => {
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
   }, [])


   return (
      <div>
         <div className="col-md-8 col-sm-12 col-12 recuitment-inner">
            <Form labelCol={{ span: 4 }} wrapperCol={{ span: 14 }} className="recuitment-form" layout="horizontal" onFinish={oncreate} onFinishFailed={onFailed}>
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
                           <Form.Item label="Tiêu đề" name="title" rules={[{ required: true, message: 'bạn chưa nhập tiêu đề' }]}  >
                              <Input />
                           </Form.Item>
                           <Form.Item label="Số lượng cần tuyển" name="Quatity" rules={[{ required: true, message: 'bạn chưa nhập số lượng' }]}>
                              <InputNumber min={1} />
                           </Form.Item>
                           <Form.Item label="chọn giới tính" name="sex" rules={[{ required: true, message: 'bạn chưa chọn giới tính' }]}>
                              <Select>
                                 <Select.Option value="">Chọn giới tính</Select.Option>
                                 <Select.Option value="">nam</Select.Option>
                                 <Select.Option value="">nữ</Select.Option>
                              </Select>
                           </Form.Item>
                           <Form.Item label="mô tả công việc" name="describe" rules={[{ required: true, message: 'bạn chưa nhập mô tả công việc' }]}>
                              <TextArea rows={2} />
                           </Form.Item>
                           <Form.Item label="yêu cầu công việc" name="Candidate_requirements" rules={[{ required: true, message: 'bạn chưa nhập yêu cầu công việc' }]}>
                              <TextArea rows={2} />
                           </Form.Item>
                           <Form.Item label="chọn chuyên ngành" name="profession_id" rules={[{ required: true, message: 'bạn chưa chọn chuyên nghành' }]}>
                              <Select>
                                 <Select.Option value="">Chọn chuyên ngành</Select.Option>
                                 {news.profession?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}
                              </Select>
                           </Form.Item>
                           <Form.Item label="Trình độ" name="level_id" rules={[{ required: true, message: 'bạn chưa chọn trình độ' }]}>
                              <Select>
                                 <Select.Option value="">Trình độ</Select.Option>
                                 {news.lever?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}
                              </Select>
                           </Form.Item>
                           <Form.Item label="kinh nghiệp" name="experience_id" rules={[{ required: true, message: 'bạn chưa chọn kinh nghiệm' }]} >
                              <Select>
                                 <Select.Option value="">Chọn kinh nghiệm</Select.Option>
                                 {news.experience?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}
                              </Select>
                           </Form.Item>
                           <Form.Item label="chọn mức lương" name="Wage_id" rules={[{ required: true, message: 'bạn chưa chọn mức lương' }]}>
                              <Select>
                                 <Select.Option value="">Chọn giới tính</Select.Option>
                                 {news.wage?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}                              </Select>
                           </Form.Item>
                           <Form.Item label="Hình thức làm việc" name="wk_form_id" rules={[{ required: true, message: 'bạn chưa chọn hình thức làm việc' }]}>
                              <Select>
                                 <Select.Option value="">Hình thức làm việc</Select.Option>
                                 {news.workingform?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}                              </Select>
                           </Form.Item>
                           <Form.Item label="thời gian làm việc" name="time_work_id" rules={[{ required: true, message: 'bạn chưa chọn thời gian làm việc' }]}>
                              <Select>
                                 <Select.Option value="">Thời gian làm việc</Select.Option>
                                 {news.timework?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}                              </Select>
                           </Form.Item>
                           <Form.Item label="quyền lơi công việc" name="benefit" rules={[{ required: true, message: 'bạn chưa nhập quyền lợi làm việc' }]}>
                              <TextArea rows={2} />
                           </Form.Item>
                           <Form.Item label="chọn nghành nghề" name="majors_id" rules={[{ required: true, message: 'bạn chưa chọn nghành nghề' }]}>
                              <Select>
                                 <Select.Option value="">chọn nghành nghề</Select.Option>
                                 {news.majors?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}                              </Select>
                           </Form.Item>
                           <Form.Item label="chọn nơi làm việc" name="location_id" rules={[{ required: true, message: 'bạn chưa nhập nơi làm việc' }]}>
                              <Select>
                                 <Select.Option value="">nơi làm việc</Select.Option>
                                 {news.location?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}                              </Select>
                           </Form.Item>
                           <Form.Item label="chọn địa chỉ cụ thể" name="Address" rules={[{ required: true, message: 'bạn chưa nhập địa chỉ cụ thể' }]}>
                              <Select>
                                 <Select.Option value="1">chọn địa chỉ cụ thể</Select.Option>
                                 {news.lever?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}                              </Select>
                           </Form.Item>
                           <Form.Item label="Hạn nộp hồ sơ" name="end_job_time" rules={[{ required: true, message: 'bạn chưa chọn hạn nộp hồ sơ' }]}>
                              <DatePicker />
                           </Form.Item>
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
                           <Form.Item label="Chekbox" name="disabled" valuePropName="checked">
                              <Checkbox name='skill'>
                                 {news.skill?.map((item: any) => {
                                    return (
                                       <div className="filter-topic">
                                          <label className="label-container">
                                             <span>{item.name}</span>
                                             <span className="checkmark" />
                                          </label>
                                       </div>
                                    )
                                 })}</Checkbox>
                           </Form.Item>
                        </div>

                     </div>

                  </div>

                  <div className="card recuitment-card">
                     <div className="card-header recuitment-card-header" id="heading4">
                        <h2 className="mb-0">
                           <a className="btn btn-link btn-block text-left collapsed recuitment-header" type="button" data-toggle="collapse" data-target="#collapse4" aria-expanded="false" aria-controls="collapse4">
                              Thông tin người liên hệ
                              <span id="clickc1_advance4" className="clicksd">
                                 <i className="fa fa fa-angle-up" />
                              </span>
                           </a>
                        </h2>
                     </div>
                     {news.user?.map((item: any) => (
                        <div id="collapseThree" className="collapse show" aria-labelledby="headingThree" data-parent="#accordionExample">
                           <div className="card-body recuitment-body">
                              <input type="hidden" value={item.id} />
                              <Form.Item label="tên người liên hệ" name="end_job_time" rules={[{ required: true, message: 'bạn chưa nhập tên' }]}>
                                 <Input value={item.name}/>
                              </Form.Item>
                              <Form.Item label="Số điện thoại" name="end_job_time" rules={[{ required: true, message: 'bạn chưa nhập số điện thoại' }]}>
                                 <Input value={item.phone}/>
                              </Form.Item>
                              <Form.Item label="địa chỉ" name="end_job_time" rules={[{ required: true, message: 'bạn chưa chọn hạn nộp hồ sơ' }]}>
                                 <Input value={item.address}/>
                              </Form.Item>
                           </div>
                        </div>
                     ))
                     }
                  </div>

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
                           <Form.Item label="Tên công ty" name="name" rules={[{ required: true, message: 'bạn chưa nhập tên công ty' }]}>
                              <Input />
                           </Form.Item>
                           <Form.Item label="Email công ty" name="address" rules={[{ required: true, message: 'bạn chưa địa chỉ công ty' }]}>
                              <Input />
                           </Form.Item>
                           <Form.Item label="Địa chỉ công ty" name="emailCompany" rules={[{ required: true, message: 'bạn chưa email công ty' }]}>
                              <Input />
                           </Form.Item>
                           <Form.Item label="quy mô nhân sự" name="number_member" rules={[{ required: true, message: 'bạn chưa chọn quy mô nhân sự' }]}>
                              <Select>
                                 <Select.Option value="">chọn nghành nghề</Select.Option>
                                 {news.lever?.map((item: any) => {
                                    return <Select.Option key={item.id} value={item.id}>{item.name}</Select.Option>
                                 })}
                              </Select>
                           </Form.Item>
                           <Form.Item label="giới thiệu về công ty" name="Desceibe" rules={[{ required: true, message: 'bạn chưa nhập giới thiệu về công ty' }]}>
                              <TextArea rows={3} />
                           </Form.Item>
                           <Form.Item label="thêm logo" valuePropName="fileList" name="logo" >
                              <Upload action="/upload.do" listType="picture-card">
                                 <div>
                                    <PlusOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                 </div>
                              </Upload>
                           </Form.Item>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="rec-submit">
                  <Form.Item label="">
                     <Button type='primary' htmlType="submit"><i className="fa fa-floppy-o pr-2" />Lưu Tin</Button>
                  </Form.Item>
               </div>
            </Form>
         </div>
      </div>
   )
}

export default PostAdd