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
// sidebarUtils.js

export function getActiveLinkOnScroll(offset = 100) {
  const scrollY = window.pageYOffset;
  const sections = document.querySelectorAll("section[id]");

  for (const section of sections) {
    const rect = section.getBoundingClientRect();
    // page-relative top of section, minus a little offset for early activation:
    const sectionTop = rect.top + window.scrollY - offset;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionBottom) {
      return `#${section.id}`;
    }
  }

  return null;
}
