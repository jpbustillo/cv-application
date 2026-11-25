import { useState } from "react";
import "../styles/GeneralInfo.css";

function GeneralInfo() {
  const [info, setInfo] = useState({ name: "", email: "", phone: "" });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setInfo({ ...info, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <section className="general-info">
        <h2>General Information</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Full name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={info.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="text"
            value={info.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="phone">Phone number</label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={info.phone}
            onChange={handleChange}
            required
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }

  return (
    <section className="general-info">
      <h2>General Information</h2>
      <p>
        <strong>Name:</strong> {info.name}
      </p>
      <p>
        <strong>Email:</strong> {info.email}
      </p>
      <p>
        <strong>Phone:</strong> {info.phone}
      </p>
      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </section>
  );
}

export default GeneralInfo;
