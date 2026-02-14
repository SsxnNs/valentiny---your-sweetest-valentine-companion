
import React from 'react';

interface Props {
  onEnter: () => void;
}

const LoveGalleryHero: React.FC<Props> = ({ onEnter }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fffafa] p-6 overflow-hidden">
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full">
        {/* Animated Cute Frame */}
        <div className="relative animate-cute-float group">
          <div className="bg-white p-4 pb-20 shadow-[0_30px_70px_rgba(255,182,193,0.4)] rounded-[2.5rem] border-4 border-rose-50 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]">
            <img 
              src="components/You1.jpg" 
              onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1516589174184-c68526614ae8?q=80&w=800&auto=format&fit=crop" }}
              alt="My Sweet Valentine" 
              className="w-full max-w-sm h-[450px] object-cover rounded-[2rem]"
            />
            <div className="absolute bottom-6 left-0 right-0 text-center">
              <p className="font-mali font-bold text-3xl text-rose-400 drop-shadow-sm">เจ้าความรักของเค้า 💖</p>
            </div>
            
            <div className="absolute top-6 right-8 text-3xl animate-pulse">✨</div>
            <div className="absolute bottom-24 left-8 text-3xl animate-bounce delay-300">🌸</div>
          </div>
        </div>

        <div className="mt-14 text-center">
          <h1 className="text-5xl md:text-7xl font-mali font-bold text-rose-900 mb-4 tracking-tight">
            เก็บไว้เป็น <span className="text-rose-500 font-pacifico text-6xl md:text-8xl block md:inline-block md:ml-2">ความทรงจำ</span>
          </h1>
          <p className="text-rose-300 font-fredoka font-semibold tracking-[0.25em] uppercase text-sm mb-12">
            Happy Valentine's Day // To My Special One
          </p>
          
          <button
            onClick={onEnter}
            className="group relative overflow-hidden px-16 py-6 bg-rose-400 text-white rounded-full transition-all duration-500 hover:bg-rose-500 hover:shadow-[0_20px_40px_rgba(251,113,133,0.4)] active:scale-95 font-fredoka font-bold text-xl shadow-lg"
          >
            <span className="relative z-10 uppercase tracking-widest flex items-center gap-2">
              เปิดดูความหวาน <span className="text-2xl">✨</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          </button>
        </div>
      </div>
      
      {/* Background soft blobs */}
      <div className="absolute top-[-10%] right-[-5%] w-[30rem] h-[30rem] bg-rose-100/50 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[25rem] h-[25rem] bg-orange-100/50 rounded-full blur-3xl animate-pulse delay-700"></div>
    </div>
  );
};

export default LoveGalleryHero;
