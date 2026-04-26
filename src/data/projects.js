import sultanMedicalImg from '../assets/projects/sultan_medical.png'
import samaFinancialImg from '../assets/projects/sama_financial.png'
import tradingAppImg from '../assets/projects/trading_app.png'
export const projectsData = [
  {
    id: 1,
    title: 'مجمع السلطان الطبي',
    category: 'استثمار طبي',
    image: sultanMedicalImg,
    description: 'مجمع السلطان الطبي هو مجمع طبي متكامل يهدف إلى تقديم خدمات صحية عالية الجودة للمرضى.',
    features: ['ربط البيانات الصحية', 'تطوير حلول التطبيب عن بعد', 'إنشاء ملف صحي موحد', 'أعلى معايير أمان البيانات'],
    status: 'قيد التنفيذ',
    completionDate: '2026',
    roi: 'تحسين كفاءة التشغيل'
  },
  {
    id: 3,
    title: 'البنك المركزي السعودي',
    category: 'البنك المركزي السعودي (ساما)',
    image: samaFinancialImg,
    description: 'تحديث البنية التحتية للمدفوعات الرقمية وتطوير الأنظمة الرقابية لدعم الابتكار في قطاع التقنية المالية وضمان الاستقرار النقدي.',
    features: ['أنظمة مدفوعات فورية', 'معايير الأمن السيبراني المالي', 'الرقابة الذكية', 'تعزيز الشمول المالي'],
    status: 'مستمر',
    completionDate: 'مستمر',
    roi: 'استقرار ونمو مالي'
  },
  {
    id: 4,
    title: 'تطبيق تداول تجار المال',
    category: 'تطوير تطبيقات مالية',
    image: tradingAppImg,
    description: 'تطبيق تداول تجار المال هو تطبيق يهدف إلى تسهيل عملية التداول للمستثمرين.',
    features: ['سهولة الاستخدام', 'واجهة سهلة الاستخدام', 'أدوات تحليل متقدمة', 'أدوات شفافية متطورة'],
    status: 'قيد التطوير',
    completionDate: '2025',
    roi: 'زيادة التداول',
    externalLink: 'https://money-trades-arrows.vercel.app/'
  }
];
