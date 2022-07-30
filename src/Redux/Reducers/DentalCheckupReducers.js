import { DentalCheckupConstants } from "../Constants";

const initState = {};
export default (state = initState, action) => {
  switch (action.type) {
    //Add Dental Checkup
    case DentalCheckupConstants.ADD_DENTALCHECKUP_REQUEST:
      state = { ...state };
      break;

    case DentalCheckupConstants.ADD_DENTALCHECKUP_SUCCESS:
      state = { ...state };
      break;

    case DentalCheckupConstants.ADD_DENTALCHECKUP_FAILURE:
      state = { ...state };
      break;

  //Get Dental Checkup
      case DentalCheckupConstants.GET_DENTALCHECKUP_REQUEST:
        state = { ...state };
        break;
  
      case DentalCheckupConstants.GET_DENTALCHECKUP_SUCCESS:
        state = { ...state };
        break;
  
      case DentalCheckupConstants.GET_DENTALCHECKUP_FAILURE:
        state = { ...state };
        break;
  }
  return state;
};
