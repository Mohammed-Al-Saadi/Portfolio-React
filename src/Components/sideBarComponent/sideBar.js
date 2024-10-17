import React, { useState, useEffect } from "react";
import "./sideBar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import navItemsData from "./navItems.json";
import { icons, getActiveLinkOnScroll } from "./sidebarUtils";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const newActiveLink = getActiveLinkOnScroll();
      if (newActiveLink) {
        setActiveLink(newActiveLink);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className="navbar">
        <ul className="nav-list-large">
          {navItemsData.map((item) => (
            <li key={item.id} className="nav-item">
              <HashLink
                smooth
                to={item.path}
                className={`nav-link ${activeLink === item.path ? "active" : ""}`}
                onClick={() => handleLinkClick(item.path)}
              >
                <span className="nav-icon">{icons[item.icon]}</span>
                <span className="nav-text">{item.name}</span>
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebae-icon" onClick={toggleSidebar}>
          {!isOpen ? (
            <CiMenuFries color="white" size={30} />
          ) : (
            <IoCloseOutline color="white" size={30} />
          )}
        </div>
        <ul className="nav-list">
          {navItemsData.map((item) => (
            <li key={item.id} className="icon-container">
              <HashLink
                smooth
                to={item.path}
                className={`nav-link ${activeLink === item.path ? "active" : ""}`}
                onClick={() => handleLinkClick(item.path)}
              >
                <span className="nav-icon">{icons[item.icon]}</span>
                <span className="nav-item-text">{item.name}</span>
              </HashLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
