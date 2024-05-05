import React from "react";
import Button from "@mui/material/Button"; // Importing Button component from MUI

// This function defines a reusable MUI Button component
function MUIButton({ children, ...rest }) {
  return (
    <div>
      {/* MUI Button with styling */}
      <Button
        {...rest}
        variant="contained" // Contained button style
        sx={{
          backgroundColor: "#ff69b4", // Pink background
          color: "#ffffff", // White text color
          fontWeight: "bold", // Make text bold
          "&:hover": {
            backgroundColor: "#ff1493", // Darker pink background on hover
          },
        }}
      >
        {children} {/* Button label */}
      </Button>
    </div>
  );
}

// Export the MUIButton component as the default export
export default MUIButton;
