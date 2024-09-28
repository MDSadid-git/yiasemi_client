import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../Hooks/useAdmin";

const AdminRoute = () => {
  const user = localStorage.getItem("user");
  const [isAdmin, isAdminPending] = useAdmin();
  let location = useLocation();
  if (isAdminPending) {
    return <p>Loding...</p>;
  }
  if (user && isAdminPending) {
    return children;
  }
  return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
