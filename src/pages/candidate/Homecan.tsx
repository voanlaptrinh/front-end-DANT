import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { listNewsemp } from '../../api/home'
import { Job } from '../../types/job'

type Props = {}

const Homecan = (props: Props) => {
    const [news, setNews] = useState<any>([])
    useEffect(() => {
        const getNews = async () => {
            const { data } = await listNewsemp()
            setNews(data)
            // console.log(data);
        }
        getNews()
    }, [])

    return (
        <div>
            <div>
                <div className="container-fluid jb-wrapper">
                    <div className="container">
                        <div className="row">
                            {/* job board */}
                            <div className="col-md-8 col-sm-12 col-12">
                                <div className="job-board-wrap">
                                    <h2 className="widget-title">
                                        <span>Tuyển gấp</span>
                                    </h2>
                                    <div className="job-group">
                                        <div className="job pagi">
                                            <div className="job-content">
                                                <div className="job-logo">
                                                    <a href="#">
                                                        <img src="img/fpt-logo.png" className="job-logo-ima" alt="job-logo" />
                                                    </a>
                                                </div>
                                                <div className="job-desc">
                                                    <div className="job-title">
                                                        <a href="#">[HCM] 02 Solution Architects–Up to $2000</a>
                                                    </div>
                                                    <div className="job-company">
                                                        <a href="#">Fpt Software</a> | <a href="#" className="job-address"><i className="fa fa-map-marker" aria-hidden="true" />
                                                            Đà Nẵng</a>
                                                    </div>
                                                    <div className="job-inf">
                                                        <div className="job-main-skill">
                                                            <i className="fa fa-code" aria-hidden="true" /> <a href="#"> Java</a>
                                                        </div>
                                                        <div className="job-salary">
                                                            <i className="fa fa-money" aria-hidden="true" />
                                                            <span className="salary-min">15<em className="salary-unit">triệu</em></span>
                                                            <span className="salary-max">35 <em className="salary-unit">triệu</em></span>
                                                        </div>
                                                        <div className="job-deadline">
                                                            <span><i className="fa fa-clock-o" aria-hidden="true" /> Hạn nộp:
                                                                <strong>31/12/2019</strong></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="wrap-btn-appl">
                                                    <NavLink to="/idemployer" className="btn btn-appl">Apply Now</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="readmorestyle-wrap">
                                            <a href="#" className="readallstyle reads1">Xem tất cả</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* (end) job board */}
                            {/* sidebar */}
                            <div className="col-md-4 col-sm-12 col-12 clear-left">
                                <div className="job-sidebar">
                                    <h2 className="widget-title">
                                        <span>Ngành Nghề</span>
                                    </h2>
                                    <div className="catelog-list">
                                        <ul>
                                            <li>
                                                <a href="#">
                                                    <span className="cate-img">
                                                        <em>Lập trình viên</em>
                                                    </span>
                                                    <span className="cate-count">(1100)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <span className="cate-img">
                                                        <em>Nhân viên kiểm thử</em>
                                                    </span>
                                                    <span className="cate-count">(230)</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" className="readallstyle reads1">Xem tất cả</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="job-sidebar">
                                    <div className="sb-banner">
                                        <img src="img/ads1.jpg" className="advertisement" />
                                    </div>
                                </div>
                            </div>
                            {/* (end) sidebar */}
                        </div>
                    </div>
                </div>
                {/* (end) job board & sidebar section  */}
                <div className="clearfix" />
                {/* job board v2 */}
                <div className="container-fluid">
                    <div className="container job-board2">
                        <div className="row">
                            <div className="col-md-12 job-board2-wrap-header">
                                <h3>Tin tuyển dụng, việc làm mới nhất</h3>
                            </div>
                            <div className="col-md-12 job-board2-wrap">
                                <div className="owl-carousel owl-theme job-board2-contain">
                                    <div className="item job-latest-item">
                                        <a href="#" className="job-latest-group">
                                            <div className="job-lt-logo">
                                                <img src="img/fpt-logo.png" />
                                            </div>
                                        </a><div className="job-lt-info"><a href="#" className="job-latest-group">
                                            <h3>[HCM] 02 Solution Architects–Up to $2000 #1</h3>
                                        </a><a className="company" href="#">FPT Software</a>
                                            <p className="address"><i className="fa fa-map-marker pr-1" aria-hidden="true" /> Đà Nẵng</p>
                                        </div>
                                    </div>
                                    <div className="item job-latest-item">
                                        <a href="#" className="job-latest-group">
                                            <div className="job-lt-logo">
                                                <img src="img/alipay-logo.png" />
                                            </div>
                                        </a><div className="job-lt-info"><a href="#" className="job-latest-group">
                                            <h3>Fullstack .NET Developer (Angular/React) #2</h3>
                                        </a><a className="company" href="#">Orient Software</a>
                                            <p className="address"><i className="fa fa-map-marker pr-1" aria-hidden="true" /> Đà Nẵng</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* (end) job board v2 */}
                <div className="clearfix" />
                {/* top employer */}
                <div className="container-fluid">
                    <div className="container top-employer">
                        <div className="row">
                            <div className="col-md-12 top-employer-contain">
                                <div className="header">
                                    <h3>Nhà tuyển dùng hàng đầu</h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-3 col-sm-6 col-12 top-employer-wrap">
                                        <div className="top-employer-item">
                                            <a href="#">
                                                <div className="emp-img-thumb">
                                                    <img src="img/fpt-logo.png" />
                                                </div>
                                                <h3 className="company">FPT Software</h3>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-12 top-employer-wrap">
                                        <div className="top-employer-item">
                                            <a href="#">
                                                <div className="emp-img-thumb">
                                                    <img src="img/nvg-logo.png" />
                                                </div>
                                                <h3 className="company">mgm technology</h3>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* (end) top employer */}
                <div className="clearfix" />
                {/* job-best-salary */}
                <div className="container-fluid">
                    <div className="container job-best-salary">
                        <div className="row">
                            <div className="col-md-12 job-board2-wrap-header job-best-salary-header">
                                <h3><i className="fa fa-briefcase pr-2" /> Việc làm hấp dẫn</h3>
                            </div>
                        </div>
                        <div className="row job-best-salary-inner">
                            <div className="col-md-6 job-over-item">
                                <div className="job-inner-over-item">
                                    <a href="#wrap">
                                        <div className="thumbnail">
                                            <img src="img/fitech-logo.jpg" alt="company logo image" />
                                        </div>
                                    </a><div className="content"><a href="#wrap">
                                        <div className="job-name">
                                            .NET/C# developers ($1,000-$1,500 net)
                                        </div>
                                    </a><a href="#company" className="company">
                                            Fitech
                                        </a>
                                    </div>
                                    <div className="extra-info">
                                        <p className="salary mt-2"><i className="fa fa-money pr-2" />10 - 20 triệu</p>
                                        <p className="place"><i className="fa fa-map-marker pr-2" />Hà Nội</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 job-over-item">
                                <div className="job-inner-over-item">
                                    <a href="#wrap">
                                        <div className="thumbnail">
                                            <img src="img/hdbank-logo.png" alt="company logo image" />
                                        </div>
                                    </a><div className="content"><a href="#wrap">
                                        <div className="job-name">
                                            Java Developer (.NET, PL/SQL)
                                        </div>
                                    </a><a href="#company" className="company">
                                            HD Bank
                                        </a>
                                    </div>
                                    <div className="extra-info">
                                        <p className="salary mt-2"><i className="fa fa-money pr-2" />15 - 35 triệu</p>
                                        <p className="place"><i className="fa fa-map-marker pr-2" />Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* (end) job-best-salary */}
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-ads">
                                    <a href="#">
                                        <img src="img/hna.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* job-best-salary */}
                <div className="container-fluid">
                    <div className="container job-best-salary">
                        <div className="row">
                            <div className="col-md-12 job-board2-wrap-header job-best-salary-header">
                                <h3><i className="fa fa-briefcase pr-2" /> Việc làm lương cao</h3>
                            </div>
                        </div>
                        <div className="row job-best-salary-inner">
                            <div className="col-md-6 job-over-item">
                                <div className="job-inner-over-item">
                                    <a href="#wrap">
                                        <div className="thumbnail">
                                            <img src="img/fitech-logo.jpg" alt="company logo image" />
                                        </div>
                                    </a><div className="content"><a href="#wrap">
                                        <div className="job-name">
                                            .NET/C# developers ($1,000-$1,500 net)
                                        </div>
                                    </a><a href="#company" className="company">
                                            Fitech
                                        </a>
                                    </div>
                                    <div className="extra-info">
                                        <p className="salary mt-2"><i className="fa fa-money pr-2" />10 - 20 triệu</p>
                                        <p className="place"><i className="fa fa-map-marker pr-2" />Hà Nội</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 job-over-item">
                                <div className="job-inner-over-item">
                                    <a href="#wrap">
                                        <div className="thumbnail">
                                            <img src="img/hdbank-logo.png" alt="company logo image" />
                                        </div>
                                    </a><div className="content"><a href="#wrap">
                                        <div className="job-name">
                                            Java Developer (.NET, PL/SQL)
                                        </div>
                                    </a><a href="#company" className="company">
                                            HD Bank
                                        </a>
                                    </div>
                                    <div className="extra-info">
                                        <p className="salary mt-2"><i className="fa fa-money pr-2" />15 - 35 triệu</p>
                                        <p className="place"><i className="fa fa-map-marker pr-2" />Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* (end) job-best-salary */}
                <div className="container-fluid">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="home-ads">
                                    <a href="#">
                                        <img src="img/hna2.jpg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
                {/* news */}
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

        </div>
    )
}

export default Homecan