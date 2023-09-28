import React, { useState } from "react";
import BrushIcon from "../../icons/BrushIcon";
import "./ExperienceContainer.css";

export default function Experience({ experience, saveExperience }) {
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [currExperience, setcurrExperience] = useState(experience);
  const [id, setTimeoutId] = useState(null);

  function handleSaveFormEvent(e) {
    e.preventDefault();
    setIsEdit(false);
    saveExperience(currExperience);
  }

  function fetchGeneratedDescription() {
    setLoading(true);
    clearTimeout(id);

    setTimeoutId(
      setTimeout(() => {
        console.log("Generating description...");
        setcurrExperience({
          ...currExperience,
          description: "Generated description",
        });
        setLoading(false);
      }, 2000)
    );
  }

  if (isEdit) {
    return (
      <div className="experience">
        <div
          className="content"
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <form className="editForm">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={`${currExperience.company}`}
                  placeholder="Company"
                  onChange={(e) => {
                    setcurrExperience({
                      ...currExperience,
                      company: e.target.value,
                    });
                  }}
                />
                -
                <input
                  type="text"
                  id="title"
                  name="title"
                  placeholder="Title"
                  value={`${currExperience.title}`}
                  onChange={(e) => {
                    setcurrExperience({
                      ...currExperience,
                      title: e.target.value,
                    });
                  }}
                />
              </div>
              <div>
                <input
                  type="text"
                  id="startDate"
                  name="startDate"
                  value={`${currExperience.startDate}`}
                  placeholder="Start Date"
                  onChange={(e) => {
                    setcurrExperience({
                      ...currExperience,
                      startDate: e.target.value,
                    });
                  }}
                />
                -
                <input
                  type="text"
                  id="endDate"
                  name="endDate"
                  value={`${currExperience.endDate}`}
                  placeholder="End Date"
                  onChange={(e) => {
                    setcurrExperience({
                      ...currExperience,
                      endDate: e.target.value,
                    });
                  }}
                />
              </div>
              <textarea
                id="description"
                name="description"
                rows="6"
                cols="40"
                placeholder="Description"
                onChange={(e) => {
                  setcurrExperience({
                    ...currExperience,
                    description: e.target.value,
                  });
                }}
                value={currExperience.description}
              />
              <span
                className="autogenerate-description-button"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  cursor: "pointer",
                  padding: "1rem 0",
                }}
                onClick={fetchGeneratedDescription}
              >
                {isLoading ? "Generating..." : "Autogenerate Description"}
                <BrushIcon />
              </span>
            </div>
          </form>
          <div
            className="logo-edit"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
              margin: "0 1rem",
            }}
          >
            <input
              style={{ width: "100%" }}
              type="text"
              id="logo"
              name="logo"
              value={`${currExperience.logo}`}
              placeholder="Logo URL"
              onChange={(e) => {
                setcurrExperience({
                  ...currExperience,
                  logo: e.target.value,
                });
              }}
            />
            <img
              src={`${currExperience.logo}`}
              alt="logo"
              height={"100%"}
              width={"100%"}
            />
          </div>
          <button onClick={handleSaveFormEvent}>Save</button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="experience"
      key={currExperience.id}
      id={`experience${currExperience.id}`}
    >
      <div className="content">
        <h3>
          {currExperience.company} - {currExperience.title}
        </h3>
        <p className="dates">
          {currExperience.startDate} - {currExperience.endDate}
        </p>
        <p className="description">{currExperience.description}</p>
      </div>
      <div className="logo">
        <img src={currExperience.logo} alt="logo" height={128} width={128} />
      </div>
      {/* Edit icon */}
      <div className="edit" onClick={() => setIsEdit(!isEdit)}>
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/edit--v1.png"
          alt="edit"
        />
      </div>
    </div>
  );
}
