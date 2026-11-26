import { useState } from "react";
import "../styles/Experience.css";

function Experience() {
  const [experience, setExperience] = useState({
    company: "",
    position: "",
    responsibilities: "",
    dateFrom: "",
    dateUntil: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setExperience({ ...experience, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <section className="experience">
        <h2>Experience</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="exp-company">Company name</label>
          <input
            id="exp-company"
            name="company"
            type="text"
            value={experience.company}
            onChange={handleChange}
          />

          <label htmlFor="exp-position">Position title</label>
          <input
            id="exp-position"
            name="position"
            type="text"
            value={experience.position}
            onChange={handleChange}
          />

          <label htmlFor="exp-responsibilities">Main responsibilities</label>
          <textarea
            id="exp-responsibilities"
            name="responsibilities"
            rows="4"
            value={experience.responsibilities}
            onChange={handleChange}
          />

          <label htmlFor="exp-dateFrom">From</label>
          <input
            id="exp-dateFrom"
            name="dateFrom"
            type="month"
            value={experience.dateFrom}
            onChange={handleChange}
          />

          <label htmlFor="exp-dateUntil">Until</label>
          <input
            id="exp-dateUntil"
            name="dateUntil"
            type="month"
            value={experience.dateUntil}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }

  const hasDates = experience.dateFrom || experience.dateUntil;
  return (
    <section className="experience">
      <h2>Experience</h2>
      <p>
        <strong>Company:</strong> {experience.company}
      </p>
      <p>
        <strong>Position:</strong> {experience.position}
      </p>
      <p>
        <strong>Responsibilities:</strong>
      </p>
      <p className="responsibilities">{experience.responsibilities}</p>
      {hasDates && (
        <p>
          <strong>Dates:</strong> {experience.dateFrom || "?"} to{" "}
          {experience.dateUntil || "Present"}
        </p>
      )}

      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </section>
  );
}

export default Experience;
