import React, { useState } from "react";

function RegisterForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;
    onSubmit({ name, email });
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <input type="text" placeholder="Ваше ім'я" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Зареєструватися</button>
    </form>
  );
}

export default RegisterForm;
