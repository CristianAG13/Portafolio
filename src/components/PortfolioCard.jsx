import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const PortfolioCard = ({ title, description, imageUrl, projectLink, githubLink, tags = [] }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -10 }}
      className="group relative bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-green-400/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-green-400/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden bg-gray-800">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent flex items-center justify-center gap-4"
        >
          <motion.a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 bg-green-400 text-gray-900 rounded-full hover:bg-green-500 transition-colors shadow-lg"
            title="Ver proyecto"
          >
            <FaExternalLinkAlt size={20} />
          </motion.a>
          
          {githubLink && (
            <motion.a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-colors shadow-lg"
              title="Ver código"
            >
              <FaGithub size={20} />
            </motion.a>
          )}
        </motion.div>

        {/* Project status badge */}
        <div className="absolute top-4 right-4 px-3 py-1 bg-green-400/90 text-gray-900 text-xs font-bold rounded-full backdrop-blur-sm">
          Completado
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-800 text-green-400 text-xs rounded-full border border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action buttons */}
        <div className="flex gap-3 pt-4 border-t border-gray-800">
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-400 text-gray-900 font-semibold rounded-lg hover:bg-green-500 transition-all duration-300 hover:scale-105"
          >
            <FaEye />
            Ver Demo
          </a>
          {githubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 text-white font-semibold rounded-lg hover:bg-gray-700 transition-all duration-300 hover:scale-105 border border-gray-700"
            >
              <FaCode />
              Código
            </a>
          )}
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-500 rounded-2xl blur opacity-20"></div>
      </div>
    </motion.div>
  );
};

export default PortfolioCard;
