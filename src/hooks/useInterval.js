import { useEffect } from 'react';

// useEffect(() => {
//   const timer = setInterval(getPeople, DELAY);
//   return () => {
//     clearInterval(timer);
//   };
// }, [getPeople]);

function useInterval(callback, interval) {
  useEffect(() => {
    const timer = setInterval(callback, interval);

    return () => {
      clearInterval(timer);
    };
  }, [callback, interval]);
}

export default useInterval;
