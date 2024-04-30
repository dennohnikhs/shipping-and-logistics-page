const dummyData = Array.from({ length: 30 }, (_, i) => ({
  dateShipped: `${i + 1}/12`,
  weight: (i + 1) * 100,
}));
export default dummyData;
