// sidebarUtils.js
import { IoHomeOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { MdCastForEducation } from "react-icons/md";
import { LiaProjectDiagramSolid } from "react-icons/lia";
import navItemsData from "./navItems.json";

// Icon mapping based on icon name
export const icons = {
  IoHomeOutline: <IoHomeOutline size={24} />,
  MdCastForEducation: <MdCastForEducation size={24} />,
  LiaProjectDiagramSolid: <LiaProjectDiagramSolid size={24} />,
  TiMessages: <TiMessages size={24} />,
};

// Utility to get the active link based on scroll position
export const getActiveLinkOnScroll = () => {
  const scrollPosition = window.scrollY + window.innerHeight / 2;
  const currentSection = navItemsData.find((item) => {
    const element = document.getElementById(item.elementId);
    if (element) {
      const offsetTop = element.offsetTop;
      const offsetBottom = offsetTop + element.offsetHeight;
      return scrollPosition >= offsetTop && scrollPosition < offsetBottom;
    }
    return false;
  });

  return currentSection ? `#${currentSection.elementId}` : null;
};
