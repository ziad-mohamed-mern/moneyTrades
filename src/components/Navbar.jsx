import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { Logo } from './Logo'
import { ThemeToggle } from './ThemeToggle'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  // Helper to determine if we're on the home page
  const isHome = location.pathname === '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3">
          <Logo className="h-15 md:h-15 w-auto scale-110 origin-right transition-transform" />
        </Link>

        <div className="hidden md:flex items-center gap-10 font-medium text-sm absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="text-brand-accent transition-colors">الرئيسية</Link>
          {isHome ? (
            <>
              <a href="#about" className="hover:text-brand-accent transition-colors">من نحن</a>
              <a href="#projects" className="hover:text-brand-accent transition-colors">مشاريعنا</a>
              <a href="#features" className="hover:text-brand-accent transition-colors">المميزات</a>
            </>
          ) : (
            <Link to="/" className="hover:text-brand-accent transition-colors">العودة للرئيسية</Link>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href={isHome ? "#contact" : "/#contact"} className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary px-6 py-2.5 rounded text-sm font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]">
            تواصل معنا
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4 text-brand-text">
          <ThemeToggle />
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Content (Optional) */}
      {isMenuOpen && (
        <div className="md:hidden bg-brand-primary/95 backdrop-blur-md pb-4 pt-2 border-b border-brand-border">
          <div className="flex flex-col px-6 space-y-4 text-sm font-bold text-brand-text">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>الرئيسية</Link>
            {isHome && (
              <>
                <a href="#about" onClick={() => setIsMenuOpen(false)}>من نحن</a>
                <a href="#projects" onClick={() => setIsMenuOpen(false)}>مشاريعنا</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-brand-accent">تواصل معنا</a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
