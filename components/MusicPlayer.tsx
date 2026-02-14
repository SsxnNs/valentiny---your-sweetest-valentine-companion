import React, { useState, useEffect, useRef } from 'react';

// You'll need to update this importpath depending on where the user puts the file
import bgMusic from './bg-music.mp3';

const MusicPlayer: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Attempt auto-play on load (optional, browsers might block)
        // audioRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
    }, []);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="fixed bottom-4 left-4 z-50">
            <audio ref={audioRef} src={bgMusic} loop />
            <button
                onClick={togglePlay}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-all duration-300 border-2 border-rose-200 text-rose-500 animate-pulse hover:animate-none"
                aria-label="Toggle Music"
            >
                {isPlaying ? (
                    <span className="text-2xl">🔊</span>
                ) : (
                    <span className="text-2xl">🔇</span>
                )}
            </button>
        </div>
    );
};

export default MusicPlayer;
