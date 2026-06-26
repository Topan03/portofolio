import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin } from 'lucide-react';
import { personalInfo, education } from '../data/portfolio';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
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
              Tentang <span className="gradient-text">Saya</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Kenali lebih lanjut tentang latar belakang, pendidikan, dan perjalanan saya
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Personal Info Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Info Pribadi</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-secondary text-sm mb-1">Nama</p>
                  <p className="text-white font-semibold text-lg">{personalInfo.name}</p>
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">Peran</p>
                  <p className="text-white font-semibold">{personalInfo.role}</p>
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">Lokasi</p>
                  <p className="text-white font-semibold">{personalInfo.location}</p>
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">Email</p>
                  <a
                    href={personalInfo.social.email}
                    className="text-primary hover:text-accent font-semibold transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary/10">
                <p className="text-secondary leading-relaxed">{personalInfo.bio}</p>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/20 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-bold">Pendidikan</h3>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <p className="text-white font-bold text-xl mb-1">{education.degree}</p>
                  <p className="text-primary font-semibold">{education.university}</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-secondary">{education.period}</p>
                  <div className="px-4 py-2 bg-primary/20 rounded-full">
                    <p className="text-primary font-bold">GPA: {education.gpa}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary/10">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="text-accent" size={20} />
                  <p className="text-white font-semibold">Pencapaian</p>
                </div>
                <ul className="space-y-3">
                  {education.achievements.map((achievement, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div className="mt-1 w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                      <p className="text-secondary">{achievement}</p>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Focus Areas */}
          <motion.div
            variants={itemVariants}
            className="mt-8 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Bidang Keahlian</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalInfo.focus.map((focus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-card/50 border border-primary/30 rounded-xl p-6 text-center"
                >
                  <div className="text-4xl mb-3">
                    {index === 0 ? '💻' : index === 1 ? '🎨' : '🗄️'}
                  </div>
                  <p className="text-white font-semibold text-lg">{focus}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
