import { useState, useEffect } from "react";
import "./SkillsContainer.css";

export const SkillsContainer = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills([
      {
        id: 1,
        name: "HTML",
        logo: "https://cdn.iconscout.com/icon/free/png-256/html5-10-569380.png",
        proficiency: "Advanced",
      },
      {
        id: 2,
        name: "CSS",
        logo: "https://cdn.iconscout.com/icon/free/png-256/css3-11-1175239.png",
        proficiency: "Wizard",
      },
      {
        id: 3,
        name: "JavaScript",
        logo: "https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png",
        proficiency: "Grand Wizard",
      },
      {
        id: 4,
        name: "React",
        logo: "logo192.png",
        proficiency: "Apprentice",
      },
    ]);
  }, []);

  return (
    <div className="resumeSection">
      <h2>Skills</h2>
      <div className="skillBox">
        {skills.map((skill) => (
          <div className="skill" key={skill.id}>
            <h3>{skill.name}</h3>
            <img src={skill.logo} alt="logo" height={128} width={128} />
            <h4>{skill.proficiency}</h4>
          </div>
        ))}
      </div>
      <button>Add Skills</button>
    </div>
  );
};
