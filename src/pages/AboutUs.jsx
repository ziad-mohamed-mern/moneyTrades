import React from 'react';
import { Link } from 'react-router-dom';
import aboutCorp from '../assets/cert.jpeg';
import commercialReg from '../assets/commercial-reg.jpeg';
import heroBg from '../assets/hero_bg.png';

export const AboutUs = () => {
  return (
    <div className="pt-24 min-h-screen bg-brand-bg">
      {/* Page Header */}
      <div className="relative py-20 overflow-hidden border-b border-brand-border/50">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 to-brand-bg"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-4">
            عن <span className="text-brand-accent">تجار المال</span>
          </h1>
          <p className="text-brand-text-muted max-w-2xl mx-auto text-lg">
            نحن أكثر من مجرد شركة استثمارية، نحن شركاؤك في النجاح المالي المستدام.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-24">
          <div className="space-y-6 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-brand-text">تاريخنا ومسيرتنا</h2>
            <div className="space-y-4 text-brand-text-muted leading-relaxed text-base md:text-lg">
              <p>
                تأسست شركة تجار المال بهدف إحداث نقلة نوعية في عالم الاستثمار وإدارة الثروات. نحن نؤمن بأن النجاح المالي يتطلب رؤية ثاقبة واستراتيجيات مدروسة.
              </p>
              <p>
                على مدار السنوات الماضية، استطعنا بناء محفظة استثمارية ضخمة تخدم مختلف القطاعات الحيوية، وحققنا عوائد استثنائية بفضل التحليل الدقيق للسوق وإدارة المخاطر.
              </p>
              <p>
                فريقنا يتألف من نخبة من المحللين الماليين والخبراء الاقتصاديين الذين يضعون مصلحة العميل في المقام الأول، ويقدمون استشارات مخصصة تلبي احتياجات كل مستثمر.
              </p>
            </div>
          </div>
          <div className="relative space-y-4 md:space-y-6 order-1 lg:order-2">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-lg blur-2xl -z-10"></div>
            <img src={aboutCorp} alt="مقر تجار المال" className="rounded-xl md:rounded-2xl border border-brand-border shadow-2xl relative z-10 w-full" />
            <img src={commercialReg} alt="ترخيص تجار المال" className="rounded-xl md:rounded-2xl border border-brand-border shadow-2xl relative z-10 w-full" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-24">
          <div className="bg-brand-card p-6 md:p-10 rounded-2xl border border-brand-border shadow-lg">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-4">رؤيتنا</h3>
            <p className="text-brand-text-muted leading-relaxed text-sm md:text-base">
              أن نكون المؤسسة الاستثمارية الرائدة والخيار الأول للمستثمرين في المنطقة، من خلال تقديم حلول مبتكرة وعوائد مستدامة تساهم في نمو الاقتصاد وتلبية تطلعات عملائنا بأعلى المعايير العالمية.
            </p>
          </div>
          <div className="bg-brand-card p-6 md:p-10 rounded-2xl border border-brand-border shadow-lg">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
              <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-4">رسالتنا</h3>
            <p className="text-brand-text-muted leading-relaxed text-sm md:text-base">
              تمكين عملائنا من تحقيق الاستقلال والنمو المالي عبر بيئة استثمارية شفافة وآمنة، وتوظيف أحدث التقنيات والكوادر البشرية المؤهلة لتحقيق أقصى قدر من القيمة المضافة.
            </p>
          </div>
        </div>

        {/* Success Makers Section */}
        <div className="mb-16 md:mb-24">
          <div className="bg-brand-card rounded-2xl md:rounded-3xl border border-brand-border overflow-hidden p-6 md:p-12 shadow-xl relative group text-center md:text-right">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-brand-accent/10 transition-colors"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <div className="flex-1">
                  <h2 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">تعرف على أعضاء صناع النجاح</h2>
                  <p className="text-brand-text-muted text-base md:text-lg leading-relaxed max-w-2xl mx-auto md:mx-0">
                    نحن نفخر بنخبة من الكوادر والخبرات التي تكرس جهودها لخدمتكم وتحقيق أهدافكم المالية. فريقنا هو المحرك الأساسي لنجاحاتنا المستمرة.
                  </p>
                </div>
                <div className="flex-shrink-0 w-full md:w-auto">
                  <Link 
                    to="/success-makers" 
                    className="inline-flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold rounded-xl shadow-lg transition-all hover:-translate-y-1"
                  >
                    عرض الإدارة العليا
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-brand-secondary p-8 md:p-12 rounded-2xl md:rounded-3xl border border-brand-border">
          <h3 className="text-xl md:text-3xl font-bold text-brand-text mb-6">هل أنت مستعد لبدء رحلتك الاستثمارية معنا؟</h3>
          <Link to="/#contact" className="inline-block w-full md:w-auto px-10 py-4 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold rounded shadow-xl transition-all hover:-translate-y-1">
            تواصل معنا الآن
          </Link>
        </div>
      </div>
    </div>
  );
};
