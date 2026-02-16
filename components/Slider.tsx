
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderProps {
  children: React.ReactNode[];
  autoPlay?: boolean;
  interval?: number;
}

const Slider: React.FC<SliderProps> = ({ children, autoPlay = false, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev === children.length - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? children.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(next, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, children.length]);

  return (
    <div className="relative overflow-hidden group">
      <div 
        className="flex transition-transform duration-500 ease-out" 
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {children.map((child, idx) => (
          <div key={idx} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {children.length > 1 && (
        <>
          <button 
            onClick={prev} 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#1e293b]/80 hover:bg-orange-500 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all text-white border border-slate-700"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={next} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#1e293b]/80 hover:bg-orange-500 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all text-white border border-slate-700"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {children.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-orange-500 w-8' : 'bg-slate-700 hover:bg-slate-600'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;
