import { DeleteOutlined, EditOutlined, RightOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { removeShowNews, showNews } from "../../../api/home";

type Props = {};

const News = (props: Props) => {
  const [news, setNews] = useState<any>([]);

  useEffect(() => {
    getNews();
  }, []);
  const getNews = async () => {
    const { data } = await showNews();
    setNews(data);
    // console.log(data);
  };
  // console.log(news);

  const onRemove: SubmitHandler<any> = async (id: any) => {
    const confim = window.confirm("bạn có muốn xóa không");
    if (confim) {
      await removeShowNews(id).then(() => getNews());
    }
  };

  return (
    <div>
      <section className="middle">
        <div className="container">
          <div className="d-block border rounded mfliud-bot mb-4">
            <div className="cdt_author px-2 pt-5 pb-4">
              <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg"
                  className="img-fluid circle"
                  width={100}
                />
              </div>
              <div className="dash_caption mb-3">
                <h4 className="fs-lg ft-medium mb-0 lh-1">Robert V. Ledet</h4>
                <p className="m-0 p-0">Web Designer</p>
                <span className="text-muted smalls">
                  <i className="lni lni-map-marker mr-1" />
                  Denver, USA
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
                  <i className="lni lni-briefcase mr-1" />
                  Full Time
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-laptop-phone mr-1" />
                  Web Designer
                </div>
              </div>
              <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                <div className="df-1 text-muted">
                  <i className="lni lni-envelope mr-1" />
                  themezhub@gmail.com
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-graduation mr-1" />3 Year Exp.
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
          <div className="d-block border rounded mfliud-bot mb-4">
            <div className="cdt_author px-2 pt-5 pb-4">
              <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg"
                  className="img-fluid circle"
                  width={100}
                />
              </div>
              <div className="dash_caption mb-3">
                <h4 className="fs-lg ft-medium mb-0 lh-1">Robert V. Ledet</h4>
                <p className="m-0 p-0">Web Designer</p>
                <span className="text-muted smalls">
                  <i className="lni lni-map-marker mr-1" />
                  Denver, USA
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
                  <i className="lni lni-briefcase mr-1" />
                  Full Time
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-laptop-phone mr-1" />
                  Web Designer
                </div>
              </div>
              <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                <div className="df-1 text-muted">
                  <i className="lni lni-envelope mr-1" />
                  themezhub@gmail.com
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-graduation mr-1" />3 Year Exp.
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
          <div className="d-block border rounded mfliud-bot mb-4">
            <div className="cdt_author px-2 pt-5 pb-4">
              <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg"
                  className="img-fluid circle"
                  width={100}
                />
              </div>
              <div className="dash_caption mb-3">
                <h4 className="fs-lg ft-medium mb-0 lh-1">Robert V. Ledet</h4>
                <p className="m-0 p-0">Web Designer</p>
                <span className="text-muted smalls">
                  <i className="lni lni-map-marker mr-1" />
                  Denver, USA
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
                  <i className="lni lni-briefcase mr-1" />
                  Full Time
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-laptop-phone mr-1" />
                  Web Designer
                </div>
              </div>
              <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                <div className="df-1 text-muted">
                  <i className="lni lni-envelope mr-1" />
                  themezhub@gmail.com
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-graduation mr-1" />3 Year Exp.
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
          <div className="d-block border rounded mfliud-bot mb-4">
            <div className="cdt_author px-2 pt-5 pb-4">
              <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg"
                  className="img-fluid circle"
                  width={100}
                />
              </div>
              <div className="dash_caption mb-3">
                <h4 className="fs-lg ft-medium mb-0 lh-1">Robert V. Ledet</h4>
                <p className="m-0 p-0">Web Designer</p>
                <span className="text-muted smalls">
                  <i className="lni lni-map-marker mr-1" />
                  Denver, USA
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
                  <i className="lni lni-briefcase mr-1" />
                  Full Time
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-laptop-phone mr-1" />
                  Web Designer
                </div>
              </div>
              <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                <div className="df-1 text-muted">
                  <i className="lni lni-envelope mr-1" />
                  themezhub@gmail.com
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-graduation mr-1" />3 Year Exp.
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
          <div className="d-block border rounded mfliud-bot mb-4">
            <div className="cdt_author px-2 pt-5 pb-4">
              <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg"
                  className="img-fluid circle"
                  width={100}
                />
              </div>
              <div className="dash_caption mb-3">
                <h4 className="fs-lg ft-medium mb-0 lh-1">Robert V. Ledet</h4>
                <p className="m-0 p-0">Web Designer</p>
                <span className="text-muted smalls">
                  <i className="lni lni-map-marker mr-1" />
                  Denver, USA
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
                  <i className="lni lni-briefcase mr-1" />
                  Full Time
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-laptop-phone mr-1" />
                  Web Designer
                </div>
              </div>
              <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                <div className="df-1 text-muted">
                  <i className="lni lni-envelope mr-1" />
                  themezhub@gmail.com
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-graduation mr-1" />3 Year Exp.
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
          <div className="d-block border rounded mfliud-bot mb-4">
            <div className="cdt_author px-2 pt-5 pb-4">
              <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg"
                  className="img-fluid circle"
                  width={100}
                />
              </div>
              <div className="dash_caption mb-3">
                <h4 className="fs-lg ft-medium mb-0 lh-1">Robert V. Ledet</h4>
                <p className="m-0 p-0">Web Designer</p>
                <span className="text-muted smalls">
                  <i className="lni lni-map-marker mr-1" />
                  Denver, USA
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
                  <i className="lni lni-briefcase mr-1" />
                  Full Time
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-laptop-phone mr-1" />
                  Web Designer
                </div>
              </div>
              <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                <div className="df-1 text-muted">
                  <i className="lni lni-envelope mr-1" />
                  themezhub@gmail.com
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-graduation mr-1" />3 Year Exp.
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
          <div className="d-block border rounded mfliud-bot mb-4">
            <div className="cdt_author px-2 pt-5 pb-4">
              <div className="dash_auth_thumb circle p-1 border d-inline-flex mx-auto mb-2">
                <img
                  src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1667559671/cld-sample-4.jpg"
                  className="img-fluid circle"
                  width={100}
                />
              </div>
              <div className="dash_caption mb-3">
                <h4 className="fs-lg ft-medium mb-0 lh-1">Robert V. Ledet</h4>
                <p className="m-0 p-0">Web Designer</p>
                <span className="text-muted smalls">
                  <i className="lni lni-map-marker mr-1" />
                  Denver, USA
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
                  <i className="lni lni-briefcase mr-1" />
                  Full Time
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-laptop-phone mr-1" />
                  Web Designer
                </div>
              </div>
              <div className="job_grid_footer px-3 d-flex align-items-center justify-content-between">
                <div className="df-1 text-muted">
                  <i className="lni lni-envelope mr-1" />
                  themezhub@gmail.com
                </div>
                <div className="df-1 text-muted">
                  <i className="lni lni-graduation mr-1" />3 Year Exp.
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
      </section>
    </div>
  );
};

export default News;
