"use client";

import { motion } from "framer-motion";
import ClientLayout from "../client-layout"; // تأكد من أن المسار صحيح
import PieChart from "../PieChart";

export default function Reason1() {
  return (
    <ClientLayout>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-tr from-purple-200 to-blue-300 font-sans flex flex-col items-center p-4">
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
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-purple-300 to-blue-400 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
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
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-300 to-blue-400 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>

        {/* العنوان في أعلى الصفحة */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-4xl font-extrabold tracking-tight text-blue-900 sm:text-6xl lg:text-7xl text-center mt-8"
        >
          REASON TWO
        </motion.h1>

        {/* تنسيق المخطط والنصوص بجانب بعضهما */}
        <div className="flex flex-col lg:flex-row items-center justify-between mt-8 w-full max-w-screen-lg mx-auto">
          {/* مكون المخطط الدائري */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="flex-1 lg:mr-8 mb-8 lg:mb-0"
          >
            <PieChart />
          </motion.div>

          {/* إضافة الـ GIF من Giphy */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4 }}
            className="flex-1 text-center"
          >
            <iframe
              src="https://giphy.com/embed/R6gvnAxj2ISzJdbA63"
              width="480"
              height="480"
              style={{ border: "none" }}
              frameBorder="0"
              className="giphy-embed rounded-lg shadow-lg"
              allowFullScreen
            ></iframe>
            <p>
              <a
                href="https://giphy.com/gifs/warnerbrosde-R6gvnAxj2ISzJdbA63"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-700 hover:text-blue-500"
              >
                via GIPHY
              </a>
            </p>
          </motion.div>
        </div>

        {/* الرسالة النصية */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.6 }}
          className="text-center text-white text-lg md:text-xl font-semibold mt-8"
        >
          <p>🎯 Here's why we're the perfect match!</p>
          <p>
            🌟 Together, we're unstoppable, and this chart shows just how
            amazing we are as a team!
          </p>
        </motion.div>

        {/* زر الانتقال إلى السبب الثالث */}
        <motion.a
          href="/reason3"
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 animate-bounce mt-8"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go to Reason Three
        </motion.a>
      </div>
    </ClientLayout>
  );
}
