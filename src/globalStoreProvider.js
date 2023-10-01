import React, { createContext, useContext, useReducer } from "react";

// Define your reducer function
function reducer(state, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_PERSONAL_INFO:
      return {
        ...state,
        personalInfo: {
          ...state.personalInfo,
          ...action.payload,
        },
      };
    case ActionTypes.ADD_EXPERIENCE:
      return {
        ...state,
        experience: [...state.experience, action.payload],
      };
    case ActionTypes.ADD_EDUCATION:
      return {
        ...state,
        education: [...state.education, action.payload],
      };
    case ActionTypes.ADD_SKILL:
      return {
        ...state,
        skills: [...state.skills, action.payload],
      };
    case ActionTypes.ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      };
    default:
      return state;
  }
}

export const ActionTypes = {
  UPDATE_PERSONAL_INFO: "UPDATE_PERSONAL_INFO",
  ADD_EXPERIENCE: "ADD_EXPERIENCE",
  ADD_EDUCATION: "ADD_EDUCATION",
  ADD_SKILL: "ADD_SKILL",
  ADD_PROJECT: "ADD_PROJECT",
};

const initialState = {
  personalInfo: {
    first_name: "",
    last_name: "",
    middle_name: "",
  },
  experience: [
    {
      title: "",
      company: "",
      start_date: "",
      end_date: "",
      description: "",
      logo: "",
    },
  ],
  education: [
    {
      course: "",
      school: "",
      start_date: "",
      end_date: "",
      grade: "",
      logo: "",
    },
  ],
  skills: [
    {
      name: "",
      proficiency: "",
      logo: "",
    },
  ],
  projects: [
    {
      name: "",
      languages: [],
      description: "",
      link: "",
    },
  ],
};

export const GlobalContext = createContext();

export let GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
export default GlobalStoreProvider;
