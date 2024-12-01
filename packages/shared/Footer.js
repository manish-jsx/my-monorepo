import React from "react";

const Footer = ({ text }) => {
  return (
    <footer style={{ padding: "10px", backgroundColor: "#f5f5f5", textAlign: "center" }}>
      <p>{text}</p>
    </footer>
  );
};

export default Footer;