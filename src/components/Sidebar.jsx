import { useNavigate } from "react-router-dom";

function Sidebar({ active }) {
  const navigate = useNavigate();

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
        >
          Analytics
        </li>

        <li
          className={active === "reports" ? "active" : ""}
        >
          Reports
        </li>

        <li
          className={active === "settings" ? "active" : ""}
        >
          Settings
        </li>

      </ul>

    </div>
  );
}

export default Sidebar;