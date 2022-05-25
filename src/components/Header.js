import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PageHeader, Menu, Dropdown, Button, Tag, Typography, Row } from "antd";
import { useThemeContext } from "../context/theme-context";

const { Paragraph } = Typography;

const content = (
  <>
    <Paragraph>
      This app should serve as a proof of concept of changing theme colors using
      a color picker component placed in a dashboard page and a manual uploading
      of site logo and persisting it throughout site pages
    </Paragraph>

    <div></div>
  </>
);

const ContentComponent = ({ children, extraContent }) => (
  <Row>
    <div style={{ flex: 1 }}>{children}</div>
    <div className="image">{extraContent}</div>
  </Row>
);

const HeaderComponent = () => {
  const { theme, setTheme, logo, setLogo } = useThemeContext();
  const backgroundColor = {
    backgroundColor: theme.primary,
  };
  const color = {
    color: theme.secondary,
  };
  return (
    <div className="header-container">
      {/* {logo && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(logo)}
          />
          <button onClick={() => setLogo(null)}>Remove Logo</button>
        </div>
      )} */}
      {logo && (
        <div>
          <img alt="not found" width={"250px"} src={logo} />
        </div>
      )}
      <PageHeader
        title="Test Theme Context Header"
        className="site-page-header"
        subTitle="dk"
        extra={[
          <Button
            href="/dashboard"
            style={{ backgroundColor: theme.primary, color: theme.secondary }}
            key="1"
            type="link"
          >
            Dashboard
          </Button>,
          <Button
            href="/dashboard"
            style={{ backgroundColor: theme.primary, color: theme.secondary }}
            key="1"
            type="link"
          >
            User
          </Button>,
          <Button
            href="/dashboard"
            style={{ backgroundColor: theme.primary, color: theme.secondary }}
            key="1"
            type="link"
          >
            Account
          </Button>,
        ]}
      >
        {" "}
        <ContentComponent>{content}</ContentComponent>
      </PageHeader>
    </div>
  );
};

export default HeaderComponent;
