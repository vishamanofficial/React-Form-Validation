import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const validateForm = () => {
    let formIsValid = true;
    let errors = {};

    if (username === "") {
      errors.username = "Username is required";
      formIsValid = false;
    } else if (username.length < 3) {
      errors.username = "Username is too short";
      formIsValid = false;
    } else {
      errors.username = "";
      formIsValid = true;
    }

    if (email === "") {
      errors.email = "Email is required";
      formIsValid = false;
    } else if (email.length < 11) {
      errors.email = "Invalid Email";
      formIsValid = false;
    } else {
      errors.email = "";
      formIsValid = true;
    }

    if (password === "") {
      errors.password = "Password is required";
      formIsValid = false;
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      formIsValid = false;
    } else {
      errors.password = "";
      formIsValid = true;
    }

    if (password2 === "") {
      errors.password2 = "Password is required";
      formIsValid = false;
    } else if (password2 !== password) {
      errors.password2 = "Password unmatched";
      formIsValid = false;
    } else {
      errors.password2 = "";
      formIsValid = true;
    }

    setErrors(errors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, proceed with form submission
      console.log("Form submitted");
    }
  };

  return (
    <div className="container">
      <form id="form" action="/" onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <div className="input-control">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            name="username"
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p id="userError" className="error">
            {errors.username}
          </p>
        </div>
        <div className="input-control">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p id="emailError" className="error">
            {errors.email}
          </p>
        </div>
        <div className="input-control">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p id="passError" className="error">
            {errors.password}
          </p>
        </div>
        <div className="input-control">
          <label htmlFor="password2">Password again</label>
          <input
            id="password2"
            name="password2"
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
          />
          <p id="pass2Error" className="error">
            {errors.password2}
          </p>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
