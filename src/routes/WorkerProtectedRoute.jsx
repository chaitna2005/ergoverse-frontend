import { Navigate } from "react-router-dom";

function WorkerProtectedRoute({ children }) {
  const role = localStorage.getItem("role");

  return role === "worker" ? children : <Navigate to="/login" />;
}

export default WorkerProtectedRoute;