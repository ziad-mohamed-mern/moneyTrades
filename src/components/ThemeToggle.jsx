import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full flex items-center justify-center 
                 bg-brand-secondary border border-white/5 
                 text-slate-400 hover:text-brand-accent hover:border-brand-accent/50
                 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brand-accent/50"
      aria-label="Toggle Theme"
      title="Toggle Dark/Light Mode"
    >
      {/* Sun Icon (shown in dark mode) */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-500 ease-in-out transform
          ${theme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}
        fill="none" stroke="currentColor" viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      {/* Moon Icon (shown in light mode) */}
      <svg
        className={`w-5 h-5 absolute transition-all duration-500 ease-in-out transform
          ${theme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'}`}
        fill="currentColor" viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    </button>
  );
};
