import { Link, useNavigate } from 'react-router-dom'
import { useState, useRef } from 'react'

export const ProjectCard = ({ id, image, title, category, externalLink }) => {
  const [active, setActive] = useState(false)
  const navigate = useNavigate()
  const touchStartRef = useRef(null)

  const handleCardTouchEnd = (e) => {
    // Only toggle if the touch didn't originate on the button
    if (touchStartRef.current === 'button') return
    e.preventDefault()
    setActive(prev => !prev)
  }

  const handleButtonTouchEnd = (e) => {
    e.stopPropagation()
    navigate(`/project/${id}`)
  }

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl block bg-brand-card cursor-pointer ${active ? 'card-active' : ''}`}
      onTouchEnd={handleCardTouchEnd}
      onClick={() => setActive(prev => !prev)}
    >
      <div className="aspect-[4/3] w-full">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 ${active ? 'scale-110' : ''}`}
          loading="lazy"
        />
      </div>
      <div className={`absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent transition-opacity pointer-events-none ${active ? 'opacity-90' : 'opacity-80 group-hover:opacity-90'}`}></div>

      <div className={`absolute bottom-0 left-0 right-0 p-6 transition-transform duration-300 ${active ? 'translate-y-0' : 'translate-y-12 group-hover:translate-y-0'}`}>
        <span className="text-brand-accent text-sm font-bold mb-2 block">{category}</span>
        <h3 className={`text-2xl font-bold transition-colors mb-4 ${active ? 'text-brand-accent' : 'text-brand-text group-hover:text-brand-accent'}`}>{title}</h3>

        <div className={`flex flex-wrap items-center gap-3 transition-opacity duration-300 delay-100 ${active ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
          <Link
            to={`/project/${id}`}
            className="flex items-center gap-2 text-brand-accent text-sm font-bold bg-brand-accent/10 hover:bg-brand-accent hover:text-brand-primary px-4 py-2 rounded-lg transition-colors border border-brand-accent/30"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={() => { touchStartRef.current = 'button' }}
            onTouchEnd={handleButtonTouchEnd}
          >
            <span>التفاصيل</span>
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
