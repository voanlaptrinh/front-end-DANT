import axios from "axios";
import { id } from "date-fns/locale";
import React, { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useParams } from "react-router-dom";
import { number, string } from "yup";
import { isAuthenticate } from "../../../api/auth";
import { listprofileAdmin, listprofileAdmincom, updateProfilecom, updateProfileemp } from "../../../api/profile";

type Props = {};

const ProfileCompany = (props: Props) => {
    const [profileCom, setProfileCom] = useState<any>([]);
    const [avatar, setAvatar] = useState("");

    const data = isAuthenticate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<any>({});

    useEffect(() => {
        getprofileCom()
    }, []);

    const getprofileCom = async () => {
        const { data } = await listprofileAdmincom();
        setProfileCom(data);
    };
    console.log(profileCom);

    const onupdateCom: SubmitHandler<any> = async (dataform: any) => {
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
        await updateProfilecom(data.id, product)
    }

    const uploadImg = async (e: any) => {
        setAvatar(e.target.files[0]);
    };

    return (
        <div>
            <div className="dashboard-widg-bar d-block">
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
                        {profileCom.company?.map((company: any) => (
                            <div className="_dashboard_content_body py-3 px-3">
                                <form className="row" onSubmit={handleSubmit(onupdateCom)}>
                                    <input
                                        defaultValue={company.id}
                                        {...register("id", {
                                            required: true,
                                        })}
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
                                                onChange={uploadImg}
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
                {/* </div> */}
            </div>
        </div>
    );
};

export default ProfileCompany;
