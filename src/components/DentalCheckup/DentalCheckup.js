import React, { useEffect, useState } from "react";
import "./DentalCheckup.css";
import image from "../../img/service-1.jpg";
import { useDispatch, useSelector } from "react-redux";
import { GetDentalCheckup } from "../../Redux/Actions/DentalCheckupAction";
import { Button, Modal, Table, Spinner } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import Calendar from "react-calendar";
import {AddCheckupAppointment,GetCheckupAppointment,} from "../../Redux/Actions/CheckupAppointmentAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TickMark from "../../img/tickmark.png";
// import { format } from 'date-fns'

const DentalCheckup = () => {
  const dispatch = useDispatch();
  const checkup = useSelector((state) => state.checkup);
  // console.log(checkup);
  const auth = useSelector((state) => state.auth);
  // console.log(auth);
  const checkupappointment = useSelector((state) => state.checkupappointment);
  console.log("checkupappointment", checkupappointment);

  useEffect(() => {
    dispatch(GetDentalCheckup());
    dispatch(GetCheckupAppointment(auth.user._id));
  }, [dispatch]);

  const [rating, setRating] = useState(0); // initial rating value
  const handleRating = (rate) => {
    setRating(rate);
    // other logic
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setCheckId(id);
  };

  const [checkId, setCheckId] = useState({});
  console.log("id", checkId);

  const [value, onChange] = useState(new Date());
  const date = value.toLocaleDateString();
  console.log("Date", date);

   const Submit = () => {
    const data = { date:date, user: auth.user._id, service: checkId };
    console.log(data);
    dispatch(AddCheckupAppointment(data));
    setShow(false);
  };

  return (
    <div>
      {/* user Appointment List start */}
      {checkupappointment.checkupappointment.length > 0 ? (
        <div className="checkupappointment" style={{ textAlign: "center" }}>
          <img style={{ width: "10rem", height: "10rem" }} src={TickMark} />
          <div style={{ display: "flex" ,justifyContent:'space-around' ,  flexWrap:"wrap"}}>
            {checkupappointment.checkupappointment.map((item, index) => (
                <div className="checkupappointmentcard" key={item._id}>
                  <p>{item.date}</p>
                  <p>Service : {item.service.name}</p>
                </div>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
      {/* user Appointment List End */}

      <div className="DentalCheckupbody">
        <ToastContainer />
        <div className="DentalCheckup">

          {checkup.checkup.length > 0
            ? checkup.checkup.map((item, index) => (
                <div className="checkupcard">
                  <img className="DentalCheckupImage" src={item.img}></img>
                  <div className="content">
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                    <Rating onClick={handleRating} ratingValue={rating} />
                    <br></br>
                    <Button
                      onClick={() => {
                        handleShow(item._id);
                      }}
                      style={{ margin: "1rem 1rem 2rem 0em" }}
                    >
                      Appointment
                    </Button>
                  </div>
                </div>
              ))
            : ""}
        </div>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Add Appointment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Calendar  onChange={onChange} value={value} />
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={Submit}>
              Appointment
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default DentalCheckup;
