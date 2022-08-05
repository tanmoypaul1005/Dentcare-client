import AxiosIntance from "../../Helpers/AxiosIntance";
import { CheckupAppointmentConstants} from "../Constants";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddCheckupAppointment=(data)=>{
  return async(dispatch)=>{
      dispatch({type:CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_REQUEST});
      const res=await AxiosIntance.post('/checkup/appointment/add',data);
      console.log(res);
      toast.success(res.data.msg);
      if(res.status===200){
          dispatch({type:CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_SUCCESS});
      }
  
      if(res.status===500){
          dispatch({type:CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_FAILURE});
      }
  }
  }
  

  export const GetCheckupAppointment=(user)=>{
    return async(dispatch)=>{
        dispatch({type:CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_REQUEST});
        const res=await AxiosIntance.post('/checkup/appointment/get',{user});
        console.log("AAAAAA",res);
 
        if(res.status===200){
            dispatch({type:CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_SUCCESS,checkupappointment:res.data.data});
        }
    
        if(res.status===500){
            dispatch({type:CheckupAppointmentConstants.ADD_CHECKUPAPPOINTMENT_FAILURE});
        }
    }
    }