import React, { useEffect } from 'react';
import heroBg from '../assets/hero_bg.png';
import chairmanImg from '../assets/success_maker_chairman.jpeg';
import omarImg from '../assets/omar.jpeg';
import ziadImg from '../assets/ziad.jpeg';

export const SuccessMakers = () => {
  const departments = [
    {
      id: 'legal',
      title: 'إدارة الشؤون القانونية',
      role: 'الشؤون القانونية',
      desc1: 'تتولى الإدارة القانونية ضمان الامتثال لكافة القوانين واللوائح المعمول بها، وتقديم الاستشارات القانونية التي تحمي مصالح الشركة وشركائها.',
      desc2: 'تعمل الإدارة على صياغة ومراجعة العقود والاتفاقيات الدولية والمحلية، وضمان أعلى معايير الحوكمة والشفافية في كافة المعاملات.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    },
    {
      id: 'it',
      title: 'إدارة نظم المعلومات IT',
      role: 'نظم المعلومات والتقنية',
      members: [
        { name: 'عمر', role: 'Backend Developer', image: omarImg },
        { name: 'زياد', role: 'Frontend Developer', image: ziadImg }
      ],
      desc1: 'توفر الإدارة البنية التحتية التقنية المتطورة والحلول الرقمية التي تضمن سير العمليات بكفاءة وأمان عالي.',
      desc2: 'نركز على الابتكار التقني وحماية البيانات، وتطوير الأنظمة الذكية التي تسهل تجربة المستثمرين والعملاء في عالم المال (كلية العلوم - قسم علوم الحاسب).',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 'finance',
      title: 'الإدارة المالية',
      role: 'التخطيط والرقابة المالية',
      desc1: 'تقوم الإدارة المالية بالتخطيط الاستراتيجي للموارد وإدارة التدفقات النقدية بما يضمن الاستدامة والنمو المستمر.',
      desc2: 'نلتزم بالدقة المتناهية في التحليل المالي والرقابة، وتقديم التقارير الدورية التي تعكس القوة والملاءة المالية للشركة.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 'accounts',
      title: 'الرواتب والحسابات',
      role: 'إدارة الحسابات والمدفوعات',
      desc1: 'تختص هذه الإدارة بتنظيم كافة العمليات الحسابية والرواتب، وضمان دقة المستحقات والالتزامات المالية في مواعيدها.',
      desc2: 'نعمل وفق أنظمة محاسبية دقيقة تضمن حقوق الموظفين والشركاء، مع الحفاظ على شفافية السجلات المالية وتوثيقها.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-bg text-right" dir="rtl">
      {/* Page Header */}
      <div className="relative py-20 overflow-hidden border-b border-brand-border/50">
        <div className="absolute inset-0 z-0">
          <img src={heroBg} alt="Background" className="w-full h-full object-cover opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/50 to-brand-bg"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-brand-text mb-4">
            صناع <span className="text-brand-accent">النجاح</span>
          </h1>
          <p className="text-brand-text-muted max-w-2xl mx-auto text-lg">
            تعرف على الكوادر والقيادات التي تقود تجار المال نحو آفاق جديدة من التميز والابتكار.
          </p>
        </div>
      </div>

      {/* Senior Management Section */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-text inline-block relative">
            الإدارة العليا
            <div className="absolute -bottom-2 right-0 w-full h-1 bg-brand-accent rounded-full"></div>
          </h2>
        </div>

        <div className="max-w-5xl mx-auto mb-32">
          <div className="bg-brand-card rounded-3xl border border-brand-border overflow-hidden shadow-2xl transition-all hover:shadow-brand-accent/10">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative overflow-hidden group bg-brand-bg/30 border-b md:border-b-0 md:border-l border-brand-border flex items-center justify-center min-h-[300px] md:min-h-[500px]">
                <img 
                  src={chairmanImg} 
                  alt="رئيس مجلس الإدارة" 
                  className="w-full h-full max-h-[400px] md:max-h-[600px] object-contain p-6 md:p-10 transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/20 to-transparent pointer-events-none"></div>
              </div>
              
              <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-3xl font-bold text-brand-text mb-2">رئيس مجلس الإدارة</h3>
                  <div className="h-1 w-20 bg-brand-accent rounded-full mb-6"></div>
                </div>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <p className="text-brand-text-muted text-lg leading-relaxed">
                      حاصل على دكتوراه بالقانون الدولي، عضو لجنة المحامين السعوديين، شغل عدة مناصب قيادية رفيعة.
                    </p>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-brand-text-muted text-lg leading-relaxed">
                      تولى إدارة شركات عالمية كبرى، منها منصب الرئيس التنفيذي لقلوبل كبتل هنكونج حول العالم، بالإضافة إلى إدارة الائتمان والمخاطر في بنك HSBC.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-brand-border/50">
                  <p className="text-brand-accent font-bold">رؤية قيادية نحو العالمية</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Operational Departments Flow */}
        <div className="space-y-16 md:space-y-24">
          {departments.map((dept, index) => (
            <div key={dept.id} className="max-w-5xl mx-auto">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-brand-text inline-block relative">
                  {dept.title}
                  <div className="absolute -bottom-2 right-0 w-full h-1 bg-brand-accent rounded-full"></div>
                </h2>
              </div>
              
              {dept.members ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {dept.members.map((member, mIndex) => (
                    <div key={mIndex} className="bg-brand-card rounded-3xl border border-brand-border overflow-hidden shadow-2xl transition-all hover:shadow-brand-accent/10 flex flex-col">
                      <div className="relative h-[400px] overflow-hidden group bg-brand-bg/30">
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/80 via-transparent to-transparent"></div>
                        <div className="absolute bottom-6 right-6 text-right">
                          <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                          <p className="text-brand-accent font-bold">{member.role}</p>
                        </div>
                      </div>
                      <div className="p-8 flex flex-col justify-center space-y-4">
                        <p className="text-brand-text-muted leading-relaxed">
                          {dept.desc1}
                        </p>
                        <div className="pt-4 border-t border-brand-border/50">
                          <p className="text-brand-accent font-bold text-sm">عضو في فريق {dept.title}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className={`bg-brand-card rounded-2xl md:rounded-3xl border border-brand-border overflow-hidden shadow-2xl transition-all hover:shadow-brand-accent/10 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Image Placeholder */}
                  <div className="md:w-1/2 relative min-h-[300px] md:h-auto overflow-hidden group bg-brand-secondary flex items-center justify-center">
                    <div className="absolute inset-0 bg-brand-accent/5 opacity-40"></div>
                    <div className="z-10 text-brand-accent/20 scale-[2] md:scale-[3]">
                      {dept.icon}
                    </div>
                    <div className="absolute bottom-4 right-4 bg-brand-accent text-brand-primary px-3 py-1 rounded text-[10px] md:text-xs font-bold">سيتم إضافة الصورة لاحقاً</div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2 p-6 md:p-12 flex flex-col justify-center space-y-4 md:space-y-6">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-brand-text mb-2">{dept.role}</h3>
                      <div className="h-1 w-16 bg-brand-accent rounded-full mb-4 md:mb-6"></div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent">
                          {dept.icon}
                        </div>
                        <p className="text-brand-text-muted leading-relaxed">
                          {dept.desc1}
                        </p>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-brand-accent/10 rounded-lg flex items-center justify-center text-brand-accent">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                        </div>
                        <p className="text-brand-text-muted leading-relaxed">
                          {dept.desc2}
                        </p>
                      </div>
                    </div>

                    <div className="pt-6 border-t border-brand-border/50">
                      <p className="text-brand-accent font-bold">نعمل بإحترافية لضمان نجاحكم</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-brand-secondary py-20 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-brand-text mb-12">قيمنا في القيادة</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'النزاهة', desc: 'نلتزم بأعلى معايير الأمانة والشفافية في كافة تعاملاتنا.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'الابتكار', desc: 'نسعى دائماً لتقديم حلول استثمارية مبتكرة تواكب التطورات العالمية.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
              { title: 'التميز', desc: 'نهدف لتحقيق نتائج استثنائية تفوق توقعات شركائنا وعملائنا.', icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.143-7.714L1 12l7.714-2.143L11 3z' }
            ].map((value, i) => (
              <div key={i} className="p-8 bg-brand-bg rounded-2xl border border-brand-border hover:border-brand-accent/50 transition-colors">
                <div className="w-12 h-12 bg-brand-accent/10 text-brand-accent rounded-lg flex items-center justify-center mx-auto mb-6">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={value.icon} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-brand-text mb-4">{value.title}</h3>
                <p className="text-brand-text-muted">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
