import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaAward, FaProjectDiagram } from 'react-icons/fa';

const timelineData = [
  {
    year: '2025 - Presente',
    title: 'GEIGV - Gestión Vial Municipal',
    subtitle: 'Municipalidad de Santa Cruz',
    description: 'Desarrollo del Sistema de Gestión de Infraestructura y Gestión Vial para la administración municipal. Sistema completo para registro, seguimiento y control de proyectos de infraestructura vial.',
    icon: <FaProjectDiagram />,
  },
  {
    year: '2024 - Presente',
    title: 'Desarrollo Full Stack',
    subtitle: 'Proyectos Académicos y Personales',
    description: 'Desarrollo de aplicaciones web completas utilizando React, NestJS y bases de datos relacionales. Enfoque en arquitectura escalable y buenas prácticas de desarrollo.',
    icon: <FaCode />,
  },
  {
    year: '2023',
    title: 'SIMADLSC - Sistema Académico',
    subtitle: 'Liceo de Santa Cruz',
    description: 'Lideré el desarrollo de un sistema completo de gestión académica donado al Liceo de Santa Cruz. Incluye gestión de matrículas, asistencia, horarios y disciplina estudiantil.',
    icon: <FaProjectDiagram />,
  },
  {
    year: '2022 - 2024',
    title: 'Ingeniería en Sistemas de Información',
    subtitle: 'Universidad Nacional',
    description: 'Graduado en ingeniería con enfoque en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles.',
    icon: <FaGraduationCap />,
  },
  {
    year: '2021',
    title: 'Inicio en Programación',
    subtitle: 'Primeros Pasos',
    description: 'Comencé mi camino en el desarrollo de software aprendiendo fundamentos de programación, desarrollo web y bases de datos.',
    icon: <FaAward />,
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-24 px-6 bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Trayectoria Profesional
          </h2>
          <div className="w-16 h-px bg-slate-200 dark:bg-slate-700 mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Vertical line minimalist */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-slate-100 dark:bg-slate-800"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              {/* Content */}
              <div className="w-full md:w-5/12">
                <div
                  className="p-8 rounded-2xl dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:border-slate-700 transition-colors duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl text-slate-500 dark:text-slate-500">
                      {item.icon}
                    </span>
                    <span className="text-xs font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-950 px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{item.title}</h3>
                  <h4 className="text-slate-500 dark:text-slate-500 text-sm font-medium mb-4 uppercase tracking-wide">{item.subtitle}</h4>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-light">{item.description}</p>
                </div>
              </div>

              {/* Center dot minimalist */}
              <div className="hidden md:flex w-2/12 justify-center">
                <div className="w-3 h-3 rounded-full bg-slate-600 ring-4 ring-slate-950 z-10" />
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 bg-slate-100 text-slate-950 font-semibold text-sm rounded-lg hover:bg-slate-200 transition-colors duration-200"
          >
            Contactar para colaboración
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
