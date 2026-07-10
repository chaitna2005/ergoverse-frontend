import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
 CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";

function Analytics() {
  const [dateRange, setDateRange] = useState("Last 30 Days");
  const [department, setDepartment] = useState("All Departments");
  const [worker, setWorker] = useState("All Workers");

  // Safety Score Trend
  const safetyTrendData = [
    { month: "Jan", score: 82 },
    { month: "Feb", score: 85 },
    { month: "Mar", score: 84 },
    { month: "Apr", score: 88 },
    { month: "May", score: 90 },
    { month: "Jun", score: 89 },
  ];

  // Risk Distribution
  const riskDistributionData = [
    { name: "Low", value: 45 },
    { name: "Medium", value: 35 },
    { name: "High", value: 20 },
  ];

  const COLORS = ["#22c55e", "#f59e0b", "#ef4444"];
  // Department Analysis
  const departmentData = [
    { department: "Manufacturing", score: 88 },
    { department: "Packaging", score: 84 },
    { department: "Quality", score: 91 },
    { department: "Warehouse", score: 86 },
  ];
  const monthlyPerformanceData = [
  { month: "Jan", performance: 78 },
  { month: "Feb", performance: 81 },
  { month: "Mar", performance: 85 },
  { month: "Apr", performance: 88 },
  { month: "May", performance: 92 },
  { month: "Jun", performance: 90 },
];

  return (
    <div className="layout">
      <AdminSidebar active="analytics" />

      <div className="main-content">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Analytics Dashboard</h1>
            <p>Monitor workplace safety insights</p>
          </div>
        </div>

        {/* Filters */}
        <div className="analytics-filters">

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

        </div>

        {/* Charts */}
        <div className="analytics-grid">

          {/* Safety Score Trend */}
          <div className="analytics-card">
            <h3>📈 Safety Score Trend</h3>

            <div style={{ width: "100%", height: "260px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={safetyTrendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

                  <XAxis
                    dataKey="month"
                    stroke="#cbd5e1"
                  />

                  <YAxis
                    stroke="#cbd5e1"
                    domain={[75, 100]}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#3b82f6"
                    strokeWidth={3}
                    dot={{ r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Risk Distribution */}
          <div className="analytics-card">
            <h3>🥧 Risk Distribution</h3>

            <div style={{ width: "100%", height: "260px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>

                  <Pie
                    data={riskDistributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={85}
                    dataKey="value"
                    label
                  >
                    {riskDistributionData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>

                  <Tooltip />
                  <Legend />

                </PieChart>
              </ResponsiveContainer>
            </div>

          </div>

                    {/* Department Analysis */}
          <div className="analytics-card">
            <h3>📊 Department Analysis</h3>

            <div style={{ width: "100%", height: "260px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={departmentData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#334155"
                  />

                  <XAxis
                    dataKey="department"
                    stroke="#cbd5e1"
                  />

                  <YAxis
                    stroke="#cbd5e1"
                    domain={[75, 100]}
                  />

                  <Tooltip />

                  <Bar
                    dataKey="score"
                    fill="#8b5cf6"
                    radius={[8, 8, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

          </div>

                    {/* Monthly Performance */}
          <div className="analytics-card">
            <h3>📉 Monthly Performance</h3>

            <div style={{ width: "100%", height: "260px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={monthlyPerformanceData}>
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="#334155"
                  />

                  <XAxis
                    dataKey="month"
                    stroke="#cbd5e1"
                  />

                  <YAxis
                    stroke="#cbd5e1"
                    domain={[70, 100]}
                  />

                  <Tooltip />

                  <Area
                    type="monotone"
                    dataKey="performance"
                    stroke="#06b6d4"
                    fill="#0891b2"
                    fillOpacity={0.35}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>

          </div>

        </div>

        {/* Insights Section */}
        <div
          className="analytics-card"
          style={{ marginTop: "25px" }}
        >
          <h3>💡 Key Insights</h3>

          <ul
            style={{
              marginTop: "20px",
              paddingLeft: "20px",
              lineHeight: "2",
              color: "#cbd5e1",
            }}
          >
            <li>Manufacturing recorded the highest posture risk.</li>
            <li>Safety score improved by 6% compared to last month.</li>
            <li>High-risk incidents decreased by 12%.</li>
            <li>Warehouse maintained the best safety score.</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default Analytics;