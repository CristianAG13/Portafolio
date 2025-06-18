import React from 'react';
import PortfolioCard from './PortfolioCard';
import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/fadeVariants';


const projects = [
    {
      title: 'SIMADLSC',
      description:
        'Este proyecto fue desarrollado por mí, junto a un grupo de compañeros de Ingeniería en Sistemas de la Universidad Nacional, como una donación al Liceo de Santa Cruz. La institución contaba con un sistema obsoleto y con múltiples problemas de funcionamiento. Escogimos este liceo porque es parte de nuestra historia; muchos de nosotros fuimos estudiantes ahí, y nos sentimos profundamente orgullosos de poder retribuir con una solución tecnológica que ayude a mejorar su gestión académica.',
      imageUrl: 'simadlsc.jpg',
      projectLink: 'https://simadlsc.vercel.app',
      githubLink: 'https://github.com/CristianAG13/SIMADLSC',
    },
    {
      title: 'SIMADLSC-backend',
      description: 'Backend del Sistema de Matrícula, Asistencia y Disciplina del Liceo Santa Cruz (SIMADLSC). Desarrollado con NestJS y TypeORM, proporciona una API REST para gestionar matrículas, asistencias, eventos académicos, justificaciones de ausencias, horarios de profesores y estudiantes. Implementa un sistema completo para el manejo de la información académica y administrativa del centro educativo.',
      imageUrl: 'https://placehold.co/600x300?text=SIMADLSC-backend',
      projectLink: 'https://simadlsc.vercel.app',
      githubLink: 'https://github.com/CristianAG13/SIMADLSC-backend',
    },
    {
      title: 'API REST - Gestión de Usuarios',
      description: 'API REST desarrollada en C# con ASP.NET Core para gestión de usuarios. Implementa autenticación basada en JWT, operaciones CRUD para usuarios con distintos roles, y arquitectura organizada por controladores. El sistema usa Entity Framework Core para la persistencia de datos y sigue las mejores prácticas en seguridad como protección de rutas y validación de solicitudes.',
      imageUrl: 'https://placehold.co/600x300?text=API-REST-CS',
      projectLink: 'https://github.com/CristianAG13/Api-Rest-Progra-IV',
      githubLink: 'https://github.com/CristianAG13/Api-Rest-Progra-IV',
    },
    {
      title: 'Gestor de Usuarios - React Admin',
      description: 'Panel de administración desarrollado con React que permite la gestión completa de usuarios. Cuenta con funcionalidades como crear, actualizar y eliminar usuarios, sistema de login seguro con manejo de tokens JWT, y control de acceso por roles. La interfaz utiliza TailwindCSS y componentes de AntDesign para ofrecer una experiencia de usuario moderna y responsiva.',
      imageUrl: 'https://placehold.co/600x300?text=React-Admin-Panel',
      projectLink: 'https://github.com/CristianAG13/Proyecto-1-Progra-IV',
      githubLink: 'https://github.com/CristianAG13/Proyecto-1-Progra-IV',
    },
    {
      title: 'Login Moderno - React & TailwindCSS',
      description: 'Interfaz de inicio de sesión moderna desarrollada con React y estilizada con TailwindCSS. Incluye validación de formularios, funcionalidad de "recordar usuario" y sistema de recuperación de contraseña. El diseño es completamente responsivo y adaptable a dispositivos móviles, con modo oscuro incluido y transiciones fluidas para mejorar la experiencia de usuario.',
      imageUrl: 'https://placehold.co/600x300?text=Modern-Login',
      projectLink: 'https://github.com/CristianAG13/Login-basico-react',
      githubLink: 'https://github.com/CristianAG13/Login-basico-react',
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
