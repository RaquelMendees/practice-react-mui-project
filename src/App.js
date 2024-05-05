import React from "react";
import MUIButton from "./components/MUIButton/MUIButton"; // Importing custom MUIButton component
import SwitchButton from "./components/Switch/SwitchButton"; // Importing custom SwitchButton component
import Alert from "./components/Alert/Alert"; // Importing custom Alert component
import Box from "@mui/material/Box"; // Importing Box component from MUI

// This function defines the main App component
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {/* Title */}
      <h1
        style={{
          fontFamily: "Comic Sans MS",
          color: "purple",
          textDecoration: "underline",
        }}
      >
        React with MUI Components:
      </h1>
      {/* Container for MUI components */}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between", // Centers and spaces between
        }}
      >
        {/* Alert component */}
        <Alert variant="outlined" severity="info" style={{ width: "200px" }}>
          This is an alert!
        </Alert>
        {/* MUIButton component */}
        <MUIButton style={{ width: "150px" }}>This is a button!</MUIButton>
        {/* Box component for SwitchButton */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              border: "2px double #ff69b4", // Double pink border
              padding: "15px", // Padding around the text
              borderRadius: "4px", // Rounded corners
            }}
          >
            {/* Text describing SwitchButton */}
            <p style={{ margin: "0", fontWeight: "bold" }}>
              This is a switch button in React using MUI ->
            </p>
          </Box>
          {/* SwitchButton component */}
          <SwitchButton />
        </div>
      </div>
    </div>
  );
}

// Exports the App component as the default export
export default App;
