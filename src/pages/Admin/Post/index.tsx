import React, { useEffect, useState } from 'react'
import { Space, Table, Tag } from 'antd';
import { removeShowNews, showNews } from '../../../api/home';
import { SubmitHandler } from "react-hook-form";
import { EditOutlined, FlagOutlined } from '@ant-design/icons';

type Props = {}

const Post: React.FC = (props: Props) => {
   const [news, setNews] = useState<any>([]);

   useEffect(() => {
      getNews();
   }, []);
   const getNews = async () => {
      const { data } = await showNews();
      setNews(data);
   };
   console.log(news);
   const onRemove: SubmitHandler<any> = async (id: any) => {
      const confim = window.confirm("bạn có muốn xóa không");
      if (confim) {
         await removeShowNews(id).then(() => getNews());
      }
   };
   return (
      <div>
         <div className="dashboard-tlbar d-block mb-5">
            <div className="row">
               <div className="colxl-12 col-lg-12 col-md-12">
                  <h1 className="ft-medium">My Applied Jobs</h1>
               </div>
            </div>
         </div>
         <div className="dashboard-widg-bar d-block">
            <div className="row">
               <div className="col-xl-12 col-md-12 col-sm-12">
                  <div className="cl-justify">
                     <div className="cl-justify-first">
                        <p className="m-0 p-0 ft-sm">You have applied <span className="text-dark ft-medium">26</span> jobs</p>
                     </div>
                     <div className="cl-justify-last">
                        <div className="d-flex align-items-center justify-content-left">
                           <div className="dlc-list">
                              <select className="form-control sm rounded">
                                 <option>All Jobs</option>
                                 <option>Full Time</option>
                                 <option>Part Time</option>
                                 <option>Freelancing</option>
                                 <option>Internship</option>
                                 <option>Contract</option>
                              </select>
                           </div>
                           <div className="dlc-list ml-2">
                              <select className="form-control sm rounded">
                                 <option>Show 20</option>
                                 <option>Show 30</option>
                                 <option>Show 40</option>
                                 <option>Show 50</option>
                                 <option>Show 100</option>
                                 <option>Show 250</option>
                              </select>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-xl-12 col-lg-12 col-md-12">
                  <div className="mb-4 tbl-lg rounded overflow-hidden">
                     <div className="table-responsive bg-white">
                        <table className="table">
                           <thead className="thead-dark">
                              <tr>
                                 <th scope="col">Công Việc Vừa Đăng</th>
                                 <th scope="col">Trạng Thái</th>
                                 <th scope="col">Thời gian còn lại</th>
                                 <th scope="col">Số lượng hồ sơ đã nhân</th>
                                 <th scope="col">Thời gian đăng</th>
                                 <th scope="col">Action</th>
                              </tr>
                           </thead>
                           <tbody>
                              {news.job[0].data?.map((item: any) => {
                                 return (
                                    <tr key={item.id}>
                                       <td>
                                          <div className="cats-box rounded bg-white d-flex align-items-center">
                                             <div className="text-center"><img src={item.logo} className="img-fluid" width={55} /></div>
                                             <div className="cats-box-caption px-2">
                                                <h4 className="fs-md mb-0 ft-medium">{item.title}</h4>
                                                <div className="d-block mb-2 position-relative">
                                                   <span className="text-muted medium"><i className="lni lni-map-marker mr-1" />{item.getprofession.name}</span>
                                                   <span className="muted medium ml-2 theme-cl"><i className="lni lni-briefcase mr-1" />{item.get_time_work.name}</span>
                                                </div>
                                             </div>
                                          </div>
                                       </td>
                                       <td><span className="text-info">Nháp</span></td>
                                       <td>20 ngày</td>
                                       <td>10/20 yêu cầu</td>
                                       <td>{item.end_job_time}</td>
                                       <td>
                                          <div className="dash-action">
                                             <a href="javascript:void(0);" className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"><FlagOutlined /></a>
                                             <a href="javascript:void(0);" className="p-2 circle text-info bg-light-info d-inline-flex align-items-center justify-content-center mr-1"><i className="lni lni-eye" /></a>
                                             <a href="javascript:void(0);" className="p-2 circle text-black bg-light-danger d-inline-flex align-items-center justify-content-center ml-1"><EditOutlined /></a>
                                             <a href="javascript:void(0);" className="p-2 circle text-danger bg-light-danger d-inline-flex align-items-center justify-content-center ml-1" onClick={() => onRemove(item.id)}><i className="lni lni-trash-can" /></a>

                                          </div>
                                       </td>
                                    </tr>
                                 );
                              })}
                           </tbody>
                        </table>
                     </div>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-lg-12 col-md-12 col-sm-12">
                  <ul className="pagination">
                     <li className="page-item">
                        <a className="page-link" href="#" aria-label="Previous">
                           <span className="fas fa-arrow-circle-right" />
                           <span className="sr-only">Previous</span>
                        </a>
                     </li>
                     <li className="page-item"><a className="page-link" href="#">1</a></li>
                     <li className="page-item"><a className="page-link" href="#">2</a></li>
                     <li className="page-item active"><a className="page-link" href="#">3</a></li>
                     <li className="page-item"><a className="page-link" href="#">...</a></li>
                     <li className="page-item"><a className="page-link" href="#">18</a></li>
                     <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                           <span className="fas fa-arrow-circle-right" />
                           <span className="sr-only">Next</span>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Post