import { useParams, Link } from 'react-router-dom'
import { projectsData } from '../data/projects'
import { useEffect } from 'react'

export const ProjectDetails = () => {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === parseInt(id))

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <div className="min-h-screen pt-32 pb-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">المشروع غير موجود</h2>
        <Link to="/" className="text-brand-accent hover:underline">العودة للرئيسية</Link>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-3 text-sm text-brand-text-muted">
           <Link to="/" className="hover:text-brand-accent transition-colors">الرئيسية</Link>
           <span>/</span>
           <Link to="/#projects" className="hover:text-brand-accent transition-colors">مشاريعنا</Link>
           <span>/</span>
           <span className="text-brand-accent">{project.title}</span>
        </div>

        {/* Project Header & Image */}
        <div className="bg-brand-card rounded-2xl overflow-hidden border border-brand-border mb-12">
          <div className="aspect-[21/9] w-full relative">
             <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent"></div>
          </div>
          <div className="p-8 md:p-12 -mt-16 relative z-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-bg border border-brand-accent/30 text-brand-accent text-sm font-bold mb-4">
              {project.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-brand-text">{project.title}</h1>
            
            <div className="flex flex-wrap gap-6 text-sm text-brand-text-muted bg-brand-bg/50 p-6 rounded-xl border border-brand-border">
               <div className="flex flex-col gap-1">
                 <span className="text-brand-text-muted">الحالة</span>
                 <span className="font-bold text-brand-text">{project.status}</span>
               </div>
               <div className="w-px bg-brand-border hidden sm:block"></div>
               <div className="flex flex-col gap-1">
                 <span className="text-brand-text-muted">تاريخ الإنجاز المتوقع</span>
                 <span className="font-bold text-brand-text">{project.completionDate}</span>
               </div>
               <div className="w-px bg-brand-border hidden sm:block"></div>
               <div className="flex flex-col gap-1">
                 <span className="text-brand-text-muted">العائد الاستثماري المتوقع</span>
                 <span className="font-bold text-brand-emerald text-emerald-400">{project.roi}</span>
               </div>
            </div>
          </div>
        </div>

        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Details */}
           <div className="lg:col-span-2 space-y-8">
              <div>
                 <h2 className="text-2xl font-bold mb-4 border-b border-brand-border pb-4 text-brand-text">وصف المشروع / الفرصة الاﺳﺘﺜﻤﺎﺭﻳﺔ</h2>
                 <p className="text-brand-text-muted leading-relaxed text-lg">
                    {project.description}
                 </p>
                 {/* Mock extended content for visual fullness */}
                 <p className="text-brand-text-muted leading-relaxed mt-4">
                   تلتزم شركة تجار المال بتقديم أعلى العوائد من خلال تحليل عميق للبيانات واختيار شركاء موثوقين. هذا المشروع يعكس التزامنا بالابتكار والتطوير المستدام، مما يتيح للمستثمرين تنويع محافظهم بثقة تامة.
                 </p>

                 {project.externalLink && (
                   <a 
                     href={project.externalLink}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-block mt-8 px-8 py-3 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(212,175,55,0.2)]"
                   >
                     تفضل بزيارتنا
                   </a>
                 )}
              </div>
           </div>

           {/* Sidebar: Features & CTA */}
           <div className="space-y-8">
              <div className="bg-brand-card p-8 rounded-2xl border border-brand-border drop-shadow-sm">
                 <h3 className="text-xl font-bold mb-6 text-brand-text">مميزات الاستثمار</h3>
                 <ul className="space-y-4">
                    {project.features.map((feature, index) => (
                       <li key={index} className="flex items-center gap-3 text-brand-text-muted">
                          <svg className="w-5 h-5 text-brand-accent shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                          {feature}
                       </li>
                    ))}
                 </ul>
              </div>

              <div className="bg-gradient-to-br from-brand-bg to-brand-card p-8 rounded-2xl border border-brand-accent/30 text-center relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 rounded-full blur-2xl"></div>
                 <h3 className="text-xl font-bold mb-3 relative z-10 text-brand-text">مهتم بالاستثمار؟</h3>
                 <p className="text-sm text-brand-text-muted mb-6 relative z-10">فريقنا جاهز لعرض التفاصيل وتلقي استفساراتك.</p>
                 <a href="/#contact" className="block w-full py-3 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold rounded transition-colors relative z-10 shadow-[0_0_15px_rgba(212,175,55,0.2)]">
                   تواصل معنا الآن
                 </a>
              </div>
           </div>
        </div>

      </div>
    </div>
  )
}
