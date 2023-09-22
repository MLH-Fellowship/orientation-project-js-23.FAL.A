import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders resume builder title ", () => {
  render(<App />);
  const linkElement = screen.getByText(/Resume Builder/i);
  expect(linkElement).toBeInTheDocument();
});
