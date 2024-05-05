// Importing React and the Switch component from MUI library
import React from "react";
import Switch from "@mui/material/Switch";

// This object contains input properties for the Switch component
const label = { inputProps: { "aria-label": "Switch demo" } };

// This function defines a component called SwitchButton
function SwitchButton() {
  // This component renders a Switch component with specified properties
  return <Switch {...label} defaultChecked color="secondary" />;
}

// Exports the SwitchButton component as the default export
export default SwitchButton;
