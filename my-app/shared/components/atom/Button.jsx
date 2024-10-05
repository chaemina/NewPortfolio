"use client"

import React from 'react';

export default function Button({ onClick, children, bgColor = 'bg-sky', textColor = 'text-white' }) {
  return (
    <button 
      onClick={onClick} 
      className={`px-2 py-2 rounded-lg ${bgColor} ${textColor} hover:opacity-90 transition-opacity`}
    >
      {children}
    </button>
  );
}
