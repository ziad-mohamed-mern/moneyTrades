import sultanMedicalImg from '../assets/projects/sultan_medical.png'
import tradingAppImg from '../assets/projects/trading_app.png'
import futureBankImg from '../assets/projects/future_bank.png'
import goldFactoryImg from '../assets/projects/gold_factory.png'
import evFactoryImg from '../assets/projects/ev_factory.png'
import droneFactoryImg from '../assets/projects/drone_project.png'

export const projectsData = [
  // مشاريع داخلية
  {
    id: 1,
    title: 'تطبيق تداول تجار المال',
    category: 'تطوير تطبيقات مالية',
    image: tradingAppImg,
    description: 'تطبيق تداول يهدف إلى تسهيل عملية التداول للمستثمرين وتقديم أفضل تجربة مالية.',
    features: ['سهولة الاستخدام', 'أدوات تحليل متقدمة', 'واجهة شفافة'],
    status: 'قيد التطوير',
    completionDate: '2025',
    roi: 'زيادة التداول',
    externalLink: 'https://money-trades-arrows.vercel.app/',
    type: 'internal'
  },
  {
    id: 2,
    title: 'مجمع السلطان الطبي',
    category: 'استثمار طبي',
    image: sultanMedicalImg,
    description: 'مجمع طبي متكامل يهدف إلى تقديم خدمات صحية عالية الجودة وتطوير الرعاية الصحية.',
    features: ['ربط البيانات الصحية', 'تطوير حلول التطبيب', 'ملف صحي موحد'],
    status: 'قيد التنفيذ',
    completionDate: '2026',
    roi: 'تحسين كفاءة التشغيل',
    type: 'internal'
  },
  {
    id: 3,
    title: 'بنك المستقبل السعودي',
    category: 'قطاع بنكي',
    image: futureBankImg,
    description: 'تأسيس بنك المستقبل السعودي لتقديم أحدث الحلول المصرفية الرقمية وتطوير القطاع المالي.',
    features: ['خدمات بنكية رقمية', 'تمويل المشاريع', 'إدارة الثروات'],
    status: 'قيد التأسيس',
    completionDate: '2027',
    roi: 'نمو مالي مستدام',
    type: 'internal'
  },
  {
    id: 4,
    title: 'مصنع النفيس للذهب',
    category: 'صناعة وتعدين',
    image: goldFactoryImg,
    description: 'مصنع متطور لإنتاج وصياغة الذهب والمجوهرات بأعلى المعايير العالمية وتقنيات التصنيع الحديثة.',
    features: ['جودة عالية', 'تقنيات صياغة حديثة', 'قدرة تصديرية'],
    status: 'مستمر',
    completionDate: '2025',
    roi: 'عوائد استثمارية قوية',
    type: 'internal'
  },
  {
    id: 5,
    title: 'مصنع التوفير للسيارات الكهربائية',
    category: 'صناعة السيارات',
    image: evFactoryImg,
    description: 'مشروع رائد لإنتاج السيارات الكهربائية الصديقة للبيئة لدعم التنقل المستدام في المملكة.',
    features: ['طاقة نظيفة', 'تكنولوجيا متقدمة', 'دعم التصنيع المحلي'],
    status: 'قيد الإنشاء',
    completionDate: '2028',
    roi: 'ريادة في السوق',
    type: 'internal'
  },
  // مشاريع خارجية
  {
    id: 6,
    title: 'مصنع الطائرات بدون طيار tvui11',
    category: 'تكنولوجيا وصناعة الطيران',
    image: droneFactoryImg,
    description: 'مشروع دولي لتصنيع وتطوير طائرات بدون طيار مجهزة بأحدث تقنيات الذكاء الاصطناعي للاستخدامات المتعددة.',
    features: ['أنظمة طيران ذكية', 'ذكاء اصطناعي', 'تطبيقات مدنية وتجارية'],
    status: 'قيد التخطيط',
    completionDate: '2029',
    roi: 'توسع استثماري عالمي',
    type: 'external'
  }
];
