"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function TypewriterText({ text }: { text: string }) {
  const [visibleChars, setVisibleChars] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);

  // Start typing only once
  useEffect(() => {
    if (!hasStarted) return;

    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev < text.length) return prev + 1;
        clearInterval(interval);
        // After finishing typing, wait 0.2s then hide cursor
        setTimeout(() => setShowCursor(false), 200);
        return prev;
      });
    }, 40); // Typing speed

    return () => clearInterval(interval);
  }, [hasStarted, text]);

  const typed = text.slice(0, visibleChars);

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }}
      onAnimationComplete={() => setHasStarted(true)}
    >
      <h1 className="text-center font-semibold max-w-3xl leading-tight flex flex-wrap justify-center">
        {typed.split("").map((char, index) => (
          <span key={index} className="whitespace-pre inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
        {showCursor && (
          <motion.span
            className="inline-block w-[1ch]"
            animate={{ opacity: [1, 0, 1] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
              ease: "easeInOut",
            }}
          >
            |
          </motion.span>
        )}
      </h1>
    </motion.div>
  );
}
