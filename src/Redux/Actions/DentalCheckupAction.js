import AxiosIntance from "../../Helpers/AxiosIntance";
import {  DentalCheckupConstants } from "../Constants";

export const addAppointment = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DentalCheckupConstants.ADD_DENTALCHECKUP_REQUEST });
      const res=await AxiosIntance.post('/appointment/add',data);
      console.log(res);

      if(res.status===200){
        dispatch({ type: DentalCheckupConstants.ADD_DENTALCHECKUP_SUCCESS});
      }

      if(res.status===500){
        dispatch({ type:DentalCheckupConstants.ADD_DENTALCHECKUP_FAILURE});
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const GetAppointment = (data) => {
    return async (dispatch) => {
      try {
        dispatch({ type: DentalCheckupConstants.GET_DENTALCHECKUP_REQUEST });
        const res=await AxiosIntance.post('/Appointment/get',data);
        console.lo(res);
  
        if(res.status===200){
          dispatch({ type: DentalCheckupConstants.GET_DENTALCHECKUP_SUCCESS });
        }
  
        if(res.status===500){
          dispatch({ type: DentalCheckupConstants.GET_DENTALCHECKUP_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  