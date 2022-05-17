import React from "react";
import { Menu, Breadcrumb } from "antd";

function Navbar() {
  const items1 = ["1", "2", "3"].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      items={items1}
    />
  );
}

export default Navbar;
