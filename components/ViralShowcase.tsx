import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Eye, Heart, Share2, X, Volume2, VolumeX, MessageCircle } from 'lucide-react';

interface VideoData {
  id: number;
  views: string;
  likes: string;
  comments: string;
  creator: string;
  videoUrl: string;
  thumbnail: string;
}

const videos: VideoData[] = [
  { 
    id: 1, 
    views: "1.2M", 
    likes: "85K", 
    comments: "1.2K",
    creator: "Fashion_Forward", 
    videoUrl: "https://player.vimeo.com/external/494252666.sd.mp4?s=7215689163276632c020d233157e84128532f808&profile_id=165",
    thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 2, 
    views: "2.4M", 
    likes: "190K", 
    comments: "4.5K",
    creator: "Tech_Guru", 
    videoUrl: "https://player.vimeo.com/external/384745946.sd.mp4?s=3401799767222409054794e6378e999990e99d8a&profile_id=165",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 3, 
    views: "850K", 
    likes: "42K", 
    comments: "800",
    creator: "Chef_Special", 
    videoUrl: "https://player.vimeo.com/external/517090025.sd.mp4?s=2d871957c51579d4538e55e00940d5138f22e86d&profile_id=165",
    thumbnail: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=400"
  },
  { 
    id: 4, 
    views: "3.1M", 
    likes: "250K", 
    comments: "12K",
    creator: "LifeHack_Pro", 
    videoUrl: "https://player.vimeo.com/external/403661141.sd.mp4?s=98622c83c072b2204c3527a206972e0081079313&profile_id=165",
    thumbnail: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400"
  }
];

const ViralCard: React.FC<{ video: VideoData; index: number; onClick: () => void }> = ({ video, index, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    videoRef.current?.play().catch(() => {});
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9, y: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      animate={{ 
        y: isHovered ? -10 : [0, -8, 0],
      }}
      transition={{ 
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.4
        },
        scale: { duration: 0.3 }
      }}
      viewport={{ once: true }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className="relative aspect-[9/16] rounded-[2rem] overflow-hidden glass-panel group cursor-pointer border border-white/5 hover:border-brand-pink/50 hover:shadow-[0_0_40px_rgba(244,63,94,0.3)] transition-all duration-500"
    >
      {/* Background Video/Thumb */}
      <div className="absolute inset-0 bg-gray-900 -z-10 group-hover:scale-105 transition-transform duration-1000">
        <video
          ref={videoRef}
          src={video.videoUrl}
          poster={video.thumbnail}
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
        />
      </div>

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-transparent to-black/20 opacity-90 z-10"></div>

      {/* Center Play Icon */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <motion.div 
          animate={{ scale: isHovered ? 1.2 : 1, opacity: isHovered ? 1 : 0 }}
          className="w-16 h-16 rounded-full bg-brand-pink/90 backdrop-blur-md flex items-center justify-center text-white shadow-2xl"
        >
          <Play size={24} fill="currentColor" />
        </motion.div>
      </div>

      {/* UI Elements overlay (Mock TikTok style) */}
      <div className="absolute bottom-6 right-6 left-6 z-20 text-right">
         <div className="flex items-center justify-end gap-3 mb-4">
            <div className="flex flex-col items-end">
               <div className="h-2.5 w-20 bg-white/40 rounded-full mb-1"></div>
               <div className="h-1.5 w-12 bg-white/20 rounded-full"></div>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-pink to-brand-purple border-2 border-white/30 p-0.5">
               <div className="w-full h-full rounded-full bg-brand-dark/50"></div>
            </div>
         </div>
         <div className="h-4 w-5/6 bg-white/10 rounded-full mb-6 mr-auto"></div>
         
         <div className="flex flex-row-reverse items-center justify-between">
            <div className="flex flex-row-reverse gap-5 text-[11px] font-black text-white/80">
               <div className="flex items-center gap-1.5"><Eye size={14} className="text-brand-pink" /> {video.views}</div>
               <div className="flex items-center gap-1.5"><Heart size={14} className="group-hover:text-brand-pink transition-colors" /> {video.likes}</div>
            </div>
            <MessageCircle size={16} className="text-white/40" />
         </div>
      </div>

      {/* Top Decoration */}
      <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
        <div className="bg-brand-pink text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg">
          TRENDING
        </div>
        <div className="w-1 h-12 bg-gradient-to-b from-brand-pink to-transparent rounded-full opacity-50"></div>
      </div>
    </motion.div>
  );
};

const VideoModal: React.FC<{ video: VideoData; onClose: () => void }> = ({ video, onClose }) => {
  const [isMuted, setIsMuted] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/95 backdrop-blur-3xl"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 40 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 40 }}
        className="relative max-w-md w-full h-[90vh] bg-black rounded-[3rem] overflow-hidden shadow-[0_0_100px_rgba(244,63,94,0.2)] border border-white/10"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 left-8 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-pink transition-all border border-white/10"
        >
          <X size={24} />
        </button>

        <button 
          onClick={() => setIsMuted(!isMuted)}
          className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>

        <video 
          src={video.videoUrl} 
          autoPlay 
          loop 
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black via-black/80 to-transparent text-right">
          <div className="flex items-center justify-end gap-3 mb-4">
             <h4 className="text-2xl font-black text-white">@{video.creator}</h4>
             <div className="w-10 h-10 rounded-full bg-brand-pink flex items-center justify-center font-bold text-xs">AM</div>
          </div>
          <p className="text-gray-300 text-lg mb-10 leading-relaxed font-medium">קמפיין ATLAS MEDIA שהגיע ל-{video.views} צפיות והפך לוויראלי בטירוף בפיד הישראלי.</p>
          <div className="flex justify-end gap-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-pink/20 transition-colors cursor-pointer group">
                <Heart fill="currentColor" className="text-brand-pink transform group-hover:scale-110 transition-transform" size={28} />
              </div>
              <span className="text-sm font-bold text-gray-400">{video.likes}</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer group">
                <Share2 className="text-white transform group-hover:scale-110 transition-transform" size={28} />
              </div>
              <span className="text-sm font-bold text-gray-400">שיתופים</span>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const ViralShowcase: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <section id="viral" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Immersive background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_rgba(244,63,94,0.08)_0%,_transparent_70%)] -z-10 animate-pulse"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-brand-purple/10 blur-[120px] rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-brand-pink/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 mb-20 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl lg:text-7xl font-black mb-8"
        >
          גל של <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink to-brand-purple">ויראליות</span>
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          טעימה מהסרטונים שכבשו את הפיד הישראלי.
          <br />
          לחצו על סרטון כדי לחוות את האפקט.
        </motion.p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
           {videos.map((video, i) => (
             <ViralCard 
               key={video.id} 
               video={video} 
               index={i}
               onClick={() => setSelectedVideo(video)}
             />
           ))}
        </div>
      </div>

      {/* Aesthetic divider */}
      <div className="container mx-auto px-6 mt-32">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      </div>

      <AnimatePresence>
        {selectedVideo && (
          <VideoModal 
            video={selectedVideo} 
            onClose={() => setSelectedVideo(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ViralShowcase;