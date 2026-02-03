"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const videos = [
  {
    id: "5X7WWVTrBvM",
    title: "Lamberghini (Full Video) REACTION! | The Doorbeen Feat Ragini | Speed Records",
    channel: "Geeks A Musing",
    subscribers: "1.2M subscribers",
    duration: "17:55",
    image: "https://img.youtube.com/vi/5X7WWVTrBvM/maxresdefault.jpg",
  },
  {
    id: "w4ClQO0FFQg",
    title: "Param Sundari - Lyric Video | Mimi | Kriti Sanon | A. R. Rahman",
    channel: "Sony Music India",
    subscribers: "10M subscribers",
    duration: "5:20",
    image: "https://img.youtube.com/vi/w4ClQO0FFQg/maxresdefault.jpg",
  },
  {
    id: "GiyhZzJJhxE",
    title: "Lamberghini - The Doorbeen (HD Video) | Ft Ragini",
    channel: "Speed Punjabi",
    subscribers: "5M subscribers",
    duration: "3:45",
    image: "https://img.youtube.com/vi/GiyhZzJJhxE/maxresdefault.jpg",
  },
  {
    id: "I-QfPUz1es8",
    title: "Imagine Dragons - Bad Liar Official Music video",
    channel: "Imagine Dragons",
    subscribers: "30M subscribers",
    duration: "4:20",
    image: "https://img.youtube.com/vi/I-QfPUz1es8/maxresdefault.jpg",
  },
  {
    id: "JYRtKF4wknQ",
    title: "Param Sundari - Full Song | Mimi | Kriti Sanon",
    channel: "Sony Music India",
    subscribers: "10M subscribers",
    duration: "4:05",
    image: "https://img.youtube.com/vi/JYRtKF4wknQ/maxresdefault.jpg",
  },
];

export default function FeaturedVideos() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalVideoId, setModalVideoId] = useState<string | null>(null);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % videos.length);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Calculate visible videos (3 at a time)
  // We want a sliding window or just simple active index control. 
  // Given the layout requested (3 visible), let's just slide the track.
  const cardWidth = 504;
  const gap = 24;

  const handleVideoClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setModalVideoId(id);
  };

  return (
    <section className="w-full py-24 flex flex-col items-center bg-black overflow-hidden">
      <div className="w-full max-w-[1560px] mb-12">
        <h2 
            className="text-[40px] font-semibold leading-[1.2] mb-6 text-white"
            style={{ fontFamily: 'Aileron, sans-serif' }}
        >
          Featured Videos
        </h2>
        <div className="w-[100px] h-1 bg-[#B59F7A] mb-8" />
      </div>

      {/* Carousel Track Container */}
      <div className="w-full max-w-[1560px] overflow-hidden">
        <motion.div 
            className="flex gap-[24px]"
            animate={{ x: -(activeIndex * (cardWidth + gap)) }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
            {/* Duplicate list to allow infinite look if needed, but for now simple slide */}
            {videos.concat(videos).map((video, index) => (
            <div 
                key={`${video.id}-${index}`}
                className="relative shrink-0 overflow-hidden bg-[#111111] flex flex-col cursor-pointer group"
                style={{
                    width: '504px',
                    height: '456px',
                    borderRadius: '16px',
                }}
                onClick={(e) => handleVideoClick(video.id, e)}
            >
                {/* Thumbnail */}
                <div className="relative w-full h-[320px] bg-gray-800 rounded-t-[16px] overflow-hidden">
                    <Image
                        src={video.image}
                        alt={video.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                        <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white fill-current ml-1" />
                        </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-4 right-4 bg-black/80 px-2 py-1 rounded text-xs font-medium text-white">
                        {video.duration}
                    </div>
                </div>

                {/* Content Info */}
                <div className="p-6 flex gap-4 items-start justify-between flex-1">
                    <div className="flex gap-4">
                        {/* Channel Avatar Placeholder */}
                        <div className="w-10 h-10 rounded-full bg-gray-700 shrink-0 border border-white/10 overflow-hidden relative">
                             {/* Mock avatar from same image for consistency or gray */}
                             <Image src={video.image} alt="avatar" fill className="object-cover" />
                        </div>
                        
                        <div className="flex flex-col">
                            <h3 className="text-xl font-bold text-white mb-1 line-clamp-2 leading-tight">
                                {video.title}
                            </h3>
                            <div className="flex flex-col text-sm text-muted-foreground">
                                <span className="text-white/80 font-medium">{video.channel}</span>
                                <span>{video.subscribers}</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* The "Missing Button" - Right side circular button */}
                    <div className="shrink-0 mt-2">
                         <div className="w-10 h-10 rounded-full bg-[#FFFFFF]/10 flex items-center justify-center hover:bg-[#FFFFFF]/20 transition-colors">
                             <Play className="w-4 h-4 text-white fill-current opacity-60" />
                         </div>
                    </div>
                </div>
            </div>
            ))}
        </motion.div>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex gap-2 mt-12">
        {videos.map((_, i) => (
            <button 
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === activeIndex % videos.length ? 'bg-[#DA1316] w-8' : 'bg-white/20'}`}
                onClick={() => setActiveIndex(i)}
            />
        ))}
      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {modalVideoId && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                onClick={() => setModalVideoId(null)}
            >
                <div 
                    className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                >
                    <button 
                        className="absolute top-4 right-4 z-10 text-white/50 hover:text-white transition-colors"
                        onClick={() => setModalVideoId(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${modalVideoId}?autoplay=1`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
