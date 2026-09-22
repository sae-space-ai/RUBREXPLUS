import { motion } from 'framer-motion';
import { Award, GraduationCap, Code2 } from 'lucide-react';

export default function Credits() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-800 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-5 py-2 mb-6">
            <Award className="text-red-400" size={18} />
            <span className="text-red-300 text-sm font-medium">Official Development Credits</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            RUBREX PLUS
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Plataforma profesional de componentes automotrices
          </p>

          {/* Author card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              {/* Avatar */}
              <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center mb-4 shadow-xl shadow-red-600/20">
                <GraduationCap className="text-white" size={36} />
              </div>

              <h3 className="text-2xl font-black text-white mb-1">
                Prof. Manuel GAGO FERNÁNDEZ
              </h3>
              <p className="text-red-400 font-medium mb-4">
                Autor & Desarrollador Principal
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2">
                  <Code2 className="text-red-400" size={16} />
                  <span className="text-gray-300 text-sm">Full Stack Development</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 rounded-lg px-4 py-2">
                  <GraduationCap className="text-red-400" size={16} />
                  <span className="text-gray-300 text-sm">UI/UX Design</span>
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 mt-2 w-full">
                <p className="text-gray-400 text-sm">
                  Tecnología: React • TypeScript • Tailwind CSS • Vite • Framer Motion
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-500 text-sm mt-8">
            © {new Date().getFullYear()} RUBREX PLUS — Todos los derechos reservados
          </p>
        </motion.div>
      </div>
    </section>
  );
}
