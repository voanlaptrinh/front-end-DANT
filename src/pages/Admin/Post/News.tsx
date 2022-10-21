import { DeleteOutlined, EditOutlined, RightOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react'
import { showNews } from '../../../api/home';

type Props = {}

const News = (props: Props) => {
    const [news, setNews] = useState<any>([])

    useEffect(() => {
        const getNews = async () => {
            const { data } = await showNews()
            setNews(data)
            // console.log(data);
        }
        getNews()
    }, [])
    console.log(news.job);

    return (
        <div>
            <div>
                <div className="container-fluid">
                    <div className="container search-wrapper">

                        <div className="row">
                            <div className="col-md-9 col-sm-12 col-12">
                                <h4 className="search-find">Tìm thấy 4 việc làm đang tuyển dụng</h4>
                                <div className="job-board-wrap">
                                    <div className="job-group">
                                        {news.job?.map((item: any) => {
                                            console.log(item.getskill[0].name);
                                            
                                            return <div className="job pagi" key={item.id}>
                                                <div className="job-content">
                                                    <div className="job-logo">
                                                        <a href="#">
                                                            <img src="img/luxoft-vietnam-logo.png" className="job-logo-ima" alt="job-logo" />
                                                        </a>
                                                    </div>
                                                    <div className="job-desc">

                                                        <div className="job-title">
                                                            <a href="#">{item.title}</a>
                                                        </div>
                                                        <div className="wrap-btn-appl">
                                                            <a href="#" className="btn "><EditOutlined /></a>
                                                            <a href="#" className="btn"><DeleteOutlined /></a>
                                                        </div>
                                                        <div className="job-company">
                                                            <a href="#">{item.nameCompany}</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                                {item.getlocation.name}</a>
                                                        </div>
                                                        <div className="job-inf">
                                                            <div className="job-main-skill">
                                                                <i className="fa fa-code" aria-hidden="true" /> <a href="#"> {item.getskill[0].name}</a>
                                                            </div>
                                                            <div className="job-salary">
                                                                <i className="fa fa-money" aria-hidden="true" />
                                                                <span className="salary-min"><em className="salary-unit">{item.get_wage.name}</em></span>
                                                            </div>
                                                            <div className="job-deadline">
                                                                <span><i className="fa fa-clock-o" aria-hidden="true" /> Hạn nộp còn :
                                                                    <strong>{item.job_time}</strong></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        })}

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-12 col-12">
                                <a id="click_advance" className="btn btn-c-filter" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
                                    <i className="pr-2 fa fa-times" id="icon-s-sw" aria-hidden="true" />Filter &amp; Refind
                                </a>
                                <div className="collapse show" id="collapseExample" style={{}}>
                                    <div className="card card-body bg-card-body-filter">
                                        <div className="filter-bar">
                                            <div className="filter-form">
                                                <div className="filter-form-item">
                                                    <div className="collapse show" id="filter-price">
                                                        ádasdasd
                                                    </div>
                                                    <div className="collapse show" id="filter-price">
                                                        ádasdasd
                                                    </div>
                                                    <div className="collapse show" id="filter-price">
                                                        ádasdasd
                                                    </div>
                                                </div>

                                            </div>
                                        </div> {/* filter bar */}
                                    </div>
                                </div> {/* ./ collapse */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="container news-wrapper">
                    <div className="row">
                        <div className="col-md-12 news-wrapper-head">
                            Tư vấn nghề nghiệp từ HR Insider
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 news-item">
                            <div className="news-item-inner">
                                <a href="#wrap">
                                    <div className="news-thumb" style={{ backgroundImage: 'url(img/news1.jpg)' }} />
                                </a>
                                <div className="news-details">
                                    <div className="tags">
                                        <a href="#tag1">Quyền lợi nhân viên</a>
                                    </div>
                                    <div className="title">
                                        <a href="#">
                                            5 thời điểm doanh nghiệp không được buộc người lao động thôi việc
                                        </a>
                                    </div>
                                    <div className="meta">
                                        Khi nào thì người sử dụng lao động được quyền đơn phương chấm dứt hợp đồng khi nào thì không? Cùng tham
                                        khảo bài viết sau đây để hiểu thêm về quyền lợi của người lao động Việt Nam nhé!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 news-item">
                            <div className="news-item-inner">
                                <a href="#wrap">
                                    <div className="news-thumb" style={{ backgroundImage: 'url(img/news2.jpg)' }} />
                                </a>
                                <div className="news-details">
                                    <div className="tags">
                                        <a href="#tag1">Trước khi nhảy việc</a>
                                    </div>
                                    <div className="title">
                                        <a href="#">
                                            Nhảy việc và những con số bạn cần phải lưu tâm
                                        </a>
                                    </div>
                                    <div className="meta">
                                        Dù bạn nhảy việc vì lý do gì cũng hãy cân nhắc đến những “con số” sau đây nhé!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 col-12 news-item">
                            <div className="news-item-inner">
                                <a href="#wrap">
                                    <div className="news-thumb" style={{ backgroundImage: 'url(img/news3.png)' }} />
                                </a>
                                <div className="news-details">
                                    <div className="tags">
                                        <a href="#tag1">Huấn luyện nhân sự</a>
                                    </div>
                                    <div className="title">
                                        <a href="#">
                                            Đánh giá: bước đệm cần thiết trong việc đào tạo huấn luyện nhân viên
                                        </a>
                                    </div>
                                    <div className="meta">
                                        Cú sốc về kinh tế do Covid-19 gây ra đã khiến cho nhiều doanh nghiệp lớn và nhỏ phải nhanh chóng tìm ra
                                        các phương án ứng phó tốc độ và hiệu quả để giải quyết bài toán về tìn...
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News