import { LITAY } from '../constants/colors';
import { DEMO_MONTHLY, formatCurrency } from '../constants/demoData';

export default function MonthlyTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="w-full text-sm">
        <thead className="sticky top-0 z-10">
          <tr className="bg-gradient-to-r from-emerald-50 to-teal-50">
            <th className="border border-gray-300 px-4 py-3 text-right font-semibold min-w-[120px]">
              חודש
            </th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold">הכנסות</th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold">עלות המכר</th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold">רווח גולמי</th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold">הוצאות תפעול</th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold">רווח תפעולי</th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold">הוצאות מימון</th>
            <th className="border border-gray-300 px-3 py-3 text-center font-semibold min-w-[130px]">
              רווח נקי
            </th>
          </tr>
        </thead>
        <tbody>
          {DEMO_MONTHLY.map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 transition-colors">
              <td
                className="border border-gray-300 px-4 py-3 text-right font-medium"
                style={{ color: LITAY.neutralDark }}
              >
                {row.month}
              </td>
              <td className="border border-gray-300 px-3 py-3 text-center font-bold text-green-700" style={{ fontFamily: 'Rubik, Arial' }}>
                {formatCurrency(row.revenue)}
              </td>
              <td className="border border-gray-300 px-3 py-3 text-center text-orange-700" style={{ fontFamily: 'Rubik, Arial' }}>
                {formatCurrency(row.cogs)}
              </td>
              <td className="border border-gray-300 px-3 py-3 text-center text-green-600" style={{ fontFamily: 'Rubik, Arial' }}>
                {formatCurrency(row.grossProfit)}
              </td>
              <td className="border border-gray-300 px-3 py-3 text-center text-gray-600" style={{ fontFamily: 'Rubik, Arial' }}>
                {formatCurrency(row.operating)}
              </td>
              <td className="border border-gray-300 px-3 py-3 text-center text-emerald-700 font-semibold" style={{ fontFamily: 'Rubik, Arial' }}>
                {formatCurrency(row.operatingProfit)}
              </td>
              <td className="border border-gray-300 px-3 py-3 text-center text-gray-500" style={{ fontFamily: 'Rubik, Arial' }}>
                {formatCurrency(row.financial)}
              </td>
              <td
                className={`border border-gray-300 px-3 py-3 text-center font-bold ${
                  row.netProfit >= 0 ? 'text-teal-700' : 'text-red-700'
                }`}
                style={{ fontFamily: 'Rubik, Arial' }}
              >
                {formatCurrency(row.netProfit)}
              </td>
            </tr>
          ))}

          {/* Totals row */}
          <tr className="bg-gradient-to-r from-emerald-100 to-teal-100 font-bold">
            <td className="border border-gray-300 px-4 py-3 text-right" style={{ color: LITAY.primaryDark }}>
              סה"כ שנתי
            </td>
            <td className="border border-gray-300 px-3 py-3 text-center text-green-700" style={{ fontFamily: 'Rubik, Arial' }}>
              {formatCurrency(DEMO_MONTHLY.reduce((s, r) => s + r.revenue, 0))}
            </td>
            <td className="border border-gray-300 px-3 py-3 text-center text-orange-700" style={{ fontFamily: 'Rubik, Arial' }}>
              {formatCurrency(DEMO_MONTHLY.reduce((s, r) => s + r.cogs, 0))}
            </td>
            <td className="border border-gray-300 px-3 py-3 text-center text-green-600" style={{ fontFamily: 'Rubik, Arial' }}>
              {formatCurrency(DEMO_MONTHLY.reduce((s, r) => s + r.grossProfit, 0))}
            </td>
            <td className="border border-gray-300 px-3 py-3 text-center text-gray-600" style={{ fontFamily: 'Rubik, Arial' }}>
              {formatCurrency(DEMO_MONTHLY.reduce((s, r) => s + r.operating, 0))}
            </td>
            <td className="border border-gray-300 px-3 py-3 text-center text-emerald-700" style={{ fontFamily: 'Rubik, Arial' }}>
              {formatCurrency(DEMO_MONTHLY.reduce((s, r) => s + r.operatingProfit, 0))}
            </td>
            <td className="border border-gray-300 px-3 py-3 text-center text-gray-500" style={{ fontFamily: 'Rubik, Arial' }}>
              {formatCurrency(DEMO_MONTHLY.reduce((s, r) => s + r.financial, 0))}
            </td>
            <td className="border border-gray-300 px-3 py-3 text-center text-teal-700" style={{ fontFamily: 'Rubik, Arial' }}>
              {formatCurrency(DEMO_MONTHLY.reduce((s, r) => s + r.netProfit, 0))}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
