import React from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';

const projects = [
    {
      title: 'GEIGV',
      subtitle: 'Gestión Vial Municipal',
      description:
        'Sistema de Gestión de Infraestructura desarrollado para la Municipalidad. Permite el control riguroso de proyectos viales, mantenimiento de carreteras y administración de infraestructura pública.',
      imageUrl: 'image.png',
      projectLink: 'https://github.com/CristianAG13/GEIGV-MuniSC-frontend',
      githubLink: 'https://github.com/CristianAG13/GEIGV-MuniSC-frontend',
      tags: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      title: 'SIMADLSC',
      subtitle: 'Plataforma Frontend',
      description:
        'Interzaz de sistema académico completo para gestión educativa. Incluye módulos de matrícula, asistencia, horarios y gestión disciplinaria. Arquitectura escalable y orientada a UX/UI modular.',
      imageUrl: 'simadlsc.jpg',
      projectLink: 'https://simadlsc.vercel.app',
      githubLink: 'https://github.com/CristianAG13/SIMADLSC',
      tags: ['React', 'TailwindCSS', 'TypeScript'],
    },
  ];

const RecentWorks = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 border-slate-200 dark:border-slate-800/50 text-slate-900 dark:text-slate-100">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Proyectos Destacados
          </h2>
          <div className="w-16 h-px bg-slate-200 dark:bg-slate-700 mx-auto mb-6"></div>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Una selección de soluciones de software en las que he participado, abarcando desde sistemas de gestión gubernamental hasta plataformas educativas de alto impacto.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <PortfolioCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default RecentWorks;
