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
          <Link to="/" className={`${location.pathname === '/' ? 'text-brand-accent' : 'hover:text-brand-accent'} transition-colors`}>الرئيسية</Link>
          <Link to="/about-us" className={`${location.pathname === '/about-us' ? 'text-brand-accent' : 'hover:text-brand-accent'} transition-colors`}>من نحن</Link>
          <Link to="/success-makers" className={`${location.pathname === '/success-makers' ? 'text-brand-accent' : 'hover:text-brand-accent'} transition-colors`}>صناع النجاح</Link>
          {isHome && (
            <>
              <a href="#projects" className="hover:text-brand-accent transition-colors">مشاريعنا</a>
              <a href="#features" className="hover:text-brand-accent transition-colors">المميزات</a>
            </>
          )}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <a href={isHome ? "#contact" : "/#contact"} className="bg-brand-accent hover:bg-brand-accent-hover text-brand-primary px-6 py-2.5 rounded text-sm font-bold transition-all shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]">
            تواصل معنا
          </a>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-brand-text p-2 hover:bg-brand-accent/10 rounded-lg transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden fixed inset-x-0 bg-brand-primary/98 backdrop-blur-xl border-b border-brand-border transition-all duration-300 ease-in-out ${isMenuOpen ? 'top-[73px] opacity-100 visible' : '-top-full opacity-0 invisible'}`}>
        <div className="flex flex-col p-6 space-y-5 text-base font-bold text-brand-text">
          <Link to="/" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/' ? 'text-brand-accent' : ''}>الرئيسية</Link>
          <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/about-us' ? 'text-brand-accent' : ''}>من نحن</Link>
          <Link to="/success-makers" onClick={() => setIsMenuOpen(false)} className={location.pathname === '/success-makers' ? 'text-brand-accent' : ''}>صناع النجاح</Link>
          {isHome ? (
            <>
              <a href="#projects" onClick={() => setIsMenuOpen(false)}>مشاريعنا</a>
              <a href="#features" onClick={() => setIsMenuOpen(false)}>المميزات</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-brand-accent pt-2">تواصل معنا</a>
            </>
          ) : (
            <Link to="/#contact" onClick={() => setIsMenuOpen(false)} className="text-brand-accent pt-2">تواصل معنا</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
