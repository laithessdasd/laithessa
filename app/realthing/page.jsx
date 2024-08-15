"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const imageCount = 10; // Number of images

const getImageSrc = (index) => `/images/${index + 1}.jpeg`;

export default function ProtectedGallery() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [visibleImages, setVisibleImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [message, setMessage] = useState("");

  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handlePasswordSubmit = () => {
    if (password === "2622004") {
      setIsAuthenticated(true);
      // Set up scroll listener after authentication
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
    } else {
      alert("Incorrect password, please try again.");
    }
  };

  const handleImageClick = (index) => {
    setSelectedImage(getImageSrc(index));
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
    setMessage("");
  };

  return (
    <div
      style={{
        background: "linear-gradient(to top right, #f9a8d4, #f43f5e)",
        color: "#fff",
        fontFamily: "'Poppins', sans-serif",
        textAlign: "center",
        padding: "20px",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      {!isAuthenticated ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              marginBottom: "20px",
              fontSize: "2.5rem",
              fontWeight: "bold",
              color: "#ff6b6b",
            }}
          >
            Enter Password
          </motion.h1>
          <motion.input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{
              padding: "10px",
              fontSize: "1.2rem",
              borderRadius: "10px",
              border: "none",
              marginBottom: "20px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
              textAlign: "center",
              width: "250px",
            }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.button
            onClick={handlePasswordSubmit}
            style={{
              padding: "10px 20px",
              fontSize: "1.2rem",
              color: "#fff",
              backgroundColor: "#4CAF50",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit
          </motion.button>
        </div>
      ) : (
        <div>
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
                  cursor: "pointer",
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                onClick={() => handleImageClick(index)}
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
                  }}
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
            Hover over the images to see them pop! 🎈 love you so much and hope
            you like this funny thing :)
          </motion.p>

          {/* Lightbox */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 1000,
                  padding: "20px",
                  boxSizing: "border-box",
                }}
                onClick={handleCloseLightbox}
              >
                <motion.img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    maxWidth: "90%",
                    maxHeight: "70%",
                    borderRadius: "15px",
                    marginBottom: "20px",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.5)",
                    cursor: "pointer",
                  }}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="love you يلا حاج "
                  style={{
                    width: "80%",
                    maxWidth: "500px",
                    padding: "10px",
                    borderRadius: "10px",
                    border: "none",
                    fontSize: "1.2rem",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  );
}
