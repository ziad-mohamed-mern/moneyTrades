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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-brand-text">تاريخنا ومسيرتنا</h2>
            <p className="text-brand-text-muted leading-relaxed text-lg">
              تأسست شركة تجار المال بهدف إحداث نقلة نوعية في عالم الاستثمار وإدارة الثروات. نحن نؤمن بأن النجاح المالي يتطلب رؤية ثاقبة واستراتيجيات مدروسة.
              على مدار السنوات الماضية، استطعنا بناء محفظة استثمارية ضخمة تخدم مختلف القطاعات الحيوية، وحققنا عوائد استثنائية بفضل التحليل الدقيق للسوق وإدارة المخاطر.
            </p>
            <p className="text-brand-text-muted leading-relaxed text-lg">
              فريقنا يتألف من نخبة من المحللين الماليين والخبراء الاقتصاديين الذين يضعون مصلحة العميل في المقام الأول، ويقدمون استشارات مخصصة تلبي احتياجات كل مستثمر.
            </p>
          </div>
          <div className="relative space-y-6">
            <div className="absolute -inset-4 bg-brand-accent/10 rounded-lg blur-2xl -z-10"></div>
            <img src={aboutCorp} alt="مقر تجار المال" className="rounded-2xl border border-brand-border shadow-2xl relative z-10 w-full" />
            <img src={commercialReg} alt="ترخيص تجار المال" className="rounded-2xl border border-brand-border shadow-2xl relative z-10 w-full" />
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          <div className="bg-brand-card p-10 rounded-2xl border border-brand-border shadow-lg">
            <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-4">رؤيتنا</h3>
            <p className="text-brand-text-muted leading-relaxed">
              أن نكون المؤسسة الاستثمارية الرائدة والخيار الأول للمستثمرين في المنطقة، من خلال تقديم حلول مبتكرة وعوائد مستدامة تساهم في نمو الاقتصاد وتلبية تطلعات عملائنا بأعلى المعايير العالمية.
            </p>
          </div>
          <div className="bg-brand-card p-10 rounded-2xl border border-brand-border shadow-lg">
            <div className="w-16 h-16 bg-brand-accent/10 text-brand-accent rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </div>
            <h3 className="text-2xl font-bold text-brand-text mb-4">رسالتنا</h3>
            <p className="text-brand-text-muted leading-relaxed">
              تمكين عملائنا من تحقيق الاستقلال والنمو المالي عبر بيئة استثمارية شفافة وآمنة، وتوظيف أحدث التقنيات والكوادر البشرية المؤهلة لتحقيق أقصى قدر من القيمة المضافة.
            </p>
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center bg-brand-secondary p-12 rounded-3xl border border-brand-border">
          <h3 className="text-2xl md:text-3xl font-bold text-brand-text mb-6">هل أنت مستعد لبدء رحلتك الاستثمارية معنا؟</h3>
          <Link to="/#contact" className="inline-block px-10 py-4 bg-brand-accent hover:bg-brand-accent-hover text-brand-primary font-bold rounded shadow-xl transition-all hover:-translate-y-1">
            تواصل معنا الآن
          </Link>
        </div>
      </div>
    </div>
  );
};
