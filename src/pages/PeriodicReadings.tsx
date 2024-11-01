import React, { useState, useEffect } from 'react';
import { useAstro } from '../context/AstroContext';
import { PredictionCard } from '../components/PredictionCard';
import { TimeSelector } from '../components/TimeSelector';
import { useNavigate } from 'react-router-dom';

export const PeriodicReadings = () => {
  const { birthData } = useAstro();
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState('Daily');

  useEffect(() => {
    if (!birthData) {
      navigate('/', { replace: true });
    }
  }, [birthData, navigate]);

  if (!birthData) return null;

  const timeframes = ['Daily', 'Weekly', 'Monthly', 'Yearly'];

  const periodicPredictions = {
    Daily: [
      {
        title: 'Today\'s Focus',
        prediction: 'Communication is highlighted today. Important conversations will yield positive results.',
        category: 'Daily Insight',
        strength: 4
      },
      {
        title: 'Energy Levels',
        prediction: 'Morning hours are most productive. Schedule important tasks before noon.',
        category: 'Wellness',
        strength: 3
      }
    ],
    Weekly: [
      {
        title: 'Week Ahead',
        prediction: 'A favorable week for financial decisions. New opportunities arise mid-week.',
        category: 'Weekly Overview',
        strength: 4
      }
    ],
    Monthly: [
      {
        title: 'Month\'s Potential',
        prediction: 'Focus on personal growth and learning. Travel opportunities may arise.',
        category: 'Monthly Forecast',
        strength: 5
      }
    ],
    Yearly: [
      {
        title: 'Year\'s Overview',
        prediction: 'Major career advancement possible. Personal relationships strengthen significantly.',
        category: 'Yearly Outlook',
        strength: 4
      }
    ]
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Periodic Predictions</h2>
      <TimeSelector
        options={timeframes}
        selected={selectedPeriod}
        onChange={setSelectedPeriod}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {periodicPredictions[selectedPeriod as keyof typeof periodicPredictions].map((prediction, index) => (
          <PredictionCard key={index} {...prediction} />
        ))}
      </div>
    </div>
  );
};