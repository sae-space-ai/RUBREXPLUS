import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Johan van der Merwe',
    role: 'Owner, Van der Merwe Motors',
    location: 'Johannesburg, GP',
    text: "We've been using RUBREX PLUS parts for over 10 years. The quality is consistently excellent, and the pricing keeps our customers happy. Their brake components are some of the best in the market.",
    rating: 5,
  },
  {
    name: 'Thabo Molefe',
    role: 'Head Mechanic, Molefe Auto',
    location: 'Pretoria, GP',
    text: "The technical support from RUBREX PLUS is outstanding. When I need help with fitment or compatibility, their team is always available. It makes my job so much easier.",
    rating: 5,
  },
  {
    name: 'Sarah Botha',
    role: 'Workshop Manager, Botha & Sons',
    location: 'Cape Town, WC',
    text: "Reliable delivery, quality parts, and fair prices. What more can you ask for? RUBREX PLUS has been our go-to supplier for filtration and engine parts. Highly recommended.",
    rating: 5,
  },
  {
    name: 'Pieter Naidoo',
    role: 'Owner, QuickFix Garage',
    location: 'Durban, KZN',
    text: "The range of products is impressive. From shock absorbers to ignition components, RUBREX PLUS covers everything I need. Their Kapico distribution network ensures I never wait long for parts.",
    rating: 4,
  },
];

export default function Testimonials() {
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            Trusted by Workshops Nationwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what South Africa's top
            mechanics and workshop owners say about RUBREX PLUS.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <Quote className="absolute top-6 right-6 text-red-100" size={40} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-amber-400 fill-amber-400"
                    size={16}
                  />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">
                    {testimonial.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role} • {testimonial.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
