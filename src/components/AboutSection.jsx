import React from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1], // ease out cubic
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Sobre mí
          </h2>
          <div className="w-16 h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>
        </motion.div>

        {/* Presentación */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-6 text-lg md:text-xl text-slate-600 dark:text-slate-400 font-light leading-relaxed">
            <p>
              Soy <span className="font-medium text-slate-800 dark:text-slate-200">Cristian Aguirre Guadamuz</span>, Ingeniero en Sistemas de Información graduado de la Universidad Nacional. Mi pasión radica en el diseño y arquitectura de software, creando soluciones tecnológicas robustas.
            </p>
            <p>
              Me especializo en ecosistemas modernos como <span className="font-medium text-slate-800 dark:text-slate-200">React</span>, <span className="font-medium text-slate-800 dark:text-slate-200">Node.js</span>, y <span className="font-medium text-slate-800 dark:text-slate-200">NestJS</span>, apoyándome en buenas prácticas de ingeniería para asegurar aplicaciones escalables y mantenibles.
            </p>
            <p>
              Este portafolio es un reflejo de mi compromiso con la calidad técnica, la resolución analítica de problemas y mi constante evolución en el sector de IT.
            </p>
          </div>
        </motion.div>

        {/* Educación y Experiencia (Dos Columnas Minimalistas) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Educación */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold tracking-wide text-slate-800 dark:text-slate-200 flex items-center gap-3">
              <span className="w-8 h-px bg-slate-200 dark:bg-slate-700"></span> Educación
            </h3>
            <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 before:content-[''] before:absolute before:w-2 before:h-2 before:bg-slate-500 before:rounded-full before:-left-[4.5px] before:top-2">
              <h4 className="font-medium text-lg text-slate-900 dark:text-slate-100">Ingeniería en Sistemas de Información</h4>
              <p className="text-slate-500 dark:text-slate-500 mt-1">Universidad Nacional</p>
              <p className="text-slate-600 text-sm mt-2 uppercase tracking-widest font-semibold">Graduado</p>
            </div>
          </div>

          {/* Experiencia Destacada */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold tracking-wide text-slate-800 dark:text-slate-200 flex items-center gap-3">
              <span className="w-8 h-px bg-slate-200 dark:bg-slate-700"></span> Experiencia
            </h3>
            <div className="relative pl-6 border-l border-slate-200 dark:border-slate-800 before:content-[''] before:absolute before:w-2 before:h-2 before:bg-slate-500 before:rounded-full before:-left-[4.5px] before:top-2">
              <h4 className="font-medium text-lg text-slate-900 dark:text-slate-100">SIMADLSC</h4>
              <p className="text-slate-500 dark:text-slate-500 mt-1">Sistema Académico Core</p>
              <p className="text-slate-600 dark:text-slate-400 font-light mt-2">Plataforma integral donada al Liceo de Santa Cruz para la gestión académica.</p>
            </div>
          </div>
        </motion.div>

        {/* Idiomas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
          className="max-w-2xl mx-auto pt-8 border-t border-slate-200 dark:border-slate-900"
        >
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-slate-500 dark:text-slate-500 text-sm uppercase tracking-widest mb-2 font-semibold">Español</h4>
              <p className="text-slate-800 dark:text-slate-200 text-lg">Nativo</p>
            </div>
            <div>
              <h4 className="text-slate-500 dark:text-slate-500 text-sm uppercase tracking-widest mb-2 font-semibold">Inglés</h4>
              <p className="text-slate-800 dark:text-slate-200 text-lg">Intermedio</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
