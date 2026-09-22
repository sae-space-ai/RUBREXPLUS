import { motion } from 'framer-motion';
import { ShieldCheck, Truck, Headphones, BadgeCheck, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    title: 'Quality Guaranteed',
    description:
      'Every Rubrex component undergoes rigorous testing to meet international quality standards. ISO 9001 certified processes ensure consistency.',
    color: 'bg-red-50 text-red-600',
  },
  {
    icon: Truck,
    title: 'Nationwide Delivery',
    description:
      'Through our partnership with Kapico South Africa, we deliver to workshops across all 9 provinces with reliable logistics.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Headphones,
    title: 'Technical Support',
    description:
      'Our team of automotive experts provides guidance on fitment, compatibility, and technical queries to ensure correct part selection.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: BadgeCheck,
    title: 'OEM Specifications',
    description:
      'Parts manufactured to original equipment specifications, ensuring perfect fit and performance that matches or exceeds factory standards.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description:
      'Strategically located warehouses ensure quick dispatch and minimal downtime for workshops waiting on critical components.',
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: ThumbsUp,
    title: 'Competitive Pricing',
    description:
      'Premium quality doesn\'t mean premium prices. We offer exceptional value through efficient supply chain management.',
    color: 'bg-teal-50 text-teal-600',
  },
];

export default function Features() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            The Rubrex Advantage
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We go beyond just supplying parts. Here's what makes RUBREX PLUS the
            preferred choice for South African workshops.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 rounded-2xl ${feature.color} flex items-center justify-center mb-6`}
              >
                <feature.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
