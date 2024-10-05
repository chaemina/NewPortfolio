"use client"

import { useState } from "react";
import Text from "./Text";

export default function Toggle({ children, label }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full">
      <button onClick={toggleOpen} className="flex items-center gap-2 font-bold text-sky">
        <Text>{label}</Text>
        <Text>{isOpen ? '▲' : '▼'}</Text>
      </button>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
}
