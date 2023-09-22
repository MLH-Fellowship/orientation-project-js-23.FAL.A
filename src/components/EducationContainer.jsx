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
            schoolDescription: "Learnt stuff",
            logo: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png",
          },
        ]);
    }, []);

    return (
        <div className="resumeSection">
          <h2>Education</h2>
          <div className="educationBox">
            {education.map((e) => (
              <div className="education" key={e.id}>
                {/* Add a small logo next to the school name */}
                <div className="content">
                  <h3>{e.schoolName}</h3>  
                  <p className="dates">{e.startDate} - {e.endDate}</p>
                  <p className="description">{e.schoolDescription}</p>
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
}