
import React, { useEffect, useRef } from 'react';

interface MemoryItem {
  url: string;
  caption: string;
  align: 'left' | 'right' | 'center';
  type: 'image' | 'video';
}

import us1 from './Us1.jpg';
import us2 from './Us2.jpg';
import us3 from './Us3.jpg';
import video1 from './video-1.mp4';
import videoUs2 from './videoUs2.mp4';
import videoYou1 from './videoYou1.mp4';

const MEMORIES: MemoryItem[] = [
  {
    url: us1,
    type: "image",
    caption: "จุดเริ่มต้นที่ทำให้หัวใจพองโตที่สุด ☁️",
    align: "center"
  },
  {
    url: video1,
    type: "video",
    caption: "ชอบเวลาที่เราได้หัวเราะไปด้วยกันนะ",
    align: "left"
  },
  {
    url: us2,
    type: "image",
    caption: "ไปเที่ยวที่ไหนก็อุ่นใจที่มีเธอข้างๆ 🍦",
    align: "right"
  },
  {
    url: videoUs2,
    type: "video",
    caption: "ทุกวินาทีที่มีเธอ... คือของขวัญที่พิเศษที่สุด",
    align: "left"
  },
  {
    url: us3,
    type: "image",
    caption: "ขอบคุณที่เป็นรอยยิ้มที่สวยที่สุดในโลกของเค้า",
    align: "center"
  },
  {
    url: videoYou1,
    type: "video",
    caption: "รักเธอที่สุดเลยนะ เจ้าความรักของเค้า 💖",
    align: "center"
  }
];

const PhotoStory: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={scrollRef} className="bg-[#fffafa] min-h-screen pb-40 font-mali">
      <div className="max-w-screen-xl mx-auto px-6 pt-20">
        {MEMORIES.map((memory, index) => (
          <div
            key={index}
            className={`flex flex-col mb-40 md:mb-72 reveal-on-scroll opacity-0 translate-y-10 transition-all duration-[1500ms] ease-out ${memory.align === 'left' ? 'items-start text-left' :
              memory.align === 'right' ? 'items-end text-right' : 'items-center text-center'
              }`}
          >
            <div className="relative w-full md:w-3/4 lg:w-2/3 group">
              {/* Soft colorful glow around items */}
              <div className="absolute -inset-4 bg-rose-100/60 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

              {memory.type === 'image' ? (
                <img
                  src={memory.url}
                  alt={`Memory ${index}`}
                  onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=1200&auto=format" }}
                  className="relative rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,182,193,0.25)] w-full aspect-[3/4] object-cover transition-all duration-700 hover:scale-[1.02]"
                />
              ) : (
                <video
                  src={memory.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="relative rounded-[2.5rem] shadow-[0_20px_50px_rgba(255,182,193,0.25)] w-full aspect-[3/4] object-cover transition-all duration-700 hover:scale-[1.02]"
                />
              )}

              <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg text-2xl animate-bounce group-hover:rotate-12 transition-transform">
                {index % 2 === 0 ? '💝' : '✨'}
              </div>
            </div>

            <div className="mt-10 max-w-lg">
              <span className="font-fredoka font-bold text-sm tracking-[0.3em] uppercase text-rose-300 mb-3 block">
                {memory.type === 'video' ? 'Moment 0' : 'Picture 0'}{index + 1}
              </span>
              <p className="text-3xl md:text-4xl font-bold text-rose-900 leading-snug drop-shadow-sm">
                {memory.caption}
              </p>
            </div>
          </div>
        ))}

        {/* Final Cute Message */}
        <div className="reveal-on-scroll opacity-0 translate-y-10 transition-all duration-[2000ms] flex flex-col items-center justify-center text-center py-32 border-t-2 border-rose-100/50 relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-8 py-2 text-3xl">🎀</div>

          <div className="text-6xl mb-8 animate-bounce">💌</div>
          <h2 className="text-4xl md:text-6xl font-mali font-bold text-rose-900 mb-10 leading-tight">
            อยู่ให้เค้าบอกรักแบบนี้ <br /> ไปนานๆ เลยนะ...
          </h2>
          <p className="text-rose-400 font-medium text-xl md:text-2xl max-w-xl leading-relaxed px-6">
            เธอคือของขวัญที่ดีที่สุดที่โลกนี้มอบให้เราเลย <br />
            ขอบคุณที่น่ารักและใจดีกับเราเสมอมา <br />
            <span className="text-rose-500 font-pacifico text-5xl block mt-6 drop-shadow-sm">รักที่สุดเลยเจ้าความรัก!</span>
          </p>

          <div className="mt-16 text-rose-300 font-fredoka font-bold tracking-[0.6em] uppercase text-xs">
            Yours Forever & Always
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoStory;
