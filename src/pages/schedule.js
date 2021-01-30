import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

import { data } from "./data";

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: "#0081A8", // blue
      // backgroundColor: "#CC0049", // red
    }}
  >
    {children}
  </Appointments.Appointment>
);

export default function Home() {
  return (
    <Paper>
      <Scheduler data={data}>
        <ViewState currentDate="2021-05-08" />
        <DayView intervalCount={2} startDayHour={8.5} endDayHour={21.5} />
        <Appointments appointmentComponent={Appointment} />
      </Scheduler>
    </Paper>
  );
}
