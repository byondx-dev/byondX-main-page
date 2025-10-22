import { motion } from "motion/react";

export function Barakah() {
  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-zinc-900 via-purple-950/20 to-black overflow-hidden">
      {/* Subtle Islamic-inspired geometric pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="islamic-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M50 0 L75 25 L50 50 L25 25 Z M0 50 L25 75 L50 50 L25 25 Z M50 50 L75 75 L100 50 L75 25 Z M50 100 L75 75 L50 50 L25 75 Z"
                fill="currentColor"
                className="text-purple-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#islamic-pattern)" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white mb-6 text-4xl md:text-5xl">Technology with Barakah</h2>
          <p className="text-purple-200/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We build with purpose — empowering people, communities, and faith-based innovation.
            Every solution is crafted with intention, integrity, and a commitment to meaningful impact.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 p-8 rounded-3xl bg-gradient-to-br from-purple-900/20 to-fuchsia-900/10 backdrop-blur-sm border border-purple-500/30"
        >
          <p className="text-purple-300/90 italic text-lg">
            "Innovation rooted in values, technology guided by purpose"
          </p>
        </motion.div>
      </div>
    </section>
  );
}
