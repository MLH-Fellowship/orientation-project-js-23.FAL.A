import { useState, useEffect } from "react";
import "./EducationContainer.css";

export const EducationContainer = () => {
  const [education, setEducation] = useState([]);
  // Create a function to sanitize HTML content using the global sanitizeHTML function
  const sanitizeHTML = (html) => {
    return window.sanitizeHTML(html);
  };
  useEffect(() => {
    // Sanitize HTML content before setting it
    const sanitizedEducation = mockEducation.map((e) => ({
      ...e,
      school: sanitizeHTML(e.school),
      course: sanitizeHTML(e.course),
      grade: sanitizeHTML(e.grade),
    }));
    setEducation(sanitizedEducation);
  }, []);

  return (
    <div className="resumeSection">
      <h2>Education</h2>
      <div className="educationBox">
        {education.map((e) => (
          <div className="education" key={e.id}>
            {/* Add a small logo next to the school name */}
            <div className="content">
              <h3>
                {e.school} - {e.course}
              </h3>
              <p className="dates">
                {e.startDate} - {e.endDate} &nbsp; Grade: {e.grade}
              </p>
            </div>
            <div className="logo">
              <img src={e.logo} alt="logo" height={128} width={128} />
            </div>
          </div>
        ))}
      </div>
      <button>Add Education</button>
    </div>
  );
};

export const mockEducation = [
  {
    id: 1,
    course: "Cool Class",
    school: "Cool University",
    startDate: "2021-09",
    endDate: "2025-06",
    grade: "99%",
    logo: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png",
  },
];
