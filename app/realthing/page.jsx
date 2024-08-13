"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const imageCount = 10; // Number of images

const getImageSrc = (index) => `/images/${index + 1}.jpeg`;

export default function Gallery() {
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const newVisibleImages = Array.from({ length: imageCount })
        .map((_, index) => {
          const imageElement = document.getElementById(`image-${index}`);
          if (imageElement) {
            const imagePosition =
              imageElement.getBoundingClientRect().top + window.scrollY;
            return scrollPosition > imagePosition ? getImageSrc(index) : null;
          }
          return null;
        })
        .filter(Boolean);
      setVisibleImages(newVisibleImages);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger the scroll handler initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        background: "linear-gradient(to top right, #f9a8d4, #f43f5e)", // Consistent gradient
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          marginBottom: "40px",
          fontSize: "2.5rem",
          fontWeight: "bold",
          color: "#ff6b6b",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
        }}
      >
        🌟 This is my Snow White 🌟
      </motion.h1>

      {/* Gallery Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
          gap: "20px",
        }}
      >
        {Array.from({ length: imageCount }).map((_, index) => (
          <motion.div
            key={index}
            id={`image-${index}`}
            style={{
              position: "relative",
              width: "400px",
              height: "300px",
              margin: "10px",
              overflow: "hidden",
              borderRadius: "15px",
              boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
              opacity: visibleImages.includes(getImageSrc(index)) ? 1 : 0,
              transition: "opacity 0.7s ease, transform 0.7s ease",
              transform: visibleImages.includes(getImageSrc(index))
                ? "scale(1)"
                : "scale(0.95)",
              transformOrigin: "center",
              backgroundColor: "#fff",
              padding: "5px",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <img
              src={getImageSrc(index)}
              alt={`Image ${index + 1}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "15px",
                transition: "transform 0.5s ease",
                cursor: "pointer",
              }}
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Fun Caption */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        style={{
          fontSize: "1.2rem",
          marginTop: "20px",
          color: "#555",
          fontWeight: "lighter",
        }}
      >
        🎉 Dive into the gallery of my favorite photos of my month! ✨<br />
        Hover over the images to see them pop! 🎈 love you so much and hope you
        like this funny thing :)
      </motion.p>
    </div>
  );
}
