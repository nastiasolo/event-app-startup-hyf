import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// TODO: build a login form with relevant fields
// TODO: call login(email, password) from useAuth() on submit
// TODO: show a clear error message if login fails
// TODO: redirect to the event list on success

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await login(email, password);

      navigate("/events");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-card">
      <h1 className="login-title">Login</h1>
      <p className="login-description">Please enter your details</p>

      {error && <div className="error-banner">{error}</div>}

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="login-input"
        />

        <button type="submit" className="login-submit-btn">
          Login
        </button>
      </form>

      <p className="register-description">
        Don't have an account?{" "}
        <a className="sign-up-link" href="/register">
          Register
        </a>
      </p>
    </div>
  );
}
