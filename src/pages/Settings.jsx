import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";

function Settings() {
  const [profile, setProfile] = useState({
    company: "ERGOVERSE Industries",
    admin: "Admin User",
    email: "admin@ergoverse.com",
  });

  const [password, setPassword] = useState({
    current: "",
    new: "",
    confirm: "",
  });

  const [theme, setTheme] = useState("dark");

  const handleProfileChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPassword({
      ...password,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveProfile = () => {
    alert("Profile settings will be connected to the backend.");
  };

  const handleUpdatePassword = () => {
    alert("Password update will be connected to the backend.");
  };

  const handleThemeChange = (e) => {
    setTheme(e.target.value);
    alert("Theme preference will be connected to the backend.");
  };

  return (
    <div className="layout">
      <AdminSidebar active="settings" />

      <div className="main-content">

        {/* Header */}
        <div className="dashboard-header">
          <div>
            <h1>Settings</h1>
            <p>Manage your application preferences</p>
          </div>
        </div>

        {/* Profile */}
        <div className="settings-card">
          <h2>👤 Profile Settings</h2>

          <input
            type="text"
            name="company"
            value={profile.company}
            onChange={handleProfileChange}
            placeholder="Company Name"
          />

          <input
            type="text"
            name="admin"
            value={profile.admin}
            onChange={handleProfileChange}
            placeholder="Admin Name"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleProfileChange}
            placeholder="Email Address"
          />

          <button
            className="save-btn"
            onClick={handleSaveProfile}
          >
            Save Changes
          </button>
        </div>

        {/* Security */}

        <div className="settings-card">
          <h2>🔒 Security</h2>

          <input
            type="password"
            name="current"
            value={password.current}
            onChange={handlePasswordChange}
            placeholder="Enter current password"
          />

          <input
            type="password"
            name="new"
            value={password.new}
            onChange={handlePasswordChange}
            placeholder="Enter new password"
          />

          <input
            type="password"
            name="confirm"
            value={password.confirm}
            onChange={handlePasswordChange}
            placeholder="Confirm new password"
          />

          <button
            className="save-btn"
            onClick={handleUpdatePassword}
          >
            Update Password
          </button>

        </div>

        {/* Appearance */}

        <div className="settings-card">
          <h2>🎨 Appearance</h2>

          <select
            value={theme}
            onChange={handleThemeChange}
          >
            <option value="dark">Dark Theme</option>
            <option value="light">Light Theme</option>
          </select>

        </div>

      </div>
    </div>
  );
}

export default Settings;