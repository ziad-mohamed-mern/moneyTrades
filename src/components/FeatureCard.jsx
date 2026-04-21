export const FeatureCard = ({ icon, title, desc }) => (
  <div className="bg-brand-card p-8 rounded-2xl border border-brand-border hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-2 group shadow-lg">
    <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center mb-6 text-brand-accent group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3 text-brand-text">{title}</h3>
    <p className="text-brand-text-muted text-sm leading-relaxed">{desc}</p>
  </div>
)
