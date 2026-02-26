import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNestjs, SiMysql, SiJavascript, SiTypescript, SiFigma } from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'React', level: 90, icon: <FaReact />, color: '#61DAFB' },
    { name: 'JavaScript', level: 85, icon: <SiJavascript />, color: '#F7DF1E' },
    { name: 'TypeScript', level: 80, icon: <SiTypescript />, color: '#3178C6' },
    { name: 'TailwindCSS', level: 90, icon: <SiTailwindcss />, color: '#06B6D4' },
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: <FaNodeJs />, color: '#339933' },
    { name: 'NestJS', level: 80, icon: <SiNestjs />, color: '#E0234E' },
    { name: 'MySQL/MariaDB', level: 75, icon: <SiMysql />, color: '#4479A1' },
    { name: 'REST APIs', level: 85, icon: <FaDatabase />, color: '#10B981' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85, icon: <FaGitAlt />, color: '#F05032' },
    { name: 'Figma', level: 70, icon: <SiFigma />, color: '#F24E1E' },
  ],
};

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-2xl" style={{ color: skill.color }}>
            {skill.icon}
          </span>
          <span className="text-gray-200 font-medium">{skill.name}</span>
        </div>
        <span className="text-green-400 font-bold">{skill.level}%</span>
      </div>
      <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.3, duration: 0.8, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${skill.color}, #10B981)`,
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-950 to-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Habilidades <span className="text-green-400">&</span> Competencias
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologías y herramientas que domino para crear soluciones digitales completas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-green-400">🎨</span>
              Frontend Development
            </h3>
            <div className="space-y-6">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-green-400">⚙️</span>
              Backend Development
            </h3>
            <div className="space-y-6">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gray-900/50 p-8 rounded-2xl border border-gray-800 hover:border-green-400/30 transition-all duration-300"
        >
          <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-green-400">🛠️</span>
            Herramientas & Otros
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.tools.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Proyectos Completados' },
            { number: '10+', label: 'Tecnologías' },
            { number: '2+', label: 'Años de Experiencia' },
            { number: '100%', label: 'Dedicación' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-gray-900/50 rounded-xl border border-gray-800"
            >
              <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
