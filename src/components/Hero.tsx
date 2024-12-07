import { Heart, Sparkles, Stars } from 'lucide-react';
import React from 'react';
import { HangingPhotos } from './HangingPhotos';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      <div className="absolute inset-0">
        <div className="absolute inset-0 flex items-center justify-center">
          {[...Array(50)].map((_, i) => (
            <Stars
              key={i}
              className="absolute text-pink-200 animate-sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() * 0.5 + 0.5}) rotate(${Math.random() * 360}deg)`,
              }}
            />
          ))}
        </div>
      </div>
      
      <HangingPhotos />
      
      <div className="relative z-10 text-center px-4 mt-48">
        <div className="relative group">
          <div className="relative">
            <Heart className="mx-auto w-32 h-32 text-white animate-heartbeat group-hover:text-pink-200 transition-colors duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
          <Sparkles className="absolute -top-4 -right-4 text-yellow-200 w-10 h-10 animate-sparkle" />
          <Sparkles className="absolute -bottom-4 -left-4 text-yellow-200 w-10 h-10 animate-sparkle" 
            style={{ animationDelay: '1s' }} />
          <Sparkles className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-yellow-200 w-8 h-8 animate-sparkle" 
            style={{ animationDelay: '1.5s' }} />
        </div>
        
        <h1 className="mt-12 text-7xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-pink-100 to-white animate-shine tracking-tight text-shadow">
          Lipe & Boli
        </h1>
        <p className="mt-8 text-3xl md:text-4xl text-white font-light glass-effect p-6 rounded-2xl">
          Uma história de amor que continua a florescer
        </p>
        <div className="mt-12">
          <button className="group relative px-12 py-5 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-500 shadow-lg hover:shadow-xl">
            <span className="relative z-10 text-xl tracking-wider">Nossa História</span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </button>
        </div>
      </div>
    </div>
  );
}