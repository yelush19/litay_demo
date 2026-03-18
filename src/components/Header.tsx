import { FileText, BarChart3, TrendingUp } from 'lucide-react';
import { LITAY } from '../constants/colors';

const tabs = [
  { id: 'hierarchical', label: 'דוח רווח והפסד', icon: FileText },
  { id: 'pivot', label: 'P&L מצטבר חודשי', icon: BarChart3 },
  { id: 'quarterly', label: 'P&L חודש בודד', icon: TrendingUp },
];

interface HeaderProps {
  selectedTab: string;
  onTabChange: (id: string) => void;
}

export default function Header({ selectedTab, onTabChange }: HeaderProps) {
  return (
    <header
      className="sticky top-0 z-50 w-full"
      style={{
        background: `linear-gradient(135deg, ${LITAY.primary} 0%, ${LITAY.primaryDark} 100%)`,
        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
      }}
    >
      <div className="w-full px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo & Title */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-white p-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
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
              <h1 className="text-xl font-bold text-white drop-shadow-md m-0">
                ליתאי ניהול שירותים בע"מ
              </h1>
              <p className="text-sm text-white/90 italic font-medium m-0">
                Innovation in Balance
              </p>
            </div>
          </div>

          {/* Year badge */}
          <div className="flex items-center gap-3">
            <span className="px-4 py-2 bg-white/20 rounded-lg text-white font-semibold text-sm">
              2025
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 pb-0">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className="flex items-center gap-2 px-6 py-3 rounded-t-xl transition-all font-semibold relative overflow-hidden group"
                style={{
                  backgroundColor: isActive ? LITAY.white : 'transparent',
                  color: isActive ? LITAY.primaryDark : LITAY.white,
                  boxShadow: isActive ? '0 -4px 10px rgba(0,0,0,0.1)' : 'none',
                }}
              >
                {!isActive && (
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
                <Icon size={18} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
