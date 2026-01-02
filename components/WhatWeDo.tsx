import React from 'react';
import { motion } from 'framer-motion';
import { Share2, BarChart, Zap, ShieldCheck, Globe } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden bg-brand-dark/50">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Visual Side - The "Management Hub" */}
          <div className="relative h-[450px] flex items-center justify-center order-2 lg:order-1">
             {/* Central Hub */}
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
               className="absolute w-[300px] h-[300px] border border-white/5 rounded-full"
             />
             <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute w-[400px] h-[400px] border border-white/5 rounded-full"
             />

             <div className="relative z-10 glass-panel p-6 rounded-[2.5rem] border-brand-pink/20 shadow-[0_0_50px_rgba(244,63,94,0.1)]">
                <div className="bg-gradient-to-br from-brand-pink to-brand-purple p-4 rounded-2xl">
                   <ShieldCheck className="w-10 h-10 text-white" />
                </div>
             </div>

             {/* Orbiting Platforms - Updated with Hebrew Labels */}
             {[
               { icon: <Globe className="w-5 h-5" />, label: "תוכן שעובד", color: "from-blue-500", delay: 0 },
               { icon: <Zap className="w-5 h-5" />, label: "חשיפה אמיתית", color: "from-brand-pink", delay: 2 },
               { icon: <Share2 className="w-5 h-5" />, label: "בונים באזז", color: "from-brand-purple", delay: 4 },
               { icon: <BarChart className="w-5 h-5" />, label: "שליטה ברשת", color: "from-cyan-400", delay: 6 }
             ].map((item, i) => (
               <motion.div
                 key={i}
                 animate={{ 
                   rotate: [0, 360],
                   x: [0, 0]
                 }}
                 style={{ 
                   position: 'absolute',
                   width: '100%',
                   height: '100%',
                   display: 'flex',
                   alignItems: 'center',
                   justifyContent: 'center'
                 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear", delay: i * 5 }}
               >
                 <motion.div 
                   style={{ transform: `rotate(-${(i * 90)}deg)` }}
                   className="absolute"
                   animate={{ x: 180 }}
                 >
                    {/* flex-row-reverse for RTL consistency with the indicator dot on the right */}
                    <div className="glass-panel py-2 px-4 rounded-full flex flex-row-reverse items-center gap-2 border-white/10 whitespace-nowrap shadow-xl">
                       <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${item.color} to-white animate-pulse`}></div>
                       <span className="text-[11px] font-black text-white/90">{item.label}</span>
                    </div>
                 </motion.div>
               </motion.div>
             ))}

             {/* Animated Data Particles */}
             {[...Array(8)].map((_, i) => (
               <motion.div
                 key={i}
                 className="absolute w-1 h-1 bg-brand-pink rounded-full"
                 initial={{ opacity: 0, scale: 0 }}
                 animate={{ 
                   opacity: [0, 1, 0],
                   scale: [0, 1.5, 0],
                   x: [Math.random() * 200 - 100, Math.random() * 400 - 200],
                   y: [Math.random() * 200 - 100, Math.random() * 400 - 200],
                 }}
                 transition={{ 
                   duration: 3 + Math.random() * 2, 
                   repeat: Infinity, 
                   delay: Math.random() * 5 
                 }}
               />
             ))}
          </div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-right order-1 lg:order-2"
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-brand-pink/10 border border-brand-pink/20 text-brand-pink text-xs font-black tracking-widest">
              WHAT WE DO
            </div>
            <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
              מה אנחנו <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">עושים?</span>
            </h2>
            
            <div className="space-y-8">
              <p className="text-gray-300 text-xl lg:text-2xl leading-relaxed">
                אנחנו לוקחים אחריות מלאה על הנוכחות של העסק שלך ברשתות החברתיות.
                מנהלים את כל הסושיאל מקצה לקצה — בצורה חכמה, מדויקת ומנוהלת.
              </p>

              <div className="p-8 rounded-[2rem] bg-gradient-to-br from-white/5 to-transparent border border-white/10 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-pink/10 blur-3xl -z-10 group-hover:bg-brand-pink/20 transition-all"></div>
                
                <h3 className="text-xl font-bold mb-4 text-brand-pink">המטרה פשוטה:</h3>
                <p className="text-gray-200 text-lg lg:text-xl font-medium leading-relaxed">
                  שהעסק שלך יהיה במקום שבו <span className="text-white font-black underline decoration-brand-pink/50 decoration-4">מדברים עליו</span>, <span className="text-white font-black underline decoration-brand-purple/50 decoration-4">רואים אותו</span> וזוכרים אותו.
                </p>
              </div>

              <div className="flex flex-wrap justify-end gap-4 mt-10">
                {['ניהול תוכן', 'אסטרטגיה ויראלית', 'קריאייטיב', 'אופטימיזציה'].map((tag, idx) => (
                  <span key={idx} className="text-sm font-bold text-gray-400 border border-white/5 px-4 py-2 rounded-xl">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;