import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";
import "./WorkerSidebar.css";

function WorkerSidebar({ active }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="sidebar">

      <div>

        <div className="logo">
          <h2>ERGOVERSE</h2>
          <p>Workplace Intelligence</p>
        </div>

        <ul className="menu">

          <li
            className={active === "dashboard" ? "active" : ""}
            onClick={() => navigate("/worker")}
          >
            📊 Dashboard
          </li>

          <li
            className={active === "reports" ? "active" : ""}
            onClick={() => navigate("/worker/reports")}
          >
            📄 My Reports
          </li>

          <li
            className={active === "alerts" ? "active" : ""}
          >
            🚨 Alerts
          </li>

          <li
            className={active === "activity" ? "active" : ""}
          >
            📈 My Activity
          </li>

          <li
            className={active === "tips" ? "active" : ""}
          >
            💡 Safety Tips
          </li>

          <li
            className={active === "profile" ? "active" : ""}
          >
            👤 Profile
          </li>

          <li
            className={active === "settings" ? "active" : ""}
          >
            ⚙️ Settings
          </li>

        </ul>

      </div>

      <div className="sidebar-footer">

        <div>
          <h4>Worker User</h4>
          <p>Production Worker</p>
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

export default WorkerSidebar;