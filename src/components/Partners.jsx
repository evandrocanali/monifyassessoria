import React from 'react';
import { motion } from 'framer-motion';

const banks = [
  {
    name: 'Bradesco',
    logo: 'https://logopng.com.br/logos/bradesco-1.png',
  },
  {
    name: 'Santander',
    logo: 'https://logopng.com.br/logos/santander-1.png',
  },
  {
    name: 'Itaú',
    logo: 'https://logopng.com.br/logos/itau-1.png',
  },
  {
    name: 'Inter',
    logo: 'https://logopng.com.br/logos/banco-inter-1.png',
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
                className="h-12 md:h-16 lg:h-20 w-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
