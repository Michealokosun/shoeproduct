import React from "react";
import { useContext } from "react";
import "./button.css";
import { themeContext } from "../../App";
import Button from "react-bootstrap/Button";
export default function ButtonComp({ iconName }) {
  const { handleTheme } = useContext(themeContext);
  const { theme } = useContext(themeContext);
  return (
    <div>
      <Button
        onClick={handleTheme}
        variant={theme ? "outline-dark" : "outline-light"}
      >
        {iconName}
      </Button>
    </div>
  );
}
