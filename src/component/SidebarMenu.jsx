import React, { useState, useEffect } from "react";
import { Twitter, Linkedin, Globe, Camera } from "lucide-react";
 // built-in icons

const SidebarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Responsiveness
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Sidebar width: partial screen, leaving left space
  const sidebarWidth = screenWidth < 600 ? "80%" : "400px";

  return (
    <div style={{position: "relative", fontFamily: "Arial, sans-serif" }}>
      {/* ✅ Green Circular Hamburger (Top Right) */}
      <div
        onClick={toggleMenu}
        style={{
          width: screenWidth < 600 ? "45px" : "55px",
          height: screenWidth < 600 ? "45px" : "55px",
          backgroundColor: "#4CAF50",
          borderRadius: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: "pointer",
          position: "fixed",
          top: "20px",
          right: "20px",
          zIndex: 1001,
          boxShadow: "0 3px 6px rgba(0,0,0,0.2)",
        }}
      >
        <div style={barStyle}></div>
        <div style={barStyle}></div>
        <div style={barStyle}></div>
      </div>

      {/* ✅ Sidebar Overlay (Partial Width, Right-Side Drawer) */}
      <div
        style={{
          position: "fixed",
          top: 0,
          right: isOpen ? 0 : `-${sidebarWidth}`,
          width: sidebarWidth,
          height: "100%",
          background: "rgba(0, 128, 0, 0.95)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "0px 0px 0px",
          transition: "right 0.4s ease",
          zIndex: 1000,
          overflowY: "auto",
        }}
      >
        {/* ✅ Close Button (Now on Left) */}
        <span
          onClick={toggleMenu}
          style={{
            position: "absolute",
            top: "25px",
            left: "30px",
            fontSize: screenWidth < 600 ? "32px" : "40px",
            cursor: "pointer",
            color: "white",
            fontWeight: "bold",
          }}
        >
          &times;
        </span>

        {/* ✅ Navigation Links */}
        <div style={{ marginTop: "100px", marginLeft: "20px" }}>
          <a href="/" style={linkStyle}>
            Home
          </a>
          <a href="/about" style={linkStyle}>
            About Us
          </a>
          <a href="#services" style={linkStyle}>
            Services
          </a>
          <a href="#pages" style={linkStyle}>
            Pages ▾
          </a>
          <a href="#blog" style={linkStyle}>
            Blog
          </a>
          <a href="/contact" style={linkStyle}>
            Contact Us
          </a>
          <a href="#buy" style={{ ...linkStyle, fontWeight: "bold" }}>
            Buy XTRA Theme
          </a>
        </div>

        {/* ✅ Footer with Social Icons */}
        <div
            style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            gap: "20px",
            marginTop: "40px",
            marginLeft: "20px"
                    }}
            >
             <a href="#" style={iconLink}><Globe size={22} color="white" /></a>      {/* Facebook replacement */}
            <a href="#" style={iconLink}><Twitter size={22} color="white" /></a>
            <a href="#" style={iconLink}><Linkedin size={22} color="white" /></a>
            <a href="#" style={iconLink}><Camera size={22} color="white" /></a>     {/* Instagram replacement */}
        </div>

      </div>
    </div>
  );
};

// ✅ Styles
const barStyle = {
  width: "22px",
  height: "3px",
  backgroundColor: "white",
  margin: "3px 0",
  borderRadius: "2px",
};

const linkStyle = {
  display: "block",
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  margin: "15px 0",
  fontWeight: "600",
  cursor: "pointer",
  transition: "opacity 0.3s ease",
};

const iconLink = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  textDecoration: "none",
  cursor: "pointer",
  transition: "opacity 0.3s ease",
};

export default SidebarMenu;
