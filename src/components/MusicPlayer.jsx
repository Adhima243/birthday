import { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2 } from 'react-icons/fi';
import bgAudio from '../assets/music/birthday-song.mp3';

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

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

  const handleEnded = () => {
    setIsPlaying(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio 
        ref={audioRef} 
        loop 
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src={bgAudio} type="audio/mpeg" />
      </audio>

      <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-full shadow-lg p-4 flex items-center gap-3">
        <button
          onClick={togglePlay}
          className="text-primary hover:text-accent transition-colors duration-300"
          title={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <FiPause size={24} />
          ) : (
            <FiPlay size={24} />
          )}
        </button>

        <div className="flex items-center gap-2">
          <FiVolume2 size={16} className="text-primary" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={(e) => setVolume(parseFloat(e.target.value))}
            className="w-20 h-1 bg-soft rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
