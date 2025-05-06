"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import P404 from "../public/404.jpg";
import { LinkButton } from "@/components/link";

export default function Custom404() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-5 ">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="bg-white/90 bg-opacity-50 backdrop-blur-lg border-2 border-primary shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] rounded-2xl p-10 text-center max-w-md w-full items-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-[5rem] font-semibold text-primary"
        >
          <Image src={P404} alt="404" aria-hidden="true" />
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-headline4 text-black mt-4"
        >
          Oops! We couldn't find that page.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-Regularbody3 text-black/80 mt-4 mb-6"
        >
          The page you're looking for doesn’t exist or has been moved. Let’s get
          you back on track!
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <LinkButton link="/" className="inline-block py-3 px-8 ">
            Go Home
          </LinkButton>
        </motion.div>
      </motion.div>
    </div>
  );
}
