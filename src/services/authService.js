export const login = (email, password) => {
  if (
    email === "admin@ergoverse.com" &&
    password === "Admin@123"
  ) {
    localStorage.setItem("role", "admin");
    return "admin";
  }

  if (
    email === "worker@ergoverse.com" &&
    password === "Worker@123"
  ) {
    localStorage.setItem("role", "worker");
    return "worker";
  }

  return null;
};

export const logout = () => {
  localStorage.removeItem("role");
};

export const getRole = () => {
  return localStorage.getItem("role");
};