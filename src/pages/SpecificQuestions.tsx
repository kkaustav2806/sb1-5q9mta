import React, { useState, useEffect } from 'react';
import { useAstro } from '../context/AstroContext';
import { PredictionCard } from '../components/PredictionCard';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SpecificQuestions = () => {
  const { birthData } = useAstro();
  const navigate = useNavigate();
  const [question, setQuestion] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showPrediction, setShowPrediction] = useState(false);

  useEffect(() => {
    if (!birthData) {
      navigate('/', { replace: true });
    }
  }, [birthData, navigate]);

  if (!birthData) return null;

  const categories = [
    'Career & Business',
    'Love & Relationships',
    'Health & Wellness',
    'Education',
    'Finance',
    'Family'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowPrediction(true);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-8 text-center">Ask Specific Questions</h2>
      
      <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl mb-8">
        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">Select Category</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/5 text-purple-200 hover:bg-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-white text-sm font-medium mb-2">Your Question</label>
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-purple-300 h-5 w-5" />
            <textarea
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border border-purple-300/20 text-white focus:ring-2 focus:ring-purple-500 min-h-[100px]"
              placeholder="Ask your specific question..."
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
        >
          Get Prediction
        </button>
      </form>

      {showPrediction && (
        <PredictionCard
          title="Your Personal Reading"
          prediction="Based on your current planetary positions and the specific nature of your question, there are strong indications of positive developments in this area. Mars in your 10th house suggests upcoming opportunities that align with your aspirations. The next 3 months appear particularly favorable for taking initiative in this direction."
          category={selectedCategory}
          strength={4}
        />
      )}
    </div>
  );
};