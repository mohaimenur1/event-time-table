import { useState } from "react";
import { days } from "../db";
import { Box, Tab, Tabs } from "@mui/material";

export default function TabBar({
  onSelectDay,
}: {
  onSelectDay: (d: string) => void;
}) {
  const [selected, setSelected] = useState(0);

  const handleChange = (_: any, newValue: number) => {
    setSelected(newValue);
    onSelectDay(days[newValue].day);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "910px" }}>
      <Tabs
        value={selected}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
      >
        {days.map((name, idx) => (
          <Tab
            key={name.date}
            label={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>{name.day}</span>
                <span>Date: {name.date}</span>
              </div>
            }
            sx={{
              color: "gray",
              "&.Mui-selected": {
                backgroundColor: "#959090ff",
                color: "black",
                borderRadius: "8px",
              },
              border: "1px solid black",
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
}
