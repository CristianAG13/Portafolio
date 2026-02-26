import React from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/fadeVariants';


const projects = [
    {
      title: 'GEIGV - Gestión Vial Municipal',
      description:
        'Sistema de Gestión de Infraestructura y Gestión Vial desarrollado para la Municipalidad de Santa Cruz. Permite el registro, seguimiento y administración de proyectos viales, mantenimiento de carreteras y control de la infraestructura municipal.',
      imageUrl: 'image.png',
      projectLink: 'https://github.com/CristianAG13/GEIGV-MuniSC-frontend',
      githubLink: 'https://github.com/CristianAG13/GEIGV-MuniSC-frontend',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Gestión Pública'],
    },
    {
      title: 'SIMADLSC',
      description:
        'Sistema completo de gestión académica desarrollado para el Liceo de Santa Cruz. Incluye módulos de matrícula, asistencia, horarios y gestión disciplinaria. Proyecto realizado en equipo como donación a la institución.',
      imageUrl: 'simadlsc.jpg',
      projectLink: 'https://simadlsc.vercel.app',
      githubLink: 'https://github.com/CristianAG13/SIMADLSC',
      tags: ['React', 'TailwindCSS', 'TypeScript', 'Full Stack'],
    },
    {
      title: 'SIMADLSC-backend',
      description: 'Backend robusto del SIMADLSC desarrollado con NestJS y TypeORM. API REST para gestión de matrículas, asistencias, eventos académicos y horarios. Implementa autenticación JWT y arquitectura modular escalable.',
      imageUrl: 'https://placehold.co/600x300?text=SIMADLSC-backend',
      projectLink: 'https://simadlsc.vercel.app',
      githubLink: 'https://github.com/CristianAG13/SIMADLSC-backend',
      tags: ['NestJS', 'TypeORM', 'MySQL', 'JWT', 'REST API'],
    },
  ];
  

const RecentWorks = () => {
  return (
    <section id="projects" className="py-16 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center border-b-2 border-green-400 inline-block pb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Últimos Proyectos
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
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
