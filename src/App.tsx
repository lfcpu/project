import React from 'react';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { LoveQuote } from './components/LoveQuote';
import { ParallaxHeart } from './components/ParallaxHeart';

function App() {
  return (
    <div className="min-h-screen relative">
      <ParallaxHeart />
      <Hero />
      <LoveQuote />
      <Timeline />
      <Gallery />
      
      <footer className="bg-gradient-to-r from-rose-900 to-pink-900 text-white py-12 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <p className="text-3xl font-semibold animate-shine">Lipe & Boli</p>
          <p className="mt-4 text-xl text-rose-200">Um amor para toda a vida ❤️</p>
          <div className="mt-8 w-32 h-1 bg-gradient-to-r from-rose-400 via-pink-300 to-rose-400 mx-auto rounded-full"></div>
        </div>
        <div className="absolute inset-0 bg-black/10"></div>
      </footer>
    </div>
  );
}

export default App;