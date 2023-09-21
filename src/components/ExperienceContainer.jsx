import { useState, useEffect } from "react";
import "./ExperienceContainer.css";

export const ExperienceContainer = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        setExperience([
          {
            companyName: "MLH Fellowship",
            jobTitle: "Software Engineering Fellow",
            startDate: "2023-09",
            endDate: "2023-12",
            jobDescription: "Did awesome stuff",
            logo: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png",
          },
          {
            companyName: "Hello World Inc.",
            jobTitle: "Programmer",
            startDate: "Start Date",
            endDate: "End Date",
            jobDescription: "Programming stuff",
            logo: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png",
          }]);
    }, []);

    return (
        <div className="resumeSection">
          <h2>Experience</h2>
          <div className="experienceBox">
            {experience.map((experience) => (
              <div className="experience">
                <div className="content">
                  <h3>{experience.companyName} - {experience.jobTitle}</h3>
                  <p className="dates">{experience.startDate} - {experience.endDate}</p>
                  <p className="description">{experience.jobDescription}</p>
                </div>
                <div className="logo">
                  <img src={experience.logo} alt="logo" height={128} width={128} />
                </div>
              </div>
            ))}
          </div>
          <button>Add Experience</button>
        </div>
    );
}