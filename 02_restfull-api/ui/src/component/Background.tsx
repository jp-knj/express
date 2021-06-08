import { useState, useEffect } from 'react';
import { Image } from '@chakra-ui/react';

function getWindowDimentions() {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
}
function useWindowDimentions() {
  const [windowDimentions, setWindowDimentions] = useState(getWindowDimentions());

  useEffect(() => {
    function handleResize() {
      setWindowDimentions(getWindowDimentions());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowDimentions
}

function Background() {
  const { width, height } = useWindowDimentions();
  const img = `https://source.unsplash.com/random/${width}x${height}`;

  return <div>
    {width}x{height}
  </div>
}

export default Background;
