/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const location = useLocation()

  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate state={location.pathname} to={'/signIn'} replace></Navigate>
  }
 else{
  return children;
 }
};

export default AdminRoutes;
