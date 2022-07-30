import React from "react";

function Testimonial() {
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
              <h1 className="display-3 text-white animated zoomIn">
                Testimonial
              </h1>
              <a href="" className="h4 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2" />
              <a href="" className="h4 text-white">
                Testimonial
              </a>
            </div>
          </div>
        </div>
        {/* Hero End */}
        {/* Testimonial Start */}
        <div
          className="container-fluid bg-primary bg-testimonial py-5 mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ marginTop: 90 }}
        >
          <div className="container py-5">
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div
                  className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn"
                  data-wow-delay="0.6s"
                >
                  <div className="testimonial-item text-center text-white">
                    <img
                      className="img-fluid mx-auto rounded mb-4"
                      src="img/testimonial-1.jpg"
                      alt=""
                    />
                    <p className="fs-5">
                      Dolores sed duo clita justo dolor et stet lorem kasd
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                      labore diam erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="mx-auto w-25" />
                    <h4 className="text-white mb-0">Client Name</h4>
                  </div>
                  <div className="testimonial-item text-center text-white">
                    <img
                      className="img-fluid mx-auto rounded mb-4"
                      src="img/testimonial-2.jpg"
                      alt=""
                    />
                    <p className="fs-5">
                      Dolores sed duo clita justo dolor et stet lorem kasd
                      dolore lorem ipsum. At lorem lorem magna ut et, nonumy
                      labore diam erat. Erat dolor rebum sit ipsum.
                    </p>
                    <hr className="mx-auto w-25" />
                    <h4 className="text-white mb-0">Client Name</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
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

        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </>
    </div>
  );
}

export default Testimonial;
