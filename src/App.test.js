import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {

  it('renders without crashing', () => {
    render(<App />);
  });

  it('renders Resume Builder heading', () => {
    const { getByText } = render(<App />);
    expect(getByText(/Resume Builder/i)).toBeInTheDocument();
  });

  // TODO: Add more App-level tests if necessary ...

  describe('AddEducationForm', () => {

    it('updates state on input change', () => {
      const { getByPlaceholderText, getByText } = render(<App />);
      fireEvent.click(getByText(/Add Education/i));
      fireEvent.change(getByPlaceholderText('Course'), { target: { value: 'Engineering' } });
      fireEvent.change(getByPlaceholderText('School'), { target: { value: 'NYU' } });
      // TODO: Add other input checks for AddEducationForm ...
    });

    // TODO: Add other tests related to AddEducationForm ...

  });

  describe('AddExperienceForm', () => {

    it('updates state on input change', () => {
      const { getByPlaceholderText, getByText } = render(<App />);
      fireEvent.click(getByText(/Add Experience/i));
      fireEvent.change(getByPlaceholderText('Title'), { target: { value: 'Software Developer' } });
      fireEvent.change(getByPlaceholderText('Company'), { target: { value: 'A Cooler Company' } });
      // TODO: Add other input checks for AddExperienceForm ...
    });

    // TODO: Add other tests related to AddExperienceForm ...

  });

  describe('AddSkillForm', () => {

    it('updates state on input change', () => {
      const { getByPlaceholderText, getByText } = render(<App />);
      fireEvent.click(getByText(/Add Skill/i));
      fireEvent.change(getByPlaceholderText('Skill Name'), { target: { value: 'JavaScript' } });
      fireEvent.change(getByPlaceholderText('Proficiency'), { target: { value: '2-4 years' } });
      // TODO: Add other input checks for AddSkillForm ...
    });

    // TODO: Add other tests related to AddSkillForm ...

  });

});
