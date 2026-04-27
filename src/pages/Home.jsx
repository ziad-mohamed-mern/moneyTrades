import heroBg from '../assets/hero_bg.png'
import aboutCorp from '../assets/about_european.png'
import { FeatureCard } from '../components/FeatureCard'
import { ProjectCard } from '../components/ProjectCard'
import { projectsData } from '../data/projects'
import { Logo } from '../components/Logo'
import { Link } from 'react-router-dom'
import mohLogo from '../assets/partners/moh.png'
import sbcLogo from '../assets/partners/sbc.png'
import modonLogo from '../assets/partners/modon.png'
import partnersLogo from '../assets/partners/partners.png'
import successPathLogo from '../assets/partners/path_to_success.png'
import { partnersData } from '../data/partners'

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <header className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="absolute inset-0 z-0 bg-brand-bg">
          <img src={heroBg} alt="Corporate Background" className="w-full h-full object-cover opacity-80 dark:opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-brand-bg/50"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-brand-accent/10 to-transparent border border-brand-accent/20 backdrop-blur-md shadow-[0_0_20px_rgba(212,175,55,0.05)] hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] hover:border-brand-accent/40 transition-all mb-8 mt-8 animate-fade-in max-w-[90vw] md:max-w-max">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-accent shadow-[0_0_8px_rgba(212,175,55,0.8)]"></span>
            </span>
            <span className="text-xs md:text-sm font-bold text-brand-text/90 tracking-wide truncate whitespace-normal text-center">
              الرؤية الجديدة للإستثمار
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6 animate-fade-in delay-100 max-w-5xl mx-auto">
            تجار المال <br />
            <span className="text-gradient-gold">استثمارك يبدأ من هنا</span>
          </h1>

          <p className="text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in delay-200">
            نقدم حلولاً مالية متكاملة لرواد الأعمال والمستثمرين، بخبرة تمتد لسنوات في تنمية الثروات وإدارة المخاطر برؤية مستقبلية واضحة.
          </p>

          <div className="flex justify-center animate-fade-in delay-300 relative z-30">
            <Link to="/about-us" className="px-10 py-4 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold rounded shadow-xl transition-all hover:-translate-y-1">
              من نحن
            </Link>
          </div>

          <div className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <a href="#about" className="flex flex-col items-center gap-2 text-brand-text-muted hover:text-brand-accent transition-colors">
              <span className="text-xs font-bold uppercase tracking-widest">اكتشف</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Image in About Section */}
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-accent/20 rounded-lg blur-2xl -z-10"></div>
              <img src={aboutCorp} alt="European corporate team" className="rounded-lg border border-brand-border shadow-2xl relative z-10 w-full object-cover aspect-[4/3]" />
              <div className="absolute -bottom-6 -right-6 bg-brand-card p-8 rounded-lg border-l-4 border-brand-accent shadow-xl z-20 hidden md:block">
                <div className="text-4xl font-black text-brand-accent mb-2">+15</div>
                <div className="text-brand-text text-sm font-bold">عاماً من<br />التميز والخبرة</div>
              </div>
            </div>

            {/* Right side: Text and Buttons */}
            <div className="space-y-8">
              <div>
                <h3 className="text-brand-accent font-bold mb-2">تجار المال </h3>
                <h2 className="text-3xl md:text-5xl font-black leading-tight text-brand-text">
                  شريكك الموثوق في <br />رحلة <span className="text-gradient-gold">النجاح المالي</span>
                </h2>
              </div>

              <p className="text-brand-text-muted leading-relaxed text-lg">
                تأسست شركة تجار المال بهدف إحداث نقلة نوعية في عالم الاستثمار وإدارة الثروات. نحن نؤمن بأن النجاح المالي يتطلب رؤية ثاقبة واستراتيجيات مدروسة.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 pt-4 mb-8">
                <div className="bg-brand-card shadow-lg p-6 rounded-lg border-t-2 border-brand-accent">
                  <h4 className="text-xl font-bold mb-3 text-brand-text">رؤيتنا</h4>
                  <p className="text-sm text-brand-text-muted">أن نكون الخيار الأول للمستثمرين في الشرق الأوسط من خلال تقديم عوائد مستدامة.</p>
                </div>
                <div className="bg-brand-card shadow-lg p-6 rounded-lg border-t-2 border-brand-accent">
                  <h4 className="text-xl font-bold mb-3 text-brand-text">رسالتنا</h4>
                  <p className="text-sm text-brand-text-muted">تمكين عملائنا من تحقيق أهدافهم المالية بشفافية، احترافية، وأمان تام.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section (Success Allies) */}
      <section id="partners" className="py-24 bg-brand-secondary">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-brand-accent font-bold mb-2">شركاؤنا</h3>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text">شركاء النجاح</h2>
          </div>



          {/* Other Partners Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnersData.map((partner) => (
              <a
                key={partner.id}
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-card p-6 rounded-2xl border border-brand-border hover:border-brand-accent/50 transition-all duration-300 hover:-translate-y-2 group shadow-lg flex flex-col items-center text-center relative overflow-hidden pb-10"
              >
                <div className="w-full aspect-[2/1] flex items-center justify-center mb-6 overflow-hidden rounded-xl bg-white/5 p-4 group-hover:bg-white/10 transition-colors">
                  <img src={partner.image} alt={partner.title} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-brand-text group-hover:text-brand-accent transition-colors">{partner.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed mb-4">{partner.desc}</p>

                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-brand-accent text-brand-primary font-bold flex items-center justify-center gap-2">
                  <span>زيارة الموقع</span>
                  <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Success Path Banner */}
      <section className="py-20 bg-brand-bg relative overflow-hidden border-y border-brand-border/50">
        <div className="absolute inset-0 bg-brand-accent/5 opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <img
                src={successPathLogo}
                alt="Path to Success"
                className="max-h-40 md:max-h-56 w-auto object-contain filter drop-shadow-[0_0_15px_rgba(212,175,55,0.3)] animate-float"
              />
            </div>
            <p className="text-xl md:text-2xl text-brand-text-muted italic font-medium leading-relaxed max-w-3xl mx-auto">
              "نحن نمهد لك الطريق لتصل إلى آفاق جديدة من النجاح والنمو المستدام في عالم الاستثمار"
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-brand-bg">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <h3 className="text-brand-accent font-bold mb-2">أعمالنا</h3>
              <h2 className="text-3xl md:text-5xl font-black text-brand-text">مشاريع استثمارية رائدة</h2>
            </div>
            <a href="#" className="hidden md:inline-flex items-center gap-2 text-brand-accent hover:text-brand-text transition-colors font-bold">
              تصفح كل المشاريع
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </a>
          </div>

          <div className="space-y-16">
            {/* Internal Projects */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-brand-text flex items-center gap-3">
                <span className="w-2 h-8 bg-brand-accent rounded-full inline-block"></span>
                المشاريع الداخلية
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.filter(p => p.type === 'internal').map(project => (
                  <ProjectCard key={project.id} {...project} />
                ))}
              </div>
            </div>

            {/* External Projects */}
            {projectsData.filter(p => p.type === 'external').length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-8 text-brand-text flex items-center gap-3">
                  <span className="w-2 h-8 bg-brand-accent rounded-full inline-block"></span>
                  المشاريع الخارجية
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {projectsData.filter(p => p.type === 'external').map(project => (
                    <ProjectCard key={project.id} {...project} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-brand-secondary">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-brand-card rounded-2xl border border-brand-border overflow-hidden shadow-2xl flex flex-col md:flex-row">

            <div className="md:w-5/12 p-10 bg-brand-card border-l border-brand-border relative overflow-hidden">
              <div className="absolute inset-0 bg-brand-accent/5"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-6 text-brand-text">دعنا نناقش مستقبلك المالي</h3>
                <p className="text-brand-text-muted text-sm mb-8">فريقنا مستعد للرد على جميع استفساراتك وتقديم الاستشارة المناسبة.</p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-brand-accent">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div className="text-sm">
                      <div className="text-brand-text-muted">الهاتف</div>
                      <div className="font-bold ltr text-brand-text" dir="ltr">+966 12 345 6789</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-brand-accent">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="text-sm">
                      <div className="text-brand-text-muted">البريد الإلكتروني</div>
                      <div className="font-bold font-sans text-brand-text">info@moneytraders.sa</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-7/12 p-10 bg-brand-card">
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-brand-text-muted mb-1">الاسم الكامل</label>
                    <input type="text" className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="أدخل اسمك" />
                  </div>
                  <div>
                    <label className="block text-xs text-brand-text-muted mb-1">رقم الهاتف</label>
                    <input type="text" className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="05x xxx xxxx" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs text-brand-text-muted mb-1">البريد الإلكتروني</label>
                  <input type="email" className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors" placeholder="example@email.com" />
                </div>
                <div>
                  <label className="block text-xs text-brand-text-muted mb-1">الرسالة</label>
                  <textarea rows="4" className="w-full bg-brand-bg border border-brand-border rounded px-4 py-3 text-brand-text focus:outline-none focus:border-brand-accent transition-colors resize-none" placeholder="اكتب استفسارك هنا..."></textarea>
                </div>
                <button type="button" className="w-full bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold py-4 rounded transition-colors mt-2">
                  إرسال الاستفسار
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
