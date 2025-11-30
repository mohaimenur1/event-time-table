import { Box } from "@mui/material";
import { useState } from "react";
import TabBar from "./components/TabBar";
import TimeSection from "./components/TimeSection";
import VenuBar from "./components/VenuBar";
import EventSection from "./components/EventSection";
import { days } from "./db";

export function App() {
  const [selectedDay, setSelectedDay] = useState(days[0].day);

  return (
    <Box sx={{ maxWidth: "1000px" }}>
      <TabBar onSelectDay={setSelectedDay} />

      <Box sx={{ display: "flex" }}>
        <TimeSection />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <VenuBar />
          <EventSection selectedDay={selectedDay} />
        </Box>
      </Box>
    </Box>
  );
}
