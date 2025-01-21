import { useEffect, useState } from 'react';

export function useTimer(seconds: number) {
  const [secondsLeft, setSecondsLeft] = useState(seconds);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  // start timer
  useEffect(() => {
    if (secondsLeft >= 0 && !timerId) {
      setTimerId(
        setInterval(() => {
          setSecondsLeft((state) => state - 1);
        }, 1000)
      );
    }
  }, [seconds, secondsLeft, timerId]);

  // stop timer
  useEffect(() => {
    return () => {
      if (timerId && secondsLeft <= 0) {
        clearInterval(timerId);
        setTimerId(null);
      }
    };
  }, [secondsLeft, timerId]);

  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
        setTimerId(null);
      }
    };
  }, [timerId]);

  return [secondsLeft, setSecondsLeft] as const;
}
