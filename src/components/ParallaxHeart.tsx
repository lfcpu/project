import React from 'react';
import { Heart } from 'lucide-react';

export function ParallaxHeart() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-200/20 floating-hearts"
          style={{
            top: '100vh',
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${Math.random() * 5 + 8}s`,
          }}
        />
      ))}
    </div>
  );
}