import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Columna 1: Info personal */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Cristian Aguirre</h3>
          <p className="text-sm">
            Desarrollador de software enfocado en crear experiencias digitales modernas, funcionales y con impacto real.
          </p>
        </div>

        {/* Columna 2: Navegación rápida */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Enlaces</h3>
          <ul className="text-sm space-y-2">
            <li><a href="#about" className="hover:text-white transition">Sobre mí</a></li>
            <li><a href="#projects" className="hover:text-white transition">Proyectos</a></li>
            <li><a href="mailto:Martinguaduz@gmail.com" className="hover:text-white transition">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3: Redes sociales */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Conectá conmigo</h3>
          <div className="flex gap-4 text-xl">
            <a
              href="https://github.com/CristianAG13"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:Martinguaduz@gmail.com"
              className="hover:text-white"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/50660234154"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>

      {/* Frase final */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Cristian Aguirre Guadamuz. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;
