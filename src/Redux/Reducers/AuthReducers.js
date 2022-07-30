import { AuthConstants } from "../Constants";

const initState = {
    msg:'',
    user:''
}

export default (state=initState,action)=>{
switch(action.type){
    //Add user
case AuthConstants.SIGNUP_REQUEST:
    state = { ...state}
break;

case AuthConstants.SIGNUP_SUCCESS:
    state = { ...state,msg:action.msg}
break;

case AuthConstants.SIGNUP_FAILURE:
    state = { ...state}
break;



//Login User
case AuthConstants.LOGIN_REQUEST:
    state = { ...state}
break;

case AuthConstants.LOGIN_SUCCESS:
    state = { ...state,msg:action.msg,user:action.user}
break;

case AuthConstants.LOGIN_FAILURE:
    state = { ...state}
break;
}
return state;
}