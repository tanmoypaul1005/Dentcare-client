import React, { useState } from 'react';
import '../Css/Style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import carousel1 from '../../img/carousel-1.jpg' ;
import carousel2 from '../../img/carousel-2.jpg' ;
import price1 from '../../img/price-1.jpg' ;
import price2 from '../../img/price-2.jpg' ;
import price3 from '../../img/price-3.jpg' ;
import about from '../../img/about.jpg' ;
import before from '../../img/before.jpg' ;
import after from '../../img/after.jpg' ;
import servise1 from '../../img/service-1.jpg' ;
import servise2 from '../../img/service-2.jpg' ;
import servise3 from '../../img/service-3.jpg' ;
import servise4 from '../../img/service-4.jpg' ;
import testimonial1 from '../../img/testimonial-1.jpg' ;
import testimonial2 from '../../img/testimonial-2.jpg' ;
import TickMark from "../../img/tickmark.png";

// Libraries Stylesheet 
import "../lib/owlcarousel/assets/owl.carousel.min.css";
import "../lib/animate/animate.min.css" ;
import "../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../lib/twentytwenty/twentytwenty.css";
import Doctor from '../Doctor/Doctor';
import { useDispatch, useSelector } from 'react-redux';
import { SearchAppointment } from '../../Redux/Actions/AppointmentAction';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate()
    const auth=useSelector((state)=>state.auth);
    const appointment = useSelector((state) => state.appointment);
    console.log("appointment",appointment)
    const [state, setstate] = useState({
        service:'',
        email:'',
    })

    const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
    };

    const showAppointmentuser=(e)=>{
     e.preventDefault();
     dispatch(SearchAppointment(state))
     console.log(state)
    }
    return (
    <div>
{/* tabindex="-1" */}
{/* Full Screen Search Start  */}
    <div className="modal fade" id="searchModal" >
        <div className="modal-dialog modal-fullscreen">
            <div className="modal-content" style={{background: "rgba(9, 30, 62, .7)"}}>
                <div className="modal-header border-0">
                    <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body d-flex align-items-center justify-content-center">
                    <div className="input-group" style={{maxWidth: "600px"}}>
                        <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                        <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* Full Screen Search End  */}


  {/* Carousel Start  */}
    <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={carousel1} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                            <a href="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="/contact" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="w-100" src={carousel2} alt="Image" />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center" >
                        <div className="p-3" style={{maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-3 animated slideInDown">Keep Your Teeth Healthy</h5>
                            <h1 className="display-1 text-white mb-md-4 animated zoomIn">Take The Best Quality Dental Treatment</h1>
                            <a href="/appointment" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                            <a href="" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
     {/* Carousel End  */}


     {/* Banner Start  */}
    <div className="container-fluid banner mb-5">
        <div className="container">
            <div className="row gx-0">
                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
                    <div className="bg-primary d-flex flex-column p-5" style= {{height: "300px"}}>
                        <h3 className="text-white mb-3">Opening Hours</h3>
                        <div className="d-flex justify-content-between text-white mb-3">
                            <h6 className="text-white mb-0">Mon - Fri</h6>
                            <p className="mb-0"> 8:00am - 9:00pm</p>
                        </div>
                        <div className="d-flex justify-content-between text-white mb-3">
                            <h6 className="text-white mb-0">Saturday</h6>
                            <p className="mb-0"> 8:00am - 7:00pm</p>
                        </div>
                        <div className="d-flex justify-content-between text-white mb-3">
                            <h6 className="text-white mb-0">Sunday</h6>
                            <p className="mb-0"> 8:00am - 5:00pm</p>
                        </div>
                        <a className="btn btn-light" href="/appointment">Appointment</a>
                    </div>
                </div>


                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
                    <div className="bg-dark d-flex flex-column p-5" style= {{height: "300px"}}>
                        <h3 className="text-white mb-3">Search A Doctor</h3>

                <div className="date mb-3" id="date" data-target-input="nearest">
                  <form onSubmit={showAppointmentuser}>
                        <input type="text" value={state.email} name="email"  onChange={handleInputs} className="form-control bg-light border-0 datetimepicker-input"
                        placeholder="Enter Appointment Email" data-target="#date" data-toggle="datetimepicker" style= {{height: "40px"}} required/>
                        
                        <select
                        className="form-select bg-light border-0 mb-3"
                        style= {{height: "40px",marginTop:'1rem'}}
                        onChange={handleInputs}
                        value={state.service}
                        name="service"
                      >
                        <option selected>Select Service</option>
                        <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
                        <option value="Dental Implants">Dental Implants</option>
                        <option value="Dental Bridges">Dental Bridges</option>
                        <option value="Teeth Whitening">Teeth Whitening</option>
                      </select>

                      <input className="form-select bg-light border-0 mb-3 btn btn-light" type="submit"  value="Search Doctor"></input>
                      </form>
                    </div>
                     
                    </div>
                </div>



                <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
                    <div className="bg-secondary d-flex flex-column p-5" style= {{height: "300px"}}>
                        <h3 className="text-white mb-3">Make Appointment</h3>
                        <p className="text-white">Ipsum erat ipsum dolor clita rebum no rebum dolores labore, ipsum magna at eos et eos amet.</p>
                        <h2 className="text-white mb-0">+8801644451655</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* Banner Start  */}



     {/* About Start  */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-7">
                    <div className="section-title mb-4">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                        <h1 className="display-5 mb-0">The World's Best Dental Clinic That You Can Trust</h1>
                    </div>
                    <h4 className="text-body fst-italic mb-4">Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo justo magna dolore</h4>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor eirmod magna dolore erat amet</p>
                    <div className="row g-3">
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Award Winning</h5>
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Staff</h5>
                        </div>
                        <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
                            <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
                        </div>
                    </div>
                    <a href="/appointment" className="btn btn-primary py-3 px-5 mt-4 wow zoomIn" data-wow-delay="0.6s">Make Appointment</a>
                </div>
                <div className="col-lg-5" style={{minHeight: "500px"}}>
                    <div className="position-relative h-100">
                        <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src={about} style={{objectFit:" cover" }}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/* About End  */}
    <Doctor/>
    {/* Service Start  */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5 mb-5">
                <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{minHeight: "400px"}}>
                    <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                        <img className="position-absolute w-100 h-100" src={before} style={{objectFit: "cover"}}/>
                        <img className="position-absolute w-100 h-100" src={after.jpg} style={{objectFit: "cover"}} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <div className="section-title mb-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
                        <h1 className="display-5 mb-0">We Offer The Best Quality Dental Services</h1>
                    </div>
                    <div className="row g-5">
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src={servise1} alt="" />
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Cosmetic Dentistry</h5>
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src={servise2} alt="" />
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Dental Implants</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="col-lg-7">
                    <div className="row g-5">
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src={servise3} alt="" />
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Dental Bridges</h5>
                            </div>
                        </div>
                        <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                            <div className="rounded-top overflow-hidden">
                                <img className="img-fluid" src={servise4} alt="" />
                            </div>
                            <div className="position-relative bg-light rounded-bottom text-center p-4">
                                <h5 className="m-0">Teeth Whitening</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 service-item wow zoomIn" data-wow-delay="0.9s">
                    <div className="position-relative bg-primary rounded h-100 d-flex flex-column align-items-center justify-content-center text-center p-4">
                        <h3 className="text-white mb-3">Make Appointment</h3>
                        <p className="text-white mb-3">Clita ipsum magna kasd rebum at ipsum amet dolor justo dolor est magna stet eirmod</p>
                        <h2 className="text-white mb-0">+8801644451655</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Service End  */}


    {/* Offer Start  */}
    <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
                    <div className="offer-text text-center rounded p-5">
                        <h1 className="display-5 text-white">Save 30% On Your First Dental Checkup</h1>
                        <p className="text-white mb-4">Eirmod sed tempor lorem ut dolores sit kasd ipsum. Dolor ea et dolore et at sea ea at dolor justo ipsum duo rebum sea. Eos vero eos vero ea et dolore eirmod diam duo lorem magna sit dolore sed et.</p>
                        <a href="dentalCheckup" className="btn btn-dark py-3 px-5 me-3">Appointment</a>
                        <a href="dentalCheckup" className="btn btn-light py-3 px-5">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* Offer End  */}


   {/* Pricing Start  */}
    <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-5">
                    <div className="section-title mb-4">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
                        <h1 className="display-5 mb-0">We Offer Fair Prices for Dental Treatment</h1>
                    </div>
                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo eirmod magna dolore erat amet</p>
                    <h5 className="text-uppercase text-primary wow fadeInUp" data-wow-delay="0.3s">Call for Appointment</h5>
                    <h1 className="wow fadeInUp" data-wow-delay="0.6s">+8801644451655</h1>
                </div>

                <div className="col-lg-7">
                    <div className="owl-carousel price-carousel wow zoomIn" data-wow-delay="0.9s">
                        <div className="price-item pb-4">
                            <div className="position-relative">
                                <img className="img-fluid rounded-top" src={price1} alt="" />
                                <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zindex: 2}}>
                                    <h2 className="text-primary m-0">$35</h2>
                                </div>
                            </div>
                            <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                                <h4>Teeth Whitening</h4>
                                <hr className="text-primary w-50 mx-auto mt-0" />
                                <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <a href="/appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                            </div>
                        </div>
                        <div className="price-item pb-4">
                            <div className="position-relative">
                                <img className="img-fluid rounded-top" src={price2} alt="" />
                                <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zindex: 2}}>
                                    <h2 className="text-primary m-0">$49</h2>
                                </div>
                            </div>
                            <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                                <h4>Dental Implant</h4>
                                <hr className="text-primary w-50 mx-auto mt-0" />
                                <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <a href="/appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                            </div>
                        </div>
                        <div className="price-item pb-4">
                            <div className="position-relative">
                                <img className="img-fluid rounded-top" src={price3} alt="" />
                                <div className="d-flex align-items-center justify-content-center bg-light rounded pt-2 px-3 position-absolute top-100 start-50 translate-middle" style={{zindex: 2}}>
                                    <h2 className="text-primary m-0">$99</h2>
                                </div>
                            </div>
                            <div className="position-relative text-center bg-light border-bottom border-primary py-5 p-4">
                                <h4>Root Canal</h4>
                                <hr className="text-primary w-50 mx-auto mt-0" />
                                <div className="d-flex justify-content-between mb-3"><span>Modern Equipment</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-3"><span>Professional Dentist</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <div className="d-flex justify-content-between mb-2"><span>24/7 Call Support</span><i className="fa fa-check text-primary pt-1"></i></div>
                                <a href="/appointment" className="btn btn-primary py-2 px-4 position-absolute top-100 start-50 translate-middle">Appointment</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   {/* Pricing End  */}


    {/* Testimonial Start  */}
    <div className="container-fluid bg-primary bg-testimonial py-5 my-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src={testimonial1} alt="" />
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25" />
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                        <div className="testimonial-item text-center text-white">
                            <img className="img-fluid mx-auto rounded mb-4" src={testimonial2} alt="" />
                            <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                            <hr className="mx-auto w-25" />
                            <h4 className="text-white mb-0">Client Name</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     {/* Testimonial End  */}


