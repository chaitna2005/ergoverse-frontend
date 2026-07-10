import WorkerSidebar from "../components/WorkerSidebar";
import "./WorkerReports.css";

function WorkerReports() {
  const reports = [
    {
      id: 1,
      name: "Weekly Safety Report",
      date: "10 Jul 2026",
      status: "Ready",
    },
    {
      id: 2,
      name: "Monthly Performance Report",
      date: "01 Jul 2026",
      status: "Ready",
    },
    {
      id: 3,
      name: "Posture Assessment",
      date: "25 Jun 2026",
      status: "Pending",
    },
    {
      id: 4,
      name: "Ergonomic Evaluation",
      date: "15 Jun 2026",
      status: "Ready",
    },
  ];

  return (
    <div className="dashboard-layout">
      <WorkerSidebar active="reports" />

      <div className="main-content">

        <div className="page-header">
          <div>
            <h1>My Reports</h1>
            <p>View and download your posture assessment reports.</p>
          </div>
        </div>

        <div className="table-card">

          <table className="reports-table">

            <thead>
              <tr>
                <th>Report Name</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {reports.map((report) => (
                <tr key={report.id}>

                  <td>{report.name}</td>

                  <td>{report.date}</td>

                  <td>
                    <span
                      className={
                        report.status === "Ready"
                          ? "status ready"
                          : "status pending"
                      }
                    >
                      {report.status}
                    </span>
                  </td>

                  <td>
                    <button
                      className="download-btn"
                      disabled={report.status !== "Ready"}
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

export default WorkerReports;