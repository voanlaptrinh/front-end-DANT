import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { listCandidate } from '../../api/home'
import { Categories } from '../../types/candidate'
import { Skill } from '../../types/skill'
import Logo from '../../assets/images/logo.jpg'
import { isAuthenticate, logout } from '../../api/auth'

type Props = {}

const Headercan = (props: Props) => {
  const user = isAuthenticate();
  console.log(user);

  const [candidate, setCandidate] = useState<Categories>()
  useEffect(() => {
    const getCandidate = async () => {
      const { data } = await listCandidate()
      setCandidate(data)
    }
    // getCandidate();
    // const getUser = async () =>{
    //   const {data} =
    // }
  }, [])
  return (
    <div>

      <div>
        {/* main nav */}
        <div className="container-fluid fluid-nav">
          <div className="container cnt-tnar">
            <nav className="navbar navbar-expand-lg navbar-light bg-light tjnav-bar">
              {/* <a class="navbar-brand" href="#">Navbar</a> */}
              <Link to="" >
                <img src='' alt='itWork' />
              </Link>
              <button className="navbar-toggler tnavbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                {/* <span class="navbar-toggler-icon"></span> */}
                <i className="fa fa-bars icn-res" aria-hidden="true" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto tnav-left tn-nav">
                  <li className="nav-item">
                    <NavLink to="/search" className="nav-link" >Việc Làm IT</NavLink>
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
                <ul className="navbar-nav mr-auto my-2 my-lg-0 tnav-right tn-nav">
                  {/* Modal */}
                  <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Chào bạn,
                            <div><span>Để có được trải nghiệm tốt nhất mới bạn chọn bên mà mình muôn đăng ký</span></div>
                          </h5>
                          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                          <div className='can'>
                            <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714594/news3_bcvsak.png" alt="" />
                          </div>
                          <div className='emp'>
                            <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714594/news3_bcvsak.png" alt="" />
                          </div>
                          <div>
                            <a href="/login/signupempoly" className="btn btn-primary">Nhà tuyển dụng</a>
                          </div>
                          <div>
                            <a href="/login/signupcandidate" className="btn btn-primary">Ứng viên</a>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end modal */}
                  {
                    user ? <li className="nav-item d-flex align-items-center">
                      <p className='text-white'>Xin chào, {user.email}</p>
                      <button className="nav-link btn-employers" onClick={() => logout()}> Đăng xuất</button>
                    </li>
                      : <li className="nav-item d-flex align-items-center">
                        <div className="nav-item">
                          <a className="nav-link" data-bs-toggle="modal" data-bs-target="#exampleModal" >Đăng Ký</a>
                        </div>
                        <div className="nav-item">
                          <NavLink to="/login" className="nav-link btn-employers"> Đăng Nhập</NavLink>
                        </div>
                      </li>
                  }
                  {/* <li className="nav-item">
                    <NavLink to="/login" className="nav-link"> Đăng Nhập</NavLink>
                  </li> */}
                  {/* <li className="nav-item">
                    <Link to="/employer" className="nav-link btn-employers" tabIndex={-1} aria-disabled="true">Nhà Tuyển Dụng</Link>
                  </li> */}
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* (end) main nav */}
        <div className="clearfix" />
        {/* main banner */}
        <div className="container-fluid clear-left clear-right">
          <div className="main-banner">
            <div className="banner-image">
              <img src="https://res.cloudinary.com/dgeqw8b5i/image/upload/v1662714588/banner2_j8zpnj.jpg" alt="banner-image" />
            </div>
          </div>
          <div className="banner-content">
            <h3>1000+ Jobs For Developers</h3>
            <div className="banner-tags">
              <ul>
                <li><a >Java</a></li>
                <li><a >Python</a></li>
                <li><a >Tester</a></li>
                <li><a >QA QC</a></li>
                <li><a >.NET</a></li>
                <li><a >Javascript</a></li>
                <li><a >Business Analyst</a></li>
                <li><a >Designer</a></li>
              </ul>
            </div>
          </div>
        </div>
        {/* (end) main banner */}
        {/* search section */}
        <div className="container-fluid search-fluid">
          <div className="container">
            <div className="search-wrapper" style={{ marginTop: '-11rem' }}>
              <ul className="nav nav-tabs search-nav-tabs" id="myTab" role="tablist">
                <li className="nav-item search-nav-item">
                  <a className="nav-link snav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tìm việc làm</a>
                </li>
                <li className="nav-item search-nav-item">
                  <a className="nav-link snav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tìm công ty</a>
                </li>
              </ul>
              <div className="tab-content search-tab-content" id="myTabContent">
                {/* content tab 1 */}
                <div className="tab-pane stab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  <form className="bn-search-form">
                    <div className="row">
                      <div className="col-md-10 col-sm-12">
                        <div className="row">
                          <div className="col-md-5">
                            <div className="input-group s-input-group">
                              <input type="text" className="form-control sinput" placeholder="Nhập kỹ năng, công việc,..." />
                              <span><i className="fa fa-search" /></span>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <select id="computer-languages" >
                              <option value={0} hidden>Tất cả ngôn ngữ</option>
                              {candidate?.skill && candidate?.skill.map((item: any) => {
                                return <option key={item.id} value={item.name}>{item.name}</option>
                              })}
                            </select>
                            <i className="fa fa-code sfa" aria-hidden="true" />
                          </div>
                          <div className="col-md-3">
                            <select id="s-provinces">
                              <option value={0} hidden>Tất cả địa điểm</option>
                              <option>Đà Nẵng</option>
                              <option>Hà Nội</option>
                              <option>Hồ Chí Minh</option>
                              <option>Buôn Ma Thuột</option>
                              <option>Quy Nhơn</option>
                              <option>Nha Trang</option>
                            </select>
                            <i className="fa fa-map-marker sfa" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <button type="submit" className="btn btn-primary btn-search col-sm-12">Tìm kiếm</button>
                      </div>
                    </div>
                  </form>

                </div>
                {/* (end) content tab 1 */}
                {/* content tab 2 */}
                <div className="tab-pane stab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <form className="bn-search-form">
                    <div className="row">
                      <div className="col-md-10 col-sm-12">
                        <div className="input-group s-input-group w-100">
                          <input type="text" className="form-control sinput" placeholder="Nhập kỹ năng, công việc,..." />
                          <span><i className="fa fa-search" /></span>
                        </div>
                      </div>
                      <div className="col-md-2 col-sm-12">
                        <button type="submit" className="btn btn-primary btn-search col-sm-12">Tìm kiếm</button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* (end) content tab 2 */}
              </div>
            </div>
          </div>
        </div>
        {/* (end) search section */}
      </div>

    </div>
  )
}

export default Headercan