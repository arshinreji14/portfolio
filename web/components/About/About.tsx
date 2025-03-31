"use client";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="w-full h-auto py-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-bold text-center text-white">About Me</h1>
      </motion.div>

      <motion.div
        className="md:px-52 px-8 py-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
      >
        <span className="text-xl text-white font-bold">
          I&lsquo;m a passionate frontend developer specializing in creating
          responsive, interactive web experiences with React, Next.js, and
          Tailwind CSS. With strong skills in HTML, CSS, and JavaScript, I
          transform design concepts into clean, efficient code that delivers
          exceptional user experiences across all devices. I stay current with
          emerging technologies while focusing on building accessible, scalable
          applications. My approach balances technical expertise with creative
          problem-solving, allowing me to craft intuitive interfaces that
          effectively connect user needs with business goals.
        </span>
      </motion.div>
    </div>
  );
};

export default About;
