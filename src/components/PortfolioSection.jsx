import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/fadeVariants';
import PortfolioCard from './PortfolioCard';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción breve del proyecto 1.',
      imageUrl: 'https://placehold.co/600x400?text=Proyecto+1',
      projectLink: 'https://example.com/proyecto1',
      githubLink: 'https://github.com/usuario/proyecto1',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del proyecto 2.',
      imageUrl: 'https://placehold.co/600x400?text=Proyecto+2',
      projectLink: 'https://example.com/proyecto2',
      githubLink: 'https://github.com/usuario/proyecto2',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del proyecto 3.',
      imageUrl: 'https://placehold.co/600x400?text=Proyecto+3',
      projectLink: 'https://example.com/proyecto3',
      githubLink: 'https://github.com/usuario/proyecto3',
    },
    // Agrega más proyectos aquí
  ];

  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">Mi Portafolio</h2>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </motion.div>
    </section>
  );
};

export default PortfolioSection;