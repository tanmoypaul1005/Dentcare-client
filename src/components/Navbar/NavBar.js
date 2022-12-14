import { startOfYesterday } from "date-fns/esm";
import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const auth=useSelector((state)=>state.auth)
  const navigate=useNavigate();
  const login =localStorage.getItem('token');
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/register');

}
    const link=login?
    (<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
       <a href="/" className="navbar-brand p-0">
         <h1 className="m-0 text-primary">
           <i className="fa fa-tooth me-2" />
           DentCare
         </h1>
       </a>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarCollapse"
       >
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarCollapse">
         <div className="navbar-nav ms-auto py-0">
           <a href="/" className="nav-item nav-link">
             Home
           </a>
           <a href="/about" className="nav-item nav-link">
             About
           </a>
           <a href="/service" className="nav-item nav-link">
             Service
           </a>
           <a href="/dentalCheckup" className="nav-item nav-link">
             Checkup
           </a>
           <a href="/contact" className="nav-item nav-link">
             Contact
           </a>
         </div>
         <button
           type="button"
           className="btn text-dark"
           data-bs-toggle="modal"
           data-bs-target="#searchModal"
         >
           <i className="fa fa-search" />
         </button>
       
         <a href="/" className="nav-item nav-link py-1 px-3 ms-2">
         {auth.user.name}
         </a>
         <a onClick={logout} className="btn btn-primary py-2 px-4 ms-3">
           Logout
         </a>
         <a href="/appointment" className="btn btn-primary py-2 px-4 ms-3">
           Appointment
         </a>
       </div>
     </nav>): 
     (<nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
       <a href="/" className="navbar-brand p-0">
         <h1 className="m-0 text-primary">
           <i className="fa fa-tooth me-2" />
           DentCare
         </h1>
       </a>
       <button
         className="navbar-toggler"
         type="button"
         data-bs-toggle="collapse"
         data-bs-target="#navbarCollapse"
       >
         <span className="navbar-toggler-icon" />
       </button>
       <div className="collapse navbar-collapse" id="navbarCollapse">
         <div className="navbar-nav ms-auto py-0">
           <a href="/" className="nav-item nav-link">
             Home
           </a>
           <a href="/about" className="nav-item nav-link">
             About
           </a>
           <a href="/service" className="nav-item nav-link">
             Service
           </a>
           <a href="/dentalCheckup" className="nav-item nav-link">
             Checkup
           </a>
           <a href="/contact" className="nav-item nav-link">
             Contact
           </a>
         </div>
         <button
           type="button"
           className="btn text-dark"
           data-bs-toggle="modal"
           data-bs-target="#searchModal"
         >
           <i className="fa fa-search" />
         </button>
         <a href="/login" className="btn btn-primary py-2 px-4 ms-3">
         Login
         </a>
         <a href="/appointment" className="btn btn-primary py-2 px-4 ms-3">
           Appointment
         </a>
       </div>
     </nav>)




  return (
    <div>
      {/* Spinner Start ----*/}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary m-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary m-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}
      {/* Topbar Start */}
      <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <small className="py-2">
                <i className="far fa-clock text-primary me-2" />
                Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed{" "}
              </small>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
              <div className="me-3 pe-3 border-end py-2">
                <p className="m-0">
                  <i className="fa fa-envelope-open me-2" />
                  dentcare@gmail.com
                </p>
              </div>
              <div className="py-2">
                <p className="m-0">
                  <i className="fa fa-phone-alt me-2" />
                  +01644451655
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}


      {/* Navbar Start */}
      {/* <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="/" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-tooth me-2" />
            DentCare
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="/" className="nav-item nav-link">
              Home
            </a>
            <a href="/about" className="nav-item nav-link">
              About
            </a>
            <a href="/service" className="nav-item nav-link">
              Service
            </a>
            <a href="/dentalCheckup" className="nav-item nav-link">
              Checkup
            </a>
            <a href="/contact" className="nav-item nav-link">
              Contact
            </a>
          </div>
          <button
            type="button"
            className="btn text-dark"
            data-bs-toggle="modal"
            data-bs-target="#searchModal"
          >
            <i className="fa fa-search" />
          </button>
          <a href="/login" className="btn btn-primary py-2 px-4 ms-3">
          Login
          </a>
          <a href="/appointment" className="btn btn-primary py-2 px-4 ms-3">
            Appointment
          </a>
        </div>
      </nav>                      */}
      {link}
      {/* Navbar End */}


    </div>
  );
}

export default NavBar;
