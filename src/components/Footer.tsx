import { Phone, Mail, MapPin } from 'lucide-react';

const footerLinks = {
  Products: [
    'Engine Parts',
    'Brake Systems',
    'Filtration',
    'Ignition Systems',
    'Cooling Systems',
    'Clutch Components',
  ],
  Company: [
    'About Rubrex',
    'Our Story',
    'Quality Standards',
    'Careers',
    'News & Updates',
  ],
  Support: [
    'Contact Us',
    'Technical Support',
    'Product Catalogue',
    'Warranty Info',
    'Find a Dealer',
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* CTA Banner */}
      <div className="bg-gradient-to-r from-red-700 to-red-600">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-white mb-2">
              Ready to Stock Rubrex?
            </h3>
            <p className="text-red-100 text-lg">
              Join 500+ workshops across South Africa that trust Rubrex.
            </p>
          </div>
          <a
            href="#contact"
            className="px-8 py-4 bg-white text-red-700 font-bold rounded-xl hover:bg-gray-100 transition-colors shadow-lg whitespace-nowrap"
          >
            Become a Dealer
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-black text-lg">R</span>
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight text-white">
                  RUB<span className="text-red-500">REX</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm leading-relaxed">
              Premium automotive parts for South Africa's workshops. Proudly
              distributed by Kapico South Africa, delivering quality components
              since 1995.
            </p>
            <div className="space-y-3">
              <a
                href="tel:+27112345678"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Phone size={16} />
                +27 (0)11 234 5678
              </a>
              <a
                href="mailto:info@rubrex.co.za"
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={16} />
                info@rubrex.co.za
              </a>
              <span className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                Johannesburg, South Africa
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-bold mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-red-400 transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Rubrex. All rights reserved. Distributed
            by Kapico South Africa (Pty) Ltd.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
