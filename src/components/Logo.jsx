import { Link } from 'react-router-dom'

export const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* SVG Shield Icon */}
      <svg viewBox="0 0 100 120" className="h-full aspect-auto w-auto drop-shadow-xl" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 0L95 20V60C95 90 75 110 50 120C25 110 5 90 5 60V20L50 0Z" fill="url(#brandGradient)" />
        <path d="M50 10L85 26V58C85 82 68 98 50 108C32 98 15 82 15 58V26L50 10Z" fill="#0A192F" />
        <path d="M25 45L50 75L75 45" stroke="url(#brandGradient)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M50 20V75" stroke="url(#brandGradient)" strokeWidth="6" strokeLinecap="round" />
        <circle cx="50" cy="20" r="4" fill="#D4AF37" />
        <defs>
          <linearGradient id="brandGradient" x1="5" y1="0" x2="95" y2="120" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4AF37" />
            <stop offset="0.5" stopColor="#FCEDA2" />
            <stop offset="1" stopColor="#B38B22" />
          </linearGradient>
        </defs>
      </svg>

      {/* Text Identity */}
      <div className="flex flex-col justify-center">
        <span className="text-xl md:text-2xl font-black text-brand-text leading-none mb-1">
          تجار<span className="text-brand-accent">المال</span>
        </span>
        <span className="text-[0.6rem] md:text-[0.7rem] font-bold text-brand-text-muted tracking-widest uppercase leading-none font-sans">
          Money TraderS
        </span>
      </div>
    </div>
  )
}
