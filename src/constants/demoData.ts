export interface MonthlyRow {
  month: string;
  revenue: number;
  cogs: number;
  grossProfit: number;
  operating: number;
  operatingProfit: number;
  financial: number;
  netProfit: number;
}

export const DEMO_MONTHLY: MonthlyRow[] = [
  { month: 'ינואר',   revenue: 245000, cogs: 142000, grossProfit: 103000, operating: 58000, operatingProfit: 45000, financial: 3200, netProfit: 41800 },
  { month: 'פברואר',  revenue: 268000, cogs: 155000, grossProfit: 113000, operating: 61000, operatingProfit: 52000, financial: 2800, netProfit: 49200 },
  { month: 'מרץ',     revenue: 312000, cogs: 178000, grossProfit: 134000, operating: 65000, operatingProfit: 69000, financial: 3500, netProfit: 65500 },
  { month: 'אפריל',   revenue: 289000, cogs: 167000, grossProfit: 122000, operating: 62000, operatingProfit: 60000, financial: 3100, netProfit: 56900 },
  { month: 'מאי',     revenue: 334000, cogs: 192000, grossProfit: 142000, operating: 68000, operatingProfit: 74000, financial: 4000, netProfit: 70000 },
  { month: 'יוני',    revenue: 298000, cogs: 171000, grossProfit: 127000, operating: 64000, operatingProfit: 63000, financial: 3300, netProfit: 59700 },
  { month: 'יולי',    revenue: 321000, cogs: 185000, grossProfit: 136000, operating: 66000, operatingProfit: 70000, financial: 3600, netProfit: 66400 },
  { month: 'אוגוסט',  revenue: 276000, cogs: 160000, grossProfit: 116000, operating: 60000, operatingProfit: 56000, financial: 2900, netProfit: 53100 },
  { month: 'ספטמבר',  revenue: 345000, cogs: 198000, grossProfit: 147000, operating: 70000, operatingProfit: 77000, financial: 4200, netProfit: 72800 },
  { month: 'אוקטובר', revenue: 358000, cogs: 205000, grossProfit: 153000, operating: 72000, operatingProfit: 81000, financial: 4500, netProfit: 76500 },
  { month: 'נובמבר',  revenue: 310000, cogs: 179000, grossProfit: 131000, operating: 63000, operatingProfit: 68000, financial: 3400, netProfit: 64600 },
  { month: 'דצמבר',   revenue: 372000, cogs: 213000, grossProfit: 159000, operating: 74000, operatingProfit: 85000, financial: 4800, netProfit: 80200 },
];

export const DEMO_SUMMARY = {
  totalRevenue: DEMO_MONTHLY.reduce((s, r) => s + r.revenue, 0),
  totalCogs: DEMO_MONTHLY.reduce((s, r) => s + r.cogs, 0),
  totalOperating: DEMO_MONTHLY.reduce((s, r) => s + r.operating, 0),
  totalNetProfit: DEMO_MONTHLY.reduce((s, r) => s + r.netProfit, 0),
};

export function formatCurrency(n: number): string {
  return n.toLocaleString('he-IL', {
    style: 'currency',
    currency: 'ILS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
}
