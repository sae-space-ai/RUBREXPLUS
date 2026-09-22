import { motion } from 'framer-motion';
import { ArrowRight, Shield, Award, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 md:pt-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,_rgba(220,38,38,0.3),_transparent_50%)]" />
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.2),_transparent_50%)]" />
        </div>
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20 md:py-32 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-400 text-sm font-medium">
              Trusted Since 1995
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Premium Quality
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
              Automotive Parts
            </span>
            <br />
            You Can Trust
          </h1>

          <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
            Rubrex delivers high-performance automotive components engineered for
            reliability. From engine parts to brake systems, we provide South
            Africa's workshops with parts that exceed expectations.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#categories"
              className="group inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all shadow-lg shadow-red-600/30"
            >
              Explore Products
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-600 hover:border-gray-400 text-white font-semibold rounded-xl transition-all"
            >
              Learn More
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8">
            {[
              { value: '2,500+', label: 'Products' },
              { value: '500+', label: 'Workshops' },
              { value: '30+', label: 'Years' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl md:text-3xl font-black text-white">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="hidden lg:block relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            {/* Decorative rings */}
            <div className="absolute inset-0 rounded-full border border-red-600/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute inset-8 rounded-full border border-red-600/10 animate-[spin_15s_linear_infinite_reverse]" />
            <div className="absolute inset-16 rounded-full border border-gray-600/20" />

            {/* Center badge */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-red-600 to-red-800 rounded-full flex items-center justify-center shadow-2xl shadow-red-600/30">
                <div className="text-center">
                  <div className="text-5xl font-black text-white">R</div>
                  <div className="text-xs text-red-200 tracking-widest mt-1">
                    RUBREX
                  </div>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
            >
              <Shield className="text-red-400 mb-2" size={24} />
              <div className="text-white text-sm font-semibold">
                Quality Assured
              </div>
              <div className="text-gray-400 text-xs">ISO Certified</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3.5, repeat: Infinity }}
              className="absolute bottom-12 left-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
            >
              <Award className="text-red-400 mb-2" size={24} />
              <div className="text-white text-sm font-semibold">
                OEM Quality
              </div>
              <div className="text-gray-400 text-xs">Premium Grade</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-8 right-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4"
            >
              <Truck className="text-red-400 mb-2" size={24} />
              <div className="text-white text-sm font-semibold">
                Fast Delivery
              </div>
              <div className="text-gray-400 text-xs">Nationwide</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 80L48 74.7C96 69 192 59 288 53.3C384 48 480 48 576 53.3C672 59 768 69 864 69.3C960 69 1056 59 1152 53.3C1248 48 1344 48 1392 48L1440 48V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
