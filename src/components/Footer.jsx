import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaArrowUp } from 'react-icons/fa';

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
    <footer className="relative bg-black text-slate-900 dark:text-slate-100 pt-20 pb-8 border-t border-slate-200 dark:border-slate-900">
      <div className="max-w-6xl mx-auto px-6">
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
              <h3 className="text-xl font-bold tracking-tighter">Cristian Aguirre Guadamuz.</h3>
            </div>
            <p className="text-slate-500 dark:text-slate-500 font-light text-sm leading-relaxed max-w-sm">
              Ingeniero en Sistemas de Información. Desarrollador de interfaces y arquitecturas escalables.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 md:px-8"
          >
            <h4 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
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
            <h4 className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 font-semibold mb-6">Social</h4>
            <div className="flex flex-wrap gap-4">
              {footerLinks.social.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-2.5 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md hover:bg-slate-100 dark:bg-slate-800 transition-colors duration-300 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400"
                  title={social.label}
                >
                  <span className="text-base">{social.icon}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-200 dark:border-slate-900 my-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600"
        >
          <p>
            © {new Date().getFullYear()} Cristian Aguirre Guadamuz. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-4">
            <span>Costa Rica 🇨🇷</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 p-3 bg-slate-100 text-slate-950 rounded-md shadow-lg shadow-black/50 hover:bg-slate-300 transition-colors duration-300 z-50 border border-slate-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaArrowUp size={16} />
      </motion.button>

    </footer>
  );
};

export default Footer;
