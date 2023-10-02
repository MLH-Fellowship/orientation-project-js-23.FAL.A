import React from "react";
import { render, screen } from "@testing-library/react";
import { EducationContainer } from "./EducationContainer.jsx";
import GlobalStoreProvider from "../../globalStoreProvider.js";
let component = (
  <GlobalStoreProvider>
    <EducationContainer />
  </GlobalStoreProvider>
);
describe("EducationContainer component", () => {
  it("renders without crashing", () => {
    render(component);
  });

  it("renders the Education header", () => {
    render(component);
    const educationHeader = screen.getAllByText(/Education/i)[0];
    expect(educationHeader).toBeInTheDocument();
  });

  it("renders the Add Education button", () => {
    render(component);
    const addEducationButton = screen.getByRole("button", {
      name: /Add Education/i,
    });
    expect(addEducationButton).toBeInTheDocument();
  });
});
