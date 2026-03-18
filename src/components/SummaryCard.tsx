import { LITAY } from '../constants/colors';

interface SummaryCardProps {
  title: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

export default function SummaryCard({ title, value, change, positive, icon }: SummaryCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-5 transition-all hover:shadow-2xl hover:-translate-y-1 group border border-gray-200 relative overflow-hidden"
      style={{
        borderRight: `4px solid ${LITAY.primary}`,
        fontFamily: 'Assistant, Heebo, Arial Hebrew, sans-serif',
      }}
    >
      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity"
        style={{
          background: `linear-gradient(135deg, ${LITAY.primary}, ${LITAY.primaryLight})`,
        }}
      />

      <div className="relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold" style={{ color: LITAY.neutralMedium }}>
            {title}
          </span>
          <span className="text-2xl group-hover:scale-110 transition-transform">{icon}</span>
        </div>

        {/* Value */}
        <div
          className="text-3xl font-bold mb-2 group-hover:scale-105 transition-transform"
          style={{ color: LITAY.primaryDark, fontFamily: 'Rubik, Arial' }}
        >
          {value}
        </div>

        {/* Change Badge */}
        <div className="flex items-center gap-2">
          <div
            className={`flex items-center gap-1 text-sm font-bold px-2.5 py-1 rounded-lg ${
              positive ? 'bg-green-50' : 'bg-red-50'
            }`}
            style={{ color: positive ? LITAY.success : LITAY.error }}
          >
            <span>{change}</span>
            <span className="text-lg">{positive ? '↑' : '↓'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
