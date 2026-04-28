import { Link } from 'react-router-dom'

export const ProjectCard = ({ id, image, title, category, externalLink }) => (
  <div className="group relative overflow-hidden rounded-2xl block bg-brand-card">
    <div className="aspect-[4/3] w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity pointer-events-none"></div>

    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-brand-accent text-sm font-bold mb-2 block">{category}</span>
      <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand-accent transition-colors mb-4">{title}</h3>

      <div className="flex flex-wrap items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
        <Link to={`/project/${id}`} className="flex items-center gap-2 text-brand-accent text-sm font-bold bg-brand-accent/10 hover:bg-brand-accent hover:text-brand-primary px-4 py-2 rounded-lg transition-colors border border-brand-accent/30">
          <span>التفاصيل</span>
          <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </Link>
      </div>
    </div>
  </div>
)
