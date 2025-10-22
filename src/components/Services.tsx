import { motion } from "motion/react";
import { Home, Cloud, Lock, Briefcase } from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Home,
      title: "SmartHomes & SmartBuilding",
      description: "EcoHome, AI Home, SecureHome and simply better home.",
    },
    {
      icon: Cloud,
      title: "Cloud & AI",
      description: "DevOps, CloudSecOps, AI Agents and Automation.",
    },
    {
      icon: Lock,
      title: "CyberSecurity",
      description: "PenTesting, RedTeam, BlueTeam, Awareness Training.",
    },
    {
      icon: Briefcase,
      title: "Business IoT",
      description: "Small Business Setup, POS, M365, Modern Workplace.",
    },
  ];

  return (
    <section className="relative py-32 px-6 bg-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl md:text-5xl">Our Services</h2>
          <p className="text-purple-200/80 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions tailored to your vision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-purple-900/10 via-fuchsia-900/5 to-transparent backdrop-blur-md border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Gradient border glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-purple-600/0 to-fuchsia-600/0 group-hover:from-purple-600/10 group-hover:to-fuchsia-600/10 transition-all duration-300" />

              <div className="relative z-10">
                <service.icon className="w-12 h-12 text-purple-400 mb-6 group-hover:text-purple-300 transition-colors" />
                <h3 className="text-white mb-3">{service.title}</h3>
                <p className="text-purple-200/70 mb-6">{service.description}</p>
                <button className="text-purple-400 hover:text-purple-300 transition-colors inline-flex items-center gap-2">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
