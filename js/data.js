export const mockDashboardData = Array.from({ length: 30 }, (_, i) => ({
  id: crypto.randomUUID(),
  name: `User ${i + 1}`,
  email: `user${i + 1}@mail.com`,
  revenue: +(Math.random() * 5000).toFixed(2),
  status: ["Active", "Pending", "Churned"][Math.floor(Math.random() * 3)],
  lastLogin: new Date().toISOString()
}));
