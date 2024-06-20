import React from "react";
import { useState } from "react";

export default function Form() {
  const [status, setStatus] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({
    name: "",
    email: "",
    password: "",
  });

  function validatePassword(password) {
    const passwordErrors = [];
    if (password.length < 8) {
      passwordErrors.push("<8 characters");
    }
    if (!/[A-Z]/.test(password)) {
      passwordErrors.push("Uppercase missing");
    }
    if (!/[a-z]/.test(password)) {
      passwordErrors.push("Lowercase missing");
    }
    if (!/[0-9]/.test(password)) {
      passwordErrors.push("Digits missing");
    }
    if (!/[!@#$%^&*]/.test(password)) {
      passwordErrors.push("Special character missing");
    }
    return passwordErrors;
  }

  function validateForm() {
    let isValid = true;
    const newError = { name: "", email: "", password: "" };

    if (status === "Sign Up" && name.length < 3) {
      newError.name = "Name must be at least 3 characters long";
      isValid = false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      newError.email = "Email address is invalid.";
      isValid = false;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      newError.password = passwordErrors.join(" | ");
      isValid = false;
    }

    setError(newError);
    return isValid;
  }

  function handleSubmit() {
    if (validateForm()) {
      alert("Form submitted successfully");
      localStorage.setItem("data", JSON.stringify({ name, email, password }));
      setName("");
      setEmail("");
      setPassword("");
      setStatus("Login");
    }
  }

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSignup() {
    if (status === "Login") {
      setStatus("Sign Up");
    } else if (status === "Sign Up") {
      handleSubmit();
    }
  }

  function handleLogin() {
    if (status === "Sign Up") {
      setStatus("Login");
    } else if (status === "Login") {
      handleSubmit();
    }
  }

  return (
    <div className="container">
      <h1 className="title">{status}</h1>
      <form>
        {status === "Sign Up" ? (
          <label htmlFor="name">
            <input
              value={name}
              onChange={handleNameChange}
              type="text"
              placeholder="Name"
            />
          </label>
        ) : null}

        {error.name && <p className="error">{error.name}</p>}

        <label htmlFor="email">
          <input
            value={email}
            onChange={handleEmailChange}
            type="email"
            placeholder="Email"
          />
        </label>
        {error.email && <p className="error">{error.email}</p>}
        <label htmlFor="password">
          <input
            value={password}
            onChange={handlePasswordChange}
            type="password"
            placeholder="Password"
          />
        </label>
        {error.password && <p className="error">{error.password}</p>}
      </form>
      {status === "Login" ? (
        <p className="forgot-password">Forgot Password?</p>
      ) : null}

      <div className="buttons">
        <button onClick={handleSignup} className="Sign Up">
          Sign Up
        </button>
        <button onClick={handleLogin} className="log-in">
          Login
        </button>
      </div>
    </div>
  );
}
