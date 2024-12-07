import React, { useEffect, useState } from 'react';

interface PhotoProps {
  src: string;
  delay: number;
  left: string;
}

const photos = [
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.22.jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.23 (1).jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.23 (2).jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.23 (3).jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.23.jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.24 (1).jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.24 (2).jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.24.jpeg',
  '/pasta fotos/WhatsApp Image 2024-12-07 at 14.11.25.jpeg',
];

const HangingPhoto: React.FC<PhotoProps> = ({ src, delay, left }) => {
  const [swing, setSwing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSwing((prev) => {
        const newAngle = Math.sin(Date.now() / 1000) * 5;
        return newAngle;
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="absolute top-0 transform-gpu"
      style={{
        left,
        transform: `rotate(${swing}deg)`,
        transition: 'transform 0.5s ease-out',
        transformOrigin: 'top center',
        animationDelay: `${delay}s`,
      }}
    >
      <div className="w-0.5 h-20 bg-gradient-to-b from-white/80 to-white/20 mx-auto" />
      <div className="relative group">
        <img
          src={src}
          alt="Memory"
          className="w-32 h-48 object-cover rounded-lg shadow-xl"
          style={{
            transform: 'rotate(-2deg)',
            transition: 'all 0.3s ease-out',
          }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300 rounded-lg" />
      </div>
    </div>
  );
};

export function HangingPhotos() {
  return (
    <div className="absolute top-0 left-0 w-full h-64 overflow-hidden">
      {photos.map((photo, index) => (
        <HangingPhoto
          key={photo}
          src={photo}
          delay={index * 0.2}
          left={`${(index * 11) + 5}%`}
        />
      ))}
    </div>
  );
}
