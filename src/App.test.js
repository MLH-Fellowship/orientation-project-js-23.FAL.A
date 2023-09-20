import { render, screen } from "@testing-library/react";
import FileDropzone from "./components/FileDropzone";

describe("Drag and drop component", () => {
  test("renders file dropzone", () => {
    render(<FileDropzone />);

    const elem = screen.getByText(
      /Drag 'n' drop some files here, or click to select file/
    );
    expect(elem).toBeInTheDocument();
  });

  test("do not render file upload btn", () => {
    render(<FileDropzone />);

    const elem = screen.queryByText(/Confirm upload/);
    expect(elem).not.toBeInTheDocument();
  });
});
