import React from 'react'
import { Link, NavLink } from 'react-router-dom'

type Props = {}
const Headeremp = (props: Props) => {
    return (
        <div>
            <div>
                {/* main nav */}
                <div className="container-fluid fluid-nav another-page">
                    <div className="container cnt-tnar">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light tjnav-bar">
                            {/* <a class="navbar-brand" href="#">Navbar</a> */}
                            <a href="#" className="nav-logo">
                                <img src="img/techjobs_bgw.png" />
                            </a>
                            <button className="navbar-toggler tnavbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                {/* <span class="navbar-toggler-icon"></span> */}
                                <i className="fa fa-bars icn-res" aria-hidden="true" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mr-auto tnav-left tn-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Việc Làm IT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Tin Tức</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Dropdown
                                        </a>
                                        <div className="dropdown-menu tdropdown" aria-labelledby="navbarDropdown">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <div className="dropdown-divider" />
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
                {/* (end) main nav */}
                <div className="clearfix" />
                {/* recuiter Nav */}
                <nav className="navbar navbar-expand-lg navbar-light nav-recuitment">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNava" aria-controls="navbarNava" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse container" id="navbarNava">
                        <ul className="navbar-nav nav-recuitment-li">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Quản lý đăng tuyển</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quản lý ứng viên</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/employer/news" className="nav-link" >Quản lý đăng tin</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quản lý hồ sơ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tài khoản</a>
                            </li>
                        </ul>
                        <ul className="rec-nav-right">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tìm hồ sơ</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Đăng tuyển</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/*  recuiter Nav */}
                {/* widget recuitment  */}
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
                {/* (end) widget recuitment  */}
            </div>



        </div>
    )
}

export default Headeremp