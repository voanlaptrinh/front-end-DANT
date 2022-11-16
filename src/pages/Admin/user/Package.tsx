import React from 'react'

type Props = {}

const Package = (props: Props) => {
  return (
    <div id="main-wrapper">
      <section className="bg-light middle">
        <div className="container">
          <div className="row">
          </div>
          {/* row */}
          <div className="row align-items-center">
            {/* Single */}
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded ">
                <div className="position-absolute ab-right"><span className="medium theme-cl theme-bg-light text-danger px-2 py-1 rounded">Gói A</span></div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a href="job-detail.html" className="d-block text-center m-auto"><img src="assets/img/c-6.png" className="img-fluid" width={70} /></a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-2">
                  <h4 className="mb-0 ft-medium medium"><a href="job-detail.html" className="text-dark fs-md">500.000/thang</a></h4>
                  <div className="jbl_location"><button className="btn btn-success">Đăng ký</button></div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-block align-items-center justify-content-between">
                  <div className="text-center">
                    <span className="text-center"><strong>ho tro tiep can:</strong> 50 ung vien</span>
                  </div>
                  <div className="text-center">
                    <span><strong>ho tro day top:</strong> toi da 3 bai viet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded ">
                <div className="position-absolute ab-right"><span className="medium theme-cl theme-bg-light text-warning px-2 py-1 rounded">Gói B</span></div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a href="job-detail.html" className="d-block text-center m-auto"><img src="assets/img/c-6.png" className="img-fluid" width={70} /></a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h4 className="mb-0 ft-medium medium"><a href="job-detail.html" className="text-dark fs-md">1.000.000/thang</a></h4>
                  <div className="jbl_location"><button className="btn btn-success">Đăng ký</button></div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-block align-items-center justify-content-between">
                  <div className="text-center">
                    <span className="text-center"><strong>ho tro tiep can:</strong> 50 ung vien</span>
                  </div>
                  <div className="text-center">
                    <span><strong>ho tro day top:</strong> toi da 3 bai viet</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div className="job_grid border rounded ">
                <div className="position-absolute ab-right"><span className="medium theme-cl theme-bg-light text-success px-2 py-1 rounded">Gói C</span></div>
                <div className="job_grid_thumb mb-3 pt-5 px-3">
                  <a href="job-detail.html" className="d-block text-center m-auto"><img src="assets/img/c-6.png" className="img-fluid" width={70} /></a>
                </div>
                <div className="job_grid_caption text-center pb-5 px-3">
                  <h4 className="mb-0 ft-medium medium"><a href="job-detail.html" className="text-dark fs-md">1.500.000/thang</a></h4>
                  <div className="jbl_location"><button className="btn btn-success">Đăng ký</button></div>
                </div>
                <div className="job_grid_footer pb-4 px-3 d-block align-items-center justify-content-between">
                  <div className="text-center">
                    <span className="text-center"><strong>ho tro tiep can:</strong> 50 ung vien</span>
                  </div>
                  <div className="text-center">
                    <span><strong>ho tro day top:</strong> toi da 3 bai viet</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

  )
}

export default Package