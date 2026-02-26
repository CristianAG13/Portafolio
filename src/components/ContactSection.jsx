import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulación de envío (puedes integrar con EmailJS, Formspree, etc.)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'Martinguaduz@gmail.com',
      link: 'mailto:Martinguaduz@gmail.com',
      color: 'green',
    },
    {
      icon: <FaPhone />,
      title: 'Teléfono',
      value: '+506 6023-4154',
      link: 'https://wa.me/50660234154',
      color: 'purple',
    },
    {
      icon: <FaGithub />,
      title: 'GitHub',
      value: '@CristianAG13',
      link: 'https://github.com/CristianAG13',
      color: 'purple',
    },
    {
      icon: <FaLinkedin />,
      title: 'LinkedIn',
      value: 'Cristian Guadamuz',
      link: 'https://www.linkedin.com/in/cristian-guadamuz-273647188',
      color: 'blue',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Ubicación',
      value: 'Santa Cruz, Costa Rica',
      color: 'orange',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            ¡Hablemos de tu <span className="text-green-400">Proyecto</span>!
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Estoy disponible para nuevas oportunidades. No dudes en contactarme si tienes un proyecto en mente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-green-400/50 transition-all duration-300"
                >
                  <div
                    className={`p-4 rounded-lg ${
                      info.color === 'green' ? 'bg-green-400/10 text-green-400' :
                      info.color === 'blue' ? 'bg-blue-400/10 text-blue-400' :
                      info.color === 'purple' ? 'bg-purple-400/10 text-purple-400' :
                      'bg-orange-400/10 text-orange-400'
                    }`}
                  >
                    <span className="text-2xl">{info.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-gray-400 text-sm">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-white font-semibold hover:text-green-400 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-green-400/10 to-emerald-500/10 rounded-2xl border border-green-400/30"
            >
              <h3 className="text-xl font-bold mb-4">Sígueme en redes</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/CristianAG13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/cristian-guadamuz-273647188"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gray-900 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="mailto:Martinguaduz@gmail.com"
                  className="p-4 bg-gray-900 rounded-lg hover:bg-green-400 hover:text-gray-900 transition-all duration-300 hover:scale-110"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900/50 p-8 rounded-2xl border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 transition-colors text-white"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 transition-colors text-white"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 transition-colors text-white"
                  placeholder="¿En qué puedo ayudarte?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-green-400 transition-colors text-white resize-none"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-400/10 border border-green-400 rounded-lg text-green-400 text-sm"
                >
                  ¡Mensaje enviado con éxito! Te responderé pronto.
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-green-400 text-gray-900 font-bold rounded-lg hover:bg-green-500 transition-all duration-300 shadow-lg hover:shadow-green-400/50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full"
                    />
                    Enviando...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar Mensaje
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
