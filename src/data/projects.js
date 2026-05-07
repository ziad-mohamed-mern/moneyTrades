import sultanMedicalImg from '../assets/projects/sultan_medical.png'
import tradingAppImg from '../assets/projects/trading_app.png'
import futureBankImg from '../assets/projects/future_bank.png'
import goldFactoryImg from '../assets/projects/gold_factory.png'
import evFactoryImg from '../assets/projects/ev_factory.png'
import juiceFactoryImg from '../assets/projects/juice_factory.png'
import droneExpoImg from '../assets/projects/drone_expo.png'
import tujarStoreImg from '../assets/projects/tujar_store.png'
import visionSchoolImg from '../assets/projects/vision_school.png'


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
    title: 'مجمع السلطان الطبي (ياشافى)',
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
  },
  {
    id: 6,
    title: 'مصنع مواسم للعصيرات',
    category: 'صناعة الأغذية',
    image: juiceFactoryImg,
    description: 'مصنع متطور لإنتاج العصائر الطبيعية 100% بأعلى معايير الجودة والاستدامة، نقدم لك نضارة الطبيعة في كل رشفة.',
    features: ['عصائر طبيعية 100%', 'بدون مواد حافظة', 'أحدث تقنيات الإنتاج'],
    status: 'مستمر',
    completionDate: '2025',
    roi: 'نمو مستدام',
    externalLink: 'https://juice-project-plum.vercel.app/',
    type: 'internal'
  },

  // مشاريع خارجية
  {
    id: 7,
    title: 'معرض صناعة وبيع الطائرات بدون طيار (الدرونز)',
    category: 'معرض / درونز',
    image: droneExpoImg,
    description: 'واجهة عرض احترافية لمعرض متخصص في صناعة وبيع الطائرات بدون طيار (الدرونز) مع أقسام وخدمات متنوعة.',
    features: ['تصميم حديث', 'عرض أقسام متعددة', 'تجربة مستخدم سلسة'],
    status: 'مكتمل',
    completionDate: '2026',
    roi: 'تعزيز الحضور الرقمي',
    externalLink: 'https://plane-project-one.vercel.app/',
    type: 'external'
  },
  {
    id: 8,
    title: 'تجار المال متخصصون في المتاجر الالكترونيه',
    category: 'حلول التجارة الإلكترونية',
    image: tujarStoreImg,
    description: 'مشروع خارجي لتقديم حلول احترافية في إنشاء وإدارة المتاجر الإلكترونية مع التركيز على النمو والمبيعات.',
    features: ['إنشاء متجر احترافي', 'تسويق وإدارة متجر', 'دعم فني متواصل'],
    status: 'مكتمل',
    completionDate: '2026',
    roi: 'زيادة المبيعات والأرباح',
    externalLink: 'https://tujar-almal.vercel.app/',
    type: 'external'
  },
  {
    id: 9,
    title: 'مدارس رؤيا المستقبل العالميه',
    category: 'تعليم / مدارس عالمية',
    image: visionSchoolImg,
    description: 'منصة تعريفية لمدارس رؤيا المستقبل العالمية تجمع بين الهوية المحلية والمعايير التعليمية العالمية.',
    features: ['تصميم تعليمي حديث', 'محتوى ثنائي اللغة', 'رحلة مستخدم واضحة'],
    status: 'مكتمل',
    completionDate: '2026',
    roi: 'تعزيز الحضور المؤسسي',
    externalLink: 'https://vision-of-the-future-international.vercel.app/ar',
    type: 'external'
  }
];
