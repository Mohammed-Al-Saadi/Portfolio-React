import React, { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";
import navItemsData from "./navItems.json";
import { icons } from "./sidebarUtils";
import "./sideBar.css";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  // start with whatever hash is in the URL, or default to first nav
  const [activeLink, setActiveLink] = useState(
    window.location.hash || navItemsData[0].path
  );

  useEffect(() => {
    // sync on hash clicks
    const onHashChange = () => setActiveLink(window.location.hash);
    window.addEventListener("hashchange", onHashChange);

    // observe sections and pick the one that's most visible
    const observer = new IntersectionObserver(
      (entries) => {
        // filter for ones actually in view
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          // pick whichever has the largest visible area
          const mostVisible = visible.reduce((best, e) =>
            e.intersectionRatio > best.intersectionRatio ? e : best
          );
          setActiveLink(`#${mostVisible.target.id}`);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        // trigger whenever visibility crosses any of these ratios
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    // observe each section by its elementId
    navItemsData.forEach((item) => {
      const el = document.getElementById(item.elementId);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("hashchange", onHashChange);
      observer.disconnect();
    };
  }, []);

  const toggleSidebar = () => setIsOpen((o) => !o);

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
                className={`nav-link${activeLink === item.path ? " active" : ""}`}
                onClick={() => setActiveLink(item.path)}
              >
                <span className="nav-icon">{icons[item.icon]}</span>
                <span className="nav-text">{item.name}</span>
              </HashLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar${isOpen ? " open" : ""}`}>
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
                className={`nav-link${activeLink === item.path ? " active" : ""}`}
                onClick={() => {
                  setActiveLink(item.path);
                  setIsOpen(false);
                }}
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
}
