import React from 'react';
import { motion } from 'framer-motion';

const StatsBar: React.FC = () => {
  const stats = [
    { label: "יוצרי תוכן נבחרים", value: "120" },
    { label: "צפיות בחודש האחרון", value: "950K+" },
    { label: "קמפיינים מוצלחים", value: "160+" },
  ];

  return (
    <section className="border-y border-white/10 bg-brand-card/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;