import React from 'react';
import { motion } from 'framer-motion';
import { Target, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';

const ValueProposition: React.FC = () => {
  return (
    <section id="value" className="py-32 relative overflow-hidden bg-brand-dark">
      {/* Background Ambience - High End Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-pink/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-pink/30 bg-brand-pink/5 text-brand-pink text-sm font-bold tracking-widest uppercase"
          >
            OUR PHILOSOPHY
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl lg:text-7xl font-black mb-8 leading-tight text-right md:text-center"
          >
            ויראליות היא <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-brand-purple to-brand-blue animate-gradient bg-300%">שם המשחק.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Pillar 1: Selection */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-pink/20 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative h-full bg-brand-card/40 backdrop-blur-xl border border-white/5 p-10 lg:p-14 rounded-[2.5rem] hover:border-brand-pink/30 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-brand-pink/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-pink/20 shadow-[0_0_20px_rgba(244,63,94,0.2)]">
                  <Target className="w-8 h-8 text-brand-pink" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black mb-6 text-right">הדיוק שבבחירה</h3>
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8 text-right">
                  אנחנו עובדים עם יוצרי תוכן שנבחרו בקפידה לפי <span className="text-white font-bold">נישה, קהל ויכולת מוכחת</span> לייצר חשיפה אמיתית. לא מאגרים ענקיים של בוטים - אלא נבחרת של מנצחים.
                </p>
              </div>

              <div className="space-y-4">
                {['ניתוח מעורבות אמת', 'התאמה ל-DNA של המותג', 'קהל יעד ממוקד'].map((item, idx) => (
                  <div key={idx} className="flex flex-row-reverse items-center gap-3 text-white/80 font-bold">
                    <CheckCircle2 className="text-brand-pink w-5 h-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Pillar 2: Production */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-brand-purple/20 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="relative h-full bg-brand-card/40 backdrop-blur-xl border border-white/5 p-10 lg:p-14 rounded-[2.5rem] hover:border-brand-purple/30 transition-all duration-500 flex flex-col justify-between">
              <div>
                <div className="w-16 h-16 bg-brand-purple/10 rounded-2xl flex items-center justify-center mb-8 border border-brand-purple/20 shadow-[0_0_20px_rgba(139,92,246,0.2)]">
                  <Sparkles className="w-8 h-8 text-brand-purple" />
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black mb-6 text-right">סטנדרט הפקה עולמי</h3>
                <p className="text-gray-400 text-lg lg:text-xl leading-relaxed mb-8 text-right">
                  כל סרטון מתוכנן, מצולם ומופק בסטנדרט מקצועי גבוה – <span className="text-white font-bold">כזה שאי אפשר להתעלם ממנו.</span> אנחנו לא מסתפקים ב"בסדר", אנחנו בונים תוכן ויראלי מתוכנן.
                </p>
              </div>

              <div className="space-y-4">
                {['קריאייטיב פורץ גבולות', 'עריכה שמעלה את הריטנשן', 'נראות ויזואלית יוקרתית'].map((item, idx) => (
                  <div key={idx} className="flex flex-row-reverse items-center gap-3 text-white/80 font-bold">
                    <CheckCircle2 className="text-brand-purple w-5 h-5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>

        {/* Closing Achievement Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 p-1 rounded-3xl bg-gradient-to-r from-transparent via-white/10 to-transparent"
        >
          <div className="bg-brand-dark/80 backdrop-blur-sm rounded-3xl py-10 px-8 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-pink font-black text-2xl">01</div>
              <div className="text-right">
                <div className="text-white font-black">התאמה מלאה</div>
                <div className="text-gray-500 text-sm">לפי נישה וקהל ספציפי</div>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block"></div>
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-purple font-black text-2xl">02</div>
              <div className="text-right">
                <div className="text-white font-black">ביצוע מושלם</div>
                <div className="text-gray-500 text-sm">הפקה ברמה הגבוהה ביותר</div>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block"></div>
            <div className="flex flex-row-reverse items-center gap-4">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-blue font-black text-2xl">03</div>
              <div className="text-right">
                <div className="text-white font-black">חשיפה מקסימלית</div>
                <div className="text-gray-500 text-sm">תוצאה שמרגישים במכירות</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;