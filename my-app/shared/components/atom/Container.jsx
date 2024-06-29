"use client"

import { useViewport, scale } from '../../utils/Scale';
const Container = ({ children }) => {
  const { width, height } = useViewport();

  const customStyle = {
    width: `${width}px`,
    height: `${height}px`,
    display: 'flex',
   // alignItems: 'center',
   // padding: `${scale(20, width)}px`,
    boxSizing: 'border-box',
  };

  return (
    <div style={{ padding: 'env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left)' }}>
      <div style={customStyle}>
        {children}
      </div>
    </div>
  );
};

export default Container;
