import { useState, useEffect } from 'react';

const useWindow = () => {
  const [width, setWindowWidth] = useState(null);
  const [height, setWindowHeight] = useState(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return [width, height];
};
export default useWindow;
