"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Reason3() {
  const [isBefore, setIsBefore] = useState(true);

  // Toggle the photo on click with a smooth animation
  const handlePhotoClick = () => {
    setIsBefore(!isBefore);
  };

  return (
    <div
      className="relative flex flex-col justify-center items-center min-h-screen p-4 text-white font-sans transition-all duration-500 ease-in-out"
      style={{
        background: isBefore
          ? "linear-gradient(to top right, #f9a8d4, #f43f5e)"
          : "linear-gradient(to top right, #1e3a8a, #3b82f6)",
      }}
    >
      {/* الخلفية المتحركة */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 z-0 pointer-events-none ${
          isBefore ? "bg-hearts" : "bg-tears"
        }`}
      />

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-3xl font-bold text-center z-10"
      >
        Click on the photo
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-4 text-3xl font-bold text-center z-10"
      >
        {isBefore ? "When We Were Together..." : "After You Dumped Me 😭"}
      </motion.h1>

      {/* Funny Text */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-lg text-center z-10"
      >
        {isBefore
          ? "Look how happy I was... 🥰"
          : "Now I'm just a sad potato... 🥔"}
      </motion.p>

      {/* Image */}
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isBefore ? 1 : 1.1 }}
        transition={{ duration: 0.5 }}
        className="cursor-pointer z-10"
        onClick={handlePhotoClick}
      >
        <img
          src={isBefore ? "/photos/download1.jpeg" : "/photos/download.png"}
          alt="Before and After"
          className="w-[400px] h-auto rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out"
          style={{
            transform: isBefore ? "rotate(0deg)" : "rotate(-5deg)",
          }}
        />
      </motion.div>

      {/* Button to Next Page */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mt-8 flex items-center justify-center gap-x-4 z-10"
      >
        <Link href="/reason4" legacyBehavior>
          <a className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 animate-bounce">
            Go to Reason Four
          </a>
        </Link>
      </motion.div>

      {/* الخلفية المتحركة (قلوب أو دموع) */}
      <style jsx>{`
        .bg-hearts {
          background-image: url("/photos/hearts.gif"); /* ضع مسار الـ GIF لقلوب هنا */
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          animation: moveHearts 5s linear infinite;
        }

        .bg-tears {
          background-image: url("/photos/tears.gif"); /* ضع مسار الـ GIF لدموع هنا */
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
          animation: moveTears 5s linear infinite;
        }

        @keyframes moveHearts {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }

        @keyframes moveTears {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100% 100%;
          }
        }
      `}</style>
    </div>
  );
}
