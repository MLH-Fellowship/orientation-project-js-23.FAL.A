import { useState, useEffect } from "react";
import "./ExperienceContainer.css";

export const ExperienceContainer = () => {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    setExperience(mockExperience);
  }, []);

  return (
    <div className="resumeSection">
      <h2>Experience</h2>
      <div className="experienceBox">
        {experience.map((experience) => (
          <div className="experience" key={experience.id}>
            <div className="content">
              <h3>
                {experience.company} - {experience.title}
              </h3>
              <p className="dates">
                {experience.startDate} - {experience.endDate}
              </p>
              <p className="description">{experience.description}</p>
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
};

export const mockExperience = [
  {
    id: 1,
    company: "MLH Fellowship",
    title: "Software Engineering Fellow",
    startDate: "2023-09",
    endDate: "2023-12",
    description: "Did awesome stuff",
    logo: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png",
  },
  {
    id: 2,
    company: "Hello World Inc.",
    title: "Programmer",
    startDate: "Start Date",
    endDate: "End Date",
    description: "Programming stuff",
    logo: "https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.png",
  },
];
