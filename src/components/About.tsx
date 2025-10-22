import { motion } from "motion/react";
import { Sparkles, Shield, Zap } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Zap,
      title: "Smart Innovation",
      description: "Cutting-edge solutions that adapt to your needs",
    },
    {
      icon: Shield,
      title: "Ethical Tech",
      description: "Building with integrity and responsibility",
    },
    {
      icon: Sparkles,
      title: "Future-Ready Design",
      description: "Prepared for tomorrow's challenges today",
    },
  ];

  return (
    <section id="about" className="relative py-32 px-6 bg-gradient-to-b from-black to-zinc-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl md:text-5xl">About ByondX</h2>
          <p className="text-purple-200/80 max-w-3xl mx-auto text-lg md:text-xl">
            We're reimaging technologies. From SmartBuildings to enterprise cloud security infrastructures — 
            ByondX helps you live and work smarter and better.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600/20 to-fuchsia-600/20 border border-purple-500/30 flex items-center justify-center mb-6 group-hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300">
                <item.icon className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-white mb-3">{item.title}</h3>
              <p className="text-purple-200/70">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
