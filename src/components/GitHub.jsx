import { motion } from 'framer-motion';
import { GitFork, Star, Users } from 'lucide-react';
import { FiGithub as Github } from 'react-icons/fi';
import { githubStats } from '../data/portfolio';

const GitHub = () => {
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

  const stats = [
    { icon: Github, label: 'Repositories', value: githubStats.repositories },
    { icon: Users, label: 'Followers', value: githubStats.followers },
    { icon: GitFork, label: 'Following', value: githubStats.following },
  ];

  return (
    <section id="github" className="py-20 relative overflow-hidden">
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
              GitHub <span className="gradient-text">Statistics</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              My open-source contributions and coding activity
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-6 hover:border-primary/40 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="text-primary" size={32} />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, type: 'spring' }}
                    className="px-3 py-1 bg-primary/20 rounded-full"
                  >
                    <Star size={16} className="text-accent" />
                  </motion.div>
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <p className="text-secondary font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Language Stats */}
          <motion.div
            variants={itemVariants}
            className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 hover:border-primary/40 transition-all"
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="text-primary">#</span>
              Most Used Languages
            </h3>

            <div className="space-y-6">
              {githubStats.languages.map((lang, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  {/* Language Name & Percentage */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: lang.color }}
                      />
                      <span className="text-white font-semibold">{lang.name}</span>
                    </div>
                    <span className="text-primary font-bold">{lang.percentage}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-3 bg-background rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* GitHub Profile CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-2xl p-8"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">Want to see more?</h3>
                <p className="text-secondary">
                  Check out my GitHub profile for all my projects and contributions
                </p>
              </div>
              <motion.a
                href={`https://github.com/${githubStats.username}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 rounded-full font-semibold transition-all shadow-lg whitespace-nowrap"
              >
                <Github size={20} />
                Visit GitHub Profile
              </motion.a>
            </div>
          </motion.div>

          {/* GitHub Streak Placeholder */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex justify-center"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubStats.username}&theme=radical&hide_border=true&background=0F172A&ring=3B82F6&fire=06B6D4&currStreakLabel=3B82F6`}
              alt="GitHub Streak"
              className="rounded-2xl border border-primary/20"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHub;
