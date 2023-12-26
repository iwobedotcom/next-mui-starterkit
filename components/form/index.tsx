"use client";

import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        onChange={handleChange}
        placeholder="Enter First Name"
      />
      <input
        type="text"
        name="lastName"
        onChange={handleChange}
        placeholder="Enter LastName Name"
      />
      <input
        type="email"
        name="email"
        onChange={handleChange}
        placeholder="Enter Email"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Enter Password"
      />
      <input type="submit" name="Submit" />
    </form>
  );
}

export default Form;
