import { Heart, Ship, Camera } from 'lucide-react';
import React from 'react';

export function Gallery() {
  const memories = [
    {
      title: "Nossos Apelidos",
      description: "Boli, Gordi, Fofi, Mozi e Bê - cada apelido carrega um pouquinho do nosso amor",
      icon: Heart
    },
    {
      title: "Aventuras de Caiaque",
      description: "Momentos especiais pescando juntos, compartilhando a paz e a natureza",
      icon: Ship
    },
    {
      title: "Momentos Únicos",
      description: "Cada dia ao seu lado é uma nova página da nossa história de amor",
      icon: Camera
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-pink-50 to-rose-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-rose-900 mb-16">
          Nossos Momentos Especiais
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div key={index} 
                 className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="absolute -right-4 -top-4 w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full opacity-20 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <memory.icon className="w-12 h-12 text-rose-500 mb-6 transform group-hover:scale-110 transition-transform duration-300" />
              
              <h3 className="text-2xl font-semibold text-rose-800 mb-4">
                {memory.title}
              </h3>
              
              <p className="text-gray-600">
                {memory.description}
              </p>
              
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}