import React from 'react';
import { Star } from "lucide-react";

interface PredictionCardProps {
  title: string;
  prediction: string;
  category: string;
  strength: number;
}

export const PredictionCard: React.FC<PredictionCardProps> = ({ title, prediction, category, strength = 0 }) => {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="text-sm mb-4">{prediction}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs bg-blue-500 text-white px-2 py-1 rounded">{category}</span>
        <div className="flex">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              size={16}
              fill={index < strength ? "yellow" : "none"}
              color={index < strength ? "yellow" : "gray"}
            />
          ))}
        </div>
      </div>
    </div>
  );
};