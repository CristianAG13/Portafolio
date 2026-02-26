import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from 'react-icons/fa';

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white px-6 py-24 flex items-center justify-center overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-green-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-green-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="px-4 py-2 bg-green-400/10 border border-green-400/30 rounded-full text-green-400 text-sm font-medium">
              👋 ¡Hola! Soy
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Cristian <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              Aguirre
            </span>
          </motion.h1>

          <motion.div
            className="flex flex-wrap gap-2 text-xl md:text-2xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="font-mono">{'<'}</span>
            <motion.span
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-green-400"
            >
              Desarrollador Full Stack
            </motion.span>
            <span className="font-mono">{'/>'}</span>
          </motion.div>

          <motion.p
            className="text-lg text-gray-400 leading-relaxed max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Ingeniero en Sistemas de Información apasionado por crear
            soluciones digitales innovadoras. Especializado en React, Node.js y NestJS.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <button
              onClick={scrollToAbout}
              className="group px-8 py-3 bg-green-400 text-gray-900 font-semibold rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-400/50 hover:scale-105"
            >
              Ver proyectos
              <FaArrowDown className="inline ml-2 group-hover:translate-y-1 transition-transform" />
            </button>
            <a
              href="/CV_Cristian_Aguirre.pdf"
              download
              className="px-8 py-3 border-2 border-green-400 text-green-400 font-semibold rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:scale-105"
            >
              Descargar CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://github.com/CristianAG13"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/cristian-guadamuz-273647188"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:Martinguaduz@gmail.com"
              className="p-3 bg-gray-800 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope size={24} />
            </a>
          </motion.div>
        </motion.div>

        {/* Imagen con efecto 3D */}
        <motion.div
          className="relative flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{
            transform: `perspective(1000px) rotateY(${mousePosition.x}deg) rotateX(${-mousePosition.y}deg)`,
          }}
        >
          <div className="relative">
            {/* Glowing ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 blur-2xl opacity-30 animate-pulse"></div>
            
            {/* Profile image */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-green-400 shadow-2xl shadow-green-400/20">
              <img
                src="WhatsApp Image 2025-06-11 at 18.27.05_8c45ea41.jpg"
                alt="Cristian Aguirre"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Floating badges */}
            <motion.div
              className="absolute -top-4 -right-4 px-4 py-2 bg-gray-900 border border-green-400 rounded-lg shadow-lg"
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="text-green-400 font-bold">💻 Full Stack</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-4 -left-4 px-4 py-2 bg-gray-900 border border-green-400 rounded-lg shadow-lg"
              animate={{ y: [10, -10, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-green-400 font-bold">🚀 React</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-green-400 cursor-pointer"
          onClick={scrollToAbout}
        >
          <FaArrowDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
