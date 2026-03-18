import { CARD_COLORS } from '../constants/colors';
import { DEMO_SUMMARY, formatCurrency } from '../constants/demoData';

export default function StatsCards() {
  const { totalRevenue, totalCogs, totalOperating, totalNetProfit } = DEMO_SUMMARY;
  const grossProfit = totalRevenue - totalCogs;
  const operatingProfit = grossProfit - totalOperating;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      {/* הכנסות */}
      <div className={`p-4 rounded-lg border ${CARD_COLORS.revenue}`}>
        <div className="text-sm text-gray-600 mb-1">סה"כ הכנסות</div>
        <div className="text-2xl font-bold text-green-700" style={{ fontFamily: 'Rubik, Arial' }}>
          {formatCurrency(totalRevenue)}
        </div>
      </div>

      {/* עלות המכר */}
      <div className={`p-4 rounded-lg border ${CARD_COLORS.cogs}`}>
        <div className="text-sm text-gray-600 mb-1">עלות המכר</div>
        <div className="text-2xl font-bold text-orange-700" style={{ fontFamily: 'Rubik, Arial' }}>
          {formatCurrency(totalCogs)}
        </div>
      </div>

      {/* רווח תפעולי */}
      <div className={`p-4 rounded-lg border ${CARD_COLORS.opProfit}`}>
        <div className="text-sm text-gray-600 mb-1">רווח תפעולי</div>
        <div className="text-2xl font-bold text-emerald-700" style={{ fontFamily: 'Rubik, Arial' }}>
          {formatCurrency(operatingProfit)}
        </div>
      </div>

      {/* רווח נקי */}
      <div className={`p-4 rounded-lg border ${CARD_COLORS.netProfit}`}>
        <div className="text-sm text-gray-600 mb-1">רווח נקי</div>
        <div className="text-2xl font-bold text-teal-700" style={{ fontFamily: 'Rubik, Arial' }}>
          {formatCurrency(totalNetProfit)}
        </div>
      </div>
    </div>
  );
}
