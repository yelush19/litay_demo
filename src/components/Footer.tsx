import { Mail, MapPin, Shield, Zap, Award } from 'lucide-react';
import { LITAY } from '../constants/colors';

export default function Footer() {
  return (
    <footer className="mt-16 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${LITAY.primaryDark} 0%, ${LITAY.primary} 50%, ${LITAY.primaryLight} 100%)`,
          opacity: 0.95,
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
        }}
      />

      <div className="relative w-full px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white p-3 shadow-2xl">
                <img
                  src="/LITAYLOGO.png"
                  alt="Litay Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">ליתאי</h3>
                <p className="text-lg text-white/90 font-medium">ניהול שירותים בע"מ</p>
                <p className="text-sm text-white/80 italic mt-1">
                  חדשנות מאוזנת | Innovation in Balance
                </p>
              </div>
            </div>
            <p className="text-white/90 text-sm leading-relaxed">
              פתרון BI מקצועי לניהול כלכלי חכם. מערכת מתקדמת לניתוח פיננסי, דוחות בזמן אמת,
              והחלטות עסקיות מבוססות נתונים.
            </p>
            <div className="flex gap-3">
              {[Shield, Zap, Award].map((Icon, i) => (
                <div
                  key={i}
                  className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 transition-all cursor-pointer hover:scale-110 border border-white/30"
                >
                  <Icon size={20} className="text-white" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-white rounded-full" />
              יצירת קשר
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <MapPin size={18} />
                </div>
                <span className="text-sm font-medium">לבונה 88, בית אריה</span>
              </div>
              <div className="flex items-center gap-3 text-white/90">
                <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                  <Mail size={18} />
                </div>
                <span className="text-sm font-medium">yelena@litay.co.il</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <div className="w-1.5 h-6 bg-white rounded-full" />
              עדכונים
            </h4>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="המייל שלך"
                className="w-full px-4 py-2.5 rounded-lg bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/60 focus:outline-none focus:bg-white/30 transition-all"
              />
              <button className="w-full py-2.5 rounded-lg bg-white font-bold hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
                style={{ color: LITAY.primary }}
              >
                הרשמה
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-white/90 gap-2">
            <div className="flex items-center gap-2 text-sm">
              <span>© {new Date().getFullYear()}</span>
              <span className="font-bold">ליתאי ניהול שירותים בע"מ</span>
              <span>·</span>
              <span>כל הזכויות שמורות</span>
            </div>
            <div className="text-xs">
              <span className="font-semibold">InsightFlow by Litay</span> · מערכת BI לניהול פיננסי ·
              Demo
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
