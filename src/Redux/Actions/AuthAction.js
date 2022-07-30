import AxiosIntance from "../../Helpers/AxiosIntance";
import { AuthConstants } from "../Constants"

export const Adduser=(data)=>{
return async (dispatch)=>{
    try{
    dispatch({type:AuthConstants.SIGNUP_REQUEST});
    const res=await AxiosIntance.post('/user/add',data)
    console.log(res);
    if(res.status===200){
        localStorage.setItem('token',res.data.token)
        dispatch({type:AuthConstants.SIGNUP_SUCCESS,msg:res.data.msg});  
    }
    if(res.status===500){
        dispatch({type:AuthConstants.SIGNUP_FAILURE});  
    }
    } catch(error) {console.log(error)}
}
}



export const UserLogin=(data)=>{
    return async (dispatch)=>{
        try{
        dispatch({type:AuthConstants.LOGIN_REQUEST});
        const res=await AxiosIntance.post('/user/login',data)
        console.log(res);
        if(res.status===200){
            localStorage.setItem('token',res.data.token)
            dispatch({type:AuthConstants.LOGIN_SUCCESS,msg:res.data.msg,user:res.data._user});  
        }
        if(res.status===500){
            dispatch({type:AuthConstants.LOGIN_FAILURE});  
        }
        } catch(error) {console.log(error)}
    }
    }

