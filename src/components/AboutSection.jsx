import React from 'react';
import { motion } from 'framer-motion';

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
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto space-y-16">

        {/* Título principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-green-400">Mí</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Presentación */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={1}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 space-y-6 text-lg text-gray-300 leading-relaxed">
            <p>
              👋 Soy <span className="font-bold text-white">Cristian Aguirre Guadamuz</span>, Ingeniero en Sistemas de Información graduado de la Universidad Nacional. Mi pasión radica en el desarrollo de software y la creación de soluciones tecnológicas que generen un impacto positivo.
            </p>
            <p>
              💻 Con experiencia en proyectos académicos y colaborativos, me especializo en tecnologías modernas como <span className="font-bold text-green-400">React</span>, <span className="font-bold text-green-400">Node.js</span>, y <span className="font-bold text-green-400">NestJS</span>. Mi objetivo es seguir aprendiendo y contribuir al desarrollo de sistemas innovadores que resuelvan problemas reales.
            </p>
            <p>
              🚀 Este portafolio refleja mi compromiso con la excelencia, mi capacidad para trabajar en equipo y mi entusiasmo por enfrentar nuevos desafíos en el mundo de la tecnología.
            </p>
          </div>
        </motion.div>

        {/* Educación */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={2}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-green-400">🎓</span>
              Educación
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-bold text-lg text-white">Ingeniería en Sistemas de Información</h4>
                <p className="text-green-400">Universidad Nacional</p>
                <p className="text-gray-400 text-sm">Graduado</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-400/50 transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
              <span className="text-green-400">💼</span>
              Experiencia Destacada
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-green-400 pl-4">
                <h4 className="font-bold text-lg text-white">SIMADLSC</h4>
                <p className="text-green-400">Sistema Académico</p>
                <p className="text-gray-400 text-sm">Proyecto donado al Liceo de Santa Cruz</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Idiomas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={4}
          className="max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-center mb-6 flex items-center justify-center gap-3">
            <span className="text-green-400">🌐</span>
            Idiomas
          </h3>
          <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-800 text-gray-300">
                <tr>
                  <th className="px-6 py-4">Idioma</th>
                  <th className="px-6 py-4">Nivel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">Español</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-sm font-semibold">
                      Nativo
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-6 py-4">Inglés</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 bg-blue-400/10 text-blue-400 rounded-full text-sm font-semibold">
                      Intermedio
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
