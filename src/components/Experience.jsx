import { motion } from 'framer-motion';
import { Briefcase, Code, Zap } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience = () => {
  const getIcon = (type) => {
    switch (type) {
      case 'internship':
        return Briefcase;
      case 'project':
        return Code;
      case 'freelance':
        return Zap;
      default:
        return Briefcase;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Pengalaman <span className="gradient-text">Kerja</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Perjalanan profesional saya dan proyek-proyek utama
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-accent to-primary" />

            {/* Experience Items */}
            <div className="space-y-12">
              {experiences.map((exp, index) => {
                const Icon = getIcon(exp.type);
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Content Card */}
                    <motion.div
                      whileHover={{ y: -5, scale: 1.02 }}
                      className={`w-full md:w-5/12 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      }`}
                    >
                      {/* Period Badge */}
                      <div className={`flex ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start mb-3`}>
                        <span className="px-4 py-1 bg-primary/20 text-primary text-sm font-semibold rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-semibold mb-4">{exp.company}</p>

                      {/* Description */}
                      <p className="text-secondary mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : 'md:justify-start'} justify-start`}>
                        {exp.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            whileHover={{ scale: 1.1 }}
                            className="px-3 py-1 bg-background border border-primary/30 rounded-full text-xs font-medium text-white"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>

                    {/* Timeline Node */}
                    <div className="hidden md:flex w-2/12 justify-center">
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center border-4 border-background shadow-lg relative z-10"
                      >
                        <Icon className="text-white" size={28} />
                      </motion.div>
                    </div>

                    {/* Mobile Icon */}
                    <div className="md:hidden w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Icon className="text-white" size={24} />
                    </div>

                    {/* Spacer */}
                    <div className="hidden md:block w-5/12" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              { label: 'Tahun Pengalaman', value: '3+', icon: '📅' },
              { label: 'Proyek Selesai', value: '15+', icon: '🚀' },
              { label: 'Teknologi', value: '8+', icon: '⚡' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-xl p-6 text-center"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-secondary font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
