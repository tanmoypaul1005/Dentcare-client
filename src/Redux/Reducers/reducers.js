import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import AppointmentReducers from "./AppointmentReducers";
import DoctorReducers from "./DoctorReducers";
const reducers=combineReducers({
auth:AuthReducers,
appointment:AppointmentReducers,
doctor:DoctorReducers,
})
export default reducers