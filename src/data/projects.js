import sultanMedicalImg from '../assets/projects/sultan_medical.png'
import tradingAppImg from '../assets/projects/trading_app.png'
import futureBankImg from '../assets/projects/future_bank.png'
import goldFactoryImg from '../assets/projects/gold_factory.png'
import evFactoryImg from '../assets/projects/ev_factory.png'

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
    externalLink: 'https://al-sultan-international-medical-com.vercel.app/',
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
    externalLink: 'https://future-bank-flow.base44.app/',
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
    externalLink: 'https://gold-project-chi.vercel.app/',
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
    externalLink: 'https://electric-car-project.vercel.app/',
    type: 'internal'
  }
];
