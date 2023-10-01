import { render, screen } from "@testing-library/react";
import App from "./App";
import GlobalStoreProvider from "./globalStoreProvider";
test("renders resume builder title", () => {
  render(
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  );
  const linkElement = screen.getByText(/Resume Builder/i);
  expect(linkElement).toBeInTheDocument();
});
