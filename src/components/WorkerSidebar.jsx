import { useNavigate } from "react-router-dom";
import { logout } from "../services/authService";

function WorkerSidebar({ active }) {
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
          onClick={() => navigate("/worker")}
        >
          Dashboard
        </li>

        <li>My Reports</li>
        <li>Alerts</li>
        <li>My Activity</li>
        <li>Safety Tips</li>
        <li>Profile</li>
        <li>Settings</li>
      </ul>

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