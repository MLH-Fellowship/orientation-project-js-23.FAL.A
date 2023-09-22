import Modal from "./components/Modal/Modal";
import AddSkillForm from "./views/Skills/AddSkillForm";
import AddEducationForm from "./views/Education/AddEducationForm";
import AddExperienceForm from "./views/Experience/AddExperienceForm";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [showSkillModal, setShowSkillModal] = useState(false);
  const [showEducationModal, setShowEducationModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);

  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <div className="resumeSection">
        <h2>Experience</h2>
        <p>Experience Placeholder</p>
        <button onClick={() => setShowExperienceModal(true)}>
          Add Experience
        </button>
        <Modal
          isOpen={showExperienceModal}
          onClose={() => setShowExperienceModal(false)}
        >
          <AddExperienceForm />
        </Modal>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Education</h2>
        <p>Education Placeholder</p>
        <button onClick={() => setShowEducationModal(true)}>
          Add Education
        </button>
        <Modal
          isOpen={showEducationModal}
          onClose={() => setShowEducationModal(false)}
        >
          <AddEducationForm />
        </Modal>
        <br></br>
      </div>
      <div className="resumeSection">
        <h2>Skills</h2>
        <p>Skill Placeholder</p>
        <button onClick={() => setShowSkillModal(true)}>Add Skill</button>
        <Modal isOpen={showSkillModal} onClose={() => setShowSkillModal(false)}>
          <AddSkillForm />
        </Modal>
        <br></br>
      </div>
      <br></br>
      <button>Export</button>
    </div>
  );
}

export default App;
