import AxiosIntance from "../../Helpers/AxiosIntance";
import { DoctorConstants } from "../Constants";


export const GetDoctor=()=>{
    return async(dispatch)=>{
        try{
        dispatch({type:DoctorConstants.GET_DOCTOR_REQUEST});
        const res=await AxiosIntance.post('/doctor/get');
        console.log(res);
       
        if(res.status===200){
            dispatch({type:DoctorConstants.GET_DOCTOR_SUCCESS,doctor:res.data.data});
        }

        if(res.status===500){
            dispatch({type:DoctorConstants.GET_DOCTOR_FAILURE});
        }
    }catch (error) {console.log(error)}
    }
    }



    export const getDoctorProfile=(id)=>{
        return async(dispatch)=>{
            try{
            dispatch({type:DoctorConstants.DOCTOR_PROFILE_REQUEST});
            const res=await AxiosIntance.post(`/doctor/${id}`);
            console.log(res);

            if(res.status===200){
                dispatch({type:DoctorConstants.DOCTOR_PROFILE_SUCCESS,doctorprofile:res.data.data});
            }
            if(res.status===500){
                dispatch({type:DoctorConstants.DOCTOR_PROFILE_FAILURE})
            }
            }catch (error) {console.log(error);}
        }
    } 