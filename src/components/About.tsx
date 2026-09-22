import { motion } from 'framer-motion';
import { CheckCircle2, Target, Users, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600/5 rounded-full blur-2xl" />

              <div className="relative space-y-8">
                {/* Brand mark */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-white font-black text-2xl">R</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white">RUBREX</h3>
                    <p className="text-red-400 text-sm">Est. 1995</p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Target, value: '2,500+', label: 'SKUs Available' },
                    { icon: Users, value: '500+', label: 'Partner Workshops' },
                    { icon: Globe, value: '9', label: 'Provinces Covered' },
                    { icon: CheckCircle2, value: '99.5%', label: 'Quality Rate' },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="bg-white/5 border border-white/10 rounded-xl p-4"
                    >
                      <stat.icon className="text-red-400 mb-2" size={20} />
                      <div className="text-xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Quote */}
                <div className="border-l-4 border-red-500 pl-4">
                  <p className="text-gray-300 italic">
                    "Delivering excellence in every component. Our commitment to
                    quality drives everything we do."
                  </p>
                  <p className="text-red-400 text-sm mt-2 font-medium">
                    — Rubrex Quality Promise
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
              About Rubrex
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
              South Africa's Trusted
              <br />
              <span className="text-red-600">Automotive Parts</span> Brand
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Rubrex has been at the forefront of the South African automotive
              aftermarket for over three decades. Proudly distributed by Kapico
              South Africa, we supply workshops nationwide with components that
              meet the highest international standards.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our extensive range covers everything from engine internals to
              electrical systems, ensuring that mechanics and vehicle owners have
              access to reliable, affordable parts that keep South Africa moving.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {[
                'ISO 9001 certified quality management',
                'Comprehensive warranty on all products',
                'Nationwide distribution through Kapico SA',
                'Technical support for workshops',
                'Competitive pricing without compromising quality',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="text-red-600 flex-shrink-0 mt-0.5"
                    size={20}
                  />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
