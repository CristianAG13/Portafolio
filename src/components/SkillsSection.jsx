import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiNestjs, SiMysql, SiJavascript, SiTypescript, SiFigma } from 'react-icons/si';

const skills = {
  frontend: [
    { name: 'React', level: 90, icon: <FaReact /> },
    { name: 'JavaScript', level: 85, icon: <SiJavascript /> },
    { name: 'TypeScript', level: 80, icon: <SiTypescript /> },
    { name: 'TailwindCSS', level: 90, icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: 'Node.js', level: 85, icon: <FaNodeJs /> },
    { name: 'NestJS', level: 80, icon: <SiNestjs /> },
    { name: 'MySQL/MariaDB', level: 75, icon: <SiMysql /> },
    { name: 'REST APIs', level: 85, icon: <FaDatabase /> },
  ],
  tools: [
    { name: 'Git & GitHub', level: 85, icon: <FaGitAlt /> },
    { name: 'Figma', level: 70, icon: <SiFigma /> },
  ],
};

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="space-y-3"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-xl text-slate-600 dark:text-slate-400">
            {skill.icon}
          </span>
          <span className="text-slate-800 dark:text-slate-200 font-medium">{skill.name}</span>
        </div>
        <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">{skill.level}%</span>
      </div>
      <div className="h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 + 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full bg-slate-300 rounded-full"
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section className="py-24 px-6 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800/50 text-slate-900 dark:text-slate-100">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Habilidades y Tecnologías
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl font-light">
            Experiencia práctica con herramientas modernas que me permiten construir soluciones digitales de principio a fin.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Frontend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-slate-950/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80"
          >
            <h3 className="text-xl font-semibold mb-8 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-4">
              Frontend Development
            </h3>
            <div className="space-y-8">
              {skills.frontend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Backend Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white dark:bg-slate-950/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80"
          >
            <h3 className="text-xl font-semibold mb-8 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-4">
              Backend Development
            </h3>
            <div className="space-y-8">
              {skills.backend.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 bg-white dark:bg-slate-950/50 p-8 rounded-2xl border border-slate-200 dark:border-slate-800/80"
        >
          <h3 className="text-xl font-semibold mb-8 text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-800 pb-4">
            Herramientas & Otros
          </h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.tools.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '5+', label: 'Proyectos' },
            { number: '10+', label: 'Tecnologías' },
            { number: '2+', label: 'Años exp.' },
            { number: '100%', label: 'Compromiso' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="py-6 border-l border-slate-200 dark:border-slate-800 pl-6"
            >
              <div className="text-3xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-slate-500 dark:text-slate-500 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
