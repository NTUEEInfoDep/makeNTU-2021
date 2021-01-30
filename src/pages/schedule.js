import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
// import { appointments } from "./data";

const theme = createMuiTheme({ palette: { type: "light", primary: green } });

const appointments = [
  {
    title: "Check-in",
    startDate: new Date(2021, 4, 8, 9),
    endDate: new Date(2021, 4, 8, 10),
    // id: 0,
    // location: "Room 1",
  },
  {
    title: "Opening",
    startDate: new Date(2021, 4, 8, 10),
    endDate: new Date(2021, 4, 8, 11),
  },
  {
    title: "Making",
    startDate: new Date(2021, 4, 8, 11),
    endDate: new Date(2021, 4, 8, 24),
  },
  {
    title: "Making",
    startDate: new Date(2021, 4, 9, 0),
    endDate: new Date(2021, 4, 9, 11),
  },
  {
    title: "Lunch",
    startDate: new Date(2021, 4, 8, 12),
    endDate: new Date(2021, 4, 8, 13),
  },
  {
    title: "Dinner",
    startDate: new Date(2021, 4, 8, 18),
    endDate: new Date(2021, 4, 8, 19),
  },
  {
    title: "Night Treat",
    startDate: new Date(2021, 4, 8, 21),
    endDate: new Date(2021, 4, 8, 22),
  },
  {
    title: "Breakfast",
    startDate: new Date(2021, 4, 9, 7),
    endDate: new Date(2021, 4, 9, 8),
  },
  {
    title: "Lunch",
    startDate: new Date(2021, 4, 9, 11, 30),
    endDate: new Date(2021, 4, 9, 12),
  },
  {
    title: "Expo",
    startDate: new Date(2021, 4, 9, 12),
    endDate: new Date(2021, 4, 9, 13),
  },
  {
    title: "Top 8 Demo",
    startDate: new Date(2021, 4, 9, 16),
    endDate: new Date(2021, 4, 9, 17),
  },
  {
    title: "Award Ceremony",
    startDate: new Date(2021, 4, 9, 17),
    endDate: new Date(2021, 4, 9, 18),
  },
  {
    title: "Ending",
    startDate: new Date(2021, 4, 9, 18),
    endDate: new Date(2021, 4, 9, 19),
  },
];

export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={appointments}>
          <ViewState currentDate="2021-05-08" />
          <DayView startDayHour={8} endDayHour={24} />
          <Appointments />
        </Scheduler>
        <Scheduler data={appointments}>
          <ViewState currentDate="2021-05-09" />
          <DayView startDayHour={0} endDayHour={24} />
          <Appointments />
        </Scheduler>
      </Paper>
    </MuiThemeProvider>
  );
}
