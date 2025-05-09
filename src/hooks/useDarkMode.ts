import { useEffect } from 'react';

const useDarkMode = (): [boolean, () => void] => {
  useEffect(() => {
    // Always enable dark mode
    document.documentElement.classList.add('dark');
  }, []);

  // Return dummy values since we're always in dark mode
  return [true, () => {}];
};

export default useDarkMode;