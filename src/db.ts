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

export const timeTable = [
  " ",
  "9:00",
  "9:15",
  "9:30",
  "9:45",
  "10:00",
  "10:15",
  "10:30",
  "10:45",
  "11:00",
  "11:15",
  "11:30",
  "11:45",
  "12:00",
  "12:15",
  "12:30",
  "12:45",
];

export const Venus = [
  "Venue1",
  "Venue2",
  "Venue3",
  "Venue4",
  "Venue5",
  "Venue6",
  "Venue7",
];
