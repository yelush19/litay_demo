export const LITAY = {
  primaryDark: '#2d5f3f',
  primary: '#528163',
  primaryLight: '#8dd1bb',
  darkGreen: '#17320b',
  neutralDark: '#2d3436',
  neutralMedium: '#636e72',
  neutralLight: '#b2bec3',
  neutralBg: '#f5f6fa',
  white: '#ffffff',
  success: '#27ae60',
  warning: '#f39c12',
  error: '#e74c3c',
  info: '#3498db',
} as const;

export const CARD_COLORS = {
  revenue: 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-300',
  cogs: 'bg-orange-50 border-orange-300',
  opProfit: 'bg-emerald-50 border-emerald-300',
  netProfit: 'bg-gradient-to-r from-teal-50 to-emerald-50 border-teal-400',
} as const;

export const CHART_COLORS = {
  revenue: '#10b981',
  operating: '#6b7280',
  grossProfit: '#10b981',
  operatingProfit: '#0ea5e9',
  netProfit: '#14b8a6',
  marketing: '#f97316',
} as const;

export const MONTH_NAMES = [
  'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
  'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר',
] as const;
