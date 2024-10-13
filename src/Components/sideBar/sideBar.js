import React, { useState, useEffect } from "react";
import "./sideBar.css";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";
import { IoHomeOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { MdCastForEducation } from "react-icons/md";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import { GiSkills } from "react-icons/gi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash);

  // Array of navigation items with paths and IDs
  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "#home",
      elementId: "home",
      icon: <IoHomeOutline size={24} />,
    },
    {
      id: 2,
      name: "About",
      path: "#education",
      elementId: "education",
      icon: <MdCastForEducation size={24} />,
    },
    {
      id: 3,
      name: "Projects",
      path: "#projects",
      elementId: "projects",
      icon: <LiaProjectDiagramSolid size={24} />,
    },
    {
      id: 5,
      name: "Contact",
      path: "#contact",
      elementId: "contact",
      icon: <TiMessages size={24} />,
    },
  ];

  // Function to toggle the sidebar open/close
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle link click and set active link
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false); // Close the sidebar on link click (for mobile view)
  };

  // Scroll event listener to update active link based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Find the section currently in view
      const currentSection = navItems.find((item) => {
        const element = document.getElementById(item.elementId);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
        }
        return false;
      });

      if (currentSection) {
        setActiveLink(`#${currentSection.elementId}`);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems]);

  return (
    <>
      {/* Top Navbar (Visible on larger screens) */}
      <nav className="navbar">
        <ul className="nav-list-large">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <HashLink
                smooth
                to={item.path}
                className={`nav-link ${activeLink === item.path ? "active" : ""}`}
                onClick={() => handleLinkClick(item.path)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-text">{item.name}</span>
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar (Visible on smaller screens) */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebae-icon" onClick={toggleSidebar}>
          {!isOpen ? (
            <CiMenuFries color="white" size={30} />
          ) : (
            <IoCloseOutline color="white" size={30} />
          )}
        </div>
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.id} className="icon-container">
              <HashLink
                smooth
                to={item.path}
                className={`nav-link ${activeLink === item.path ? "active" : ""}`}
                onClick={() => handleLinkClick(item.path)}
              >
                <span className="nav-icon">{item.icon}</span>
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
