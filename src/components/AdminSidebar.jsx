import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function AdminSidebar({ active }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar">
      <div className="logo-section">
        <h2>ERGOVERSE</h2>
        <p>Workplace Intelligence</p>
      </div>

      <ul>
        <li
          className={active === "dashboard" ? "active" : ""}
          onClick={() => navigate("/admin")}
        >
          Dashboard
        </li>

        <li
         className={active === "live" ? "active" : ""}
         onClick={() => navigate("/admin/live-monitoring")}
       >
          Live Monitoring
        </li>

        <li
          className={active === "workers" ? "active" : ""}
          onClick={() => navigate("/workers")}
        >
          Workers
        </li>

        <li
          className={active === "analytics" ? "active" : ""}
          onClick={() => navigate("/admin/analytics")}
        >
          Analytics
        </li>

        <li
          className={active === "reports" ? "active" : ""}
          onClick={() => navigate("/admin/reports")}
        >
          Reports
        </li>

        <li
          className={active === "settings" ? "active" : ""}
          onClick={() => navigate("/admin/settings")}
        >
         Settings
        </li>
      </ul>

      <div className="sidebar-footer">
        <div>
          <h4>Admin User</h4>
          <p>Administrator</p>
        </div>

        <button
          className="sidebar-logout"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;