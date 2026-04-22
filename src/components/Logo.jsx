import { Link } from 'react-router-dom'

export const Logo = ({ className = "h-20 w-auto" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src="/logo.png" alt="تجار المال Money TraderS" className="h-full w-auto object-contain drop-shadow-md" />
    </div>
  )
}
