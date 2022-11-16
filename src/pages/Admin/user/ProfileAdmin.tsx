import axios from "axios";
import { id } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useParams } from "react-router-dom";
import { isAuthenticate } from "../../../api/auth";
import { listNews, listprofile } from "../../../api/home";
import { updateProfileemp } from "../../../api/profile";

type Props = {};

const ProfileAdmin = (props: Props) => {
  const [profile, setProfile] = useState<any>([]);
  const data = isAuthenticate();

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
    const { data } = await listprofile();
    setProfile(data);
  };
  console.log(profile);

  const onupdate: SubmitHandler<any> = async (formData: any) => {
    await updateProfileemp(data.token, formData)
  }
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
              {profile.employer?.map((employer: any) => (
                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row" onSubmit={handleSubmit(onupdate)}>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12">
                      <div>
                        <input type="hidden" {...register('id', { required: true })}
                          defaultValue={employer.id} />
                      </div>
                      <div className="custom-file avater_uploads">
                        <input
                          type="file"
                          className="custom-file-input"
                          {...register('avatar', { required: true })}
                          defaultValue={employer.avatar}
                        />
                        <label className="custom-file-label" htmlFor="customFile">
                          <i className="fa fa-user" />
                        </label>
                      </div>
                    </div>
                    <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12">
                      <div className="row">
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              Họ và tên
                            </label>
                            <input
                              type="text"
                              className="form-control rounded"
                              defaultValue={employer.name}
                              {...register("nameEmployer", {
                                required: true,
                              })} />
                            {errors?.nameEmployer && <span> khong được để trông</span>}
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">Chức vụ</label>
                            <input
                              type="text"
                              className="form-control rounded"
                              {...register('workplace', { required: true })}
                              defaultValue={employer.workplace}

                            />
                            {errors?.workplace && <span> khong được để trông</span>}

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
                              {...register("phoneEmployer", {
                                required: true,
                              })}
                              defaultValue={employer.phone}

                            />
                            {errors?.phoneEmployer && <span> khong được để trông</span>}

                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">Email</label>
                            <input
                              type="email"
                              className="form-control rounded"
                              {...register("emailEmployer", {
                                required: true,
                              })}
                              defaultValue={employer.email}

                            />
                            {errors?.emailEmployer && <span> khong được để trông</span>}

                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                          <div className="form-group">
                            <label className="text-dark ft-medium">
                              {" "}
                              Địa chỉ{" "}
                            </label>
                            <input
                              type="text"
                              className="form-control rounded"
                              {...register("addressEmployer", {
                                required: true,
                              })}
                              defaultValue={employer.address}

                            />
                            {errors?.addressEmployer && <span> khong được để trông</span>}

                          </div>
                        </div>
                        <div className="col-xl-12 col-lg-12">
                          <div className="form-group">
                            <button
                              type="submit"
                              className="btn btn-md ft-medium text-light rounded theme-bg"
                            >
                              gui
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              ))}
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
              {profile.company?.map((company: any) => (
                <div className="_dashboard_content_body py-3 px-3">
                  <form className="row" onSubmit={handleSubmit(onupdate)}>
                    <input
                      type="hidden"
                    />
                    <div className="col-xl-6 col-lg-6 col-md-12">
                      <div className="form-group">
                        <label className="text-dark ft-medium">Tên công ty</label>
                        <input
                          type="text"
                          className="form-control rounded"
                          defaultValue={company.name}
                          {...register("nameCompany", {
                            required: true,
                          })} />
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
                          defaultValue={company.email}
                          {...register("emailCompany", {
                            required: true,
                          })}
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
                          defaultValue={company.number_member}
                          {...register("number_member", {
                            required: true,
                          })}
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
                          defaultValue={company.address}
                          {...register("addressCompany", {
                            required: true,
                          })}
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
                          {...register('logo', { required: true })}

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
                          {...register("DesceibeCompany", {
                            required: true,
                          })}
                          defaultValue={company.Desceibe}
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAdmin;
