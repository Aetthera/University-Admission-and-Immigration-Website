import { useEffect, useState } from 'react';

export default function useCountUp(target, duration = 1000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target);
    if (start === end || isNaN(end)) return;

    const frameRate = 60; // frames per second
    const totalFrames = Math.round((duration / 1000) * frameRate);
    const increment = Math.ceil(end / totalFrames);

    const interval = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [target, duration]);

  return count;
}
