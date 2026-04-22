import { Link } from 'react-router-dom'
import { Logo } from './Logo'

export const Footer = () => (
  <footer className="bg-brand-secondary pt-16 pb-8 border-t border-brand-border mt-auto">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="flex flex-col items-center md:items-start md:col-span-2">
          <Link to="/" className="inline-block">
            <Logo className="h-24 md:h-32 w-auto mb-4 scale-110 origin-right" />
          </Link>
          <p className="text-brand-text-muted text-sm mt-4 text-center md:text-right max-w-xs">
            الشركة الرائدة في مجال الاستثمار وإدارة الثروات، نقدم حلولنا وفق أعلى معايير الجودة لضمان نجاح عملائنا المستمر.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-brand-text mb-6">روابط هامة</h4>
          <ul className="space-y-3 text-sm text-brand-text-muted">
            <li><a href="#" className="hover:text-brand-accent transition-colors">عن الشركة</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">خدماتنا</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">وظائف</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">تواصل معنا</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-brand-text mb-6">القانونية</h4>
          <ul className="space-y-3 text-sm text-brand-text-muted">
            <li><a href="#" className="hover:text-brand-accent transition-colors">الشروط والأحكام</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">سياسة الخصوصية</a></li>
            <li><a href="#" className="hover:text-brand-accent transition-colors">إخلاء المسؤولية</a></li>
          </ul>
        </div>
      </div>
      
      <div className="pt-8 border-t border-brand-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-text-muted">
        <div>
          © 2026 شركة تجار المال. جميع الحقوق محفوظة.
        </div>
        <div className="flex gap-4 font-sans text-brand-text-muted">
            <a href="#" className="hover:text-brand-text transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-brand-text transition-colors">Twitter</a>
            <a href="#" className="hover:text-brand-text transition-colors">Instagram</a>
        </div>
      </div>
    </div>
  </footer>
)
