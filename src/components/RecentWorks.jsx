import React from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/fadeVariants';


const projects = [
    {
      title: 'SIMADLSC',
      description:
        'Este proyecto fue desarrollado por mí, junto a un grupo de compañeros de Ingeniería en Sistemas de la Universidad Nacional, como una donación al Liceo de Santa Cruz. La institución contaba con un sistema obsoleto y con múltiples problemas de funcionamiento. Escogimos este liceo porque es parte de nuestra historia; muchos de nosotros fuimos estudiantes ahí, y nos sentimos profundamente orgullosos de poder retribuir con una solución tecnológica que ayude a mejorar su gestión académica.',
      imageUrl: 'https://placehold.co/600x300?text=SIMADLSC',
      projectLink: 'https://simadlsc.vercel.app',
      githubLink: 'https://github.com/CristianAG13/SIMADLSC',
    },
    {
      title: 'Messenger',
      description: 'Aplicación de mensajería en tiempo real con autenticación y chat privado.',
      imageUrl: 'https://placehold.co/600x300?text=Messenger',
      projectLink: 'https://github.com/CristianAG13/Messenger',
      githubLink: 'https://github.com/CristianAG13/Messenger',
    },
    {
      title: 'Tracker',
      description: 'Sistema de seguimiento de tareas y productividad personal.',
      imageUrl: 'https://placehold.co/600x300?text=Tracker',
      projectLink: 'https://github.com/CristianAG13/Tracker',
      githubLink: 'https://github.com/CristianAG13/Tracker',
    },
    {
      title: 'Online Shopping',
      description: 'Tienda en línea con carrito, pagos y gestión de productos.',
      imageUrl: 'https://placehold.co/600x300?text=Ecommerce',
      projectLink: 'https://github.com/CristianAG13/OnlineShop',
      githubLink: 'https://github.com/CristianAG13/OnlineShop',
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
