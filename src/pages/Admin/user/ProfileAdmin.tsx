import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { listNews } from "../../../api/home";

type Props = {};

const ProfileAdmin = (props: Props) => {
  const [news, setNews] = useState<any>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<any>({});
  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    const { data } = await listNews();
    setNews(data);
  };
  console.log(news?.company?.[0]);

  return (
    <div>
      <div className="dashboard-widg-bar d-block">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="fa fa-user mr-1 theme-cl fs-sm" />
                    Tài khoản của bạn
                  </h4>
                </div>
              </div>
              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                    <div className="custom-file avater_uploads">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="customFile"
                      />
                      <label className="custom-file-label" htmlFor="customFile">
                        <i className="fa fa-user" />
                      </label>
                    </div>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                    <div className="row">
                      <input
                        type="hidden"
                        value={news.user?.[0].id}
                        {...register("id_Employer", { required: true })}
                      />
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Họ và tên
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            defaultValue={news.user?.[0].name}
                            {...register("name", { required: true })}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Chức vụ</label>
                          <input
                            type="text"
                            className="form-control rounded"
                            defaultValue={news.user?.[0].workplace}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            Số điện thoại
                          </label>
                          <input
                            type="text"
                            className="form-control rounded"
                            defaultValue={news.user?.[0].phone}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">Email</label>
                          <input
                            type="email"
                            className="form-control rounded"
                            defaultValue={news.user?.[0].email}
                          />
                        </div>
                      </div>
                      <div className="col-xl-6 col-lg-6">
                        <div className="form-group">
                          <label className="text-dark ft-medium">
                            {" "}
                            Địa chỉ{" "}
                          </label>
                          <input
                            type="email"
                            className="form-control rounded"
                            defaultValue={news.user?.[0].address}
                          />
                        </div>
                      </div>
                      <div className="col-xl-12 col-lg-12">
                        <div className="form-group">
                          <button
                            type="submit"
                            className="btn btn-md ft-medium text-light rounded theme-bg"
                          >
                            Save Changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  ;
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="ti-facebook mr-1 theme-cl fs-sm" />
                    Mạng xã hội
                  </h4>
                </div>
              </div>
              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Facebook</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Website</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        placeholder="https://www.facebook.com/"
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md ft-medium text-light rounded theme-bg"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="_dashboard_content bg-white rounded mb-4">
              <div className="_dashboard_content_header br-bottom py-3 px-3">
                <div className="_dashboard__header_flex">
                  <h4 className="mb-0 ft-medium fs-md">
                    <i className="fas fa-lock mr-1 theme-cl fs-sm" />
                    Contact Information
                  </h4>
                </div>
              </div>
              <div className="_dashboard_content_body py-3 px-3">
                <form className="row">
                  <input
                    type="hidden"
                    value={news.company?.[0].id_company}
                    {...register("id_company", { required: true })}
                  />
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">Tên công ty</label>
                      <input
                        type="text"
                        className="form-control rounded"
                        defaultValue={news.company?.[0].name}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Email công ty
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        defaultValue={news.company?.[0].email}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Quy mô nhân sự
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        defaultValue={news.company?.[0].number_member}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        số điện thoại
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        defaultValue={news.company?.[0].phone}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Địa chỉ cụ thể
                      </label>
                      <input
                        type="text"
                        className="form-control rounded"
                        defaultValue={news.company?.[0].address}
                      />
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        logo của công ty
                      </label>
                      <input
                        type="file"
                        className="form-control rounded"
                        defaultValue={news.company?.[0].logo}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="form-group">
                      <label className="text-dark ft-medium">
                        Giới thiệu về công ty
                      </label>
                      <textarea
                        className="form-control with-light"
                        defaultValue={news.company?.[0].Desceibe}
                      />
                    </div>
                  </div>
                  <div className="col-xl-12 col-lg-12">
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn btn-md ft-medium text-light rounded theme-bg"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
