import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const PortfolioCard = ({ title, subtitle, description, imageUrl, projectLink, githubLink, tags = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden hover:border-slate-300 dark:border-slate-700 transition-colors duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal"
        />
        
        {/* Overlay buttons */}
        <div
          className={`absolute inset-0 bg-white dark:bg-slate-950/70 flex items-center justify-center gap-4 transition-opacity duration-300 backdrop-blur-[2px] ${isHovered ? 'opacity-100' : 'opacity-0'}`}
        >
          {projectLink && (
            <a
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 text-slate-950 rounded-full hover:bg-slate-300 transition-colors hover:scale-110"
              title="Live Demo"
            >
              <FaExternalLinkAlt size={18} />
            </a>
          )}
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:bg-slate-700 transition-colors hover:scale-110"
              title="Source Code"
            >
              <FaGithub size={18} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col gap-4">
        <div>
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 tracking-tight">
              {title}
            </h3>
          </div>
          {subtitle && (
             <h4 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-3">{subtitle}</h4>
          )}
          <p className="text-slate-600 dark:text-slate-400 text-sm font-light leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        <div className="mt-auto pt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
