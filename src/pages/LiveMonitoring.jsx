import { useEffect, useRef } from "react";
import AdminSidebar from "../components/AdminSidebar";
import "./LiveMonitoring.css";

function LiveMonitoring() {
  const videoRef = useRef(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Camera access denied:", error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current?.srcObject) {
        videoRef.current.srcObject
          .getTracks()
          .forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className="layout">
      {/* Sidebar */}
      <AdminSidebar active="live" />

      {/* Main Content */}
      <div className="main-content">

        {/* Header */}
        <div className="live-header">
          <div>
            <h1>Live Monitoring</h1>
            <p>Real-time worker posture monitoring and AI safety analysis</p>
          </div>
        </div>

        {/* Top Section */}
        <div className="live-grid">

          {/* Camera Feed */}
          <div className="camera-card">
            <h2>Camera Feed</h2>

            <div className="camera-placeholder">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted
                className="camera-video"
              />
            </div>
          </div>

          {/* Worker Details */}
          <div className="worker-card">
            <h2>Live Worker Details</h2>

            <div className="worker-info">
              <p><strong>Worker ID:</strong> W-1047</p>
              <p><strong>Name:</strong> Rajesh Kumar</p>
              <p><strong>Department:</strong> Assembly Line A</p>
              <p><strong>Risk Level:</strong> High</p>
              <p><strong>Safety Score:</strong> 72%</p>
              <p><strong>Status:</strong> Active</p>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="bottom-grid">

          {/* Recent Alerts */}
          <div className="alerts-card">
            <h2>Recent Alerts</h2>

            <div className="alert-item">
              High Risk Posture Detected
            </div>

            <div className="alert-item">
              Improper Lifting Detected
            </div>

            <div className="alert-item">
              Prolonged Bending Detected
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="recommendation-card">
            <h2>AI Recommendations</h2>

            <ul>
              <li>✔ Maintain a straight back while lifting.</li>
              <li>✔ Take a short break after prolonged bending.</li>
              <li>✔ Keep shoulders aligned during work.</li>
              <li>✔ Follow ergonomic lifting posture.</li>
            </ul>
          </div>

        </div>

      </div>
    </div>
  );
}

export default LiveMonitoring;