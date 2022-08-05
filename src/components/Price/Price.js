import React from 'react'

function Price() {
    return (
        <div>
    <>
  
  {/* Full Screen Search Start */}
  <div className="modal fade" id="searchModal" tabIndex={-1}>
    <div className="modal-dialog modal-fullscreen">
      <div
        className="modal-content"
        style={{ background: "rgba(9, 30, 62, .7)" }}
      >
        <div className="modal-header border-0">
          <button
            type="button"
            className="btn bg-white btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body d-flex align-items-center justify-content-center">
          <div className="input-group" style={{ maxWidth: 600 }}>
            <input
              type="text"
              className="form-control bg-transparent border-primary p-3"
              placeholder="Type search keyword"
            />
            <button className="btn btn-primary px-4">
              <i className="bi bi-search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Full Screen Search End */}
  {/* Hero Start */}
  <div className="container-fluid bg-primary py-5 hero-header mb-5">
    <div className="row py-3">
      <div className="col-12 text-center">
        <h1 className="display-3 text-white animated zoomIn">Pricing</h1>
        <a href="" className="h4 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h4 text-white">
          Pricing
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Pricing Start */}
  <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-5">
          <div className="section-title mb-4">
            <h5 className="position-relative d-inline-block text-primary text-uppercase">
              Pricing Plan
            </h5>
            <h1 className="display-5 mb-0">
              We Offer Fair Prices for Dental Treatment
            </h1>
          </div>
          <p className="mb-4">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor
            sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem
            et sit, sed stet no labore lorem sit. Sanctus clita duo justo eirmod
            magna dolore erat amet
          </p>
          <h5
            className="text-uppercase text-primary wow fadeInUp"
            data-wow-delay="0.3s"
          >
            Call for Appointment
          </h5>
          <h1 className="wow fadeInUp" data-wow-delay="0.6s">
            +012 345 6789
          </h1>
        </div>
        <div className="col-lg-7">
          <div
            className="owl-carousel price-carousel wow zoomIn"
            data-wow-delay="0.9s"
          >
            <div className="price-item pb-4">
              <div className="position-relative">
                <img
                  className="img-fluid rounded-top"
                  src="img/price-1.jpg"
                  alt=""
                />
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                  style={{ zIndex: 2 }}
                >
                  <h2 className="text-primary m-0">$35</h2>
                </div>
              </div>
              <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                <h4>Teeth Whitening</h4>
                <hr className="text-primary w-50 mx-auto mt-0" />
                <div className="d-flex justify-content-between mb-3">
                  <span>Modern Equipment</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Professional Dentist</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>24/7 Call Support</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                >
                  Appointment
                </a>
              </div>
            </div>
            <div className="price-item pb-4">
              <div className="position-relative">
                <img
                  className="img-fluid rounded-top"
                  src="img/price-2.jpg"
                  alt=""
                />
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                  style={{ zIndex: 2 }}
                >
                  <h2 className="text-primary m-0">$49</h2>
                </div>
              </div>
              <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                <h4>Dental Implant</h4>
                <hr className="text-primary w-50 mx-auto mt-0" />
                <div className="d-flex justify-content-between mb-3">
                  <span>Modern Equipment</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Professional Dentist</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>24/7 Call Support</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                >
                  Appointment
                </a>
              </div>
            </div>
            <div className="price-item pb-4">
              <div className="position-relative">
                <img
                  className="img-fluid rounded-top"
                  src="img/price-3.jpg"
                  alt=""
                />
                <div
                  className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle"
                  style={{ zIndex: 2 }}
                >
                  <h2 className="text-primary m-0">$99</h2>
                </div>
              </div>
              <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                <h4>Root Canal</h4>
                <hr className="text-primary w-50 mx-auto mt-0" />
                <div className="d-flex justify-content-between mb-3">
                  <span>Modern Equipment</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <span>Professional Dentist</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span>24/7 Call Support</span>
                  <i className="fa fa-check text-primary pt-1" />
                </div>
                <a
                  href="appointment.html"
                  className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle"
                >
                  Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Pricing End */}
  {/* Newsletter Start */}
  <div
    className="container-fluid position-relative pt-5 wow fadeInUp"
    data-wow-delay="0.1s"
    style={{ zIndex: 1 }}
  >
    <div className="container">
      <div className="bg-primary p-5">
        <form className="mx-auto" style={{ maxWidth: 600 }}>
          <div className="input-group">
            <input
              type="text"
              className="form-control border-white p-3"
              placeholder="Your Email"
            />
            <button className="btn btn-dark px-4">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  {/* Newsletter End */}
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark text-light py-5 wow fadeInUp"
    data-wow-delay="0.3s"
    style={{ marginTop: "-75px" }}
  >
    <div className="container pt-5">
      <div className="row g-5 pt-4">
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Quick Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Home
            </a>
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              About Us
            </a>
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Our Services
            </a>
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Latest Blog
            </a>
            <a className="text-light" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Popular Links</h3>
          <div className="d-flex flex-column justify-content-start">
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Home
            </a>
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              About Us
            </a>
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Our Services
            </a>
            <a className="text-light mb-2" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Latest Blog
            </a>
            <a className="text-light" href="#">
              <i className="bi bi-arrow-right text-primary me-2" />
              Contact Us
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Get In Touch</h3>
          <p className="mb-2">
            <i className="bi bi-geo-alt text-primary me-2" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="bi bi-envelope-open text-primary me-2" />
            info@example.com
          </p>
          <p className="mb-0">
            <i className="bi bi-telephone text-primary me-2" />
            +012 345 67890
          </p>
        </div>
        <div className="col-lg-3 col-md-6">
          <h3 className="text-white mb-4">Follow Us</h3>
          <div className="d-flex">
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded me-2"
              href="#"
            >
              <i className="fab fa-twitter fw-normal" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded me-2"
              href="#"
            >
              <i className="fab fa-facebook-f fw-normal" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded me-2"
              href="#"
            >
              <i className="fab fa-linkedin-in fw-normal" />
            </a>
            <a
              className="btn btn-lg btn-primary btn-lg-square rounded"
              href="#"
            >
              <i className="fab fa-instagram fw-normal" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="container-fluid text-light py-4"
    style={{ background: "#051225" }}
  >
    <div className="container">
      <div className="row g-0">
        <div className="col-md-6 text-center text-md-start">
          <p className="mb-md-0">
            ©{" "}
            <a className="text-white border-bottom" href="#">
              Your Site Name
            </a>
            . All Rights Reserved.
          </p>
        </div>
        <div className="col-md-6 text-center text-md-end">
          <p className="mb-0">
            Designed by{" "}
            <a
              className="text-white border-bottom"
              href="https://htmlcodex.com"
            >
              HTML Codex
            </a>
            <br />
            Distributed by{" "}
            <a
              className="text-white border-bottom"
              href="https://themewagon.com"
            >
              ThemeWagon
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
</>

        </div>
    )
}

export default Price

