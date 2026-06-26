import { motion } from 'framer-motion';
import { Award, Calendar } from 'lucide-react';
import { certificates } from '../data/portfolio';

const Certificates = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="certificates" className="py-20 relative overflow-hidden">
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
              Sertifikat & <span className="gradient-text">Pencapaian</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Sertifikasi profesional dan kursus yang telah diselesaikan
            </p>
          </motion.div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.03 }}
                className="group relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden hover:border-primary/40 transition-all"
              >
                {/* Certificate Image */}
                <div className="relative h-40 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  
                  {/* Award Icon Overlay */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: 'spring' }}
                    className="absolute top-3 right-3 p-2 bg-accent/90 backdrop-blur-sm rounded-full"
                  >
                    <Award size={20} className="text-white" />
                  </motion.div>
                </div>

                {/* Certificate Info */}
                <div className="p-5">
                  <h3 className="text-base font-bold text-white mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-accent text-sm font-semibold mb-3">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-secondary text-sm">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/30 transition-all pointer-events-none" />
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center"
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4">Pembelajaran Berkelanjutan</h3>
              <p className="text-secondary text-lg mb-6">
                Saya percaya pada pembelajaran seumur hidup dan terus meningkatkan keahlian saya melalui
                kursus online, workshop, dan proyek langsung.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {[
                  { label: 'Sertifikat', value: '10+' },
                  { label: 'Kursus', value: '25+' },
                  { label: 'Jam Belajar', value: '500+' },
                  { label: 'Proyek', value: '15+' },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card/50 border border-primary/30 rounded-xl p-4"
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <p className="text-secondary text-sm">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
