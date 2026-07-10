import WorkerSidebar from "../components/WorkerSidebar";
import "./WorkerDashboard.css";

function WorkerDashboard() {
  return (
    <div className="dashboard-layout">

      {/* Sidebar */}
      <WorkerSidebar active="dashboard" />

      {/* Main Content */}
      <div className="worker-dashboard">

        <div className="dashboard-header">
          <div>
            <h1>Good Morning, Worker 👋</h1>
            <p>
              Monitor your personal safety and posture performance
            </p>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="stats-grid">

          <div className="card blue">
            <h3>Today's Safety Score</h3>
            <h2>95%</h2>
            <p>Excellent</p>
          </div>

          <div className="card red">
            <h3>Weekly Average</h3>
            <h2>91%</h2>
            <p>Performance</p>
          </div>

          <div className="card orange">
            <h3>Recent Alerts</h3>
            <h2>2</h2>
            <p>This Week</p>
          </div>

          <div className="card green">
            <h3>My Reports</h3>
            <h2>8</h2>
            <p>Generated Reports</p>
          </div>

        </div>

        {/* Content */}
        <div className="content-grid">

          <div className="chart-box">
            <h2>Safety Score Trend</h2>

            <div className="chart-placeholder">
              Chart will come here
            </div>
          </div>

          <div className="alert-box">

            <h2>Recent Alerts</h2>

            <div className="alert-item">
              High Risk Posture Detected
            </div>

            <div className="alert-item">
              Prolonged Bending Detected
            </div>

            <div className="alert-item">
              Improper Lifting Detected
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default WorkerDashboard;