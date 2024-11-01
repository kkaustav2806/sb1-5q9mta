import React, { useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { useAstro } from '../context/AstroContext';
import { PlacesAutocomplete } from './PlacesAutocomplete';
import { useNavigate } from 'react-router-dom';

export const BirthDataForm: React.FC = () => {
  const { setBirthData } = useAstro();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    place: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBirthData(formData);
    navigate('/predictions');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-xl max-w-md mx-auto">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Birth Details</h2>
      <div className="space-y-4">
        <div className="relative">
          <label className="block text-white text-sm font-medium mb-2">Date of Birth</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 h-5 w-5" />
            <input
              type="date"
              className="w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border border-purple-300/20 text-white focus:ring-2 focus:ring-purple-500"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              required
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-white text-sm font-medium mb-2">Time of Birth</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 h-5 w-5" />
            <input
              type="time"
              className="w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border border-purple-300/20 text-white focus:ring-2 focus:ring-purple-500"
              value={formData.time}
              onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              required
            />
          </div>
        </div>
        
        <div className="relative">
          <label className="block text-white text-sm font-medium mb-2">Place of Birth</label>
          <PlacesAutocomplete
            value={formData.place}
            onChange={(value) => setFormData({ ...formData, place: value })}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg"
        >
          Generate Predictions
        </button>
      </div>
    </form>
  );
};