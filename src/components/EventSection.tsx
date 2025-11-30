import { Box } from "@mui/material";
import { events, timeTable, Venus } from "../db";

type Props = {
  selectedDay?: string;
  rowHeight?: number;
  venueWidth?: number;
};

export default function EventSection({
  selectedDay,
  rowHeight = 30,
  venueWidth = 118,
}: Props) {
  if (!selectedDay) {
    return (
      <Box
        sx={{
          width: `${venueWidth * Venus.length}px`,
          height: `${rowHeight * (timeTable.length - 1)}px`,
          border: "1px solid black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "gray",
        }}
      >
        Select a day
      </Box>
    );
  }

  const dayEvents = events.filter((ev) => ev.day === selectedDay);

  const getTimeIndex = (t?: string): number => {
    if (!t) return -1;
    return timeTable.indexOf(t);
  };

  const getHeightPx = (start?: string, end?: string): number => {
    const s = getTimeIndex(start);
    const e = getTimeIndex(end);
    if (s < 1 || e <= s) return rowHeight;
    return (e - s) * rowHeight;
  };

  return (
    <Box
      sx={{
        position: "relative",
        width: `${venueWidth * Venus.length}px`,
        border: "1px solid black",
        bgcolor: "background.paper",
        height: "432px",
      }}
    >
      {dayEvents.map((ev) => {
        const startIdx = getTimeIndex(ev.startTime);
        const endIdx = getTimeIndex(ev.endTime);
        if (startIdx < 1 || endIdx <= startIdx) return null;

        const topPx = startIdx * rowHeight;
        const heightPx = getHeightPx(ev.startTime, ev.endTime);
        const venueIndex = Math.max(0, Venus.indexOf(ev.venue ?? ""));
        const leftPx = venueIndex * venueWidth;

        return (
          <Box
            key={ev.id}
            sx={{
              position: "absolute",
              top: `${topPx}px`,
              left: `${leftPx}px`,
              height: `${heightPx}px`,
              width: `${venueWidth}px`,
              backgroundColor: ev.color ?? "#999",
              color: "#fff",
              borderRadius: "6px",
              padding: "4px",
              boxSizing: "border-box",
              overflow: "hidden",
              fontSize: "12px",
            }}
          >
            <Box component="div" sx={{ fontWeight: 700, lineHeight: 1 }}>
              {ev.title}
            </Box>
            <Box component="div" sx={{ fontSize: "11px", mt: "4px" }}>
              {ev.startTime} - {ev.endTime}
            </Box>
            <Box component="div" sx={{ fontSize: "11px", opacity: 0.9 }}>
              {ev.venue}
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
