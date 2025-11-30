export const weekdays: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + i);

  return {
    date: d.toISOString().split("T")[0],
    day: weekdays[d.getDay()],
  };
});

console.log(days);