{/* Hero Start */}
  <div className="container-fluid bg-primary py-5 hero-header mb-5">
    <div className="row py-3">
      <div className="col-12 text-center">
        <h1 className="display-3 text-white animated zoomIn">Contact Us</h1>
        <a href="" className="h4 text-white">
          Home
        </a>
        <i className="far fa-circle text-white px-2" />
        <a href="" className="h4 text-white">
          Contact
        </a>
      </div>
    </div>
  </div>
  {/* Hero End */}

  {/* Contact Start */}
  <div className="container-fluid py-5">
    <div className="container">
      <div className="row g-5">
        <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.1s">
          <div className="bg-light rounded h-100 p-5">
            <div className="section-title">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">
                Contact Us
              </h5>
              <h1 className="display-6 mb-4">Feel Free To Contact Us</h1>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-geo-alt fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-0">Our Office</h5>
                <span>Mirpur-1,Bangladesh</span>
              </div>
            </div>
            <div className="d-flex align-items-center mb-2">
              <i className="bi bi-envelope-open fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-0">Email Us</h5>
                <span>dentcare@gmail.com</span>
              </div>
            </div>
            <div className="d-flex align-items-center">
              <i className="bi bi-phone-vibrate fs-1 text-primary me-3" />
              <div className="text-start">
                <h5 className="mb-0">Call Us</h5>
                <span>+8801644451655</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-6 wow slideInUp" data-wow-delay="0.3s">
          <form>
            <div className="row g-3">
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Name"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="email"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Your Email"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control border-0 bg-light px-4"
                  placeholder="Subject"
                  style={{ height: 55 }}
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control border-0 bg-light px-4 py-3"
                  rows={5}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-xl-4 col-lg-12 wow slideInUp" data-wow-delay="0.6s">
          <iframe
            className="position-relative rounded w-100 h-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
            frameBorder={0}
            style={{ minHeight: 400, border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex={0}
          />
        </div>
      </div>
    </div>
  </div>
  {/* Contact End */}
    

     {/* Back to Top  */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i className="bi bi-arrow-up"></i></a>

        </div>
          
    );
};

export default Home;
