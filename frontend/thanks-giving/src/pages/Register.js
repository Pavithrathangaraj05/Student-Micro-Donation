import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "STUDENT"
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/auth/register", form);
      alert("Registered Successfully");
      navigate("/"); // 👈 go back to login
    } catch (err) {
      alert("Register Failed");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="password" type="password" placeholder="password" onChange={handleChange} />
      <input></input>

      <select name="role" onChange={handleChange}>
        <option value="STUDENT">STUDENT</option>
        <option value="CARE_HOME">CARE_HOME</option>
        <option value="ORGANIZER">ORGANIZER</option>
      </select>

      <button type="submit">Register</button>

      <p>
        Already have account? <Link to="/">Login</Link>
      </p>
    </form>
  );
}
