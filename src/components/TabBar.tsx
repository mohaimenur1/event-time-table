import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { days } from "../db";

export default function TabBar() {
  const [weekName, setWeekName] = React.useState(days);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    // setValue(newValue);
    console.log("click value", newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper", width: "910px" }}>
      <Tabs
        value={weekName}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        aria-label="scrollable prevent tabs example"
      >
        {weekName?.map((name) => (
          <Tab
            key={name?.date}
            sx={{
              color: "gray",
              "&.Mui-selected": {
                backgroundColor: "#959090ff",
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
                <span>{name?.day}</span>
                <span>Date: {name?.date}</span>
              </div>
            }
          />
        ))}
      </Tabs>
    </Box>
  );
}
