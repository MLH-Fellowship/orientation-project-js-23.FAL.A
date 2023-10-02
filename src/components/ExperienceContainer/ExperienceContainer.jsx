import { useState, useEffect } from "react";
import "./ExperienceContainer.css";
import Experience from "./Experience";

export const ExperienceContainer = () => {
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    setExperienceList(mockExperience);
  }, []);

  function saveExperience(idx, experience) {
    setExperienceList((prev) => {
      const newList = [...prev];
      newList[idx] = experience;
      return newList;
    });
  }

  return (
    <div className="resumeSection">
      <h2>Experience</h2>
      <div className="experienceBox">
        {experienceList.map((experience, idx) => (
          <Experience
            experience={experience}
            key={experience.id}
            saveExperience={(experience) =>
              saveExperience.bind(null, idx, experience)
            }
          />
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
