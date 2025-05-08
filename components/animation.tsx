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

type SlideInProps = {
  children: React.ReactNode;
  direction?: "left" | "right";
  delay?: number;
  className?: string;
};

export function SlideIn({
  children,
  direction = "left",
  delay = 0,
  className = "",
}: SlideInProps) {
  const xStart = direction === "left" ? -150 : 150;

  return (
    <motion.div
      initial={{ opacity: 0, x: xStart }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
        delay,
      }}
      viewport={{ once: true, amount: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
