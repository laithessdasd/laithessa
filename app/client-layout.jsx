"use client"; // Indicates that this file is a Client Component

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientLayout({ children }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // Ensure this is used in client-side code
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
