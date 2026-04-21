import { Link } from 'react-router-dom'

export const ProjectCard = ({ id, image, title, category }) => (
  <Link to={`/project/${id}`} className="group relative overflow-hidden rounded-2xl cursor-pointer block">
    <div className="aspect-[4/3] w-full">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
        loading="lazy"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
      <span className="text-brand-accent text-sm font-bold mb-2 block">{category}</span>
      <h3 className="text-2xl font-bold text-brand-text group-hover:text-brand-accent transition-colors">{title}</h3>
    </div>
  </Link>
)
