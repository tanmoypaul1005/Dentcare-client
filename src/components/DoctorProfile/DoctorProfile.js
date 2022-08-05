import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDoctorProfile } from "../../Redux/Actions/DoctorAction";
import { useParams } from "react-router-dom";
import "./DoctorProfile.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { addAppointment } from "../../Redux/Actions/AppointmentAction";

const DoctorProfile = () => {
  const dispatch = useDispatch();
  const doctor = useSelector((state) => state.doctor);
  console.log(doctor);

  let { id } = useParams();

  useEffect(() => {
    dispatch(getDoctorProfile(id));
  }, [dispatch]);

  const auth = useSelector((state) => state.auth);

  const [state, setstate] = useState({
    doctor: "",
    service: "",
  });
  const handleInputs = (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };
  const [value, onChange] = useState(new Date());
  const date = value.toLocaleDateString();
  console.log("Date", date);

  const AddAppointmentuser = (e) => {
    e.preventDefault();
    const data = {
      date: date,
      doctor: doctor.doctorprofile._id,
      service: state.service,
      user: auth.user._id,
    };
    console.log(data);
    dispatch(addAppointment(data));
  };
  return (
    <div>
      
      <div className="DoctorProfileBody">
      {doctor.doctorprofile ?(
        <div style={{ margin: "4rem" }} className="row">
          <div className="col-md-4">
            <img className="doctorimge" src={doctor?.doctorprofile.img} />
          </div>

          <div className="col-md-8">
            <h5 className="DoctorProfiletext" >{doctor?.doctorprofile.position}</h5>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.name}</h5>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.degree1}</h5>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.degree2}</h5>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.degree3}</h5>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.degree4}</h5>
            <h6 className="DoctorProfiletext" style={{color:'#FFAA33'}}>Email : {doctor?.doctorprofile.email}</h6>
            <h6 className="DoctorProfiletext" style={{color:'#FFAA33'}}>Contact : {doctor?.doctorprofile.contactNumber}</h6>

            <h2>Experience</h2>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.experience1}</h5>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.experience2}</h5>
            <h5 className="DoctorProfiletext">{doctor?.doctorprofile.experience3}</h5>
          </div>
        </div>
        ):''
      }</div>

      {/* appointment start */}
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
                <input
                  type="text"
                  className="form-control bg-light border-0"
                  placeholder="Your Name"
                  value={doctor.doctorprofile ?(doctor?.doctorprofile.name):''}
                  onChange={handleInputs}
                  style={{ height: "55px" }}
                />
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
                  value={auth?.user.name}
                  onChange={handleInputs}
                  style={{ height: "55px" }}
                />
              </div>

              <div className="col-12 col-sm-6">
                <input
                  type="email"
                  className="form-control bg-light border-0"
                  placeholder="Your Email"
                  value={auth?.user.email}
                  onChange={handleInputs}
                  style={{ height: "55px" }}
                />
              </div>

              <div className="col-12 col-sm-12">
                <div className="date" id="date1" data-target-input="nearest">
                <div style={{ backgroundColor: "white" }}>
                <Calendar onChange={onChange} value={value} />
                </div>
                </div>
              </div>

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
    </div>
  );
};

export default DoctorProfile;
