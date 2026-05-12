import React from 'react';
import { motion } from 'framer-motion';

const banks = [
  {
    name: 'Bradesco',
    logo: '/banks/bradesco.svg',
  },
  {
    name: 'Santander',
    logo: '/banks/santander.svg',
  },
  {
    name: 'Itaú',
    logo: '/banks/itau.svg',
  },
  {
    name: 'Inter',
    logo: '/banks/inter.svg',
  },
];

const Partners = () => {
  return (
    <section className="bg-brand-charcoal py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 transition-opacity duration-700">
          {banks.map((bank, i) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center transition-all duration-500"
            >
              <img
                src={bank.logo}
                alt={bank.name}
                className="h-8 md:h-10 lg:h-12 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
