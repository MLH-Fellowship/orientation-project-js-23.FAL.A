import React from "react";
import { render, screen } from "@testing-library/react";
import { ExperienceContainer } from "./ExperienceContainer";

describe("ExperienceContainer component", () => {
  it("renders without crashing", () => {
    render(<ExperienceContainer />);
  });

  it("renders the Experience header", () => {
    render(<ExperienceContainer />);
    const ExperienceHeader = screen.getAllByText(/Experience/i)[0];
    expect(ExperienceHeader).toBeInTheDocument();
  });

  it("renders the Add Experience button", () => {
    render(<ExperienceContainer />);
    const addExperienceButton = screen.getByRole("button", {
      name: /Add Experience/i,
    });
    expect(addExperienceButton).toBeInTheDocument();
  });
});
