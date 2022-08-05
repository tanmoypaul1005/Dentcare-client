import { DentalCheckupConstants } from "../Constants";

const initState = {
  checkup:''
};
export default (state = initState, action) => {
  switch (action.type) {
    // Get dentalCheckup
    case DentalCheckupConstants.GET_CHECKUP_REQUEST:
      state = { ...state };
      break;

    case DentalCheckupConstants.GET_CHECKUP_SUCCESS:
      state = { ...state,checkup:action.checkup};
      break;

    case DentalCheckupConstants.GET_CHECKUP_FAILURE:
      state = { ...state };
      break;
  }
  return state;
};
