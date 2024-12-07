import React from 'react';
import { Quote, Ship, Heart } from 'lucide-react';

export function LoveQuote() {
  const quotes = [
    "Como é bom poder passar os anos ao seu lado",
    "Nossos passeios de caiaque são momentos únicos e especiais",
    "Boli, Gordi, Fofi, Mozi e Bê - apelidos que só nós entendemos",
    "Isso é só o começo da nossa história de amor"
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-rose-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="relative">
          <Quote className="absolute -top-6 -left-6 w-12 h-12 text-rose-300 transform -rotate-12" />
          <Ship className="absolute top-1/2 -left-12 w-8 h-8 text-blue-400 animate-float" />
          <Heart className="absolute top-1/3 -right-8 w-6 h-6 text-rose-400 animate-heartbeat" />
          <div className="text-center">
            {quotes.map((quote, index) => (
              <p
                key={index}
                className="text-2xl md:text-3xl text-rose-800 font-light italic mb-4 transform hover:scale-105 transition-transform duration-300"
              >
                {quote}
              </p>
            ))}
          </div>
          <Quote className="absolute -bottom-6 -right-6 w-12 h-12 text-rose-300 transform rotate-180 rotate-12" />
        </div>
      </div>
    </div>
  );
}