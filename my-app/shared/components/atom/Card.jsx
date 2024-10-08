"use client"

import React from 'react';
import MidTitle from "./MidTitle";
import Text from "./Text";
import Image from "next/image";
import Tag from "./Tag";
import Toggle from "./Toggle";
import Button from "./Button";  

export default function Card({ title, description, bgColor, link, link2, linkText2, linkText, image, tags = [], roleDescription, icon }) {
  return (
    <div className={`w-full flex flex-col gap-5 p-2 ${bgColor ? `bg-sky` : ''} ${bgColor ? `text-white` : ''} ${bgColor ? `border border-sky` : 'border'}`}>
      <div className="flex">
      {icon && (
          <Image src={icon} alt="icon" width={24} height={24} className="mr-2" />
        )}
      <MidTitle>{title}</MidTitle>
      </div>
      <div className='w-full flex gap-2 justify-center items-center'>
      {link && (
        <Button onClick={() => window.location.href = link} bgColor={bgColor === 'sky' ? 'bg-white' : 'bg-sky'} textColor={bgColor === 'sky' ? 'text-myblue' : 'text-white'}>
          {linkText}
        </Button>
      )}
      {link2 && (
        <Button onClick={() => window.location.href = link2} bgColor="bg-myblue" textColor={bgColor === 'sky' ? 'text-myblue' : 'text-white'}>
          {linkText2}
        </Button>
      )}
      </div>
      {image && (
        <div className="relative w-full h-80">
          <Image src={image} alt={title} layout="fill" objectFit="cover" />
        </div>
      )}

      <Text>{description}</Text>
      {roleDescription && (   
      <Toggle label="프로젝트 내 역할 ">
        <span className="whitespace-pre-line leading-relaxed">{roleDescription}</span>
      </Toggle>
     )}
      <div className="flex flex-wrap gap-2 justify-center">
        {tags.map((tag, index) => (
          <Tag key={index} bgColor={tag.bgColor} textColor={tag.textColor}>
            {tag.label}
          </Tag>
        ))}
      </div>
     
    
    </div>
  );
}
