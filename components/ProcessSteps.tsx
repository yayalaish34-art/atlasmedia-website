import React from 'react';
import { motion } from 'framer-motion';
import { Search, Users, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: <Search className="w-8 h-8" />,
    title: "מבינים את העסק שלך",
    desc: "אנחנו מבינים את קהל היעד שחשוב לך להגיע אליו.",
    color: "from-blue-500 to-cyan-400"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "הפנים הנכונות לעסק שלך",
    desc: "בוחרים יוצרי תוכן שמתמחים בנישה שלך, ויוצרים תוכן שמיועד במדויק לקהל הרלוונטי.",   
    color: "from-brand-purple to-brand-pink"
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "חשיפה חכמה ומנוהלת", 
    desc: "אנחנו מנהלים את כל הנוכחות שלך ברשת מהתוכן, דרך ההעלאה ועד ההפצה.",
    color: "from-brand-pink to-rose-500"
  }
];

const ProcessSteps: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden bg-brand-dark">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-brand-purple/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-brand-pink/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 text-center mb-20 relative">
        {/* Subtle Title Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-24 bg-brand-pink/20 blur-[80px] -z-10 opacity-50"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-brand-pink text-[10px] font-black tracking-[0.2em] uppercase"
        >
          THE BLUEPRINT
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-5xl lg:text-7xl font-black tracking-tight"
        >
          איך זה <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue animate-gradient bg-300% drop-shadow-[0_0_15px_rgba(244,63,94,0.3)]">עובד?</span>
        </motion.h2>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative"
            >
              {/* Card Container */}
              <div className="relative h-full glass-panel p-10 rounded-[3rem] border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden flex flex-col items-center text-center">
                
                {/* Background Number */}
                <span className="absolute -top-4 -right-4 text-9xl font-black text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
                  0{index + 1}
                </span>

                {/* Icon Hub */}
                <div className={`relative w-24 h-24 mb-10 rounded-3xl bg-gradient-to-br ${step.color} p-[1px]`}>
                   <div className="w-full h-full rounded-3xl bg-brand-dark/90 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-500">
                      {step.icon}
                   </div>
                   {/* Pulse Effect */}
                   <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-2xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse`} />
                </div>

                <h3 className="text-2xl lg:text-3xl font-black mb-6 relative z-10">{step.title}</h3>
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed relative z-10 font-medium">
                  {step.desc}
                </p>

                {/* Connecting Line for Desktop (last one excluded) */}
                {index < 2 && (
                  <div className="hidden lg:block absolute top-1/2 -left-6 w-12 h-px bg-gradient-to-r from-white/10 to-transparent z-10" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Aesthetic Line Divider */}
      <div className="container mx-auto px-6 mt-24">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
      </div>
    </section>
  );
};

export default ProcessSteps;