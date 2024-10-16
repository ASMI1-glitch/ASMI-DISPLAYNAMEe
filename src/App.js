import React, { useState } from "react";
import "./styles.css"; // Ensure this file exists

function App() {
  const [firstName, setFirstName] = useState(""); // State for first name
  const [lastName, setLastName] = useState(""); // State for last name
  const [fullName, setFullName] = useState(""); // State for full name
  const [error, setError] = useState(""); // State for error messages

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    console.log("Form submitted"); // Debugging line

    // Validate inputs
    if (!firstName.trim() || !lastName.trim()) {
      setError("Both fields are required.");
      return; // Exit if validation fails
    }

    // Set full name but keep inputs for further modification
    setFullName(`${firstName} ${lastName}`);
    setError(""); // Clear any previous error message
    // Do not reset input fields here to allow for editing
  };

  return (
    <div className="App">
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)} // Update state on change
            required
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)} // Update state on change
            required
          />
        </div>
        <button type="submit">Submit</button> {/* Submit button */}
      </form>
      {error && <p className="error">{error}</p>}
      {fullName && <h2>Full Name: {fullName}</h2>} {/* Display full name */}
    </div>
  );
}

export default App; // Ensure you export the component correctly
