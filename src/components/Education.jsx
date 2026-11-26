import { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [education, setEducation] = useState({
    school: "",
    title: "",
    date: "",
  });
  const [isEditing, setIsEditing] = useState(true);

  function handleChange(e) {
    const { name, value } = e.target;
    setEducation({ ...education, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <section className="education">
        <h2>Education</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="education-school">School name</label>
          <input
            id="education-school"
            name="school"
            type="text"
            value={education.school}
            onChange={handleChange}
            required
          />

          <label htmlFor="title">Title of study</label>
          <input
            id="title"
            name="title"
            type="text"
            value={education.title}
            onChange={handleChange}
            required
          />

          <label htmlFor="date">Date of study</label>
          <input
            id="date"
            name="date"
            type="text"
            value={education.date}
            onChange={handleChange}
            placeholder="e.g 2019 - 2023"
          />
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }

  return (
    <section className="education">
      <h2>Education</h2>
      <p>
        <strong>School:</strong> {education.school}
      </p>
      <p>
        <strong>Title of study:</strong> {education.title}
      </p>
      <p>
        <strong>Date:</strong> {education.date}
      </p>
      <button type="button" onClick={() => setIsEditing(true)}>
        Edit
      </button>
    </section>
  );
}

export default Education;
