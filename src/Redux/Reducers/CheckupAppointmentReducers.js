import { CheckupAppointmentConstants } from "../Constants";

const initState = {
    checkupappointment:''
};
export default (state = initState, action) => {
  switch (action.type) {
    // Add Checkup Appointment
    case CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_REQUEST:
      state = { ...state };
      break;

    case CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_SUCCESS:
      state = { ...state, checkupappointment:action.checkupappointment};
      break;

    case CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_FAILURE:
      state = { ...state };
      break;
  }
  return state;
};