import React from 'react';
import { NavLink } from 'react-router-dom';
import { Star, Calendar, MessageCircle, Clock } from 'lucide-react';

export const Navigation = () => {
  const navItems = [
    { path: '/', label: 'Home', icon: Star },
    { path: '/predictions', label: 'Life Predictions', icon: Clock },
    { path: '/periodic', label: 'Periodic Readings', icon: Calendar },
    { path: '/questions', label: 'Ask Questions', icon: MessageCircle },
  ];

  return (
    <nav className="bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-purple-300'
                      : 'text-gray-300 hover:text-purple-300'
                  }`
                }
              >
                <item.icon className="h-4 w-4" />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};