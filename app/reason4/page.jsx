"use client";

import Image from "next/image";
import Link from "next/link";
import ClientLayout from "../client-layout"; // تأكد من أن المسار صحيح
import { motion } from "framer-motion";

export default function Reason4() {
  return (
    <ClientLayout>
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
          textAlign: "center",
          padding: "1rem",
        }}
      >
        {/* عنوان الصفحة */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl font-extrabold tracking-tight text-red-900 sm:text-5xl lg:text-6xl text-center mt-8"
        >
          REASON FOUR
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-3xl font-extrabold tracking-tight text-red-900 sm:text-5xl lg:text-6xl text-center mt-4"
        >
          WHY I AM A DUDE
        </motion.h1>

        {/* محتوى الصفحة مع الصورة والنصوص بجانب بعض */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            maxWidth: "1200px",
            width: "100%",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          {/* النصوص */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            style={{
              flex: 1,
              textAlign: "left",
              marginRight: "20px",
            }}
          >
            <p
              style={{
                marginBottom: "20px",
                fontSize: "1.2rem",
                lineHeight: "1.6",
              }}
            >
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
            style={{
              flex: 1,
              maxWidth: "400px",
              height: "auto",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
            }}
          >
            <Image
              src="/photos/peter.jpg"
              alt="Spider-Man"
              layout="responsive"
              width={400}
              height={400}
              style={{
                borderRadius: "10px",
              }}
            />
          </motion.div>
        </div>

        {/* زر الانتقال إلى السبب التالي */}
        <div className="mt-8 flex items-center justify-center gap-x-4">
          <a
            href="/reason5"
            className="rounded-md bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 animate-bounce"
          >
            NOW AND FINALLY{" "}
          </a>
        </div>
      </div>
    </ClientLayout>
  );
}
