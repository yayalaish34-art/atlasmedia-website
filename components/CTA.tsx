import React from 'react';
import { MessageCircle, ArrowLeft, Phone, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-14 h-14" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-pink/10"></div>
      
      <div className="container mx-auto px-6 relative z-10">
         <div className="bg-gradient-to-r from-brand-card to-brand-dark border border-white/10 p-8 lg:p-16 rounded-[3rem] shadow-2xl flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Right Side: Text & Info - First in DOM to appear on Right in RTL */}
            <div className="lg:w-1/2 text-right">
               <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
               >
                 <h2 className="text-4xl lg:text-6xl font-black mb-8 leading-tight text-white">
                    להפסיק להמר על<br/>
                    <span className="text-brand-pink">התקציב השיווקי שלך.</span>
                 </h2>
                 <p className="text-gray-300 text-xl mb-10 leading-relaxed max-w-xl">
                    שוק המשפיענים הפך למערב פרוע. עסקים זורקים כסף ומקווים לנס.
                    <br />
                    אנחנו לא מהמרים על ויראליות. <span className="text-white font-bold">אנחנו בונים אותה.</span>
                 </p>
                 
                 <div className="space-y-4 mb-0 lg:mb-12">
                    {[
                      'בלי התחייבות ארוכת טווח',
                      'תהליך הקמה מובנה ומהיר',
                      'שיווק שמרגישים בשטח'
                    ].map((text, i) => (
                      <div key={i} className="flex items-center gap-4 justify-start">
                         <div className="w-8 h-8 rounded-full bg-brand-pink/10 flex items-center justify-center text-brand-pink border border-brand-pink/20 shrink-0">
                           <Check size={16} strokeWidth={3} />
                         </div>
                         <span className="text-lg text-gray-300 font-medium">{text}</span>
                      </div>
                    ))}
                 </div>
               </motion.div>
            </div>

            {/* Left Side: WhatsApp Only - Appears on Left in RTL */}
            <div className="lg:w-1/2 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-card/60 p-10 lg:p-14 rounded-[3rem] border border-white/5 text-center relative overflow-hidden group shadow-2xl backdrop-blur-md"
              >
                 <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/30 to-transparent"></div>
                 
                 {/* WhatsApp Icon Circle - Prominent and Green */}
                 <div className="relative w-28 h-28 mx-auto mb-8">
                    <div className="absolute inset-0 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="relative w-full h-full rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] border border-[#25D366]/20">
                       <WhatsAppIcon />
                    </div>
                 </div>

                 <h3 className="text-3xl lg:text-4xl font-black mb-4 text-white">בדיקת התאמה בוואטסאפ</h3>
                 <p className="text-gray-400 text-lg lg:text-xl mb-12 leading-relaxed max-w-xs mx-auto">
                    שיחה קצרה, בלי התחייבות.
                    <br />
                    <span className="text-white/70">רק אם יש התאמה - ממשיכים.</span>
                 </p>

                 <a 
                   href="https://wa.me/972522857857" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="w-full py-6 px-8 rounded-2xl bg-white/5 border border-white/10 text-[#25D366] font-bold text-2xl flex items-center justify-center gap-3 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all group/btn"
                 >
                   <ArrowLeft size={24} className="group-hover/btn:-translate-x-1 transition-transform" />
                   דברו איתנו בוואטסאפ
                 </a>

                 {/* Direct Call Text */}
                 <div className="mt-10 flex flex-col items-center gap-3">
                    <span className="text-gray-500 font-medium text-lg">או התקשרו ישירות:</span>
                    <a href="tel:052-285-7857" className="text-3xl font-black text-brand-blue flex items-center gap-3 hover:scale-105 transition-transform tracking-tight">
                      052-285-7857
                      <Phone size={22} />
                    </a>
                 </div>
              </motion.div>
            </div>
         </div>
      </div>
    </section>
  );
};

export default CTA;