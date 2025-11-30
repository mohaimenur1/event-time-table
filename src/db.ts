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

export const events = [
  {
    id: "ev1",
    title: "Team Standup",
    day: days[0].day,
    date: days[0].date,
    venue: "Venue1",
    startTime: "9:00",
    endTime: "9:30",
    color: "#4caf50",
  },
  {
    id: "ev2",
    title: "Next.js Workshop",
    day: days[1].day,
    date: days[1].date,
    venue: "Venue3",
    startTime: "10:00",
    endTime: "11:00",
    color: "#2196f3",
  },
  {
    id: "ev3",
    title: "Client Review",
    day: days[2].day,
    date: days[2].date,
    venue: "Venue5",
    startTime: "11:30",
    endTime: "12:00",
    color: "#ff5722",
  },
  {
    id: "ev4",
    title: "Marketing Sync",
    day: "Friday",
    venue: "Venue2",
    startTime: "9:15",
    endTime: "10:15",
    color: "#ff9800",
  },
];
