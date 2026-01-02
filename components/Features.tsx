import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, BarChart3 } from 'lucide-react';

const TechFeatures: React.FC = () => {
  const features = [
    {
      icon: <Users />,
      title: "הנבחרת המנצחת",
      desc: "מתוך מאגר של 60 יוצרים, אנחנו בוחרים ידנית את ה-7 שהכי מתאימים ל-DNA של המותג שלך."
    },
    {
      icon: <Target />,
      title: "ניהול ריכוזי",
      desc: "במקום לרדוף אחרי יוצרים, אנחנו מנהלים את האופרציה. בונים את הקריאייטיב, מאשרים סקיצות ודואגים לעלייה לאוויר."
    },
    {
      icon: <BarChart3 />,
      title: "מעקב המרות ולידים",
      desc: "הסוכנות היחידה בישראל שאוספת ומנתחת נתונים אמיתיים על לידים וצפיות שהשגנו מהמהלך."
    }
  ];

  return (
    <section className="py-24 bg-brand-dark relative">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <div className="max-w-2xl">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">לא אוטומציה. אסטרטגיה.</h2>
              <p className="text-gray-400 text-lg">
                 אנחנו לא מאמינים בלחיצת כפתור עיוורת.<br/>
                 כל קמפיין הוא מהלך מתוכנן של בחירת האנשים הנכונים ומעקב אחרי תוצאות אמת.
              </p>
           </div>
           <button className="text-brand-pink font-bold border-b border-brand-pink pb-1 hover:text-white hover:border-white transition-colors">
              ראה דוגמאות לתוצאות
           </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
           {features.map((feature, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.2 }}
               className="glass-panel p-8 rounded-2xl hover:bg-white/5 transition-all group"
             >
                <div className="w-14 h-14 bg-gradient-to-br from-gray-800 to-black border border-gray-700 rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                   {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                   {feature.desc}
                </p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TechFeatures;