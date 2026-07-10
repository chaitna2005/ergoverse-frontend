import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import AdminDashboard from "./pages/AdminDashboard";
import WorkerDashboard from "./pages/WorkerDashboard";
import Workers from "./pages/Workers";
import Analytics from "./pages/Analytics";
import LiveMonitoring from "./pages/LiveMonitoring";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import WorkerReports from "./pages/WorkerReports";
import WorkerProtectedRoute from "./routes/WorkerProtectedRoute";


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

      {/* Live Monitoring */}
      <Route
        path="/admin/live-monitoring"
        element={
          <ProtectedRoute>
            <LiveMonitoring />
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

       {/* Reports */}
       <Route
          path="/admin/reports"
          element={
            <ProtectedRoute>
              <Reports />
            </ProtectedRoute>
          }
        />
        {/* Settings */}
        <Route
          path="/admin/settings"
          element={
            <ProtectedRoute>
              <Settings />
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

      <Route
        path="/worker/reports"
        element={
          <WorkerProtectedRoute>
            <WorkerReports />
          </WorkerProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;