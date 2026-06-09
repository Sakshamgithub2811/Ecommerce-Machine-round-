import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axiosInstance from "../api/axiosInstance";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await axiosInstance.post("/auth/register", formData);
      alert("Account created successfully");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return (
    <>
      <Navbar />

      <div className="auth-page">
        <div className="auth-image"></div>

        <div className="auth-form-box">
          <h1>Create an account</h1>
          <p>Enter your details below</p>

          <form onSubmit={submitHandler}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={changeHandler}
              required
            />

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

            <button className="auth-btn">Create Account</button>
          </form>

          <button className="google-btn">G Sign up with Google</button>

          <p className="auth-link">
            Already have account? <Link to="/login">Log in</Link>
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Register;