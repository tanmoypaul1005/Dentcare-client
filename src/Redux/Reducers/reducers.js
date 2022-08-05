import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import AppointmentReducers from "./AppointmentReducers";
import DoctorReducers from "./DoctorReducers";
import DentalCheckupReducers from "./DentalCheckupReducers";
import CheckupAppointmentReducers from "./CheckupAppointmentReducers";
const reducers=combineReducers({
auth:AuthReducers,
appointment:AppointmentReducers,
doctor:DoctorReducers,
checkup:DentalCheckupReducers,
checkupappointment:CheckupAppointmentReducers
})
export default reducers