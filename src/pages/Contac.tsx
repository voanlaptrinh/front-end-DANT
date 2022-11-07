import React from "react";

type Props = {};

const Contac = (props: Props) => {
  return (
    <div>
      <section className="middle">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="sec_title position-relative text-center">
                <h2 className="off_title">Liên hệ với chúng tôi</h2>
              </div>
            </div>
          </div>
          <div className="row align-items-start justify-content-between">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="card-wrap-body mb-4 gray rounded p-3">
                <h4 className="ft-medium mb-3 theme-cl">Make a Call</h4>
                <p>
                  1354 Green Street Nashville Drive Dodge City,
                  <br /> KS 67801 United States
                </p>
                <p className="lh-1">
                  <span className="text-dark ft-medium">Email:</span>{" "}
                  dhananjaypreet@gmail.com
                </p>
              </div>
              <div className="card-wrap-body mb-3 gray rounded p-3">
                <h4 className="ft-medium mb-3 theme-cl">Make a Call</h4>
                <h6 className="ft-medium mb-1">Customer Care:</h6>
                <p className="mb-2">+91 458 753 6924</p>
                <h6 className="ft-medium mb-1">Careers::</h6>
                <p>+91 965 784 23658</p>
              </div>
              <div className="card-wrap-body mb-3 gray rounded p-3">
                <h4 className="ft-medium mb-3 theme-cl">Drop A Mail</h4>
                <p>
                  Fill out our form and we will contact you within 24 hours.
                </p>
                <p className="lh-1 text-dark">dhananjaypreet@gmail.com</p>
                <p className="lh-1 text-dark">dhananjaypreet@gmail.com</p>
              </div>
            </div>
            <div className="col-xl-7 col-lg-8 col-md-12 col-sm-12">
              <form className="row">
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">
                      Tên của bạn
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="nhập tên"
                    />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">
                      Email của bạn
                    </label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">vấn đền</label>
                    <input type="text" className="form-control" />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <label className="small text-dark ft-medium">
                      Nội dung muốn gửi tới chung tôi
                    </label>
                    <textarea className="form-control ht-80" />
                  </div>
                </div>
                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                  <div className="form-group">
                    <button type="button" className="btn btn-dark">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contac;
