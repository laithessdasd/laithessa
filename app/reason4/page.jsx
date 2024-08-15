"use client";

import Image from "next/image";
import Link from "next/link";
import ClientLayout from "../client-layout"; // تأكد من أن المسار صحيح
import { motion } from "framer-motion";

export default function Reason4() {
  return (
    <ClientLayout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-pink-200 to-red-300 font-sans flex flex-col items-center p-4">
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

        {/* العنوان في أعلى الصفحة */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl font-extrabold tracking-tight text-red-900 sm:text-5xl lg:text-6xl text-center mt-8"
        >
          REASON FOUR
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-2xl font-bold tracking-tight text-red-900 sm:text-4xl lg:text-5xl mt-4 text-center"
        >
          WHY I AM A DUDE
        </motion.h2>

        {/* محتوى الصفحة مع الصورة والنصوص بجانب بعض */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8 w-full max-w-screen-lg mx-auto">
          {/* النصوص */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex-1 text-left lg:mr-8 mb-8 lg:mb-0"
          >
            <p className="mb-8 text-lg leading-relaxed">
              This is Peter Parker, star of the new Spider-Man movie. 🕷️
              <br />
              <br />
              He is more attractive than I am. 😏
              <br />
              <br />
              But are you ever going to date Peter Parker? Let's get real. 😜
              <br />
              <br />
              Peter Parker is not really Spider-Man; he is just an actor. That
              means he is a really good liar. Do you want to spend time with a
              liar? 🤥
              <br />
              <br />
              If aliens invade the Earth, Peter Parker is not going to save you.
              I will. 💪
            </p>
          </motion.div>

          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="flex-1 max-w-xs lg:max-w-sm rounded-lg shadow-lg"
          >
            <Image
              src="/photos/peter.jpg"
              alt="Spider-Man"
              layout="responsive"
              width={400}
              height={400}
              className="rounded-lg"
            />
          </motion.div>
        </div>

        {/* زر الانتقال إلى السبب التالي */}
        <motion.a
          href="/reason5"
          className="mt-8 rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 animate-bounce"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          NOW AND FINALLY
        </motion.a>
      </div>
    </ClientLayout>
  );
}
