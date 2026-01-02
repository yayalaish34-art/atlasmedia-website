import React from 'react';
import { motion } from 'framer-motion';
import { Play, TrendingUp, Check } from 'lucide-react';

const creators = [
  { name: 'gal_marketing', views: '124K', img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop', verified: true },
  { name: 'noa_lifestyle', views: '89K', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop', verified: false },
  { name: 'itay_tech', views: '210K', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', verified: true },
  { name: 'maya_fit', views: '56K', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', verified: false },
  { name: 'dan_vlogs', views: '340K', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop', verified: true },
  { name: 'shira_art', views: '72K', img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop', verified: false },
];

const TikTokLogo = () => (
  <svg viewBox="0 0 24 24" className="w-12 h-12 relative z-10" fill="currentColor">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.89-.6-4.13-1.47-.13-.08-.26-.17-.38-.25v6.07c.01 3.21-1.37 6.51-4.35 7.79-2.98 1.28-6.6.76-9.08-1.44C1.3 18.06.49 14.16 2.37 11.02c1.55-2.6 4.79-3.95 7.69-3.3v4.05c-1.35-.41-2.91-.08-3.95.83-1.04.91-1.41 2.4-.95 3.69.46 1.29 1.83 2.12 3.18 1.95 1.35-.17 2.45-1.12 2.72-2.45.14-.68.14-1.39.14-2.09V.02h.3z" />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-purple/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-brand-pink/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Text Side */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-right z-10"
        >
          <h1 className="text-5xl lg:text-7xl font-black leading-[1.1] mb-6">
            <span className="text-white">ויראליות היא</span><br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-purple-500 to-brand-blue animate-gradient bg-300%">
              שם המשחק.
            </span>
          </h1>
          
          <p className="text-gray-300 text-xl lg:text-2xl mb-10 leading-relaxed max-w-2xl">
            אנחנו יוצרים נוכחות שאי אפשר להתעלם ממנה, מול הקהל שהעסק שלך באמת מעניין אותו.
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-brand-pink to-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-[0_0_30px_rgba(244,63,94,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              לבדיקת התאמה
              <TrendingUp size={20} />
            </button>
            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-panel text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              <Play size={18} fill="currentColor" />
              איך זה עובד?
            </button>
          </div>
        </motion.div>

        {/* Visual Side - The Network Effect */}
        <div className="relative z-10 h-[500px] w-full flex items-center justify-center perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full h-full"
          >
             {/* Central Hub - TikTok Logo */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                  className="relative group"
                >
                   <div className="absolute inset-0 bg-brand-pink/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
                   
                   <div className="w-24 h-24 glass-panel rounded-3xl flex items-center justify-center relative border-white/20 overflow-hidden">
                      {/* TikTok Glitch Effect Colors */}
                      <div className="absolute text-[#00f2ea] translate-x-[2px] -translate-y-[1px] opacity-70">
                        <TikTokLogo />
                      </div>
                      <div className="absolute text-[#ff0050] -translate-x-[2px] translate-y-[1px] opacity-70">
                        <TikTokLogo />
                      </div>
                      <div className="relative text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]">
                        <TikTokLogo />
                      </div>
                   </div>
                </motion.div>
             </div>

             {/* Orbiting Creator Cards */}
             {creators.map((creator, i) => {
               const angle = (i * 60) * (Math.PI / 180);
               const radius = 190;
               const x = Math.cos(angle) * radius;
               const y = Math.sin(angle) * radius;
               
               return (
                 <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2"
                    initial={{ x: 0, y: 0, opacity: 0 }}
                    animate={{ 
                      x: x, 
                      y: y, 
                      opacity: 1,
                      scale: [1, 1.05, 1]
                    }}
                    transition={{ 
                      delay: 0.5 + (i * 0.1), 
                      duration: 0.5,
                      scale: {
                        repeat: Infinity,
                        duration: 3 + i,
                        delay: i * 0.5
                      }
                    }}
                 >
                    <div className="glass-panel p-2.5 rounded-2xl flex items-center gap-3 w-48 -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform cursor-default border-white/10 group shadow-xl">
                       <div className="w-10 h-10 rounded-full border border-white/20 overflow-hidden flex-shrink-0">
                          <img src={creator.img} alt={creator.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                       </div>
                       <div className="flex-1 overflow-hidden">
                          <div className="flex items-center gap-1 mb-0.5">
                             <span className="text-[10px] font-bold text-white/90 truncate">@{creator.name}</span>
                             {creator.verified && (
                               <div className="bg-brand-blue rounded-full p-0.5">
                                 <Check size={6} strokeWidth={4} className="text-white" />
                               </div>
                             )}
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-brand-pink font-black">
                             <TrendingUp size={10} />
                             <span>{creator.views} VIEWS</span>
                          </div>
                       </div>
                    </div>
                    
                    {/* Connection Line */}
                    <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] pointer-events-none -z-10" style={{top: -y, left: -x}}>
                       <line x1="200" y1="200" x2={200 + x} y2={200 + y} stroke="url(#lineGradient)" strokeWidth="0.5" strokeDasharray="3 6" className="opacity-20" />
                       <defs>
                          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                             <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0" />
                             <stop offset="100%" stopColor="#F43F5E" stopOpacity="0.3" />
                          </linearGradient>
                       </defs>
                    </svg>
                 </motion.div>
               )
             })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;