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
    color: 'green',
    highlight: true,
  },
  {
    year: '2024 - Presente',
    title: 'Desarrollo Full Stack',
    subtitle: 'Proyectos Académicos y Personales',
    description: 'Desarrollo de aplicaciones web completas utilizando React, NestJS y bases de datos relacionales. Enfoque en arquitectura escalable y buenas prácticas de desarrollo.',
    icon: <FaCode />,
    color: 'green',
  },
  {
    year: '2023',
    title: 'SIMADLSC - Sistema Académico',
    subtitle: 'Liceo de Santa Cruz',
    description: 'Lideré el desarrollo de un sistema completo de gestión académica donado al Liceo de Santa Cruz. Incluye gestión de matrículas, asistencia, horarios y disciplina estudiantil.',
    icon: <FaProjectDiagram />,
    color: 'blue',
    highlight: true,
  },
  {
    year: '2022 - 2024',
    title: 'Ingeniería en Sistemas de Información',
    subtitle: 'Universidad Nacional',
    description: 'Graduado en ingeniería con enfoque en desarrollo de software, bases de datos, arquitectura de sistemas y metodologías ágiles.',
    icon: <FaGraduationCap />,
    color: 'purple',
  },
  {
    year: '2021',
    title: 'Inicio en Programación',
    subtitle: 'Primeros Pasos',
    description: 'Comencé mi camino en el desarrollo de software aprendiendo fundamentos de programación, desarrollo web y bases de datos.',
    icon: <FaAward />,
    color: 'orange',
  },
];

const ExperienceTimeline = () => {
  return (
    <section className="py-20 px-6 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mi <span className="text-green-400">Trayectoria</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un viaje de aprendizaje continuo y desarrollo profesional
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-400 via-blue-500 to-purple-500 opacity-20"></div>

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`relative mb-12 md:mb-16 flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
            >
              {/* Content */}
              <div className="w-full md:w-5/12">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`p-6 rounded-2xl ${
                    item.highlight
                      ? 'bg-gradient-to-br from-green-400/10 to-emerald-500/10 border-2 border-green-400'
                      : 'bg-gray-900/50 border border-gray-800'
                  } shadow-xl hover:shadow-2xl transition-all duration-300`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-2xl ${
                      item.color === 'green' ? 'text-green-400' :
                      item.color === 'blue' ? 'text-blue-400' :
                      item.color === 'purple' ? 'text-purple-400' :
                      'text-orange-400'
                    }`}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <h4 className="text-green-400 font-medium mb-3">{item.subtitle}</h4>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </motion.div>
              </div>

              {/* Center dot */}
              <div className="hidden md:flex w-2/12 justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.3, type: 'spring' }}
                  className={`w-6 h-6 rounded-full ${
                    item.highlight ? 'bg-green-400 ring-4 ring-green-400/30' : 'bg-gray-600'
                  } z-10`}
                />
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-5/12"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-green-400/10 to-emerald-500/10 border border-green-400/30 rounded-2xl p-8"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            ¿Interesado en trabajar juntos?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Estoy siempre abierto a nuevas oportunidades y colaboraciones. ¡Hablemos!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-green-400 text-gray-900 font-semibold rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-400/50 hover:scale-105"
          >
            Contáctame
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
