import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Contacto
          </h2>
          <div className="w-16 h-px bg-slate-200 dark:bg-slate-700 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-light max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o buscas un perfil para tu equipo? Estaré encantado de conversar.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-10 dark:bg-slate-900/30 p-10 md:p-16 rounded-2xl border border-slate-200 dark:border-slate-800/80 w-full max-w-2xl"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 tracking-tight text-slate-900 dark:text-slate-100">Conectemos</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light mb-8 max-w-md mx-auto">
                Actualmente me encuentro abierto a nuevas oportunidades profesionales y proyectos como desarrollador Full Stack.
              </p>
            </div>

            <div className="space-y-8 w-full flex flex-col items-center">
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 mb-2">
                  <FaEnvelope size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-1">Email</p>
                  <a href="mailto:Martinguaduz@gmail.com" className="text-slate-800 dark:text-slate-200 font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-lg">
                    Martinguaduz@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center justify-center w-14 h-14 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full text-slate-600 dark:text-slate-400 mb-2">
                   <FaMapMarkerAlt size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-1">Ubicación</p>
                  <p className="text-slate-800 dark:text-slate-200 font-medium text-lg">Santa Cruz, Costa Rica</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-slate-800/50 w-full justify-center">
               <a
                  href="https://github.com/CristianAG13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-100 dark:bg-slate-800 transition-colors duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cristian-guadamuz-273647188"
                  target="_blank"
                  rel="noopener noreferrer"
                   className="p-4 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full hover:bg-slate-100 dark:bg-slate-800 transition-colors duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  <FaLinkedin size={24} />
                </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
