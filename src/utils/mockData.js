export const mockGroups = [
  {
    id: "g1",
    name: "Alpha Monthly Saver",
    amountPerMonth: 5000,
    totalMembers: 10,
    currentMonth: 3,
    duration: 10,
    startDate: "2026-03-01",
    amountCollected: 45000,
    targetAmount: 50000,
    pendingCount: 1,
    members: [
      { id: "m1", name: "John Doe", phone: "1234567890", paid: true, note: "" },
      { id: "m2", name: "Jane Smith", phone: "0987654321", paid: true, note: "Paid early" },
      { id: "m3", name: "Sam Wilson", phone: "1122334455", paid: false, note: "" },
      { id: "m4", name: "Mike Tyson", phone: "2233445566", paid: true, note: "" },
      { id: "m5", name: "Chris Evans", phone: "3344556677", paid: true, note: "" },
    ],
    currentWinner: "Jane Smith"
  },
  {
    id: "g2",
    name: "Tech Founders Fund",
    amountPerMonth: 10000,
    totalMembers: 20,
    currentMonth: 5,
    duration: 20,
    startDate: "2026-01-15",
    amountCollected: 200000,
    targetAmount: 200000,
    pendingCount: 0,
    members: [
      { id: "m1", name: "Alice", phone: "5551112222", paid: true, note: "" },
      { id: "m2", name: "Bob", phone: "5553334444", paid: true, note: "" }
    ],
    currentWinner: "Sam Wilson"
  }
];

export const mockSummaryStats = {
  totalGroups: 12,
  activeGroups: 8,
  monthlyCollection: 345000
};
