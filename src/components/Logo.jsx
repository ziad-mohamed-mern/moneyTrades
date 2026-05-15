import React from 'react';
import logoImg from '../assets/logo.jpeg';

export const Logo = ({ className = "h-12 w-auto" }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <img src={logoImg} alt="تجار المال Money TraderS" className="h-full w-auto object-contain drop-shadow-md rounded-lg" />
    </div>
  )
}

