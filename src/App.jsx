import { Routes, Route } from "react-router-dom";
import Workers from "./pages/Workers";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/workers"
        element={
          <ProtectedRoute>
            <Workers />
          </ProtectedRoute>
        }
      />

      <Route
        path="/worker"
        element={
          <ProtectedRoute>
            <WorkerDashboard />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;