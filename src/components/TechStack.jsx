import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaFigma, FaGithub } from 'react-icons/fa';
import { SiTailwindcss, SiNestjs, SiMysql } from 'react-icons/si';

const stack = [
  { icon: <FaReact />, label: 'React' },
  { icon: <SiTailwindcss />, label: 'TailwindCSS' },
  { icon: <SiNestjs />, label: 'NestJS' },
  { icon: <FaNodeJs />, label: 'Node.js' },
  { icon: <SiMysql />, label: 'MariaDB' },
  { icon: <FaGithub />, label: 'GitHub' },
  { icon: <FaFigma />, label: 'Figma' },
];

const TechStack = () => {
  return (
    <motion.div
      className="text-white space-y-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      <motion.h2
        className="text-4xl font-bold text-center border-b-2 border-green-400 inline-block pb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        🔧 Tecnologías que uso
      </motion.h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-6 justify-center items-center text-3xl">
        {stack.map(({ icon, label }, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center hover:scale-110 transition duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-green-400">{icon}</div>
            <span className="text-sm mt-2 text-gray-200">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStack;
