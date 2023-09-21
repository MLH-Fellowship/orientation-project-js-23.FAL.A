import React, { useState } from 'react';

function AddSkillForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [proficiency, setProficiency] = useState('');
  const [logo, setLogo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const skillData = {
      name,
      proficiency,
      logo
    };

    try {
      const response = await fetch('/resume/skill', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(skillData)
      });

      const result = await response.json();

      if (response.ok) {
        console.log(`Skill added with ID: ${result.id}`);
        onSubmit && onSubmit();
      } else {
        console.error(`Error adding skill: ${result.message}`);
      }
    } catch (error) {
      console.error(`There was a problem with the request: ${error.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Skill Name"
        required
      />
      <input
        value={proficiency}
        onChange={e => setProficiency(e.target.value)}
        placeholder="Proficiency"
        required
      />
      <input
        value={logo}
        onChange={e => setLogo(e.target.value)}
        placeholder="Logo URL"
        required
      />
      <button type="submit">Add Skill</button>
    </form>
  );
}

export default AddSkillForm;
