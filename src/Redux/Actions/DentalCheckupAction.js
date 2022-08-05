import AxiosIntance from "../../Helpers/AxiosIntance";
import { DentalCheckupConstants } from "../Constants";


export const GetDentalCheckup=()=>{
  return async(dispatch)=>{
      dispatch({type:DentalCheckupConstants.GET_CHECKUP_REQUEST});
      const res=await AxiosIntance.post('/dentalcheckup/get');
      console.log(res);
   
      if(res.status===200){
          dispatch({type:DentalCheckupConstants.GET_CHECKUP_SUCCESS,checkup:res.data.data});
      }
  
      if(res.status===500){
          dispatch({type:DentalCheckupConstants.GET_CHECKUP_FAILURE});
      }
  }
  }
  