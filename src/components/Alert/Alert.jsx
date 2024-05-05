import React from "react";
import { Alert as MuiAlert } from "@mui/material"; // Import Alert component from MUI

// This function creates a reusable Alert component
function Alert(props) {
  // Returns a MuiAlert component with the provided props
  return <MuiAlert {...props} />;
}

// Exports the Alert component for use in other files
export default Alert;
