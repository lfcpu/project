import { Calendar, Heart, Star, Utensils, HeartHandshake } from 'lucide-react';
import React from 'react';

export function Timeline() {
  const moments = [
    {
      date: "Primeiro Encontro",
      description: "Aquele lanche inesquecível onde quase perdemos o aparelho! Foi nesse momento que me apaixonei por você ❤️",
      icon: Utensils,
      className: "from-rose-400 to-red-500"
    },
    {
      date: "Primeiro Beijo",
      description: "Aquele beijo tímido e especial que marcou o início de tudo... mesmo sem língua! 😊",
      icon: HeartHandshake,
      className: "from-pink-400 to-rose-500"
    },
    {
      date: "08/07/2017",
      description: "Namoro oficial no show da expo em Araçatuba. O dia em que nossa história ganhou um novo capítulo ✨",
      icon: Calendar,
      className: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-rose-100 to-pink-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-rose-900 mb-16 relative">
          Nossa História
          <Star className="absolute -top-8 right-1/2 transform translate-x-1/2 text-yellow-400 animate-sparkle" />
        </h2>
        
        <div className="relative">
          {moments.map((moment, index) => (
            <div key={index} 
                 className="mb-16 relative transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center group">
                <div className={`flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br ${moment.className} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                  <moment.icon className="w-8 h-8 text-white" />
                </div>
                <div className="ml-6 bg-white p-6 rounded-lg shadow-lg flex-1 transform hover:translate-x-2 transition-transform duration-300">
                  <h3 className="text-2xl font-semibold text-rose-800">{moment.date}</h3>
                  <p className="mt-2 text-gray-600">{moment.description}</p>
                  <div className="absolute -right-2 -bottom-2 w-8 h-8">
                    <Heart className="text-rose-400 animate-heartbeat" />
                  </div>
                </div>
              </div>
              {index < moments.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-rose-400 to-pink-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}