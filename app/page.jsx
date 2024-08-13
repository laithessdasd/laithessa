"use client";

import { motion } from "framer-motion";
import ClientLayout from "./client-layout";

export default function HomePage() {
  return (
    <ClientLayout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-pink-200 to-red-300 font-sans">
        <header className="absolute inset-x-0 top-0 z-50">
          {/* لا حاجة للـ Navbar هنا */}
        </header>

        {/* قلوب متحركة */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute text-red-500"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, repeat: Infinity, delay: index * 0.2 }}
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: `${Math.random() * 24 + 24}px`,
              }}
            >
              ❤️
            </motion.div>
          ))}
        </div>

        <div className="relative isolate px-6 pt-14 lg:px-8">
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
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-pink-300 to-red-400 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mx-auto max-w-xl py-24 sm:py-32 lg:py-48 z-10 relative"
          >
            <div className="text-center">
              <h1 className="text-3xl font-extrabold tracking-tight text-red-900 sm:text-5xl lg:text-6xl">
                Why We Should Get Back Together ❤️
              </h1>
              <p className="mt-4 text-lg leading-8 text-gray-700 sm:text-xl">
                Let's put aside our differences, remember the good times, and
                create new memories together. 💑
              </p>
              <p className="mt-4 text-xl font-bold text-red-800 sm:text-2xl">
                RAGHAD ALSIED{" "}
              </p>
              <div className="mt-8 flex items-center justify-center gap-x-4">
                <a
                  href="/reason1"
                  className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 animate-bounce"
                >
                  Let's Go on a Date 💌
                </a>
              </div>
              <p className="mt-8 text-sm text-gray-500">
                ⚠️ Just for fun! This is just a small joke website I created in
                9 hours. Hope it brought a smile to your face! 😄
              </p>
            </div>
          </motion.div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 animate-pulse transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-pink-300 to-red-400 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </ClientLayout>
  );
}
