import React from 'react';
import { useSelector,useDispatch } from 'react-redux';

const SearchAppointment = () => {
const dispatch=useDispatch();
const appointment = useSelector((state) => state.appointment);
console.log(appointment.appointment);
    return (
        <div>
            
        </div>
    );
};

export default SearchAppointment;