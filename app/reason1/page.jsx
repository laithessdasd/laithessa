"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ClientLayout from "../client-layout";

export default function Reason1() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getTimeLeft() {
    const endDate = new Date(new Date().getFullYear() + 1, 0, 1);
    const now = new Date();
    const difference = endDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <ClientLayout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-purple-200 to-blue-300 font-sans">
        {/* الخلفية المتحركة */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 animate-pulse"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-400 to-indigo-500 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 animate-pulse transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-400 to-indigo-500 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* العنوان */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl font-extrabold tracking-tight text-indigo-900 sm:text-6xl lg:text-7xl text-center"
        >
          THE FIRST REASON
        </motion.h1>

        {/* المؤقت */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
          <div className="flex space-x-4 text-center text-white text-5xl md:text-7xl font-bold">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="block text-6xl">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span className="text-lg">Days</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex flex-col items-center"
            >
              <span className="block text-6xl">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-lg">Hours</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col items-center"
            >
              <span className="block text-6xl">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-lg">Minutes</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              className="flex flex-col items-center"
            >
              <span className="block text-6xl">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-lg">Seconds</span>
            </motion.div>
          </div>

          {/* الرسالة النصية */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1.5 }}
            className="text-center text-white text-lg md:text-xl font-semibold mt-8"
          >
            <p>🌍 In one year, I'll be traveling to Germany.</p>
            <p>
              ✈️ Our first date might be in the Netherlands, just as we planned.
              Let's make it happen!
            </p>
          </motion.div>

          {/* زر الانتقال إلى السبب الثاني */}
          <motion.a
            href="/reason2"
            className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-md hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Go to Reason Two
          </motion.a>
        </div>
      </div>
    </ClientLayout>
  );
}
