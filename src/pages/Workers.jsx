import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./AdminDashboard.css";

function Workers() {
  const navigate = useNavigate();

  // Modal State
  const [showModal, setShowModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [workerToDelete, setWorkerToDelete] = useState(null);

  const [editData, setEditData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    joiningDate: "",
  });

 

  // Workers Data
  const [workers, setWorkers] = useState([
    {
      id: "W-1047",
      name: "Rajesh Kumar",
      email: "rajesh@ergoverse.com",
      phone: "9876543210",
      department: "Assembly Line A",
      joiningDate: "2025-01-10",
      risk: "High",
      score: "62%",
      status: "Active",
    },
    {
      id: "W-0823",
      name: "Priya Singh",
      email: "priya@ergoverse.com",
      phone: "9123456780",
      department: "Quality Control",
      joiningDate: "2025-02-05",
      risk: "Medium",
      score: "74%",
      status: "Active",
    },
  ]);

  // Search State
  const [search, setSearch] = useState("");

  // Filter State
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [riskFilter, setRiskFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const workersPerPage = 5;

  // Add Worker Form
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    department: "",
    joiningDate: "",
    password: "",
    role: "Worker",
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Save Worker
  const handleSave = () => {
    if (
      !formData.id ||
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.department ||
      !formData.joiningDate ||
      !formData.password
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newWorker = {
      id: formData.id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      department: formData.department,
      joiningDate: formData.joiningDate,
      risk: "Low",
      score: "100%",
      status: "Active",
    };

    setWorkers([...workers, newWorker]);

    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      department: "",
      joiningDate: "",
      password: "",
      role: "Worker",
    });

    setShowModal(false);

    toast.success("Worker Created Successfully!");
  };

  const handleView = (worker) => {
    setSelectedWorker(worker);
    setShowViewModal(true);
  };

  const handleEdit = (worker) => {
    setEditData(worker);
    setShowEditModal(true);
  };

  const handleEditChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = () => {

    const updatedWorkers = workers.map((worker) =>
      worker.id === editData.id ? editData : worker
    );

    setWorkers(updatedWorkers);

    setShowEditModal(false);

    toast.info("Worker Updated Successfully!");

  };
  const handleDelete = (worker) => {
    setWorkerToDelete(worker);
    setShowDeleteModal(true);
  };
  const confirmDelete = () => {

    const updatedWorkers = workers.filter(
      (worker) => worker.id !== workerToDelete.id
    );

    setWorkers(updatedWorkers);

    setShowDeleteModal(false);

    setWorkerToDelete(null);

    toast.error("Worker Deleted Successfully!");

  };

  // Filter Workers
  const filteredWorkers = workers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.email.toLowerCase().includes(search.toLowerCase());

    const matchesDepartment =
      departmentFilter === "All" ||
      worker.department === departmentFilter;

    const matchesRisk =
      riskFilter === "All" ||
      worker.risk === riskFilter;

    const matchesStatus =
      statusFilter === "All" ||
      worker.status === statusFilter;

    return (
      matchesSearch &&
      matchesDepartment &&
      matchesRisk &&
      matchesStatus
    );
  });
  const indexOfLastWorker = currentPage * workersPerPage;
  const indexOfFirstWorker = indexOfLastWorker - workersPerPage;

  const currentWorkers = filteredWorkers.slice(
    indexOfFirstWorker,
    indexOfLastWorker
  );
  return (
  <div className="layout">

    {/* Sidebar */}
    <div className="sidebar">

      <div className="logo-section">
        <h2>ERGOVERSE</h2>
        <p>Workplace Intelligence</p>
      </div>

      <ul>
        <li onClick={() => navigate("/admin")}>Dashboard</li>

        <li>Live Monitoring</li>

        <li className="active">Workers</li>

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
      {/* Search & Filters */}

      <div className="worker-toolbar">

        <div className="toolbar-item">
          <label>Search Worker</label>
          <input
            type="text"
            className="search-box"
            placeholder="Search by Name or Email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="toolbar-item">
          <label>Department</label>
          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
          >
            <option>All</option>
            <option>Assembly Line A</option>
            <option>Quality Control</option>
          </select>
        </div>

        <div className="toolbar-item">
          <label>Risk</label>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="toolbar-item">
          <label>Status</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>All</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>

      </div>
      {/* Workers Table */}

      <div className="alerts-section">

        <h2>Workers List</h2>

        <table>

          <thead>
            <tr>
              <th>Employee ID</th>
              <th>Name</th>
              <th>Department</th>
              <th>Phone</th>
              <th>Risk</th>
              <th>Status</th>
              <th>Safety Score</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>

            {currentWorkers.map((worker) => (

              <tr key={worker.id}>

                <td>{worker.id}</td>
                <td>{worker.name}</td>
                <td>{worker.department}</td>
                <td>{worker.phone}</td>

                <td>
                  <span className={`risk-badge ${worker.risk.toLowerCase()}`}>
                    {worker.risk}
                  </span>
                </td>

                <td>
                  <span className={`status-badge ${worker.status.toLowerCase()}`}>
                    {worker.status}
                  </span>
                </td>

                <td>{worker.score}</td>

                <td>

                  <button
                    className="action-btn view-btn"
                    onClick={() => handleView(worker)}
                  >
                    👁
                  </button>

                  <button
                    className="action-btn edit-btn"
                    onClick={() => handleEdit(worker)}
                  >
                    ✏
                  </button>

                  <button
                    className="action-btn delete-btn"
                    onClick={() => handleDelete(worker)}
                  >
                    🗑
                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

        {/* Pagination */}

        <div className="pagination">

          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Previous
          </button>

          <span>Page {currentPage}</span>

          <button
            disabled={indexOfLastWorker >= filteredWorkers.length}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>

        </div>

      </div>

    </div>

    {/* Add Worker Modal */}

    {showModal && (

      <div className="modal-overlay">

        <div className="modal">

          <h2>Add Worker</h2>

          <input
            type="text"
            name="id"
            placeholder="Employee ID"
            value={formData.id}
            onChange={handleChange}
          />

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
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />

          <input
            type="date"
            name="joiningDate"
            value={formData.joiningDate}
            onChange={handleChange}
          />

          <input
            type="password"
            name="password"
            placeholder="Temporary Password"
            value={formData.password}
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

    {/* View Worker Modal */}

    {showViewModal && selectedWorker && (

      <div className="modal-overlay">

        <div className="modal">

          <h2>Worker Details</h2>

          <div className="worker-details">

            <p><strong>Employee ID:</strong> {selectedWorker.id}</p>
            <p><strong>Name:</strong> {selectedWorker.name}</p>
            <p><strong>Email:</strong> {selectedWorker.email}</p>
            <p><strong>Phone:</strong> {selectedWorker.phone}</p>
            <p><strong>Department:</strong> {selectedWorker.department}</p>
            <p><strong>Joining Date:</strong> {selectedWorker.joiningDate}</p>
            <p><strong>Risk:</strong> {selectedWorker.risk}</p>
            <p><strong>Safety Score:</strong> {selectedWorker.score}</p>
            <p><strong>Status:</strong> {selectedWorker.status}</p>

          </div>

          <div className="modal-buttons">

            <button
              className="save-btn"
              onClick={() => setShowViewModal(false)}
            >
              Close
            </button>

          </div>

        </div>

      </div>

    )}

    {/* Edit Worker Modal */}

    {showEditModal && (

      <div className="modal-overlay">

        <div className="modal">

          <h2>Edit Worker</h2>

          <input
            type="text"
            name="id"
            value={editData.id}
            readOnly
          />

          <input
            type="text"
            name="name"
            value={editData.name}
            onChange={handleEditChange}
          />

          <input
            type="email"
            name="email"
            value={editData.email}
            onChange={handleEditChange}
          />

          <input
            type="text"
            name="phone"
            value={editData.phone}
            onChange={handleEditChange}
          />

          <input
            type="text"
            name="department"
            value={editData.department}
            onChange={handleEditChange}
          />

          <input
            type="date"
            name="joiningDate"
            value={editData.joiningDate}
            onChange={handleEditChange}
          />

          <div className="modal-buttons">

            <button
              className="save-btn"
              onClick={handleUpdate}
            >
              Update
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowEditModal(false)}
            >
              Cancel
            </button>

          </div>

        </div>

      </div>

    )}

    {/* Delete Worker Modal */}

    {showDeleteModal && workerToDelete && (

      <div className="modal-overlay">

        <div className="modal">

          <h2>Delete Worker</h2>

          <p style={{ margin: "20px 0", color: "#cbd5e1" }}>
            Are you sure you want to delete
            <strong> {workerToDelete.name}</strong> ?
          </p>

          <div className="modal-buttons">

            <button
              className="cancel-btn"
              onClick={() => {
                setShowDeleteModal(false);
                setWorkerToDelete(null);
              }}
            >
              Cancel
            </button>

            <button
              className="save-btn"
              onClick={confirmDelete}
            >
              Delete
            </button>

          </div>

        </div>

      </div>

    )}

  </div>
);

}

export default Workers;