import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

function Workers() {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);

  const [workers, setWorkers] = useState([
    {
      id: "W-1047",
      name: "Rajesh Kumar",
      department: "Assembly Line A",
      risk: "High",
      score: "62%",
      status: "Active",
    },
    {
      id: "W-0823",
      name: "Priya Singh",
      department: "Quality Control",
      risk: "Medium",
      score: "74%",
      status: "Active",
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    department: "",
    role: "Worker",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    const newWorker = {
      id: `W-${Math.floor(Math.random() * 1000)}`,
      name: formData.name,
      department: formData.department,
      risk: "Low",
      score: "100%",
      status: "Active",
    };

    setWorkers([...workers, newWorker]);

    setFormData({
      name: "",
      email: "",
      password: "",
      department: "",
      role: "Worker",
    });

    setShowModal(false);

    alert("Worker Created Successfully");
  };

  return (
    <div className="layout">

      {/* Sidebar */}
      <div className="sidebar">

        <div className="logo-section">
          <h2>ERGOVERSE</h2>
          <p>Workplace Intelligence</p>
        </div>

        <ul>
          <li onClick={() => navigate("/admin")}>
            Dashboard
          </li>

          <li className="active">
            Workers
          </li>

          <li>Analytics</li>
          <li>Reports</li>
          <li>Settings</li>
        </ul>

      </div>

      {/* Main Content */}

      <div className="main-content">

        <div className="dashboard-header">

          <div>
            <h1>Workers Management</h1>
            <p>Manage Worker Accounts</p>
          </div>

          <button
            className="logout-btn"
            onClick={() => setShowModal(true)}
          >
            + Add Worker
          </button>

        </div>

        {/* Workers Table */}

        <div className="alerts-section">

          <h2>Workers List</h2>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Department</th>
                <th>Risk</th>
                <th>Safety Score</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {workers.map((worker) => (
                <tr key={worker.id}>
                  <td>{worker.id}</td>
                  <td>{worker.name}</td>
                  <td>{worker.department}</td>
                  <td>{worker.risk}</td>
                  <td>{worker.score}</td>
                  <td>{worker.status}</td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {/* Modal */}

      {showModal && (
        <div className="modal-overlay">

          <div className="modal">

            <h2>Add Worker</h2>

            <input
              type="text"
              name="name"
              placeholder="Worker Name"
              value={formData.name}
              onChange={handleChange}
            />

            <input
              type="email"
              name="email"
              placeholder="Worker Email"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="password"
              name="password"
              placeholder="Temporary Password"
              value={formData.password}
              onChange={handleChange}
            />

            <input
              type="text"
              name="department"
              placeholder="Department"
              value={formData.department}
              onChange={handleChange}
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option>Worker</option>
            </select>

            <div className="modal-buttons">

              <button
                className="save-btn"
                onClick={handleSave}
              >
                Save Worker
              </button>

              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Workers;