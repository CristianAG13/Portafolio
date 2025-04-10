import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/fadeVariants';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] bg-gray-950 text-white px-6 py-16 flex flex-col md:flex-row items-center justify-center gap-12">
    
      {/* Texto */}
      <motion.div
        className="max-w-xl text-center md:text-left"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
          Transformamos ideas <br />
          <span className="text-green-400">en realidades digitales</span>
        </h1>
        <p className="text-gray-300 mb-6">
          Soy Cristian Aguirre, desarrollador de software con enfoque en diseño limpio y funcionalidad moderna. Me gusta crear productos que resuelvan problemas reales.
        </p>
        <a
          href="#about"
          className="inline-block mt-4 bg-transparent border border-green-400 text-green-400 px-6 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
        >
          Conocer más
        </a>
        <a
  href="/CV_Cristian_Aguirre.pdf"
  download="CV_Cristian_Aguirre.pdf"
  className="inline-block mt-4 bg-transparent border border-green-400 text-green-400 px-6 py-2 rounded-lg hover:bg-green-500 hover:text-white transition"
>
  Descargar CV
</a>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-green-400"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <img
          src="https://placehold.co/300x300?text=Cristian"
          alt="Cristian Aguirre"
          className="w-full h-full object-cover"
        />
      </motion.div>
      
    </section>
  );
};

export default HeroSection;
