import { AnimatePresence, delay, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import React from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Service", href: "/Service" },
  { label: "Feature", href: "/Feature" },
  { label: "Product", href: "/Product" },
  { label: "Testimonial", href: "/Testimonial" },
  { label: "FAQ", href: "/FAQ" },
];

export default function NavbarM({ open }: { open: boolean }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.nav
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={bgVariants}
          className="bg-black/40 fixed top-22.5 left-0 w-dvw h-screen z-30 transform transition-all ease-in-out duration-500 py-6 flex justify-center lg:hidden "
        >
          <motion.ul
            layout
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="h-fit flex flex-col items-center justify-center gap-4 p-6 rounded-lg bg-white shadow-xl w-[80%] z-40 overflow-hidden "
          >
            {navLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="group relative text-Mediumbody2 text-secondary p-[0.25rem]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
const bgVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.2 },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: { duration: 0.3, delay: 0.7 },
  },
};

const menuVariants: Variants = {
  hidden: {
    y: "25vh",
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
      type: "spring",
      stiffness: 100,
      damping: 20,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  exit: {
    y: "25vh",
    opacity: 0,
    transition: {
      duration: 0.3,
      delay: 0.45,
    },
  },
};
