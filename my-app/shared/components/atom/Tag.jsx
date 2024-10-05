import React from 'react';

export default function Tag({ children, borderColor='border-white', bgColor = 'bg-gray-200', textColor = 'text-gray-700' }) {
  return (
    <span className={`inline-block px-8 py-2 rounded-full ${bgColor} ${textColor} border ${borderColor} text-md`}>
      {children}
    </span>
  );
}
