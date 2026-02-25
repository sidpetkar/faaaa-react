'use client';

import { useState } from 'react';
import './globals.css';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    // Use the BASE_PATH env variable for production builds
    const basePath = process.env.BASE_PATH || '';
    const audio = new Audio(`${basePath}/faaa.mp3`);
    setIsPlaying(true);
    
    audio.play().catch(error => {
      console.error('Error playing sound:', error);
      setIsPlaying(false);
    });

    audio.onended = () => {
      setIsPlaying(false);
    };
  };

  return (
    <div className="container">
      <button 
        className={`red-button ${isPlaying ? 'playing' : ''}`}
        onClick={playSound}
        disabled={isPlaying}
      >
        <span className="skull">💀</span>
        <span className="text">FAAAAA...</span>
      </button>
    </div>
  );
}
