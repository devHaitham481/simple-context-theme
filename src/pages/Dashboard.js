import React, { useEffect, useRef, useState } from "react";
import ColorPicker from "../components/ColorPicker";
import { Button, Col, Row } from "antd";
import { useThemeContext } from "../context/theme-context";

const Dashboard = () => {
  const { theme, setTheme, logo, setLogo } = useThemeContext();
  const [isVisible, setIsVisible] = useState(false);
  const logoInputRef = useRef();

  const handleClick = () => {
    !isVisible ? setIsVisible(!isVisible) : setIsVisible(true);
  };

  const selectLogoHandler = (event) => {
    const file = event.target.files[0];

    file && file.type.substr(0, 5) === "image" ? setLogo(file) : setLogo(null);

    if (file && file.type.substr(0, 5) === "image") {
      const reader = new FileReader();

      reader.onloadend = () => {
        setLogo(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="dashboard-container">
        <h1>User Dashboard</h1>

        {logo && (
          <div>
            <img alt="not found" width={"250px"} src={logo} />
            <button onClick={() => setLogo(null)}>Remove Logo</button>
          </div>
        )}

        <br />
        <div className="theme-color">
          <div className="color-picker-toggle">
            <Button
              className="theme-color"
              style={{ backgroundColor: theme.primary, color: theme.tertiary }}
              onClick={handleClick}
            >
              {" "}
            </Button>
            <p>Change Theme</p>
          </div>
          <input
            type="file"
            onChange={selectLogoHandler}
            accept="image/*"
            style={{ display: "none" }}
            ref={logoInputRef}
          ></input>
          <Button
            onClick={(event) => {
              event.preventDefault();
              logoInputRef.current.click();
            }}
          >
            Add new logo
          </Button>
        </div>
      </div>
      <div>
        {isVisible && (
          <div className="color-picker">
            <button onClick={() => setIsVisible(false)}>
              close color picker
            </button>
            <div>
              <ColorPicker />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
