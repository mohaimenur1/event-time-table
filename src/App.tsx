import { Box } from "@mui/material";
import "./App.css";
import TabBar from "./components/TabBar";
import VenuBar from "./components/VenuBar";
import TimeSection from "./components/TimeSection";
import EventSection from "./components/EventSection";

function App() {
  return (
    <>
      <Box sx={{ maxWidth: "1000px" }}>
        <TabBar />
        <Box sx={{ display: "flex" }}>
          <TimeSection />
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <VenuBar />
            <EventSection />
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
