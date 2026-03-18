import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
} from 'recharts';
import { CHART_COLORS } from '../constants/colors';
import { DEMO_MONTHLY } from '../constants/demoData';

export default function RevenueChart() {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-6">
      <h3
        className="text-lg font-bold mb-4"
        style={{ color: '#2d5f3f', fontFamily: 'Assistant, Heebo, sans-serif' }}
      >
        מגמת הכנסות ורווח נקי — חודשי
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={DEMO_MONTHLY} margin={{ top: 5, right: 20, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fontFamily: 'Assistant' }} />
          <YAxis
            tick={{ fontSize: 12, fontFamily: 'Rubik' }}
            tickFormatter={(v: number) => `₪${(v / 1000).toFixed(0)}K`}
          />
          <Tooltip
            formatter={(value) =>
              `₪${Number(value).toLocaleString('he-IL')}`
            }
            contentStyle={{ fontFamily: 'Assistant', direction: 'rtl' }}
          />
          <Legend wrapperStyle={{ fontFamily: 'Assistant' }} />
          <Bar dataKey="revenue" name="הכנסות" fill={CHART_COLORS.revenue} radius={[4, 4, 0, 0]} />
          <Bar dataKey="netProfit" name="רווח נקי" fill={CHART_COLORS.netProfit} radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
