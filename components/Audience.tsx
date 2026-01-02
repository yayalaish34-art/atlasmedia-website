import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Audience: React.FC = () => {
  const targets = [
    "מותגים שרוצים להשיג יתרון לא הוגן על המתחרים",
    "עסקים שמבינים שהשוק משתנה והם חייבים לבלוט עכשיו",
    "חברות שרוצות את מערך השיווק היחיד מסוגו בישראל"
  ];

  return (
    <section id="audience" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-3xl p-8 lg:p-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">למי זה מיועד?</h2>
          <p className="text-center text-gray-400 mb-10 max-w-lg mx-auto">
             המודל שלנו הוא ייחודי ובלעדי. אנחנו הסוכנות היחידה בישראל שעובדת בצורה הזו, והמקומות בנבחרת הלקוחות שלנו מוגבלים.
          </p>
          
          <div className="space-y-6">
            {targets.map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-black p-4 rounded-xl border border-gray-800">
                <CheckCircle2 className="text-green-500 shrink-0" size={28} />
                <span className="text-lg lg:text-xl font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Audience;