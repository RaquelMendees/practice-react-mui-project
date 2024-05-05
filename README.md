# React with MUI Components

This project demonstrates the usage of Material-UI (MUI) components in a React application. It includes custom components like buttons, alerts, and switches, all styled using MUI's design system.

## Project Overview

This React project uses custom components built with Material-UI to show various UI elements:

- **Alert**: Displays informative alerts with different severity levels.
- **Button**: Utilizes various types of buttons with custom styling.
- **Switch**: Implements toggle switches for enabling/disabling features.

## Folder Structure

- **src/components**: Contains custom React components.
  - **MUIButton**: Custom button component with MUI styling.
  - **SwitchButton**: Custom switch component with MUI styling.
  - **Alert**: Custom alert component with MUI styling.
- **src/App.js**: Main application component.
- **public**: Contains the HTML template and static assets.

## Project Setup

1. **Clone the repository**: `git clone https://github.com/RaquelMendees/react-mui-components.git`
2. **Navigate to the project directory**: `cd react-mui-components`
3. **Install dependencies**: `npm install`
4. **Start the development server**: `npm start`
5. **Open your browser**: Navigate to [http://localhost:3000](http://localhost:3000) to view the app.

## Components Usage

- **Alert Component**:
  - Utilize the `Alert` component to display informative alerts.
  - Customize the `variant`, `severity`, and `style` props as needed.

- **Button Component**:
  - Use the `MUIButton` component for various types of buttons.
  - Customize the button text and styling using the `children` and `style` props.

- **Switch Component**:
  - Implement the `SwitchButton` component for toggle switches.
  - Customize switch properties such as `defaultChecked` and `color`.

## Customization

- Modify existing components in `src/components` to create custom UI elements.
- Adjust component styles and themes in `src/App.js` to match your design requirements.

## Technologies Used

- [React]
- [Material-UI]
- [npm]
