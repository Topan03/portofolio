import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, MapPin, Phone } from 'lucide-react';
import { FiGithub as Github, FiLinkedin as Linkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolio';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: personalInfo.email,
      href: personalInfo.social.email,
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      value: personalInfo.phone,
      href: personalInfo.social.whatsapp,
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: '@fitramustofa',
      href: personalInfo.social.github,
      color: 'from-gray-500 to-gray-700',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Fitra Mustofa',
      href: personalInfo.social.linkedin,
      color: 'from-blue-500 to-blue-700',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Hubungi <span className="gradient-text">Saya</span>
            </h2>
            <p className="text-secondary text-lg max-w-2xl mx-auto">
              Punya ide proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi saya!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Send className="text-primary" size={28} />
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                      Nama Anda
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                      Email Anda
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary mb-2">
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary transition-colors"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-primary/30 rounded-lg text-white focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-lg font-semibold transition-all shadow-lg hover:shadow-primary/30"
                  >
                    <Send size={20} />
                    Kirim Pesan
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-6">
              {/* Contact Methods */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.03 }}
                    className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-xl p-5 hover:border-primary/40 transition-all group"
                  >
                    <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${method.color} mb-3`}>
                      <method.icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-white font-bold mb-1">{method.title}</h4>
                    <p className="text-secondary text-sm group-hover:text-primary transition-colors">
                      {method.value}
                    </p>
                  </motion.a>
                ))}
              </div>

              {/* Location & Availability */}
              <div className="bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Ketersediaan</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <MapPin className="text-primary" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Lokasi</h4>
                      <p className="text-secondary">{personalInfo.location}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Phone className="text-accent" size={24} />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Status</h4>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <p className="text-secondary">Tersedia untuk Magang</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-primary/10">
                  <p className="text-secondary text-sm leading-relaxed">
                    Saat ini saya terbuka untuk peluang magang dan proyek freelance.
                    Silakan hubungi saya jika Anda ingin bekerja sama atau sekadar ingin menjalin koneksi!
                  </p>
                </div>
              </div>


            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
