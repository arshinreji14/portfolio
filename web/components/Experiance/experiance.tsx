"use client";
import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white py-10">

      {/* Title Animation */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        EXPERIENCE
      </motion.h1>

      {/* Experience Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">
        {/* Luminar TechnoLab Experience */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <h2 className="text-xl font-bold mb-2">Luminar TechnoLab</h2>
          <p className="text-gray-300 mb-2">MEARN Developer</p>
          <p className="text-sm text-gray-400">
            Collaborated closely with a dynamic team to design, develop, and enhance web applications using the MEARN Full Stack. Played a pivotal role in implementing new features, optimizing existing functionalities, and resolving technical issues to ensure seamless user experiences.
          </p>
        </motion.div>

        {/* Chainzent Pvt Ltd Experience */}
        <motion.div
          className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        >
          <h2 className="text-xl font-bold mb-2">Chainzent Pvt Ltd</h2>
          <p className="text-gray-300 mb-2">Jr. Software Developer (2023 Dec - Present)</p>
          <p className="text-sm text-gray-400">
            Developed and enhanced web applications using Next.js and Tailwind CSS. Assisted in implementing new features and debugging issues to ensure smooth user experiences. Gained hands-on experience with Git version control and contributed to project repositories.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
