import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const JobDetail = (props: Props) => {
  return (
    <div>
      <div className="clearfix"></div>
      <div className="bg-light py-5">
        <div className="ht-30"></div>
        <div className="container">
          <div className="row">
            <div className="colxl-12 col-lg-12 col-md-12">
              <h1 className="ft-medium">Candidate Detail</h1>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Candidates</a>
                  </li>
                  <li
                    className="breadcrumb-item active theme-cl"
                    aria-current="page"
                  >
                    Candidates Detail
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div className="ht-30"></div>
      </div>

      <section className="middle">
        <div className="container">
          <div className="row align-items-start justify-content-between">
            <div className="col-12 col-md-12 col-lg-4 col-xl-4 text-center miliods">
              <div className="d-block border rounded mfliud-bot mb-4">
                <div className="cdt_author px-2 pt-5 pb-4">
                  <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                    <img
                      src="assets/img/team-1.jpg"
                      className="img-fluid circle"
                      width="100"
                      alt=""
                    />
                  </div>
                  <div className="dash_caption mb-3">
                    <h4 className="fs-lg ft-medium mb-0 lh-1">
                      Robert V. Ledet
                    </h4>
                    <p className="m-0 p-0">Web Designer</p>
                    <span className="text-muted smalls">
                      <i className="lni lni-map-marker mr-1"></i>Denver, USA
                    </span>
                  </div>
                  <div className="jb-list-01-title px-2">
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded theme-cl theme-bg-light">
                      Photoshop
                    </span>
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-warning bg-light-warning">
                      WordPress
                    </span>
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-danger bg-light-danger">
                      Magento
                    </span>
                    <span className="mr-2 mb-2 d-inline-flex px-2 py-1 rounded text-info bg-light-info">
                      CSS3
                    </span>
                    <span className="px-2 mb-2 d-inline-flex py-1 rounded text-purple bg-light-purple">
                      HTML5
                    </span>
                  </div>
                </div>

                <div className="cdt_caps">
                  <div className="job_grid_footer pb-3 px-3 d-flex align-items-center justify-content-between">
                    <div className="df-1 text-muted">
                      <i className="lni lni-briefcase mr-1"></i>Full Time
                    </div>
                    <div className="df-1 text-muted">
                      <i className="lni lni-laptop-phone mr-1"></i>Web Designer
                    </div>
                  </div>
                  <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                    <div className="df-1 text-muted">
                      <i className="lni lni-envelope mr-1"></i>
                      themezhub@gmail.com
                    </div>
                    <div className="df-1 text-muted">
                      <i className="lni lni-graduation mr-1"></i>3 Year Exp.
                    </div>
                  </div>
                </div>

                <div className="cdt_caps py-5 px-3">
                  <a
                    href="#"
                    className="btn btn-md theme-bg text-light rounded full-width"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-12 col-lg-8 col-xl-8">
              <div className="row align-items-start">
                <div className="abt-cdt d-block full-width mb-4">
                  <h4 className="ft-medium mb-1 fs-md">
                    About Carolyn C. Weldon
                  </h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem.
                  </p>
                </div>

                <div className="abt-cdt d-block full-width mb-4">
                  <h4 className="ft-medium mb-1 fs-md">
                    Carolyn C. Weldon Hobbies
                  </h4>
                  <div className="position-relative row">
                    <div className="col-lg-12 col-md-12 col-12">
                      <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check small"></i>
                          </div>
                          <h6 className="mb-0 ml-3 text-muted fs-sm">
                            Strong core PHP Hands on experience.
                          </h6>
                        </div>
                      </div>
                      <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check small"></i>
                          </div>
                          <h6 className="mb-0 ml-3 text-muted fs-sm">
                            Strong Expertise in CodeIgniter Framework .
                          </h6>
                        </div>
                      </div>
                      <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check small"></i>
                          </div>
                          <h6 className="mb-0 ml-3 text-muted fs-sm">
                            Understanding of MVC design pattern.
                          </h6>
                        </div>
                      </div>
                      <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check small"></i>
                          </div>
                          <h6 className="mb-0 ml-3 text-muted fs-sm">
                            Expertise in PHP, MVC Frameworks and good technology
                            exposure of Codeigniter .
                          </h6>
                        </div>
                      </div>
                      <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check small"></i>
                          </div>
                          <h6 className="mb-0 ml-3 text-muted fs-sm">
                            Basic understanding of front-end technologies, such
                            as JavaScript, HTML5, and CSS3
                          </h6>
                        </div>
                      </div>
                      <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check small"></i>
                          </div>
                          <h6 className="mb-0 ml-3 text-muted fs-sm">
                            Good knowledge of relational databases, version
                            control tools and of developing web services.
                          </h6>
                        </div>
                      </div>
                      <div className="mb-2 mr-4 ml-lg-0 mr-lg-4">
                        <div className="d-flex align-items-center">
                          <div className="rounded-circle bg-light-success theme-cl p-1 small d-flex align-items-center justify-content-center">
                            <i className="fas fa-check small"></i>
                          </div>
                          <h6 className="mb-0 ml-3 text-muted fs-sm">
                            Proficient understanding of code versioning tools,
                            such as Git.
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="abt-cdt d-block full-width mb-4">
                  <h4 className="ft-medium mb-1 fs-md">Qualification</h4>
                  <div className="exslio-list mt-3">
                    <ul>
                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">High School</h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-graduation mr-1"></i>LBS
                              Academy
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2010
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet, consectetur, adipisci velit, sed
                              quia non numquam eius modi tempora incidunt ut
                              labore et dolore magnam{" "}
                              <a
                                href="javascript:void(0);"
                                className="theme-cl"
                              >
                                Read More..
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">Inter Medium</h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-graduation mr-1"></i>
                              International Inter College
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2012
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet, consectetur, adipisci velit, sed
                              quia non numquam eius modi tempora incidunt ut
                              labore et dolore magnam{" "}
                              <a
                                href="javascript:void(0);"
                                className="theme-cl"
                              >
                                Read More..
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">Gradutation</h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-graduation mr-1"></i>Nandani
                              College
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2015
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet, consectetur, adipisci velit, sed
                              quia non numquam eius modi tempora incidunt ut
                              labore et dolore magnam{" "}
                              <a
                                href="javascript:void(0);"
                                className="theme-cl"
                              >
                                Read More..
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="abt-cdt d-block full-width mb-4">
                  <h4 className="ft-medium mb-1 fs-md">Experience</h4>
                  <div className="exslio-list mt-3">
                    <ul>
                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">
                            Themezhub Limited
                          </h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-map-marker mr-1"></i>
                              Liverpool, UK
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-laptop-phone mr-1"></i>Web
                              Designer
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2010 -
                              2012
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet, consectetur, adipisci velit, sed
                              quia non numquam eius modi tempora incidunt ut
                              labore et dolore magnam{" "}
                              <a
                                href="javascript:void(0);"
                                className="theme-cl"
                              >
                                Read More..
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">
                            Waft Technology
                          </h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-map-marker mr-1"></i>
                              Liverpool, UK
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-laptop-phone mr-1"></i>
                              Product Designer
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2012 -
                              2014
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet, consectetur, adipisci velit, sed
                              quia non numquam eius modi tempora incidunt ut
                              labore et dolore magnam{" "}
                              <a
                                href="javascript:void(0);"
                                className="theme-cl"
                              >
                                Read More..
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>

                      <li>
                        <div className="esclio-110 bg-light rounded px-3 py-3">
                          <h4 className="mb-0 ft-medium fs-md">Swap Designd</h4>
                          <div className="esclio-110-info full-width mb-2">
                            <span className="text-muted mr-2">
                              <i className="lni lni-map-marker mr-1"></i>
                              Liverpool, UK
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-laptop-phone mr-1"></i>UI/UX
                              Designer
                            </span>
                            <span className="text-muted mr-2">
                              <i className="lni lni-calendar mr-1"></i>2015 -
                              2021
                            </span>
                          </div>
                          <div className="esclio-110-decs full-width">
                            <p>
                              Neque porro quisquam est, qui dolorem ipsum quia
                              dolor sit amet, consectetur, adipisci velit, sed
                              quia non numquam eius modi tempora incidunt ut
                              labore et dolore magnam{" "}
                              <a
                                href="javascript:void(0);"
                                className="theme-cl"
                              >
                                Read More..
                              </a>
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="abt-cdt d-block full-width">
                  <h4 className="ft-medium mb-1 fs-md">Skills</h4>
                  <ul className="p-0 skills_tag text-left">
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Joomla
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        WordPress
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Javascript
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        PHP
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        HTML5
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        MS SQL
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        SQL Development
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Dynamod
                      </span>
                    </li>
                    <li>
                      <span className="px-2 py-1 medium skill-bg rounded text-dark">
                        Database
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default JobDetail;
