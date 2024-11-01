import React, { useEffect } from 'react';
import { useAstro } from '../context/AstroContext';
import { PredictionCard } from '../components/PredictionCard';
import { useNavigate } from 'react-router-dom';

export const Predictions = () => {
  const { birthData } = useAstro();
  const navigate = useNavigate();

  useEffect(() => {
    if (!birthData) {
      navigate('/', { replace: true });
    }
  }, [birthData, navigate]);

  if (!birthData) return null;

  const lifePredictions = [
    {
      title: 'Career Path',
      prediction: 'Your career shows strong potential in technology or research fields. Jupiter\'s placement suggests academic success and continuous learning opportunities.',
      category: 'Career & Education',
      strength: 4
    },
    {
      title: 'Relationships',
      prediction: 'Venus in the 7th house indicates a harmonious marriage life after age 27. Strong bonds will form with partners who value communication and shared interests.',
      category: 'Relationships',
      strength: 4
    },
    {
      title: 'Health',
      prediction: 'You might face some health challenges, but maintaining a balanced diet and regular exercise will benefit you greatly.',
      category: 'Health',
      strength: 3
    }
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Life Predictions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {lifePredictions.map((prediction, index) => (
          <PredictionCard
            key={index}
            title={prediction.title}
            prediction={prediction.prediction}
            category={prediction.category}
            strength={prediction.strength}
          />
        ))}
      </div>
    </div>
  );
};