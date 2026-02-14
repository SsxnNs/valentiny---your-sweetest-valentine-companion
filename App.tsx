
import React, { useState } from 'react';
import { AppState } from './types';
import HeartRain from './components/HeartRain';
import LoveGalleryHero from './components/LoveGalleryHero';
import PhotoStory from './components/PhotoStory';

const App: React.FC = () => {
  const [view, setView] = useState<AppState>(AppState.HOME);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleEnterStory = () => {
    setIsTransitioning(true);
    // Smooth cinematic fade transition
    setTimeout(() => {
      setView(AppState.STORY);
      setIsTransitioning(false);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 1000);
  };

  const renderContent = () => {
    switch (view) {
      case AppState.HOME:
        return <LoveGalleryHero onEnter={handleEnterStory} />;
      
      case AppState.STORY:
        return <PhotoStory />;

      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-white selection:bg-rose-100 selection:text-rose-600 overflow-x-hidden">
      {view === AppState.STORY && <HeartRain />}
      
      {isTransitioning && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
           <div className="text-rose-200 animate-pulse text-4xl flex flex-col items-center">
             <svg className="w-12 h-12 mb-4" fill="currentColor" viewBox="0 0 24 24">
               <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
             </svg>
             <span className="text-sm tracking-widest font-bold uppercase">กำลังเปิดบันทึกรัก...</span>
           </div>
        </div>
      )}

      <main className="relative z-10 w-full min-h-screen">
        {renderContent()}
      </main>

      <style>{`
        .font-playfair { font-family: 'Playfair Display', serif; }
        .font-pacifico { font-family: 'Pacifico', cursive; }
        
        /* Smooth Custom Scrollbar */
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: #fff; }
        ::-webkit-scrollbar-thumb { background: #fecdd3; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default App;
