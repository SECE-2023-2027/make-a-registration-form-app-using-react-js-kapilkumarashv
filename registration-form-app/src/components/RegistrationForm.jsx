import React, { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.includes('@')) newErrors.email = "Email is invalid.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted:", formData);
      alert("Registration successful!");
      setFormData({ name: '', email: '', password: '', confirmPassword: '' });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <small className="error">{errors.name}</small>}
      </label>

      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <small className="error">{errors.email}</small>}
      </label>

      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <small className="error">{errors.password}</small>}
      </label>

      <label>
        Confirm Password:
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <small className="error">{errors.confirmPassword}</small>}
      </label>

      <button type="submit">Register</button>
    </form>
  );
}

export default RegistrationForm;
