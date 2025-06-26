import { useState } from "react";
import useGlobalReducer from "../components/hooks/useGlobalReducer";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useGlobalReducer();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const respose = await fetch(`${import.meta.env.VITE_BACK_URL}/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: user, password }),
    });
    const data = await respose.json();

    if (respose.status === 200) {
      localStorage.setItem("token", data.token);
      console.log("Login successful:", data.token);
      login(data.user);
    } else {
      console.error("Login failed:", data.error);
      alert(data.error || "Login failed", data.error);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <h1>Admin Page</h1>
      <form className="w-50" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
}
