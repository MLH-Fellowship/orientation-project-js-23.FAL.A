import React, { useState, useEffect } from "react";
import "./ExperienceContainer.css";

export const ExperienceContainer = () => {
  const [experienceList, setExperienceList] = useState([]);

  useEffect(() => {
    setExperienceList(mockExperience);
  }, []);

  // Define a function to sanitize HTML
  const sanitizeHTML = (html) => {
    // Use window.sanitizeHTML here to sanitize the HTML
    return window.sanitizeHTML(html);
  };

  // Saves the experience card by closing the form
  const saveEditForm = (experience) => () => {
    // Find the experience card whose id matches the experience id
    const experienceCard = document.getElementById(
      `experience${experience.id}`
    );

    // Get the values from the form
    const company = sanitizeHTML(document.getElementById("company").value);
    const title = sanitizeHTML(document.getElementById("title").value);
    const startDate = sanitizeHTML(document.getElementById("startDate").value);
    const endDate = sanitizeHTML(document.getElementById("endDate").value);
    const description = sanitizeHTML(
      document.getElementById("description").value
    );
    const logo = sanitizeHTML(document.getElementById("logo").value);

    // Delete the content of the experience card
    experienceCard.innerHTML = "";

    // Append new content
    const sanitizedHtml = sanitizeHTML(`
      <div class="content">
        <h3>${company} - ${title}</h3>
        <p class="dates">${startDate} - ${endDate}</p>
        <p class="description">${description}</p>
      </div>
      <div class="logo">
        <img src="${logo}" alt="logo" height="128" width="128" />
      </div>
    `);

    experienceCard.innerHTML = sanitizedHtml;

    // Create edit button
    const editDiv = document.createElement("div");
    editDiv.className = "edit";
    editDiv.onclick = openEditForm(experience);
    const editImg = document.createElement("img");
    editImg.src = "https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png";
    editImg.alt = "edit";
    editDiv.appendChild(editImg);
    experienceCard.appendChild(editDiv);

    let originalExperience = experienceList.find((e) => e.id === experience.id);
    originalExperience.company = company;
    originalExperience.title = title;
    originalExperience.startDate = startDate;
    originalExperience.endDate = endDate;
    originalExperience.description = description;
    originalExperience.logo = logo;
  };

  // Edits the experience card by opening a form
  const openEditForm = (experience) => () => {
    // Find the experience card whose id matches the experience id
    const experienceCard = document.getElementById(
      `experience${experience.id}`
    );

    // Delete the content of the experience card
    experienceCard.innerHTML = "";

    // Append new content
    const sanitizedHtml = sanitizeHTML(`
      <div class="content">
        <form class="editForm">
          <input type="text" id="company" name="company" value="${experience.company}" placeholder="Company" /> -
          <input type="text" id="title" name="title" value="${experience.title}" placeholder="Title" /><br>
          <input type="text" id="startDate" name="startDate" value="${experience.startDate}" placeholder="Start Date" /> -
          <input type="text" id="endDate" name="endDate" value="${experience.endDate}" placeholder="End Date" />
          <textarea id="description" name="description" rows="6" cols="40" placeholder="Description">${experience.description}</textarea>
        </form>
      </div>
      <div class="logo-edit">
        <input type="text" id="logo" name="logo" value="${experience.logo}" placeholder="Logo URL" />
        <img src="${experience.logo}" alt="logo" height="128" width="128" />
      </div>
    `);

    experienceCard.innerHTML = sanitizedHtml;

    // Create save button
    const saveButton = document.createElement("button");
    saveButton.innerHTML = "Save";
    saveButton.onclick = saveEditForm(experience);

    experienceCard.appendChild(saveButton);
  };

  return (
    <div className="resumeSection">
      <h2>Experience</h2>
      <div className="experienceBox">
        {experienceList.map((experience) => (
          <div
            className="experience"
            key={experience.id}
            id={`experience${experience.id}`}
          >
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
            {/* Edit icon */}
            <div className="edit" onClick={openEditForm(experience)}>
              <img
                src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
                alt="edit"
              />
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
