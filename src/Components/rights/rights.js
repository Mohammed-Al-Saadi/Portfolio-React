import React from "react";

const Rights = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        textAlign: "center",
        padding: "1rem",
        color: "gray",
      }}
    >
      <p>All rights reserved &copy; Mohammed Al-Saadi {currentYear}</p>
    </footer>
  );
};

export default Rights;
