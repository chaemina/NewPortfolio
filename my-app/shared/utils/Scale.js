"use client"

import { useState, useEffect } from 'react';

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 680;

// 뷰포트기반
const scale = (size, width) => (width / guidelineBaseWidth) * size;

// 높이기반
const verticalScale = (size, height) => (height / guidelineBaseHeight) * size;

// factor값 제어
const moderateScale = (size, width, factor = 0.5) => size + (scale(size, width) - size) * factor;

const useViewport = () => {
  const [viewport, setViewport] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : guidelineBaseWidth,
    height: typeof window !== 'undefined' ? window.innerHeight : guidelineBaseHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setViewport({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewport;
};

export { scale, verticalScale, moderateScale, useViewport };
