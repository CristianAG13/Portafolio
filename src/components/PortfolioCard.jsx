import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/fadeVariants';

const PortfolioCard = ({ title, description, imageUrl, projectLink, githubLink }) => {
  return (
    <motion.div
      className="backdrop-blur-md bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-2xl p-6 shadow-xl transition transform hover:scale-[1.02] hover:shadow-2xl duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <img
        className="w-full h-48 object-cover rounded-xl border border-white/20"
        src={imageUrl}
        alt={title}
      />
      <h2 className="mt-4 text-2xl font-bold text-white tracking-tight">{title}</h2>
      <p className="mt-2 text-gray-300 text-sm leading-relaxed">{description}</p>
      <div className="flex gap-4 mt-4">
        <a
          href={projectLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition"
        >
          Ver Proyecto
        </a>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-800 text-white font-medium transition"
        >
          Repositorio
        </a>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
