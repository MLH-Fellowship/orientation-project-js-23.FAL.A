import React, { useContext } from 'react';
import { GlobalContext } from '../globalStoreProvider';
import './AddEducation.css';
const EducationForm = () => {
  const { state, dispatch } = useContext(GlobalContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: 'UPDATE_EDUCATION',
      payload: {
        [name]: value,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: 'ADD_EDUCATION',
      payload: {
        course: state.education.course,
        school: state.education.school,
        start_date: state.education.start_date,
        end_date: state.education.end_date,
        grade: state.education.grade,
        logo: state.education.logo,
      },
    });

    // Reset the form
    state.education.course = '';
    state.education.school = '';
    state.education.start_date = '';
    state.education.end_date = '';
    state.education.grade = '';
    state.education.logo = '';
  };

  return (
    <div className='education-form-container'>
    <form className="education-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="course"
        placeholder="Course"
        value={state.education.course}
        onChange={handleChange}
      />
      <input
        type="text"
        name="school"
        placeholder="School"
        value={state.education.school}
        onChange={handleChange}
      />
      <input
        type="date"
        name="start_date"
        placeholder="Start Date"
        value={state.education.start_date}
        onChange={handleChange}
      />
      <input
        type="date"
        name="end_date"
        placeholder="End Date"
        value={state.education.end_date}
        onChange={handleChange}
      />
      <input
        type="text"
        name="grade"
        placeholder="Grade"
        value={state.education.grade}
        onChange={handleChange}
      />
      <input
        type="text"
        name="logo"
        placeholder="Logo URL"
        value={state.education.logo}
        onChange={handleChange}
      />
      <button type="submit">Add Education</button>
    </form>
    </div>
  );
};

export default EducationForm;
