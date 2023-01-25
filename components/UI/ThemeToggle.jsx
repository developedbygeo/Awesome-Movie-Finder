import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

import { BsMoonFill, BsSunFill } from 'react-icons/bs';

const ThemeToggle = ({ className }) => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === 'system' ? systemTheme : theme;

  return (
    <button
      className={`btn absolute right-8 top-[2vh] p-6 text-xl ${className}`}
      type="button"
      title={`Swap to ${theme === 'light' ? 'dark' : 'light'}`}
    >
      {current === 'dark' ? (
        <BsSunFill className="text-white" onClick={() => setTheme('light')} />
      ) : (
        <BsMoonFill
          className="text-black-400"
          onClick={() => setTheme('dark')}
        />
      )}
    </button>
  );
};

export default ThemeToggle;
