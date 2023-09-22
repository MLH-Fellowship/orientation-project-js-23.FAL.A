import React from "react";
import { render, screen } from "@testing-library/react";
import { EducationContainer } from "../EducationContainer";

describe("EducationContainer component", () => {
  it("renders without crashing", () => {
    render(<EducationContainer />);
  });

  it("renders the Education header", () => {
    render(<EducationContainer />);
    const educationHeader = screen.getAllByText(/Education/i)[0];
    expect(educationHeader).toBeInTheDocument();
  });

  it("renders the Add Education button", () => {
    render(<EducationContainer />);
    const addEducationButton = screen.getByRole("button", {
      name: /Add Education/i,
    });
    expect(addEducationButton).toBeInTheDocument();
  });
});
