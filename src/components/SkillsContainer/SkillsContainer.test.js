import React from "react";
import { render, screen } from "@testing-library/react";
import { SkillsContainer } from "./SkillsContainer";

describe("SkillsContainer component", () => {
  it("renders without crashing", () => {
    render(<SkillsContainer />);
  });

  it("renders the Skills header", () => {
    render(<SkillsContainer />);
    const SkillsHeader = screen.getAllByText(/Skills/i)[0];
    expect(SkillsHeader).toBeInTheDocument();
  });

  it("renders the Add Skills button", () => {
    render(<SkillsContainer />);
    const addSkillsButton = screen.getByRole("button", { name: /Add Skills/i });
    expect(addSkillsButton).toBeInTheDocument();
  });
});
