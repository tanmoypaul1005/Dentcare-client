import React, { useEffect } from 'react';
import '../Css/Style.css'
import { useDispatch, useSelector } from 'react-redux';
import { GetDoctor } from '../../Redux/Actions/DoctorAction';
import { NavLink } from 'react-router-dom';
function Doctor() {
    const dispatch=useDispatch();
    const doctor=useSelector((state)=>state.doctor);
    console.log(doctor);

    useEffect(() => {
        dispatch(GetDoctor())   
    }, [dispatch])

    return (
        <div>
{/* Team Start  */}
    <div className="container-fluid py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
                    <div className="section-title bg-light rounded h-100 p-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Dentist</h5>
                        <h1 className="display-6 mb-4">Meet Our Certified & Experienced Dentist</h1>
                        <a href="/appointment" className="btn btn-primary py-3 px-5">Appointment</a>
                    </div>
                </div>
                {
                doctor.doctor.length >0?(
                    doctor.doctor.map((item,index)=>(
                      
                        <NavLink style={{textDecoration:'none',color:'black'}} to={`doctor/${item._id}`} className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                        <div className="team-item">
                            <div className="position-relative rounded-top" style={{zIndex: 1}}>
                                <img className="img-fluid rounded-top w-100" src={item.img} alt="" />
                                <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                    <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                    <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                    <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                    <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                                </div>
                            </div>
                            <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                                <h4 className="mb-2">{item.name}</h4>
                                <p className="text-primary mb-0">Implant Surgeon</p>
                            </div>
                        </div>
                    </NavLink>
                
                    ))
                ):''
    
                }
                {/* <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
                    <div className="team-item">
                        <div className="position-relative rounded-top" style={{zIndex: 1}}>
                            <img className="img-fluid rounded-top w-100" src={team1} alt="" />
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
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
                        <div className="position-relative rounded-top" style={{zIndex: 1}}>
                            <img className="img-fluid rounded-top w-100" src={team2} alt="" />
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
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
                        <div className="position-relative rounded-top" style={{zIndex: 1}}>
                            <img className="img-fluid rounded-top w-100" src={team3} alt="" />
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
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
                        <div className="position-relative rounded-top" style={{zIndex: 1}}>
                            <img className="img-fluid rounded-top w-100" src={team4} alt="" />
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
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
                        <div className="position-relative rounded-top" style={{zIndex: 1}}>
                            <img className="img-fluid rounded-top w-100" src={team5} alt="" />
                            <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                                <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                            </div>
                        </div>
                        <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
                            <h4 className="mb-2">Dr. John Doe</h4>
                            <p className="text-primary mb-0">Implant Surgeon</p>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
     {/* Team End  */}
        </div>
    )
}

export default Doctor
