import React, { useEffect, useState } from 'react';

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

interface FloatingPhotoProps {
  src: string;
  initialPosition: { x: number; y: number };
  speed: number;
  size: number;
  rotationSpeed: number;
}

const FloatingPhoto: React.FC<FloatingPhotoProps> = ({
  src,
  initialPosition,
  speed,
  size,
  rotationSpeed,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const movePhoto = () => {
      setPosition((prev) => {
        const newX = prev.x + Math.sin(Date.now() / (1000 * speed)) * 2;
        const newY = prev.y + Math.cos(Date.now() / (1000 * speed)) * 2;
        return { x: newX, y: newY };
      });

      setRotation((prev) => (prev + rotationSpeed) % 360);
    };

    const animationFrame = setInterval(movePhoto, 50);
    return () => clearInterval(animationFrame);
  }, [speed, rotationSpeed]);

  return (
    <div
      className="absolute transform-gpu floating-photo cursor-pointer transition-transform duration-300 hover:scale-150"
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${rotation}deg)`,
        width: `${size}px`,
        height: `${size}px`,
        zIndex: 5,
      }}
    >
      <img
        src={src}
        alt="Floating Memory"
        className="w-full h-full object-cover rounded-lg shadow-2xl"
        style={{
          border: '3px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 0 20px rgba(255, 192, 203, 0.3)',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/20 to-transparent rounded-lg" />
    </div>
  );
};

export function FloatingPhotos() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {photos.map((photo, index) => {
        const randomX = Math.random() * 80 + 10; // between 10% and 90%
        const randomY = Math.random() * 80 + 10;
        const randomSpeed = Math.random() * 3 + 2; // between 2 and 5
        const randomSize = Math.random() * 30 + 70; // between 70px and 100px
        const randomRotationSpeed = (Math.random() - 0.5) * 0.5; // between -0.25 and 0.25

        return (
          <FloatingPhoto
            key={photo}
            src={photo}
            initialPosition={{ x: randomX, y: randomY }}
            speed={randomSpeed}
            size={randomSize}
            rotationSpeed={randomRotationSpeed}
          />
        );
      })}
    </div>
  );
}
