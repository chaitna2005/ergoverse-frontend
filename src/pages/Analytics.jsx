import AdminSidebar from "../components/AdminSidebar";
function Analytics() {
  return (
    <div className="layout">
      <AdminSidebar active="analytics" />

      <div className="main-content">
        <div className="dashboard-header">
          <div>
            <h1>Analytics Dashboard</h1>
            <p>Monitor workplace safety insights</p>
          </div>
        </div>

        <div className="analytics-grid">
          <div className="analytics-card">
            <h3>Safety Score Trend</h3>
          </div>

          <div className="analytics-card">
            <h3>Risk Distribution</h3>
          </div>

          <div className="analytics-card">
            <h3>Department Analysis</h3>
          </div>

          <div className="analytics-card">
            <h3>Monthly Performance</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;