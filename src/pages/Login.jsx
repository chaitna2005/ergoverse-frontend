import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    setError("");

    const role = login(email, password);

    if (role === "admin") {
      navigate("/admin");
    } else if (role === "worker") {
      navigate("/worker");
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="logo-section">

          <div className="logo-box">
            ⌁
          </div>

          <h1 className="logo-title">
            ERGO<span>VERSE</span>
          </h1>

          <p className="logo-subtitle">
            WORKPLACE INTELLIGENCE PORTAL
          </p>

        </div>

        <form onSubmit={handleLogin}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="options">

            <div>
              <input
                type="checkbox"
                checked={showPassword}
                onChange={() => setShowPassword(!showPassword)}
              />

              <span style={{ color: "white", marginLeft: "8px" }}>
                Show Password
              </span>
            </div>

            <Link to="/forgot-password">
              Forgot Password?
            </Link>

          </div>

          {error && (
            <div className="error">
              ⚠ {error}
            </div>
          )}

          <button
            type="submit"
            className="login-btn"
          >
            LOGIN
          </button>

        </form>

        <div className="footer-text">
          Secure • Intelligent • Safe
        </div>

      </div>

    </div>
  );
}

export default Login;