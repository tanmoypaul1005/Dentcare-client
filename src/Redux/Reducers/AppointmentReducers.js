import { AppointmentConstants, SearchAppointmentConstants } from "../Constants";
const initState = {
  msg: "",
  appointment:"",
  search:''
};

export default (state = initState, action) => {
  switch (action.type) {
    //Add Appointment
    case AppointmentConstants.ADD_APPOINTMENT_REQUEST:
      state = { ...state };
      break;

    case AppointmentConstants.ADD_APPOINTMENT_SUCCESS:
      state = { ...state, msg: action.msg };
      break;

    case AppointmentConstants.ADD_APPOINTMENT_FAILURE:
      state = { ...state };
      break;

       //Get Appointment
      case AppointmentConstants.GET_APPOINTMENT_REQUEST:
        state = { ...state };
        break;
  
      case AppointmentConstants.GET_APPOINTMENT_SUCCESS:
        state = { ...state, appointment:action.appointment };
        break;
  
      case AppointmentConstants.GET_APPOINTMENT_FAILURE:
        state = { ...state };
        break;



      //Search Appointment
      case SearchAppointmentConstants.SEARCH_APPOINTMENT_REQUEST:
        state = { ...state };
        break;
  
      case SearchAppointmentConstants.SEARCH_APPOINTMENT_SUCCESS:
        state = { ...state, search:action.search};
        break;
  
      case SearchAppointmentConstants.SEARCH_APPOINTMENT_FAILURE:
        state = { ...state };
        break;
  }
  return state;
};
