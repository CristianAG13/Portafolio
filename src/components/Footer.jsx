import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaHeart, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    navigation: [
      { label: 'Inicio', href: '#home' },
      { label: 'Sobre mí', href: '#about' },
      { label: 'Proyectos', href: '#projects' },
      { label: 'Contacto', href: '#contact' },
    ],
    social: [
      { icon: <FaGithub />, href: 'https://github.com/CristianAG13', label: 'GitHub' },
      { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/cristian-guadamuz-273647188', label: 'LinkedIn' },
      { icon: <FaEnvelope />, href: 'mailto:Martinguaduz@gmail.com', label: 'Email' },
      { icon: <FaWhatsapp />, href: 'https://wa.me/50660234154', label: 'WhatsApp' },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-950 to-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* About Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-green-400">{'<'}</span>
              <h3 className="text-2xl font-bold">Cristian Aguirre</h3>
              <span className="text-3xl font-bold text-green-400">{'/>'}</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones digitales que
              generen impacto. Siempre aprendiendo y mejorando.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <span>Hecho con</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>en Costa Rica 🇨🇷</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6">Navegación Rápida</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-green-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social & Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-xl font-bold mb-6">Conectemos</h3>
            <p className="text-gray-400 mb-4">
              ¿Tienes un proyecto en mente? ¡Hablemos!
            </p>
            <div className="flex flex-wrap gap-4">
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-900 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 shadow-lg"
                  title={social.label}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} Cristian Aguirre Guadamuz. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span>Hecho con React + Vite + TailwindCSS</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 p-4 bg-green-400 text-gray-900 rounded-full shadow-lg hover:shadow-green-400/50 transition-all duration-300 z-50"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp size={20} />
      </motion.button>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
    </footer>
  );
};

export default Footer;
