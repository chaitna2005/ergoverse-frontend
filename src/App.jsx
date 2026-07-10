import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";
import Workers from "./pages/Workers";
import Analytics from "./pages/Analytics";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      {/* Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      {/* Workers */}
      <Route
        path="/workers"
        element={
          <ProtectedRoute>
            <Workers />
          </ProtectedRoute>
        }
      />

      {/* Analytics */}
      <Route
        path="/admin/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />

      {/* Worker Dashboard */}
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