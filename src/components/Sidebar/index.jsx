import React, { useState } from "react";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
  const [openMenus, setOpenMenus] = useState({});

  // const toggleMenu = (menuName) => {
  // setOpenMenus((prev) => ({
  // ...prev,
  // [menuName]: !prev[menuName],
  // }));
  // }; can open all submenu in the same time


  const toggleMenu = (menuName) => {
    setOpenMenus((prev) => {
      // If the same menu is clicked again, toggle it off
      if (prev[menuName]) return {};
      // Else, close all and open the clicked one
      return { [menuName]: true };
    });
  };


  return (
    <div className="sidebar">
      <ul>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DashboardIcon />
            </span>
            Dashboard
          </Button>
        </li>
        <li>
          <Button className="w-100">
            <span className="icon">
              <DashboardIcon />
            </span>
            Cases
          </Button>
        </li>

        {/* Submenu 1 */}
        <li>
          <Button className="w-100" onClick={() => toggleMenu("complaints")}>
            <span className="icon">
              <DashboardIcon />
            </span>
            User Complaints
            <span
              className={`arrow ${openMenus["complaints"] ? "rotate" : ""}`}
            >
              <KeyboardArrowRightIcon />
            </span>
          </Button>
          <Collapse in={openMenus["complaints"]}>
            <div className="submenuWrapper">
              <ul className="submenu">
                <li>User 1</li>
                <li>User 2</li>
                <li>User 3</li>
              </ul>
            </div>
          </Collapse>
        </li>

        {/* Submenu 2 */}
        <li>
          <Button className="w-100" onClick={() => toggleMenu("permissions")}>
            <span className="icon">
              <DashboardIcon />
            </span>
            Permission
            <span
              className={`arrow ${openMenus["permissions"] ? "rotate" : ""}`}
            >
              <KeyboardArrowRightIcon />
            </span>
          </Button>
          <Collapse in={openMenus["permissions"]}>
            <div className="submenuWrapper">
              <ul className="submenu">
                <li>Role 1</li>
                <li>Role 2</li>
              </ul>
            </div>
          </Collapse>
        </li>

        <li>
          <Button className="w-100">
            <span className="icon">
              <SettingsIcon />
            </span>
            Settings
          </Button>
        </li>
      </ul>
      <br />
      <div class="logoutWrapper">
        <div class="logoutBox">
          <Button className="gap-2">
            <LogoutIcon fontSize="small" />
            <span>Logout</span>
          </Button>
        </div>
      </div>

    </div>
  );
};

export default Sidebar;