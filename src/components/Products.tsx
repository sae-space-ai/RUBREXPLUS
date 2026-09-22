import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Star } from 'lucide-react';

const allProducts = [
  { id: 1, name: 'Brake Pad Set - Front', category: 'Brake System', price: 'R449', rating: 4.8, sku: 'RBX-BP-001', popular: true },
  { id: 2, name: 'Oil Filter - Universal', category: 'Filtration', price: 'R89', rating: 4.9, sku: 'RBX-OF-012', popular: true },
  { id: 3, name: 'Spark Plug Set (4pc)', category: 'Ignition System', price: 'R299', rating: 4.7, sku: 'RBX-SP-004', popular: false },
  { id: 4, name: 'Timing Belt Kit', category: 'Engine Parts', price: 'R1,299', rating: 4.9, sku: 'RBX-TB-008', popular: true },
  { id: 5, name: 'Clutch Disc Assembly', category: 'Clutch', price: 'R899', rating: 4.6, sku: 'RBX-CD-003', popular: false },
  { id: 6, name: 'Radiator Hose Set', category: 'Cooling System', price: 'R349', rating: 4.5, sku: 'RBX-RH-002', popular: false },
  { id: 7, name: 'Headlight Bulb H7', category: 'Lighting System', price: 'R129', rating: 4.8, sku: 'RBX-HL-007', popular: true },
  { id: 8, name: 'Fuel Pump Assembly', category: 'Fuel System', price: 'R1,599', rating: 4.7, sku: 'RBX-FP-005', popular: false },
  { id: 9, name: 'Shock Absorber - Rear', category: 'Shock Absorbers', price: 'R699', rating: 4.6, sku: 'RBX-SA-006', popular: true },
  { id: 10, name: 'Wheel Bearing Kit', category: 'Bearings', price: 'R549', rating: 4.8, sku: 'RBX-WB-009', popular: false },
  { id: 11, name: 'Alternator Brush Set', category: 'Electrical Parts', price: 'R199', rating: 4.4, sku: 'RBX-AB-010', popular: false },
  { id: 12, name: 'Air Filter Panel', category: 'Filtration', price: 'R179', rating: 4.9, sku: 'RBX-AF-011', popular: true },
];

const categories = ['All', 'Brake System', 'Filtration', 'Ignition System', 'Engine Parts', 'Clutch', 'Cooling System', 'Lighting System', 'Fuel System', 'Shock Absorbers', 'Bearings', 'Electrical Parts'];

export default function Products() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = allProducts.filter((p) => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sku.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="products" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Featured Products
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Browse our selection of high-quality automotive components. All parts
            come with Rubrex quality guarantee.
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          {/* Search */}
          <div className="relative max-w-md mx-auto mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search products or SKU..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 transition-all"
            />
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.02 * product.id }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Product image placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-red-50 rounded-2xl flex items-center justify-center">
                    <ShoppingCart className="text-red-400" size={32} />
                  </div>
                  {product.popular && (
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-red-600 text-white text-xs font-bold rounded-full">
                      Popular
                    </span>
                  )}
                  <span className="absolute top-3 right-3 px-2.5 py-1 bg-gray-900/80 text-white text-xs font-mono rounded">
                    {product.sku}
                  </span>
                </div>

                {/* Product info */}
                <div className="p-5">
                  <p className="text-xs text-red-600 font-medium mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="text-amber-400 fill-amber-400" size={14} />
                    <span className="text-sm text-gray-600 font-medium">
                      {product.rating}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-black text-gray-900">
                      {product.price}
                    </span>
                    <button className="px-4 py-2 bg-red-50 hover:bg-red-600 text-red-600 hover:text-white text-sm font-semibold rounded-lg transition-all">
                      Enquire
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
