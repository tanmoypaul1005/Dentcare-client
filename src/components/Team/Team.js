import React from 'react'

function Team() {
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
        <h1 className="display-3 text-white animated zoomIn">Dentist</h1>
        <a href="" className="h4 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h4 text-white">
          Dentist
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}
  {/* Team Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
          <div className="section-title bg-light rounded h-100 p-5">
            <h5 className="position-relative d-inline-block text-primary text-uppercase">
              Our Dentist
            </h5>
            <h1 className="display-6 mb-4">
              Meet Our Certified &amp; Experienced Dentist
            </h1>
            <a href="appointment.html" className="btn btn-primary py-3 px-5">
              Appointment
            </a>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div
              className="position-relative rounded-top"
              style={{ zIndex: 1 }}
            >
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-1.jpg"
                alt=""
              />
              <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
              <h4 className="mb-2">Dr. John Doe</h4>
              <p className="text-primary mb-0">Implant Surgeon</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="team-item">
            <div
              className="position-relative rounded-top"
              style={{ zIndex: 1 }}
            >
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-2.jpg"
                alt=""
              />
              <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
              <h4 className="mb-2">Dr. John Doe</h4>
              <p className="text-primary mb-0">Implant Surgeon</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
          <div className="team-item">
            <div
              className="position-relative rounded-top"
              style={{ zIndex: 1 }}
            >
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-3.jpg"
                alt=""
              />
              <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
              <h4 className="mb-2">Dr. John Doe</h4>
              <p className="text-primary mb-0">Implant Surgeon</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
          <div className="team-item">
            <div
              className="position-relative rounded-top"
              style={{ zIndex: 1 }}
            >
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-4.jpg"
                alt=""
              />
              <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
              <h4 className="mb-2">Dr. John Doe</h4>
              <p className="text-primary mb-0">Implant Surgeon</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
          <div className="team-item">
            <div
              className="position-relative rounded-top"
              style={{ zIndex: 1 }}
            >
              <img
                className="img-fluid rounded-top w-100"
                src="img/team-5.jpg"
                alt=""
              />
              <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-twitter fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-facebook-f fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-linkedin-in fw-normal" />
                </a>
                <a className="btn btn-primary btn-square m-1" href="#">
                  <i className="fab fa-instagram fw-normal" />
                </a>
              </div>
            </div>
            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
              <h4 className="mb-2">Dr. John Doe</h4>
              <p className="text-primary mb-0">Implant Surgeon</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Team End */}
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
    )
}

export default Team;
