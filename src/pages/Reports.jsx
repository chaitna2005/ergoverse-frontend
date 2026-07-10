import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

function Reports() {
  const [reportType, setReportType] = useState("Monthly Report");
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [department, setDepartment] = useState("All Departments");
  const [worker, setWorker] = useState("All Workers");

  const reports = [
    {
      id: 1,
      name: "Monthly Safety Report",
      type: "PDF",
      date: "10 Jul 2026",
      status: "Ready",
    },
    {
      id: 2,
      name: "Risk Assessment Report",
      type: "Excel",
      date: "08 Jul 2026",
      status: "Ready",
    },
    {
      id: 3,
      name: "Daily Worker Report",
      type: "PDF",
      date: "07 Jul 2026",
      status: "Ready",
    },
  ];

  const handleGenerate = () => {
    alert("Report generation will be connected to the backend.");
  };

  const handleDownload = () => {
    alert("Download feature will be available after backend integration.");
  };

  return (
    <div className="layout">
      <AdminSidebar active="reports" />

      <div className="main-content">

        <div className="dashboard-header">
          <div>
            <h1>Reports</h1>
            <p>Generate and download workplace safety reports</p>
          </div>
        </div>

        {/* Filters */}
        <div className="reports-filters">

          <select
            value={reportType}
            onChange={(e) => setReportType(e.target.value)}
          >
            <option>Daily Report</option>
            <option>Weekly Report</option>
            <option>Monthly Report</option>
            <option>Risk Assessment</option>
            <option>Safety Summary</option>
          </select>

          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
          </select>

          <select
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option>All Departments</option>
            <option>Manufacturing</option>
            <option>Packaging</option>
            <option>Quality Control</option>
            <option>Warehouse</option>
          </select>

          <select
            value={worker}
            onChange={(e) => setWorker(e.target.value)}
          >
            <option>All Workers</option>
            <option>Worker 001</option>
            <option>Worker 002</option>
            <option>Worker 003</option>
          </select>

          <button
            className="generate-report-btn"
            onClick={handleGenerate}
          >
            Generate Report
          </button>

        </div>

        {/* Report History */}

        <div className="alerts-section">

          <h2 style={{ marginBottom: "20px" }}>
            Report History
          </h2>

          <table>

            <thead>
              <tr>
                <th>Report Name</th>
                <th>Type</th>
                <th>Generated On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {reports.map((report) => (

                <tr key={report.id}>

                  <td>{report.name}</td>

                  <td>{report.type}</td>

                  <td>{report.date}</td>

                  <td>{report.status}</td>

                  <td>
                    <button
                      className="view-btn action-btn"
                      onClick={handleDownload}
                    >
                      Download
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </div>
  );
}

export default Reports;