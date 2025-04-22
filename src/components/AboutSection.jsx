import React from 'react';
import { motion } from 'framer-motion';
import TechStack from './TechStack';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Título principal */}
        <motion.h2
          className="text-4xl font-bold text-center border-b-2 border-green-400 inline-block pb-2 mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          👋 Sobre mí
        </motion.h2>

        {/* Presentación */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="space-y-6 text-lg text-gray-300 leading-relaxed"
        >
          <p>
            Soy <span className="font-bold text-white">Cristian Aguirre Guadamuz</span>, estudiante de <span className="font-bold text-white">Ingeniería en Sistemas de Información</span> en la Universidad Nacional. Mi pasión radica en el desarrollo de software y la creación de soluciones tecnológicas que generen un impacto positivo.
          </p>
          <p>
            Con experiencia en proyectos académicos y colaborativos, me especializo en tecnologías modernas como <span className="font-bold text-white">React</span>, <span className="font-bold text-white">Node.js</span>, y <span className="font-bold text-white">NestJS</span>. Mi objetivo es seguir aprendiendo y contribuir al desarrollo de sistemas innovadores que resuelvan problemas reales.
          </p>
          <p>
            Este portafolio refleja mi compromiso con la excelencia, mi capacidad para trabajar en equipo y mi entusiasmo por enfrentar nuevos desafíos en el mundo de la tecnología.
          </p>
        </motion.div>

        {/* Educación y experiencia */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
        >
          <h3 className="text-3xl font-bold text-center mb-6 border-b-2 border-green-400 inline-block pb-2">
            🎓 Educación y Experiencia
          </h3>
          <ul className="space-y-2 text-gray-300 list-disc list-inside text-lg">
            <li>Universidad Nacional – Ingeniería en Sistemas de Información (en curso)</li>
            <li>Proyecto SIMADLSC – Sistema académico donado al Liceo de Santa Cruz</li>
          </ul>
        </motion.div>

        {/* Tecnologías */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={3}
        >
         
          <TechStack />
        </motion.div>

        {/* Idiomas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
        >
          <h3 className="text-3xl font-bold text-center mb-6 border-b-2 border-green-400 inline-block pb-2">
            🌐 Idiomas
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left border border-gray-700 rounded-lg overflow-hidden">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="px-4 py-3">Idioma</th>
                  <th className="px-4 py-3">Nivel</th>
                </tr>
              </thead>
              <tbody className="bg-gray-900 divide-y divide-gray-700 text-gray-300">
                <tr>
                  <td className="px-4 py-3">Español</td>
                  <td className="px-4 py-3">Nativo</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Inglés</td>
                  <td className="px-4 py-3">basico</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Experiencia laboral */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={5}
        >
          <h3 className="text-3xl font-bold text-center mb-6 border-b-2 border-green-400 inline-block pb-2">
            💼 Experiencia Laboral
          </h3>
          <p className="text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
            Junto a compañeros de carrera, desarrollamos el sistema académico SIMADLSC como donación al Liceo de Santa Cruz. Esta institución contaba con un sistema obsoleto, y como exalumnos, nos sentimos orgullosos de aportar con una solución moderna que fortalece su gestión educativa.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
