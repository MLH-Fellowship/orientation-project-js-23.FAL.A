import { useState, useEffect } from "react";
import "./EducationContainer.css";

export const EducationContainer = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        setEducation([
          {
            id: 1,
            schoolName: "Cool School",
            startDate: "2021-09",
            endDate: "2025-06",
            schoolDescription: "Learnt stuff"
          },
        ]);
    }, []);

    return (
        <div className="resumeSection">
          <h2>Experience</h2>
          <div className="educationBox">
            {education.map((e) => (
              <div className="education">
                {/* Add a small logo next to the school name */}
                <div>
                  <img src="https://cdn.iconscout.com/icon/free/png-256/school-278-109840.png" alt="logo" height={64} width={64} />
                  <h3>{e.schoolName}</h3>
              
                </div>
              <p className="dates">{e.startDate} - {e.endDate}</p>
              <p className="description">{e.schoolDescription}</p>
              </div>
            ))}
          </div>
          <button>Add Education</button>
        </div>
    );
}