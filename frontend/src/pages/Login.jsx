import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axiosInstance from "../api/axiosInstance";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await axiosInstance.post("/auth/login", formData);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful");
      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-image"></div>

        <div className="auth-form-box">
          <h1>Log in to Exclusive</h1>
          <p>Enter your details below</p>

          <form onSubmit={submitHandler}>
            <input
              type="email"
              name="email"
              placeholder="Email or Phone Number"
              onChange={changeHandler}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={changeHandler}
              required
            />

            <button className="auth-btn">Log In</button>
          </form>

          <p className="auth-link">
            Don't have account? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Login;