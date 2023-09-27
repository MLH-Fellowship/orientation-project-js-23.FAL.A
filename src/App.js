import "./App.css";
import { SkillsContainer } from "./components/SkillsContainer/SkillsContainer";
import { ExperienceContainer } from "./components/ExperienceContainer/ExperienceContainer";
import { EducationContainer } from "./components/EducationContainer/EducationContainer";
import PersonalInfoForm from "./components/PersonalInfoForm/PersonalInfoForm";

const App = () => {
  return (
    <div className="App">
      <h1>Resume Builder</h1>
      <PersonalInfoForm />
      <ExperienceContainer />
      <EducationContainer />
      <SkillsContainer />
      <button>Export</button>
    </div>
  );
};

export default App;
