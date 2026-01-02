import React from 'react';
import { XCircle } from 'lucide-react';

const WhatWeAreNot: React.FC = () => {
  return (
    <section className="py-24 bg-brand-gray">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2">
           <h2 className="text-4xl font-bold mb-8">מה אנחנו <span className="text-red-500">לא</span></h2>
           <div className="space-y-6">
             <div className="flex items-center gap-4 text-xl text-gray-300">
               <XCircle className="text-red-500 shrink-0" />
               <span>אנחנו לא Marketplace</span>
             </div>
             <div className="flex items-center gap-4 text-xl text-gray-300">
               <XCircle className="text-red-500 shrink-0" />
               <span>אנחנו לא סוכנות משפיענים קלאסית</span>
             </div>
             <div className="flex items-center gap-4 text-xl text-gray-300">
               <XCircle className="text-red-500 shrink-0" />
               <span>אנחנו לא חיבור אקראי ליוצר בודד</span>
             </div>
           </div>
        </div>
        
        <div className="md:w-1/2 bg-black p-8 rounded-2xl border border-gray-800 text-center">
           <h3 className="text-2xl font-bold text-white mb-2">אז מה אנחנו כן?</h3>
           <div className="text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-purple-600 mt-4">
             מערכת הפצה.
           </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeAreNot;