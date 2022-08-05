import AxiosIntance from "../../Helpers/AxiosIntance";
import { AppointmentConstants, SearchAppointmentConstants } from "../Constants";
import toast, { Toaster } from 'react-hot-toast';
import 'react-toastify/dist/ReactToastify.css';

export const addAppointment = (data) => {
  return async (dispatch) => {
    try {
      dispatch({ type: AppointmentConstants.ADD_APPOINTMENT_REQUEST });
      const res=await AxiosIntance.post('/appointment/add',data);
      // console.log(res);

      toast(res.data.msg);
      if(res.status===200){
        dispatch({ type: AppointmentConstants.ADD_APPOINTMENT_SUCCESS });
      }

      if(res.status===500){
        dispatch({ type: AppointmentConstants.ADD_APPOINTMENT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  };
};


export const getAppointment = (id) => {
    return async (dispatch) => {
      try {
        dispatch({ type: AppointmentConstants.GET_APPOINTMENT_REQUEST });
        const res=await AxiosIntance.post('/appointment/get',{id});
        console.log(res);
  
        if(res.status===200){
          dispatch({ type: AppointmentConstants.GET_APPOINTMENT_SUCCESS,appointment:res.data.data });
        }
  
        if(res.status===500){
          dispatch({ type: AppointmentConstants.GET_APPOINTMENT_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  

  export const SearchAppointment=(data)=>{
    return async (dispatch)=>{
    try {
      dispatch({ type: SearchAppointmentConstants.SEARCH_APPOINTMENT_REQUEST });
      const res=await AxiosIntance.post('/appointment/search',{data});
      console.log(res);

      if(res.status===200){
        dispatch({ type: AppointmentConstants.GET_APPOINTMENT_SUCCESS,search:res.data.data });
      }

      if(res.status===500){
        dispatch({ type: AppointmentConstants.GET_APPOINTMENT_FAILURE });
      }
    } catch (error) {
      console.log(error);
    }
  }
  };
  

