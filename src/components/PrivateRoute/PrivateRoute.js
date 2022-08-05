import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
const PrivateRoute = ({ children, ...rest }) => {
  const auth = useSelector((state) => state.auth.user);
  // console.log(auth);
  let location = useLocation();
  if (localStorage.getItem("token")) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
