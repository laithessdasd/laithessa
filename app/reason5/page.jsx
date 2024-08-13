"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Reason2() {
  const [fireworks, setFireworks] = useState(false);
  const [noButtonStyle, setNoButtonStyle] = useState({
    position: "relative",
    marginLeft: "10px",
  });
  const [showNextButton, setShowNextButton] = useState(false);

  // Fireworks effect on 'Yes' button click
  const handleYesClick = () => {
    setFireworks(true);
    setTimeout(() => {
      setFireworks(false); // Turn off fireworks after some time
      setShowNextButton(true); // Show the next button after fireworks
    }, 3000); // Fireworks duration in milliseconds
  };

  // Move 'No' button randomly on mouse hover
  const handleNoHover = () => {
    const randomX = Math.floor(Math.random() * 80); // Random percentage for left
    const randomY = Math.floor(Math.random() * 80); // Random percentage for top
    setNoButtonStyle({
      ...noButtonStyle,
      top: `${randomY}%`,
      left: `${randomX}%`,
      transform: "translate(-50%, -50%)",
      position: "absolute",
    });
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to top right, #f9a8d4, #f43f5e)", // Same gradient as previous pages
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Question Text */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        And Now Do you want to go on a date with me?
      </motion.h1>

      {/* Button Container */}
      <div style={{ display: "flex", marginTop: "20px" }}>
        {/* Yes Button */}
        <motion.button
          onClick={handleYesClick}
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            color: "#fff",
            backgroundColor: "#4CAF50", // Updated color
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginRight: "10px", // Space between buttons
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            transition: "transform 0.3s ease",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Yes
        </motion.button>

        {/* No Button */}
        <motion.button
          onMouseEnter={handleNoHover} // Move on mouse hover
          style={{
            ...noButtonStyle,
            padding: "10px 20px",
            fontSize: "18px",
            color: "#fff",
            backgroundColor: "#FF5733", // Updated color
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          No
        </motion.button>
      </div>

      {/* Fireworks Animation */}
      {fireworks && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 10,
          }}
        >
          {/* Fireworks Effect */}
          <img
            src="https://i.giphy.com/duNowzaVje6Di3hnOu.webp"
            alt="Fireworks"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              pointerEvents: "none",
            }}
          />
        </div>
      )}

      {/* Next Page Button */}
      {showNextButton && (
        <motion.div
          style={{ marginTop: "30px", textAlign: "center" }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <p style={{ fontSize: "1.2rem", marginBottom: "10px" }}>
            Once you've enjoyed the fun, click the button below to proceed to
            the final section!
          </p>
          <Link href="/realthing">
            <motion.button
              style={{
                padding: "10px 20px",
                fontSize: "18px",
                color: "#fff",
                backgroundColor: "#4682B4", // Updated color
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                transition: "background-color 0.3s ease",
              }}
              whileHover={{ backgroundColor: "#4169E1" }}
              whileTap={{ scale: 0.95 }}
            >
              Proceed to Final Section →
            </motion.button>
          </Link>
        </motion.div>
      )}
    </div>
  );
}
