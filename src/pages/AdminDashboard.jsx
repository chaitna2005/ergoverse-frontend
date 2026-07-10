import AdminSidebar from "../components/AdminSidebar";
import "./AdminDashboard.css";

function AdminDashboard() {
  return (
    <div className="layout">

      {/* Sidebar */}
      <AdminSidebar active="dashboard" />

      {/* Main Content */}
      <div className="main-content">

        {/* Header */}
        <div className="dashboard-header">

          <div>
            <h1>Good Morning, Admin 👋</h1>
            <p>Monitor workforce posture safety and risks</p>
          </div>

        </div>

        {/* KPI Cards */}
        <div className="dashboard-cards">

          <div className="card blue">
            <h3>Total Workers</h3>
            <h2>124</h2>
            <p>On Shift</p>
          </div>

          <div className="card red">
            <h3>High Risk Workers</h3>
            <h2>8</h2>
            <p>Need Attention</p>
          </div>

          <div className="card yellow">
            <h3>Active Alerts</h3>
            <h2>12</h2>
            <p>This Shift</p>
          </div>

          <div className="card green">
            <h3>Safety Score</h3>
            <h2>87%</h2>
            <p>Good</p>
          </div>

        </div>

        {/* Middle Section */}
        <div className="middle-section">

          <div className="chart-card">
            <h2>Posture Risk Trend</h2>

            <div className="chart-placeholder">
              Chart will come here
            </div>
          </div>

          <div className="alert-card">

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

            <div className="alert-item">
              Repetitive Motion Alert
            </div>

          </div>

        </div>

        {/* Workers Table */}
        <div className="alerts-section">

          <h2>Workers At Risk</h2>

          <table>

            <thead>
              <tr>
                <th>Worker ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Risk Level</th>
                <th>Safety Score</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>W-1047</td>
                <td>Rajesh Kumar</td>
                <td>Assembly Line A</td>
                <td>High</td>
                <td>62%</td>
              </tr>

              <tr>
                <td>W-0823</td>
                <td>Priya Singh</td>
                <td>Quality Control</td>
                <td>Medium</td>
                <td>74%</td>
              </tr>

              <tr>
                <td>W-1129</td>
                <td>Amit Patel</td>
                <td>Assembly Line B</td>
                <td>High</td>
                <td>58%</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;