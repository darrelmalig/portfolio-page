// useTimer.js
import { useEffect, useState } from 'react';

const useTimer = (delay) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
    }, delay);

    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, [delay]);

  return isComplete; // Return true when the timer is complete
};

export default useTimer;