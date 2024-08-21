import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const statuses = [
  { text: 'Ok', color: 'text-green-500' },
  { text: 'Need Servicing', color: 'text-blue-500' },
  { text: 'Need spare', color: 'text-yellow-500' },
  { text: 'Need replacement', color: 'text-red-500' },
];

const AmcButton = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState('');

  const animate = (newIndex) => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setIsAnimating(false);
    }, 300);
  };

  const nextStatus = () => {
    if (!isAnimating) {
      setDirection('left');
      animate((currentIndex + 1) % statuses.length);
    }
  };

  const prevStatus = () => {
    if (!isAnimating) {
      setDirection('right');
      animate((currentIndex - 1 + statuses.length) % statuses.length);
    }
  };

  const currentStatus = statuses[currentIndex];

  return (
    <div className="inline-flex items-center border border-gray-300 rounded-xl p-1 overflow-hidden">
      <button onClick={prevStatus} className="p-2 transition-colors duration-200">
        <ChevronLeft size={16} />
      </button>
      <div className="w-32 h-8 flex items-center justify-center overflow-hidden relative">
        <div
          className={`absolute w-full text-center transition-all duration-300 ease-in-out ${
            isAnimating
              ? direction === 'left'
                ? '-translate-x-full opacity-0'
                : 'translate-x-full opacity-0'
              : 'translate-x-0 opacity-100'
          }`}
        >
          <span className={` ${currentStatus.color} ${currentStatus.text.length > 5 ? 'text-sm' : 'text-base'}`}>
            {currentStatus.text}
          </span>
        </div>
      </div>
      <button onClick={nextStatus} className="p-2  transition-colors duration-200">
        <ChevronRight size={16} />
      </button>
    </div>
  );
};

export default AmcButton;