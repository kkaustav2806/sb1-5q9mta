import React from 'react';

interface TimeSelectorProps {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

export const TimeSelector = ({ options, selected, onChange }: TimeSelectorProps) => {
  return (
    <div className="flex space-x-2 mb-6">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-4 py-2 rounded-lg transition-all duration-200 ${
            selected === option
              ? 'bg-purple-500 text-white'
              : 'bg-white/10 text-purple-200 hover:bg-white/20'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};