import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Reg from './components/Login/Reg';
import Home from './components/Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About/About';
import Service from './components/Service/Service';
import Appointment from './components/Appointment/Appointment';
import Contact from './components/Contact/Contact';
import Price from './components/Price/Price';
import Team from './components/Team/Team';
import Testimonial from './components/Testimonial/Testimonial';
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import DoctorProfile from './components/DoctorProfile/DoctorProfile';
import DentalCheckup from './components/DentalCheckup/DentalCheckup';
import ScrollToTop from "react-scroll-to-top";
import Doctor from './components/Doctor/Doctor';
function App() {
  return (
   <div style={{ marginTop: "0" }}>
   <BrowserRouter>
   <ScrollToTop smooth />
   <NavBar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/registrar" element={<Reg/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/service" element={<Service/>} />
      <Route path="/appointment" element={<PrivateRoute><Appointment/></PrivateRoute>} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/price" element={<Price/>} />
      <Route path="/testimonial" element={<Testimonial/>} />
      <Route path="/doctor/:id" element={<PrivateRoute><DoctorProfile/></PrivateRoute>} />
      <Route path="/doctor" element={<Doctor/>} />
      <Route path="/dentalCheckup" element={<PrivateRoute><DentalCheckup/></PrivateRoute>} />
      {/* <Route path="/search/appointment" element={<SearchAppointment/>} /> */}
      </Routes>
      <Footer/>
    </BrowserRouter >
   </div>
  );
}

export default App;
