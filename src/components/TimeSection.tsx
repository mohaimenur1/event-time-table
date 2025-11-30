import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { timeTable } from "../db";

export default function TimeSection() {
  const [times, setTimes] = React.useState(timeTable);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // setValue(newValue);
    console.log("click value", newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={times}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
        orientation="vertical"
      >
        {times?.map((name) => (
          <Tab
            key={name}
            sx={{
              color: "gray",
              "&.Mui-selected": {
                backgroundColor: "#e5e5e5",
                color: "black",
                borderRadius: "8px",
              },
              "&.Mui-selected .MuiTabs-indicator": {
                display: "none",
              },
              border: "1px solid black",
            }}
            label={
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <span>{name}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
}
