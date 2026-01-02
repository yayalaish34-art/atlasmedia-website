import React from 'react';
import { motion } from 'framer-motion';

const Process: React.FC = () => {
  const steps = [
    { num: '01', title: 'פיצוח הבריף', desc: 'אנחנו לומדים את המוצר ומגדירים יחד מסרים, קהל יעד ותקציב.' },
    { num: '02', title: 'בחירת הנבחרת', desc: 'אנחנו בוחרים ידנית את ה-7 יוצרים המדויקים ביותר מהמאגר שלנו.' },
    { num: '03', title: 'יצירה ואישור', desc: 'היוצרים מעלים סקיצות, אתה מאשר בקליק אחד.' },
    { num: '04', title: 'הפצה ומעקב', desc: 'התוכן עולה לאוויר ואנחנו אוספים נתונים על לידים וצפיות.' },
  ];

  return (
    <section id="process" className="py-24 bg-brand-card/30 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-5xl font-black text-center mb-20">איך זה <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-blue">עובד?</span></h2>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent -translate-y-1/2 z-0"></div>

          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 bg-brand-dark/50 backdrop-blur-sm border border-white/5 p-8 rounded-3xl text-center hover:border-brand-purple/50 transition-all duration-500 group"
              >
                {/* Number Circle Container */}
                <div className="relative w-16 h-16 mx-auto mb-8">
                   {/* Animated Background Glow */}
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple to-brand-blue rounded-full blur-lg opacity-20 group-hover:opacity-60 transition-opacity duration-500"></div>
                   
                   {/* The Circle with Gradient Border */}
                   <div className="relative w-full h-full rounded-full bg-brand-dark flex items-center justify-center p-[2px] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-brand-purple via-brand-blue to-cyan-400 animate-gradient bg-300%"></div>
                      <div className="relative w-full h-full rounded-full bg-brand-dark flex items-center justify-center">
                         <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-tr from-brand-purple to-brand-blue group-hover:from-white group-hover:to-white transition-all duration-300">
                           {step.num}
                         </span>
                      </div>
                   </div>
                </div>

                <h3 className="text-xl font-black mb-4 group-hover:text-brand-purple transition-colors">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {step.desc}
                </p>

                {/* Bottom Decorative Bar */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-brand-purple to-brand-blue group-hover:w-1/2 transition-all duration-500 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;