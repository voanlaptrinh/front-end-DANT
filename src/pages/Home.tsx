import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { signin } from "../api/auth";
import { listCandidate } from "../api/home";

type Props = {};

const Home = (props: Props) => {
  const [getAllSkill, setSkill] = useState<any>([]);
  const [getAllLocation, setLocation] = useState<any>([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await listCandidate();
    setSkill(data);
    setLocation(data)
  };

  return (
    <div>
      {/* <!-- ======================= Home Banner ======================== --> */}
      <div
        className="home-banner margin-bottom-0"
        style={{
          background:
            "#00ab46 url(https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583728/gd/banner-5_rnetjw.jpg) no-repeat ",
        }}
        data-overlay={4}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-11 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banner_caption text-center mb-5">
                <h1 className="banner_title ft-bold mb-1">
                  Explore More Than 10K+ Jobs
                </h1>
                <p className="fs-md ft-medium">
                  Hi Friends, Your Dream Jobs is Waiting in Your Local City
                </p>
              </div>
              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Job Title, Keyword or Company"
                      />
                      <i className="bnc-ico lni lni-search-alt" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0" name="" id="">
                        <option value="">Chọn Kĩ Năng</option>
                        {getAllSkill.skill?.map((item: any) => {
                          return <option value={item.id}>{item.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <select className="custom-select lg b-0">
                        <option value="">Chọn Vùng Miền</option>
                        {getAllLocation.location?.map((item: any) => {
                          return <option value={item.id}>{item.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height-lg theme-bg text-white fs-md"
                        type="button"
                      >
                        Find Job
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= Job List ======================== */}
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Trending Jobs</h6>
                <h2 className="ft-bold">All Popular Listed jobs</h2>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row align-items-center">
            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist" />
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium theme-cl theme-bg-light px-2 py-1 rounded">
                    Full Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-2 pt-4 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583729/gd/c-1_wuerii.png"
                      className="img-fluid"
                      width={70}
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-3 px-3">
                  <h4 className="mb-0 ft-medium medium">
                    <a href="employer-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1" />
                    <span>San Francisco</span>
                  </div>
                </div>
                <div className="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="row">
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-briefcase mr-1" />
                      Full Time
                    </div>
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-wallet mr-1" />
                      3-4 Lakhs PA.
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-users mr-1" />
                      02 Vacancy
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-timer mr-1" />3 days ago
                    </div>
                    <div className="df-1 text-dark ft-medium col-12 mt-3">
                      <a
                        href="job-detail.html"
                        className="btn gray apply-btn rounded full-width"
                      >
                        Apply Job
                        <i className="lni lni-arrow-right-circle ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist" />
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-warning text-warning px-2 py-1 rounded">
                    Part Time
                  </span>
                </div>
                <div className="job_grid_thumb mb-2 pt-4 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583729/gd/c-2_xbwkqs.png"
                      className="img-fluid"
                      width={70}
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-3 px-3">
                  <h4 className="mb-0 ft-medium medium">
                    <a href="employer-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1" />
                    <span>San Francisco</span>
                  </div>
                </div>
                <div className="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="row">
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-briefcase mr-1" />
                      Full Time
                    </div>
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-wallet mr-1" />
                      3-4 Lakhs PA.
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-users mr-1" />
                      02 Vacancy
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-timer mr-1" />3 days ago
                    </div>
                    <div className="df-1 text-dark ft-medium col-12 mt-3">
                      <a
                        href="job-detail.html"
                        className="btn gray apply-btn rounded full-width"
                      >
                        Apply Job
                        <i className="lni lni-arrow-right-circle ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist" />
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-purple text-purple px-2 py-1 rounded">
                    Contract
                  </span>
                </div>
                <div className="job_grid_thumb mb-2 pt-4 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583729/gd/c-3_mdaqgj.png"
                      className="img-fluid"
                      width={70}
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-3 px-3">
                  <h4 className="mb-0 ft-medium medium">
                    <a href="employer-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1" />
                    <span>San Francisco</span>
                  </div>
                </div>
                <div className="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="row">
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-briefcase mr-1" />
                      Full Time
                    </div>
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-wallet mr-1" />
                      3-4 Lakhs PA.
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-users mr-1" />
                      02 Vacancy
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-timer mr-1" />3 days ago
                    </div>
                    <div className="df-1 text-dark ft-medium col-12 mt-3">
                      <a
                        href="job-detail.html"
                        className="btn gray apply-btn rounded full-width"
                      >
                        Apply Job
                        <i className="lni lni-arrow-right-circle ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single */}
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded">
                <div className="position-absolute ab-left">
                  <button
                    type="button"
                    className="p-3 border circle d-flex align-items-center justify-content-center bg-white text-gray"
                  >
                    <i className="lni lni-heart-filled position-absolute snackbar-wishlist" />
                  </button>
                </div>
                <div className="position-absolute ab-right">
                  <span className="medium bg-light-danger text-danger px-2 py-1 rounded">
                    Enternship
                  </span>
                </div>
                <div className="job_grid_thumb mb-2 pt-4 px-3">
                  <a
                    href="job-detail.html"
                    className="d-block text-center m-auto"
                  >
                    <img
                      src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1666583730/gd/c-4_poia2w.png"
                      className="img-fluid"
                      width={70}
                    />
                  </a>
                </div>
                <div className="job_grid_caption text-center pb-3 px-3">
                  <h4 className="mb-0 ft-medium medium">
                    <a href="employer-detail.html" className="text-dark fs-md">
                      UI/UX Web Designer
                    </a>
                  </h4>
                  <div className="jbl_location">
                    <i className="lni lni-map-marker mr-1" />
                    <span>San Francisco</span>
                  </div>
                </div>
                <div className="job_grid_footer pt-2 pb-4 px-3 d-flex align-items-center justify-content-between">
                  <div className="row">
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-briefcase mr-1" />
                      Full Time
                    </div>
                    <div className="df-1 text-muted col-6 mb-2">
                      <i className="lni lni-wallet mr-1" />
                      3-4 Lakhs PA.
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-users mr-1" />
                      02 Vacancy
                    </div>
                    <div className="df-1 text-muted col-6">
                      <i className="lni lni-timer mr-1" />3 days ago
                    </div>
                    <div className="df-1 text-dark ft-medium col-12 mt-3">
                      <a
                        href="job-detail.html"
                        className="btn gray apply-btn rounded full-width"
                      >
                        Apply Job
                        <i className="lni lni-arrow-right-circle ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <a
                  href="job-search-v1.html"
                  className="btn btn-md text-light rounded theme-bg"
                >
                  Explore More Jobs
                  <i className="lni lni-arrow-right-circle ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Job List ======================== */}
      {/* ======================= All category ======================== */}
      <section className="space gray">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Popular Categories</h6>
                <h2 className="ft-bold">Browse Top Categories</h2>
              </div>
            </div>
          </div>
          {/* row */}
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="cats-wrap text-center">
                <a
                  href="job-search-v1.html"
                  className="cats-box d-block rounded bg-white px-2 py-4"
                >
                  <div className="text-center mb-2 mx-auto position-relative d-inline-flex align-items-center justify-content-center p-3 theme-bg-light circle">
                    <i className="lni lni-laptop-phone fs-lg theme-cl" />
                  </div>
                  <div className="cats-box-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">
                      Software Company
                    </h4>
                    <span className="text-muted">607 Jobs</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="cats-wrap text-center">
                <a
                  href="job-search-v1.html"
                  className="cats-box d-block rounded bg-white px-2 py-4"
                >
                  <div className="text-center mb-2 mx-auto position-relative d-inline-flex align-items-center justify-content-center p-3 theme-bg-light circle">
                    <i className="lni lni-graduation fs-lg theme-cl" />
                  </div>
                  <div className="cats-box-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">Education</h4>
                    <span className="text-muted">960 Jobs</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="cats-wrap text-center">
                <a
                  href="job-search-v1.html"
                  className="cats-box d-block rounded bg-white px-2 py-4"
                >
                  <div className="text-center mb-2 mx-auto position-relative d-inline-flex align-items-center justify-content-center p-3 theme-bg-light circle">
                    <i className="lni lni-mastercard fs-lg theme-cl" />
                  </div>
                  <div className="cats-box-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">
                      Banking/BPO
                    </h4>
                    <span className="text-muted">740 Jobs</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="cats-wrap text-center">
                <a
                  href="job-search-v1.html"
                  className="cats-box d-block rounded bg-white px-2 py-4"
                >
                  <div className="text-center mb-2 mx-auto position-relative d-inline-flex align-items-center justify-content-center p-3 theme-bg-light circle">
                    <i className="lni lni-gallery fs-lg theme-cl" />
                  </div>
                  <div className="cats-box-caption">
                    <h4 className="fs-md mb-0 ft-medium m-catrio">
                      Printing &amp; Packaging
                    </h4>
                    <span className="text-muted">425 Jobs</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* /row */}
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="position-relative text-center">
                <a
                  href="browse-category.html"
                  className="btn btn-md bg-dark rounded text-light hover-theme"
                >
                  Browse All Categories
                  <i className="lni lni-arrow-right-circle ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= All category ======================== */}
      {/* ============================ Our Partner Start ================================== */}
      <section
        className="bg-cover"
        style={{ background: "#28b661 url(assets/img/curve.svg) no-repeat" }}
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-light mb-0">Current Openings</h6>
                <h2 className="ft-bold text-light">
                  We Have Worked with 10,000+ Trusted Companies
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11 col-md-12 col-sm-12">
              <div className="row justify-content-center">
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="cats-wrap text-left">
                    <a
                      href="job-search-v1.html"
                      className="cats-box rounded bg-white d-flex align-items-center px-2 py-3"
                    >
                      <div className="text-center">
                        <img
                          src="assets/img/c-9.png"
                          className="img-fluid"
                          width={55}
                        />
                      </div>
                      <div className="cats-box-caption px-2">
                        <h4 className="fs-md mb-0 ft-medium">Web Designing</h4>
                        <span className="text-muted">302 Jobs</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="cats-wrap text-left">
                    <a
                      href="job-search-v1.html"
                      className="cats-box rounded bg-white d-flex align-items-center px-2 py-3"
                    >
                      <div className="text-center">
                        <img
                          src="assets/img/c-4.png"
                          className="img-fluid"
                          width={55}
                        />
                      </div>
                      <div className="cats-box-caption px-2">
                        <h4 className="fs-md mb-0 ft-medium">Web Designing</h4>
                        <span className="text-muted">302 Jobs</span>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
                  <div className="cats-wrap text-left">
                    <a
                      href="job-search-v1.html"
                      className="cats-box rounded bg-white d-flex align-items-center px-2 py-3"
                    >
                      <div className="text-center">
                        <img
                          src="assets/img/c-3.png"
                          className="img-fluid"
                          width={55}
                        />
                      </div>
                      <div className="cats-box-caption px-2">
                        <h4 className="fs-md mb-0 ft-medium">Web Designing</h4>
                        <span className="text-muted">302 Jobs</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="ht-50" />
      </section>
      {/* ============================ Our Partner End ================================== */}
      {/* ============================ Pricing Start ==================================== */}
      <section className="space min">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-lg-7 col-md-9 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-muted mb-0">Our Pricing</h6>
                <h2 className="ft-bold">Choose Your Package</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            {/* Single Package */}
            <div className="col-lg-4 col-md-4">
              <div className="pricing_wrap">
                <div className="prt_head">
                  <h4 className="ft-medium">Basic</h4>
                </div>
                <div className="prt_price">
                  <h2 className="ft-bold">
                    <span>$</span>29
                  </h2>
                  <span className="fs-md">per user, per month</span>
                </div>
                <div className="prt_body">
                  <ul>
                    <li>99.5% Uptime Guarantee</li>
                    <li>120GB CDN Bandwidth</li>
                    <li>5GB Cloud Storage</li>
                    <li className="none">Personal Help Support</li>
                    <li className="none">Enterprise SLA</li>
                  </ul>
                </div>
                <div className="prt_footer">
                  <a href="#" className="btn choose_package">
                    Start Basic
                  </a>
                </div>
              </div>
            </div>
            {/* Single Package */}
            <div className="col-lg-4 col-md-4">
              <div className="pricing_wrap">
                <div className="prt_head">
                  <div className="recommended">Best Value</div>
                  <h4 className="ft-medium">Standard</h4>
                </div>
                <div className="prt_price">
                  <h2 className="ft-bold">
                    <span>$</span>49
                  </h2>
                  <span className="fs-md">per user, per month</span>
                </div>
                <div className="prt_body">
                  <ul>
                    <li>99.5% Uptime Guarantee</li>
                    <li>150GB CDN Bandwidth</li>
                    <li>10GB Cloud Storage</li>
                    <li>Personal Help Support</li>
                    <li className="none">Enterprise SLA</li>
                  </ul>
                </div>
                <div className="prt_footer">
                  <a href="#" className="btn choose_package active">
                    Start Standard
                  </a>
                </div>
              </div>
            </div>
            {/* Single Package */}
            <div className="col-lg-4 col-md-4">
              <div className="pricing_wrap">
                <div className="prt_head">
                  <h4 className="ft-medium">Platinum</h4>
                </div>
                <div className="prt_price">
                  <h2 className="ft-bold">
                    <span>$</span>79
                  </h2>
                  <span className="fs-md">2 user, per month</span>
                </div>
                <div className="prt_body">
                  <ul>
                    <li>100% Uptime Guarantee</li>
                    <li>200GB CDN Bandwidth</li>
                    <li>20GB Cloud Storage</li>
                    <li>Personal Help Support</li>
                    <li>Enterprise SLA</li>
                  </ul>
                </div>
                <div className="prt_footer">
                  <a href="#" className="btn choose_package">
                    Start Platinum
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ Pricing End ==================================== */}
      {/* ======================= Newsletter Start ============================ */}
      <section
        className="space bg-cover"
        style={{
          background: "#28b661 url(assets/img/landing-bg.png) no-repeat",
        }}
      >
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center mb-5">
                <h6 className="text-light mb-0">Subscribr Now</h6>
                <h2 className="ft-bold text-light">
                  Get All New Job Notification
                </h2>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12 col-12">
              <form className="bg-white rounded p-1">
                <div className="row no-gutters">
                  <div className="col-xl-9 col-lg-9 col-md-8 col-sm-8 col-8">
                    <div className="form-group mb-0 position-relative">
                      <input
                        type="text"
                        className="form-control lg left-ico"
                        placeholder="Enter Your Email Address"
                      />
                      <i className="bnc-ico lni lni-envelope" />
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-4">
                    <div className="form-group mb-0 position-relative">
                      <button
                        className="btn full-width custom-height-lg bg-dark text-white fs-md"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* ======================= Newsletter Start ============================ */}
    </div>
  );
};

export default Home;
