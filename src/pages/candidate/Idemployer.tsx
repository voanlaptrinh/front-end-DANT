import Item from 'antd/lib/list/Item';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { detailCan } from '../../api/home';

type Props = {}

const Idemployer = (props: Props) => {
    const { id } = useParams();
    const [news, setNews] = useState<any>([])
    useEffect(() => {

        getNews(id);
    }, []);
    const getNews = async (id: any) => {
        const { data } = await detailCan(id!);
        setNews(data)
    }
    console.log(news.job);

    return (
        <div>
            {news.job?.map((item: any) => {
                return (
                    <div>
                        <div className="container-fluid job-detail-wrap">
                            <div className="container job-detail">
                                <div className="job-detail-header">
                                    <div className="row">
                                        <div className="col-md-2 col-sm-12 col-12">
                                            <div className="job-detail-header-logo">
                                                <a href="#">
                                                    <img src="img/fpt-logo.png" className="job-logo-ima" alt="job-logo" />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-7 col-sm-12 col-12" >
                                            <div className="job-detail-header-desc">
                                                <div className="job-detail-header-title">
                                                    <a href="#">{item.title}</a>
                                                </div>
                                                <div className="job-detail-header-company">
                                                    <a href="#">{item.nameCompany}</a>
                                                </div>
                                                <div className="job-detail-header-de">
                                                    <ul>
                                                        <li><i className="fa fa-map-marker icn-jd" /><span>{item.getlocation.name}</span></li>
                                                        <li><i className="fa fa-usd icn-jd" /><span>{item.get_wage.name}</span></li>
                                                        <li><i className="fa fa-calendar icn-jd" /><span>{item.job_time}</span></li>
                                                    </ul>
                                                </div>
                                                {/* {new?.job.} */}

                                                <div className="job-detail-header-tag">
                                                    {item.getskill?.map((item1: any) => {
                                                        return (
                                                            <ul>
                                                                <li>
                                                                    <a href="#">{item1.name}</a>
                                                                </li>

                                                            </ul>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 col-sm-12 col-12">
                                            <div className="jd-header-wrap-right">
                                                <div className="jd-center">
                                                    <a href="#" className="btn btn-primary btn-apply">Nộp đơn</a>
                                                    <p className="jd-view">Lượt xem: <span>1.520</span></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* (end) job detail header */}
                        <div className="clearfix" />
                        {/* Phần thân */}
                        <div className="wrapper">
                            <div className="container">
                                <div className="row">
                                    {/* Main wrapper */}
                                    <div className="col-md-8 col-sm-12 col-12 clear-left">
                                        <div className="main-wrapper">
                                            <h2 className="widget-title">
                                                <span>Phúc lợi</span>
                                            </h2>
                                            {/* content */}
                                            <div className="welfare-wrap">
                                                <div className="row">
                                                    <div className="welfare-list">
                                                        <ul>
                                                            <li>
                                                                <p><i className="fa fa-usd icn-welfare" />{item.benefit}</p>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <h2 className="widget-title">
                                                <span>Giới thiệu Công ty</span>
                                            </h2>
                                            <div className="jd-content">
                                                {item.desceibeCompany}
                                                <br />
                                            </div>
                                            <h2 className="widget-title">
                                                <span>Mô tả công việc</span>
                                            </h2>
                                            <div className="jd-content">
                                                {item.describe}
                                                <br />
                                            </div>
                                            <h2 className="widget-title">
                                                <span>Yêu cầu công việc</span>
                                            </h2>
                                            <div className="jd-content">
                                                {item.getskill?.map((item1: any) => {
                                                    return (
                                                        <ul>
                                                            <li>
                                                                <p>{item1.name}</p>
                                                            </li>

                                                        </ul>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Sidebar */}
                                    <div className="col-md-4 col-sm-12 col-12 clear-right">
                                        <div className="side-bar mb-3">
                                            <h2 className="widget-title">
                                                <span>Thông tin</span>
                                            </h2>
                                            <div className="job-info-wrap">
                                                <div className="job-info-list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <span className="ji-title">Nơi làm việc:</span>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="ji-main">{item.getlocation.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="job-info-list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <span className="ji-title">Cấp bậc</span>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="ji-main">{item.getwk_form.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="job-info-list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <span className="ji-title">Lương:</span>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="ji-main">{item.get_wage.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="job-info-list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <span className="ji-title">Hạn nộp:</span>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="ji-main">{item.job_time}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="job-info-list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <span className="ji-title">Ngành nghề</span>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="ji-main">{item.get_majors.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="job-info-list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <span className="ji-title">Kỹ năng:</span>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            {item.getskill?.map((item1: any) => {
                                                                return (
                                                                    <span className="ji-main">
                                                                        {item1.name},
                                                                    </span>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="job-info-list">
                                                    <div className="row">
                                                        <div className="col-sm-4">
                                                            <span className="ji-title">Kinh nghiệm:</span>
                                                        </div>
                                                        <div className="col-sm-8">
                                                            <span className="ji-main">{item.get_experience.name}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-bar mb-3">
                                            <h2 className="widget-title">
                                                <span>Giới thiệu công ty</span>
                                            </h2>
                                            <div className="company-intro">
                                                <a href="#">
                                                    <img src="img/fpt-logo.png" className="job-logo-ima" alt="job-logo" />
                                                </a>
                                            </div>
                                            <h2 className="company-intro-name"> {item.nameCompany}</h2>
                                            <ul className="job-add">
                                                <li>
                                                    <i className="fa fa-map-marker ja-icn" />
                                                    <span>Trụ sở: {item.addressCompany} </span>
                                                </li>
                                                <li>
                                                    <i className="fa fa-bar-chart ja-icn" />
                                                    <span>Quy mô công ty: 50-100 người</span>
                                                </li>
                                            </ul>
                                            <div className="wrap-comp-info mb-2">
                                                <a href="#" className="btn btn-primary btn-company">Xem thêm</a>
                                            </div>
                                        </div>
                                        <div className="side-bar mb-3">
                                            <h2 className="widget-title">
                                                <span>Việc làm tương tự</span>
                                            </h2>
                                            <div className="job-tt-contain">
                                                <div className="job-tt-item">
                                                    <a href="#" className="thumb">
                                                        <div style={{ backgroundImage: 'url(img/alipay-logo.png)' }} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="jobname">
                                                            Fullstack .NET Developer (Angular/React)
                                                        </a>
                                                        <a href="#" className="company">
                                                            Alipay Software
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="job-tt-item">
                                                    <a href="#" className="thumb">
                                                        <div style={{ backgroundImage: 'url(img/fpt-logo.png)' }} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="jobname">
                                                            [HCM] 02 Solution Architects–Up to $2000
                                                        </a>
                                                        <a href="#" className="company">
                                                            FPT Software
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="job-tt-item">
                                                    <a href="#" className="thumb">
                                                        <div style={{ backgroundImage: 'url(img/alipay-logo.png)' }} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="jobname">
                                                            Fullstack .NET Developer (Angular/React)
                                                        </a>
                                                        <a href="#" className="company">
                                                            Alipay Software
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="job-tt-item">
                                                    <a href="#" className="thumb">
                                                        <div style={{ backgroundImage: 'url(img/alipay-logo.png)' }} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="jobname">
                                                            Fullstack .NET Developer (Angular/React)
                                                        </a>
                                                        <a href="#" className="company">
                                                            Alipay Software
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="job-tt-item">
                                                    <a href="#" className="thumb">
                                                        <div style={{ backgroundImage: 'url(img/alipay-logo.png)' }} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="jobname">
                                                            Fullstack .NET Developer (Angular/React)
                                                        </a>
                                                        <a href="#" className="company">
                                                            Alipay Software
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="job-tt-item">
                                                    <a href="#" className="thumb">
                                                        <div style={{ backgroundImage: 'url(img/alipay-logo.png)' }} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="jobname">
                                                            Fullstack .NET Developer (Angular/React)
                                                        </a>
                                                        <a href="#" className="company">
                                                            Alipay Software
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="job-tt-item">
                                                    <a href="#" className="thumb">
                                                        <div style={{ backgroundImage: 'url(img/alipay-logo.png)' }} />
                                                    </a>
                                                    <div className="info">
                                                        <a href="#" className="jobname">
                                                            Fullstack .NET Developer (Angular/React)
                                                        </a>
                                                        <a href="#" className="company">
                                                            Alipay Software
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="side-bar mb-3">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="home-ads">
                                                            <a href="#">
                                                                <img src="img/ads1.jpg" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* (end) Phần thân */}
                    </div>
                )
            })}


        </div>
    )
}

export default Idemployer