import { fireEvent, render, screen } from "@testing-library/react";
import PersonalInfoForm from "./PersonalInfoForm.js";

describe("PersonalInfoForm component", () => {
  it("should render", () => {
    render(<PersonalInfoForm />);
  });

  it("should be able to fill out name input", () => {
    render(<PersonalInfoForm />);
    const nameInput = screen.getByLabelText("name-input");
    const updateButton = screen.getByLabelText("update-button");
    //Update without inputting a name
    fireEvent.click(updateButton);
    expect(screen.getByText(/Please enter a name!/i)).toBeInTheDocument();
    //Update with an inputted name
    fireEvent.change(nameInput, { target: { value: "Test name" } });
    fireEvent.click(updateButton);
    expect(screen.queryByText(/Please enter a name!/i)).not.toBeInTheDocument();
  });

  it("should be able to fill out an email input", () => {
    render(<PersonalInfoForm />);
    const emailInput = screen.getByLabelText("email-input");
    const updateButton = screen.getByLabelText("update-button");
    //Update without inputting an email
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid email!/i)
    ).toBeInTheDocument();
    //Update with an improper email: "@email.com"
    fireEvent.change(emailInput, { target: { value: "@email.com" } });
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid email!/i)
    ).toBeInTheDocument();
    //Update with an improper email: "test@.com"
    fireEvent.change(emailInput, { target: { value: "test@.com" } });
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid email!/i)
    ).toBeInTheDocument();
    //Update with an improper email: "test@email."
    fireEvent.change(emailInput, { target: { value: "test@email." } });
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid email!/i)
    ).toBeInTheDocument();
    //Update with an inputted name
    fireEvent.change(emailInput, { target: { value: "test@email.com" } });
    fireEvent.click(updateButton);
    expect(
      screen.queryByText(/Please enter a valid email!/i)
    ).not.toBeInTheDocument();
  });

  it("should be able to fill out an phone input", () => {
    render(<PersonalInfoForm />);
    const phoneInput = screen.getByLabelText("phone-input");
    const prefixInput = screen.getByLabelText("prefix-input");
    const updateButton = screen.getByLabelText("update-button");
    //Update without inputting an email
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid phone number!/i)
    ).toBeInTheDocument();
    //Update with an improper phone number
    fireEvent.change(phoneInput, { target: { value: "123456789" } });
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid phone number!/i)
    ).toBeInTheDocument();
    //Update with an proper phone number but no country code
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid country code!/i)
    ).toBeInTheDocument();
    //Update with an proper phone number but invalid country code: missing +
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(prefixInput, { target: { value: "12" } });
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid country code!/i)
    ).toBeInTheDocument();
    //Update with an proper phone number but invalid country code: too long
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(prefixInput, { target: { value: "+123213" } });
    fireEvent.click(updateButton);
    expect(
      screen.getByText(/Please enter a valid country code!/i)
    ).toBeInTheDocument();
    //Update with an proper phone number and country code
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(prefixInput, { target: { value: "+1" } });
    fireEvent.click(updateButton);
    expect(
      screen.queryByText(/Please enter a valid country code!/i)
    ).not.toBeInTheDocument();
    //Update with an proper phone number and country code
    fireEvent.change(phoneInput, { target: { value: "1234567890" } });
    fireEvent.change(prefixInput, { target: { value: "+1-234" } });
    fireEvent.click(updateButton);
    expect(
      screen.queryByText(/Please enter a valid country code!/i)
    ).not.toBeInTheDocument();
  });
});
