import { motion } from "motion/react";
import { Mail, MessageSquare, Linkedin } from "lucide-react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { GlassButton } from "./GlassButton";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-6 text-4xl md:text-5xl">Get in Touch</h2>
          <p className="text-purple-200/80 text-lg">
            Ready to transform your vision into reality? Let's connect.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-8 md:p-12 rounded-3xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-md border border-white/10"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-white mb-2">
                Name
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50 focus:border-purple-500/50 rounded-2xl"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50 focus:border-purple-500/50 rounded-2xl"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white mb-2">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-purple-300/50 focus:border-purple-500/50 rounded-2xl resize-none"
              />
            </div>

            <GlassButton variant="primary" className="w-full">
              Send Message
            </GlassButton>
          </form>

          <div className="flex justify-center gap-6 mt-12 pt-8 border-t border-white/10">
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 hover:bg-purple-600/20 hover:border-purple-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-24 pt-12 border-t border-white/10 text-center"
      >
        <div className="flex flex-wrap justify-center gap-8 mb-8 text-purple-300/70">
          <a href="#" className="hover:text-purple-400 transition-colors">
            About
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Services
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Careers
          </a>
          <a href="#" className="hover:text-purple-400 transition-colors">
            Privacy Policy
          </a>
        </div>
        <p className="text-purple-300/50">
          © 2025 ByondX. Byond X Technologies.
        </p>
      </motion.footer>
    </section>
  );
}
