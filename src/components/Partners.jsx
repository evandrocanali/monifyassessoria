import React from 'react';
import { motion } from 'framer-motion';

const banks = [
  {
    name: 'Bradesco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Bradesco_logo.svg/1024px-Bradesco_logo.svg.png',
  },
  {
    name: 'Santander',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Santander_Logo.svg/1024px-Santander_Logo.svg.png',
  },
  {
    name: 'Itaú',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Logo_Ita%C3%BA.svg/1024px-Logo_Ita%C3%BA.svg.png',
  },
  {
    name: 'Inter',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Banco_Inter_logo.svg/1024px-Banco_Inter_logo.svg.png',
  },
];

const Partners = () => {
  return (
    <section className="bg-brand-charcoal py-12 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24 opacity-40 hover:opacity-100 transition-opacity duration-700">
          {banks.map((bank, i) => (
            <motion.div
              key={bank.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500"
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
