import AxiosIntance from "../../Helpers/AxiosIntance";
import { DoctorConstants } from "../Constants";


export const GetDoctor=()=>{
    return async(dispatch)=>{
        dispatch({type:DoctorConstants.GET_DOCTOR_REQUEST});
        const res=await AxiosIntance.post('/doctor/get');
        console.log(res);
       
        if(res.status===200){
            dispatch({type:DoctorConstants.GET_DOCTOR_SUCCESS,doctor:res.data.data});
        }

        if(res.status===500){
            dispatch({type:DoctorConstants.GET_DOCTOR_FAILURE});
        }
    }
    }