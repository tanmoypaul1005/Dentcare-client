import { Button, Modal } from "bootstrap";
import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment  } from "../../Redux/Actions/DentalCheckupAction";
import { GetDoctor } from "../../Redux/Actions/DoctorAction";
import toast, { Toaster } from 'react-hot-toast';
import { getAppointment } from "../../Redux/Actions/AppointmentAction";
import TickMark from "../../img/tickmark.png";
import './Appointment.css';
function Appointment() {
  const dispatch=useDispatch();
  const auth=useSelector((state)=>state.auth);
  // console.log("Auth",auth)

  const doctor=useSelector((state)=>state.doctor);
  // console.log(doctor.doctor);

  const appointment=useSelector((state)=>state.appointment);
  console.log(appointment.appointment)
  const [state, setstate] = useState({
  doctor:'',
  service:'',
  })
  const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  useEffect(() => {
   dispatch(GetDoctor())
   dispatch(getAppointment(auth.user._id))
  }, [dispatch]);

  const [value, onChange] = useState(new Date());
  const date = value.toLocaleDateString()
  console.log("Date", date);

  const AddAppointmentuser=(e)=>{
  e.preventDefault();
  const data={date:date,doctor:state.doctor,service:state.service,user:auth.user._id}
  dispatch(addAppointment(data));
  console.log(state)
  console.log(data);
  }
  return (
    <div>
           <Toaster />
      {/* Full Screen Search Start  */}
      <div className="modal fade" id="searchModal">
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
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: "600px" }}>
                <input
                  type="text"
                  className="form-control bg-transparent border-primary p-3"
                  placeholder="Type search keyword"
                />
                <button className="btn btn-primary px-4">
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End  */}

      {/* Hero Start  */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">
              Appointment
            </h1>
            <a href="" className="h4 text-white">
              Home
            </a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">
              Appointment
            </a>
          </div>
        </div>
      </div>
      {/* Hero End  */}


      <div className="heroheade" style={{ textAlign:"center"}}>
        <img style={{width:'10rem',height:'10rem'}} src={TickMark}/>
      {appointment.appointment.length>0?(
            appointment.appointment.map((item,index)=>(
              <div className="Appointmentbody">
                 <div className="AppointmentCard" key={item._id}>
                  <p>{item.date}</p>
                  <p>Doctor : {item.doctor.name}</p>
                  <p>{item.service}</p>
                 </div>
              
              </div>
            ))
        ):''
    }
      </div>

      {/* Appointment Start  */}
      <div
        className="container-fluid bg-primary bg-appointment mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ marginTop: "90px" }}
      >
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6 py-5">
              <div className="py-5">
                <h1 className="display-5 text-white mb-4">
                  We Are A Certified and Award Winning Dental Clinic You Can
                  Trust
                </h1>
                <p className="text-white mb-0">
                  Eirmod sed tempor lorem ut dolores. Aliquyam sit sadipscing
                  kasd ipsum. Dolor ea et dolore et at sea ea at dolor, justo
                  ipsum duo rebum sea invidunt voluptua. Eos vero eos vero ea et
                  dolore eirmod et. Dolores diam duo invidunt lorem. Elitr ut
                  dolores magna sit. Sea dolore sanctus sed et. Takimata
                  takimata sanctus sed.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="appointment-form h-100 d-flex flex-column justify-content-center text-center p-5 wow zoomIn"
                data-wow-delay="0.6s"
              >
                <h1 className="text-white mb-4">Make Appointment</h1>

                <form onSubmit={AddAppointmentuser}>
                  <div className="row g-3">
                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        onChange={handleInputs}
                        style={{ height: "55px" }}
                        value={state.doctor}
                        name="doctor"
                      >
                        <option selected>Select Doctor</option>
                              {doctor.doctor.length > 0 ? (
                                    doctor.doctor.map((item, index) => (
                                        <option key={item._id} value={item._id}>{item.name}</option>
                                    ))
                                ) : ''
                                }
                      </select>
                    </div>

                    <div className="col-12 col-sm-6">
                      <select
                        className="form-select bg-light border-0"
                        style={{ height: "55px" }}
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
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="text"
                        className="form-control bg-light border-0"
                        placeholder="Your Name"
                        value={auth.user.name}
                        onChange={handleInputs}
                        style={{ height: "55px" }}
                      />
                    </div>
                    <div className="col-12 col-sm-6">
                      <input
                        type="email"
                        className="form-control bg-light border-0"
                        placeholder="Your Email"
                        value={auth.user.email}
                        onChange={handleInputs}
                        style={{ height: "55px" }}
                      />
                    </div>

                    <div className="col-12 col-sm-12">
                      <div
                        className="date"
                        id="date1"
                        data-target-input="nearest"
                      >
                    {/* <input type="text"
                    className="form-control bg-light border-0 datetimepicker-input"
                    placeholder="Appointment Date" data-target="#date1" data-toggle="datetimepicker" style={{height: "55px"}} /> */}
                    <div style={{backgroundColor:'white'}}><Calendar onChange={onChange} value={value} /></div>
                   
                    </div>
                    </div>
                    {/* <div className="col-12 col-sm-6">
                      <div
                        className="time"
                        id="time1"
                        data-target-input="nearest"
                      >
                        <input
                          type="text"
                          className="form-control bg-light border-0 datetimepicker-input"
                          placeholder="Appointment Time"
                          data-target="#time1"
                          data-toggle="datetimepicker"
                          style={{ height: "55px" }}
                        />
                      </div>
                    </div> */}
                    <div className="col-12">
                      <button className="btn btn-dark w-100 py-3" type="submit">
                        Make Appointment
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Appointment End  */}

      {/* Newsletter Start */}
      <div
        className="container-fluid position-relative pt-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ zIndex: 1 }}
      >
        <div className="container">
          <div className="bg-primary p-5">
            <form className="mx-auto" style={{ maxWidth: "600px" }}>
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
      {/* Newsletter End  */}

      {/* Back to Top  */}
      <a
        href="#"
        className="btn btn-lg btn-primary btn-lg-square rounded back-to-top"
      >
        <i className="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default Appointment;
