"use client"
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ArticleChatBot = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const buttons = [
    'Summarize Article',
    'Conclude',
    'Make it Gen Z Style',
    'Simplify it',
  ];
  return (
    <div className="bg-black text-white rounded-2xl p-6 w-96 shadow-lg">
      <h2 className="text-xl font-bold mb-4">Hi, would you like me to:</h2>
      <div className="flex flex-wrap gap-3 mb-6">
        {buttons.map((label, index) => (
          <button
            key={index}
            onClick={() => setActiveButton(label)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              activeButton === label
                ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                : 'bg-gray-800 text-white hover:bg-gray-700'
            }`}>
            {label}
          </button>
        ))}
      </div>
      <div className="relative p-2">
        <input
          type="text"
          placeholder="Ask question"
          className="w-full bg-black border border-cyan-400 text-white placeholder-gray-400 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-cyan-400 hover:text-cyan-300">
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};
export default ArticleChatBot;