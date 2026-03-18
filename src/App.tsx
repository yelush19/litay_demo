import { useState } from 'react';
import Header from './components/Header';
import SummaryCard from './components/SummaryCard';
import StatsCards from './components/StatsCards';
import MonthlyTable from './components/MonthlyTable';
import RevenueChart from './components/RevenueChart';
import Footer from './components/Footer';
import { LITAY } from './constants/colors';
import { DEMO_SUMMARY, formatCurrency } from './constants/demoData';

function App() {
  const [selectedTab, setSelectedTab] = useState('hierarchical');

  return (
    <div
      className="min-h-screen w-full bg-gradient-to-br from-gray-50 to-gray-100"
      dir="rtl"
      style={{ fontFamily: 'Assistant, Heebo, Arial Hebrew, sans-serif', overflowX: 'hidden' }}
    >
      <Header selectedTab={selectedTab} onTabChange={setSelectedTab} />

      {/* Main Content */}
      <div className="w-full px-4 py-4">
        <div className="w-full">
          <div
            className="bg-white rounded-xl shadow-lg border border-gray-200"
            style={{ borderRight: `4px solid ${LITAY.primary}` }}
          >
            <div className="p-6">
              {/* Summary Cards row */}
              {selectedTab === 'hierarchical' && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                    <SummaryCard
                      title="סה״כ הכנסות"
                      value={formatCurrency(DEMO_SUMMARY.totalRevenue)}
                      change="+12.4%"
                      positive={true}
                      icon="💰"
                    />
                    <SummaryCard
                      title="עלות המכר"
                      value={formatCurrency(DEMO_SUMMARY.totalCogs)}
                      change="+8.2%"
                      positive={false}
                      icon="📦"
                    />
                    <SummaryCard
                      title="הוצאות תפעול"
                      value={formatCurrency(DEMO_SUMMARY.totalOperating)}
                      change="-3.1%"
                      positive={true}
                      icon="🏢"
                    />
                    <SummaryCard
                      title="רווח נקי"
                      value={formatCurrency(DEMO_SUMMARY.totalNetProfit)}
                      change="+18.7%"
                      positive={true}
                      icon="📈"
                    />
                  </div>

                  <RevenueChart />
                  <MonthlyTable />
                </>
              )}

              {selectedTab === 'pivot' && (
                <>
                  <h2
                    className="text-xl font-bold mb-4"
                    style={{ color: LITAY.primaryDark }}
                  >
                    P&L מצטבר חודשי — 2025
                  </h2>
                  <StatsCards />
                  <MonthlyTable />
                </>
              )}

              {selectedTab === 'quarterly' && (
                <>
                  <h2
                    className="text-xl font-bold mb-6"
                    style={{ color: LITAY.primaryDark }}
                  >
                    P&L חודש בודד
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {['רבעון 1', 'רבעון 2', 'רבעון 3'].map((q, i) => (
                      <div
                        key={i}
                        className="rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-200"
                        style={{
                          backgroundColor: LITAY.neutralBg,
                          borderTop: `4px solid ${LITAY.primary}`,
                        }}
                      >
                        <h3
                          className="text-2xl font-bold mb-6"
                          style={{ color: LITAY.primaryDark }}
                        >
                          {q}
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <div className="text-sm font-medium mb-2" style={{ color: LITAY.neutralMedium }}>
                              הכנסות
                            </div>
                            <div
                              className="text-3xl font-bold"
                              style={{ color: LITAY.primary, fontFamily: 'Rubik, Arial' }}
                            >
                              {formatCurrency([825000, 921000, 942000][i])}
                            </div>
                          </div>
                          <div className="h-px bg-gray-300 my-4" />
                          <div>
                            <div className="text-sm font-medium mb-2" style={{ color: LITAY.neutralMedium }}>
                              רווח
                            </div>
                            <div
                              className="text-3xl font-bold"
                              style={{ color: LITAY.success, fontFamily: 'Rubik, Arial' }}
                            >
                              {formatCurrency([156500, 186600, 192300][i])}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
