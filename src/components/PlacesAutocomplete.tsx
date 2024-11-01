import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

interface PlacesAutocompleteProps {
  value: string;
  onChange: (value: string) => void;
}

export const PlacesAutocomplete: React.FC<PlacesAutocompleteProps> = ({ value, onChange }) => {
  const [isManualEntry, setIsManualEntry] = useState(false);
  const [coordinates, setCoordinates] = useState({
    latitude: '',
    longitude: '',
    placeName: ''
  });

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const locationString = `${coordinates.placeName} (${coordinates.latitude}, ${coordinates.longitude})`;
    onChange(locationString);
  };

  if (isManualEntry) {
    return (
      <form onSubmit={handleManualSubmit} className="space-y-3">
        <div>
          <input
            type="text"
            placeholder="Place name (e.g., New York City)"
            value={coordinates.placeName}
            onChange={(e) => setCoordinates({ ...coordinates, placeName: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/20 text-white focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <input
            type="number"
            step="any"
            placeholder="Latitude (e.g., 40.7128)"
            value={coordinates.latitude}
            onChange={(e) => setCoordinates({ ...coordinates, latitude: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/20 text-white focus:ring-2 focus:ring-purple-500"
            required
          />
          <input
            type="number"
            step="any"
            placeholder="Longitude (e.g., -74.0060)"
            value={coordinates.longitude}
            onChange={(e) => setCoordinates({ ...coordinates, longitude: e.target.value })}
            className="w-full px-4 py-2 rounded-lg bg-white/5 border border-purple-300/20 text-white focus:ring-2 focus:ring-purple-500"
            required
          />
        </div>
        <div className="flex space-x-3">
          <button
            type="submit"
            className="flex-1 py-2 px-4 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
          >
            Confirm Location
          </button>
          <button
            type="button"
            onClick={() => setIsManualEntry(false)}
            className="py-2 px-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Back
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="space-y-3">
      <div className="relative">
        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-300 h-5 w-5" />
        <input
          type="text"
          placeholder="Enter place of birth"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full pl-12 pr-4 py-2 rounded-lg bg-white/5 border border-purple-300/20 text-white focus:ring-2 focus:ring-purple-500"
          required
        />
      </div>
      <button
        type="button"
        onClick={() => setIsManualEntry(true)}
        className="w-full py-2 text-sm text-purple-300 hover:text-purple-200 transition-colors"
      >
        Enter coordinates manually
      </button>
    </div>
  );
};