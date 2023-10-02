import React, { useState } from "react";
import "./PersonalInfoForm.css";

function PersonalInfoForm() {
  const PHONE_NUMBER_LENGTH = 10;
  const MAX_PHONE_PREFIX_LENGTH = 6;
  const DEFAULT_INPUT_SIZE = 20;

  const placeholders = {
    name: "Name",
    phone: "Phone",
    email: "Email",
    github: "Github",
    website: "Website",
    linkedin: "LinkedIn",
  };

  // Create a function to sanitize HTML content using the global sanitizeHTML function
  const sanitizeHTML = (html) => {
    return window.sanitizeHTML(html);
  };

  const [values, setValues] = useState({
    name: "",
    phonePrefix: "+",
    phone: "",
    email: "",
    github: "",
    website: "",
    linkedin: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    email: "",
    github: "",
    website: "",
    linkedin: "",
  });

  const validateValueChange = (valueType, value) => {
    let newMessage = "";
    switch (valueType) {
      case "phone":
        if (value.length !== PHONE_NUMBER_LENGTH) {
          newMessage = "Please enter a valid phone number!";
        }
        break;
      case "phonePrefix":
        const correctCountryCodeFormat = /^\+(\d{1}-)?(\d{1,3})$/;
        if (!value.match(correctCountryCodeFormat)) {
          newMessage = "Please enter a valid country code!";
        }
        break;
      case "email":
        if (!new RegExp(/^([\w._-]+@[\w.-]+\.[\w]{2,})$/).test(value)) {
          newMessage = "Please enter a valid email!";
        }
        break;
      // Add validation rules for GitHub, website, and LinkedIn here
      case "github":
        // Add GitHub validation logic here
        break;
      case "website":
        // Add website validation logic here
        break;
      case "linkedin":
        // Add LinkedIn validation logic here
        break;
      default:
        if (!value) {
          newMessage = "Please enter a name!";
        }
        break;
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [valueType]: newMessage,
    }));
    return newMessage === "";
  };

  const formatPhoneNumber = (phoneNumber) => {
    let numericOnlyNumber = phoneNumber.replace(/\D/g, "");
    numericOnlyNumber = numericOnlyNumber.substring(
      0,
      Math.min(PHONE_NUMBER_LENGTH, numericOnlyNumber.length)
    ); // If the number is too long, it will trim it
    return numericOnlyNumber;
  };

  const formatPhonePrefix = (phonePrefix) => {
    let formattedPrefix = phonePrefix.substring(
      0,
      Math.min(MAX_PHONE_PREFIX_LENGTH, phonePrefix.length)
    ); // Trims if the phone prefix is too long
    formattedPrefix = formattedPrefix.replace(/(?!)|[^\d-+]/g, ""); // Replaces any chars that are not a number or '-'
    return formattedPrefix;
  };

  const handleSetValueChanges = (valueType, event) => {
    let value = event.target.value;
    if (valueType === "phone") {
      value = formatPhoneNumber(value);
    } else if (valueType === "phonePrefix") {
      value = formatPhonePrefix(value);
    }
    setValues((prevValues) => ({
      ...prevValues,
      [valueType]: value,
    }));
  };

  const handlePersonalInfoSubmit = () => {
    let formIsValid = true;
    for (const [valueType, value] of Object.entries(values)) {
      if (!validateValueChange(valueType, value)) {
        formIsValid = false;
      }
    }
    if (!formIsValid) return; // Goes through each form item and returns if at least one is invalid

    // Post form logic
    let body = {
      ...values,
      phone: values.phonePrefix + values.phone,
    };
    delete body.phonePrefix;
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    // TODO: Use PUT instead of POST if user already exists
    console.log(requestOptions);
    // fetch('/resume/user', requestOptions)
    //     .then(() => console.log('Posted new user information'));
  };

  return (
    <div className="personal-form-container">
      <form className="personal-form">
        <div className="form-item">
          <input
            type="text"
            aria-label="name-input"
            value={sanitizeHTML(values.name)} // Sanitize the 'name' value
            placeholder={placeholders.name}
            size={DEFAULT_INPUT_SIZE}
            onChange={(e) => handleSetValueChanges("name", e)}
          />
          <div className="error-message" id="name-error">
            {errors.name}
          </div>
        </div>
        <div className="form-item">
          <div className="phone-form-item">
            <input
              type="text"
              className="prefix-input"
              aria-label="prefix-input"
              name="phonePrefix"
              id="phonePrefix"
              placeholder="+"
              value={sanitizeHTML(values.phonePrefix)} // Sanitize the 'phonePrefix' value
              size={MAX_PHONE_PREFIX_LENGTH}
              onChange={(e) => handleSetValueChanges("phonePrefix", e)}
            />
            <input
              type="tel"
              className="phone-input"
              aria-label="phone-input"
              name="phone"
              id="phone"
              value={sanitizeHTML(values.phone)} // Sanitize the 'phone' value
              placeholder={placeholders.phone}
              size={DEFAULT_INPUT_SIZE - 1}
              onChange={(e) => handleSetValueChanges("phone", e)}
            />
          </div>
          <div className="error-message">
            {errors.phone ? errors.phone : errors.phonePrefix}
          </div>
        </div>
        <div className="form-item">
          <input
            type="email"
            name="email"
            aria-label="email-input"
            id="email"
            value={sanitizeHTML(values.email)} // Sanitize the 'email' value
            placeholder={placeholders.email}
            size={DEFAULT_INPUT_SIZE}
            onChange={(e) => handleSetValueChanges("email", e)}
          />
          <div className="error-message">{errors.email}</div>
        </div>
        <div className="form-item">
          <input
            type="text"
            name="github"
            aria-label="github-input"
            id="github"
            value={sanitizeHTML(values.github)} // Sanitize the 'github' value
            placeholder={placeholders.github}
            size={DEFAULT_INPUT_SIZE}
            onChange={(e) => handleSetValueChanges("github", e)}
          />
          <div className="error-message">{errors.github}</div>
        </div>
        <div className="form-item">
          <input
            type="text"
            name="website"
            aria-label="website-input"
            id="website"
            value={sanitizeHTML(values.website)} // Sanitize the 'website' value
            placeholder={placeholders.website}
            size={DEFAULT_INPUT_SIZE}
            onChange={(e) => handleSetValueChanges("website", e)}
          />
          <div className="error-message">{errors.website}</div>
        </div>
        <div className="form-item">
          <input
            type="text"
            name="linkedin"
            aria-label="linkedin-input"
            id="linkedin"
            value={sanitizeHTML(values.linkedin)} // Sanitize the 'linkedin' value
            placeholder={placeholders.linkedin}
            size={DEFAULT_INPUT_SIZE}
            onChange={(e) => handleSetValueChanges("linkedin", e)}
          />
          <div className="error-message">{errors.linkedin}</div>
        </div>
      </form>
      <button
        onClick={handlePersonalInfoSubmit}
        className="update-button"
        aria-label="update-button"
      >
        Update
      </button>
    </div>
  );
}

export default PersonalInfoForm;
