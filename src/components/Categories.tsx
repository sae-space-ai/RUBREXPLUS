import { motion } from 'framer-motion';
import {
  Cog,
  Disc3,
  Zap,
  Droplets,
  Wind,
  Lightbulb,
  Filter,
  Battery,
  Gauge,
  Wrench,
  CircleDot,
  CircuitBoard,
} from 'lucide-react';

const categories = [
  { icon: Cog, name: 'Engine Parts', count: 9, color: 'from-red-500 to-red-700' },
  { icon: Disc3, name: 'Brake System', count: 9, color: 'from-orange-500 to-orange-700' },
  { icon: Filter, name: 'Filtration', count: 5, color: 'from-blue-500 to-blue-700' },
  { icon: Zap, name: 'Ignition System', count: 6, color: 'from-yellow-500 to-yellow-700' },
  { icon: Droplets, name: 'Cooling System', count: 2, color: 'from-cyan-500 to-cyan-700' },
  { icon: Wind, name: 'Clutch', count: 4, color: 'from-purple-500 to-purple-700' },
  { icon: Lightbulb, name: 'Lighting System', count: 6, color: 'from-amber-500 to-amber-700' },
  { icon: Battery, name: 'Electrical Parts', count: 1, color: 'from-green-500 to-green-700' },
  { icon: Gauge, name: 'Fuel System', count: 3, color: 'from-indigo-500 to-indigo-700' },
  { icon: Wrench, name: 'Shock Absorbers', count: 3, color: 'from-rose-500 to-rose-700' },
  { icon: CircleDot, name: 'Bearings', count: 2, color: 'from-teal-500 to-teal-700' },
  { icon: CircuitBoard, name: 'Timing Parts', count: 1, color: 'from-slate-500 to-slate-700' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Categories() {
  return (
    <section id="categories" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
            Product Range
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Comprehensive Parts Catalogue
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From engine components to electrical systems, Rubrex covers every
            critical part your vehicle needs for peak performance.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-red-100 rounded-2xl p-6 cursor-pointer transition-all hover:shadow-xl hover:shadow-red-600/5 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center mb-4 shadow-lg`}
              >
                <cat.icon className="text-white" size={22} />
              </div>
              <h3 className="font-bold text-gray-900 mb-1">{cat.name}</h3>
              <p className="text-sm text-gray-500">
                {cat.count} {cat.count === 1 ? 'product' : 'products'}
              </p>
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 group-hover:bg-red-50 flex items-center justify-center transition-colors">
                <span className="text-gray-400 group-hover:text-red-500 text-lg">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
