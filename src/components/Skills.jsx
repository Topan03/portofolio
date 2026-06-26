import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';
import { FaPython, FaPhp, FaJava, FaLaravel, FaReact, FaHtml5, FaFigma, FaGitAlt, FaGithub } from 'react-icons/fa';
import { SiJavascript, SiMysql, SiPostman, SiApache } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BsCursorFill } from 'react-icons/bs';
import { IoRocketOutline } from 'react-icons/io5';

const iconMap = {
  "Python": <FaPython className="text-[#3776AB]" />,
  "PHP": <FaPhp className="text-[#777BB4]" />,
  "Java": <FaJava className="text-[#007396]" />,
  "Laravel": <FaLaravel className="text-[#FF2D20]" />,
  "Blade": <FaLaravel className="text-[#FF2D20]" />,
  "React": <FaReact className="text-[#61DAFB]" />,
  "HTML/CSS": <FaHtml5 className="text-[#E34F26]" />,
  "JavaScript": <SiJavascript className="text-[#F7DF1E]" />,
  "MySQL": <SiMysql className="text-[#4479A1]" />,
  "VS Code": <VscVscode className="text-[#007ACC]" />,
  "Cursor": <BsCursorFill className="text-white" />,
  "Antigravity": <IoRocketOutline className="text-purple-500" />,
  "Figma": <FaFigma className="text-[#F24E1E]" />,
  "Git": <FaGitAlt className="text-[#F05032]" />,
  "Postman": <SiPostman className="text-[#FF6C37]" />,
  "Apache NetBeans": <SiApache className="text-[#D22128]" />,
  "GitHub": <FaGithub className="text-white" />,
};

const Skills = () => {
  const categories = [...new Set(skills.map((skill) => skill.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
              Keahlian <span className="gradient-text">Teknis</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Teknologi dan perangkat yang saya gunakan untuk mewujudkan ide
            </p>
          </motion.div>

          {/* Skills by Category */}
          <div className="space-y-12">
            {categories.map((category, catIndex) => (
              <motion.div
                key={category}
                variants={itemVariants}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold text-center md:text-left">
                  <span className="text-primary">//</span> {category}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.03 }}
                        className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all group"
                      >
                        {/* Icon & Name */}
                        <div className="flex items-center gap-4">
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl"
                          >
                            {iconMap[skill.name] || skill.icon}
                          </motion.div>
                          <div>
                            <h4 className="text-white font-bold text-lg">
                              {skill.name}
                            </h4>
                            <p className="text-secondary text-sm">{skill.category}</p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="mt-16 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold mb-4">Terus Belajar</h3>
            <p className="text-secondary text-lg max-w-3xl mx-auto">
              Saya secara konsisten memperluas keahlian saya dan mengikuti perkembangan
              teknologi terbaru serta praktik terbaik dalam pengembangan perangkat lunak.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
