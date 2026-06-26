import { motion } from 'framer-motion';
import { Download, Mail, MessageSquare } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >
          {/* Text Content */}
          <div className="flex-1 text-center md:text-left">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="text-accent text-lg md:text-xl font-medium">
                👋 Halo, Saya
              </span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6"
            >
              <span className="gradient-text">{personalInfo.name}</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-secondary mb-4">
                {personalInfo.role}
              </h2>
              <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                {personalInfo.focus.map((item, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-card/50 border border-primary/30 rounded-full text-sm font-medium text-white"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-secondary max-w-2xl mb-8"
            >
              {personalInfo.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 justify-center md:justify-start mb-8"
            >
              <motion.a
                href={personalInfo.cvUrl}
                download="CV_Fitra_Mustofa.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 rounded-full font-semibold transition-all shadow-lg shadow-primary/30"
              >
                <Download size={20} />
                Unduh CV
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-card/50 hover:bg-card border border-primary/30 rounded-full font-semibold transition-all"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Mail size={20} />
                Hubungi Saya
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center md:justify-start"
            >
              {[
                { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
                { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
                { icon: MessageSquare, href: personalInfo.social.whatsapp, label: 'WhatsApp' },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-card/50 hover:bg-primary/20 border border-primary/30 rounded-lg transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-shrink-0"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-30 animate-pulse" />
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full border-4 border-primary/30 shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
