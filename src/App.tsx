import React from 'react';
import { BirthDataForm } from './components/BirthDataForm';
import { Navigation } from './components/Navigation';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Predictions } from './pages/Predictions';
import { PeriodicReadings } from './pages/PeriodicReadings';
import { SpecificQuestions } from './pages/SpecificQuestions';
import { AstroProvider } from './context/AstroContext';

const App: React.FC = () => {
  return (
    <AstroProvider>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/predictions" element={<Predictions />} />
            <Route path="/periodic" element={<PeriodicReadings />} />
            <Route path="/questions" element={<SpecificQuestions />} />
          </Routes>
        </main>
      </div>
    </AstroProvider>
  );
};

export default App;