import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { timeTable } from "../db";

export default function TimeSection() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedIndex(newValue);
  };

  const firstTime = timeTable[0];
  const restTimes = timeTable.slice(1);

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        height: 480,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tabs
        orientation="vertical"
        value={selectedIndex === 0 ? 0 : false}
        onChange={handleChange}
        sx={{ borderBottom: 1, borderColor: "divider" }}
      >
        <Tab
          key={firstTime}
          value={0}
          label={
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {firstTime}
            </Box>
          }
          sx={{
            textTransform: "none",
            color: "gray",
            "&.Mui-selected": {
              backgroundColor: "#e5e5e5",
              color: "black",
              borderRadius: 1,
            },
            border: "1px solid black",
          }}
        />
      </Tabs>

      <Box
        sx={{
          overflowY: "auto",
          flex: 1,
          "&::-webkit-scrollbar": { width: 0, height: 0 },
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <Tabs
          orientation="vertical"
          value={selectedIndex > 0 ? selectedIndex - 1 : false}
          onChange={(e, newValue) => setSelectedIndex(newValue + 1)}
        >
          {restTimes.map((time, index) => (
            <Tab
              key={time}
              value={index}
              label={
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {time}
                </Box>
              }
              sx={{
                textTransform: "none",
                color: "gray",
                "&.Mui-selected": {
                  backgroundColor: "#e5e5e5",
                  color: "black",
                  borderRadius: 1,
                },
                border: "1px solid black",
              }}
            />
          ))}
        </Tabs>
      </Box>
    </Box>
  );
}
