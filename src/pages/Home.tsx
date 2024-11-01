import React from 'react';
import { BirthDataForm } from '../components/BirthDataForm';
import { Star } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <Star className="h-12 w-12 text-purple-300" />
        </div>
        <h1 className="text-4xl font-bold text-white mb-4">
          Vedic Astrology with KP System
        </h1>
        <p className="text-purple-200 text-lg">
          Discover your past, present, and future through the ancient wisdom of Vedic astrology
          and the precision of the Krishnamurti Paddhati system
        </p>
      </div>
      <BirthDataForm />
    </div>
  );
};