import React from 'react';
import Tag from "../atom/Tag";
import Title from '../atom/Title';

export default function Skills() {
  const tags = [
    { label: 'vite', bgColor: 'bg-purple-600', textColor: 'text-white' },
    { label: 'React', bgColor: 'bg-blue-200', textColor: 'text-blue-700' },
    {
      label: "React Native",
      bgColor: "bg-blue-200",
      textColor: "text-blue-700",
    },
    { label: 'Next.js', bgColor: 'bg-black', textColor: 'text-white' },
    { label: 'Swift', bgColor: 'bg-orange', textColor: 'text-white' },
    { label: 'Swift UI', bgColor: 'bg-blue-400', textColor: 'text-black' },
    { label: "JavaScript", bgColor: "bg-yellow-200", textColor: "text-black" },
    { label: "React Query", bgColor: "bg-pink-500", textColor: "text-white" },
    { label: 'axios', bgColor: 'bg-yellow-200', textColor: 'text-yellow-700' },
    { label: "Redux-toolkit", bgColor: "bg-purple-200", textColor: "text-black" },
    { label: 'Jotai', bgColor: 'bg-black', textColor: 'text-white' },
    { label: "Lottie", bgColor: "bg-teal-200", textColor: "text-teal-700" },
    { label: 'tailwindcss', bgColor: 'bg-sky-500', textColor: 'text-white' },
    { label: 'styledcomponent', bgColor: 'bg-pink-200', textColor: 'text-pink-600' },
  ];

  const tags2 = [
    { label: 'github', bgColor: 'bg-black', textColor: 'text-white' },
    { label: 'figma', bgColor: 'bg-green-600', textColor: 'text-white' },
    { label: 'notion', bgColor: 'bg-white', textColor: 'text-black', borderColor:'border-black'},
    { label: 'slack', bgColor: 'bg-blue-600', textColor: 'text-white' },
  ];

  return (
    <>
    <Title>Skills</Title>
    <div className="flex flex-wrap gap-2 justify-center">
      {tags.map((tag, index) => (
        <Tag key={index} bgColor={tag.bgColor} textColor={tag.textColor}>
          {tag.label}
        </Tag>
      ))}
    </div>
    <Title>Cowork Tools</Title>
    <div className="flex flex-wrap gap-2">
      {tags2.map((tag, index) => (
        <Tag key={index} bgColor={tag.bgColor} textColor={tag.textColor} borderColor={tag.borderColor}>
          {tag.label}
        </Tag>
      ))}
    </div>
    </>
  );
}
