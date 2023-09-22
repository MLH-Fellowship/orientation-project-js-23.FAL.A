import React, { useState } from "react";

function AddEducationForm({ onSubmit }) {
  const [course, setCourse] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [grade, setGrade] = useState("");
  const [logo, setLogo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const educationData = {
      course,
      school,
      start_date: startDate,
      end_date: endDate,
      grade,
      logo,
    };

    try {
      const response = await fetch("/resume/education", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(educationData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`Education added with ID: ${result.id}`);
        onSubmit && onSubmit();
      } else {
        console.error(`Error adding education: ${result.message}`);
      }
    } catch (error) {
      console.error(`There was a problem with the request: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={course}
        onChange={(e) => setCourse(e.target.value)}
        placeholder="Course"
        required
      />
      <input
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder="School"
        required
      />
      <input
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        placeholder="Start Date"
        required
      />
      <input
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
        required
      />
      <input
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
        placeholder="Grade"
        required
      />
      <input
        value={logo}
        onChange={(e) => setLogo(e.target.value)}
        placeholder="Logo URL"
      />
      <button type="submit">Add Education</button>
    </form>
  );
}

export default AddEducationForm;
