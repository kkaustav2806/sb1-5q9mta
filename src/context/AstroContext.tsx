import React, { createContext, useContext, useState } from 'react';

interface BirthData {
  date: string;
  time: string;
  place: string;
}

interface AstroContextType {
  birthData: BirthData | null;
  setBirthData: (data: BirthData) => void;
}

const AstroContext = createContext<AstroContextType | undefined>(undefined);

export const AstroProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [birthData, setBirthData] = useState<BirthData | null>(() => {
    const saved = localStorage.getItem('birthData');
    return saved ? JSON.parse(saved) : null;
  });

  const handleSetBirthData = (data: BirthData) => {
    setBirthData(data);
    localStorage.setItem('birthData', JSON.stringify(data));
  };

  return (
    <AstroContext.Provider value={{ birthData, setBirthData: handleSetBirthData }}>
      {children}
    </AstroContext.Provider>
  );
};

export const useAstro = () => {
  const context = useContext(AstroContext);
  if (context === undefined) {
    throw new Error('useAstro must be used within an AstroProvider');
  }
  return context;
};