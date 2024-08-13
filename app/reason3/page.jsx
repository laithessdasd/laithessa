"use client";

import { useState } from "react";
import Link from "next/link";

export default function Reason3() {
  const [isBefore, setIsBefore] = useState(true);

  // Toggle the photo on click with a smooth animation
  const handlePhotoClick = () => {
    setIsBefore(!isBefore);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to top right, #f9a8d4, #f43f5e)",
        fontFamily: "'Poppins', sans-serif",
        color: "#fff",
        transition: "all 0.5s ease",
        textAlign: "center",
        padding: "1rem",
      }}
    >
      {/* Title */}
      <h1
        style={{
          marginBottom: "10px",
          fontSize: "2rem",
          transition: "all 0.5s ease",
          fontWeight: "bold",
        }}
      >
        click on the photo
      </h1>

      <h1
        style={{
          marginBottom: "10px",
          fontSize: "2rem",
          transition: "all 0.5s ease",
        }}
      >
        {isBefore ? "When We Were Together..." : "After You Dumped Me 😭"}
      </h1>

      {/* Funny Text */}
      <p
        style={{
          marginBottom: "20px",
          fontSize: "1.2rem",
          textAlign: "center",
          transition: "all 0.5s ease",
        }}
      >
        {isBefore
          ? "Look how happy I was... 🥲"
          : "Now I'm just a sad potato... 🥔"}
      </p>

      {/* Image */}
      <div
        style={{
          cursor: "pointer",
          transition: "transform 0.5s ease",
          transform: isBefore ? "scale(1)" : "scale(1.1)",
        }}
        onClick={handlePhotoClick}
      >
        <img
          src={isBefore ? "/photos/download1.jpeg" : "/photos/download.png"}
          alt="Before and After"
          style={{
            width: "400px",
            height: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            transition: "transform 0.5s ease",
            transform: isBefore ? "rotate(0deg)" : "rotate(-5deg)",
          }}
        />
      </div>

      {/* Button to Next Page */}
      <div className="mt-8 flex items-center justify-center gap-x-4">
        <a
          href="/reason4"
          className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 animate-bounce"
        >
          Go to Reason four
        </a>
      </div>
    </div>
  );
}
