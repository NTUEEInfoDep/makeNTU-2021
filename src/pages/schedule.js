import React from "react"
import Paper from "@material-ui/core/Paper"
import { ViewState } from "@devexpress/dx-react-scheduler"
import {
  Scheduler,
  DayView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import { green } from "@material-ui/core/colors"
import { appointments } from "./data"

const theme = createMuiTheme({ palette: { type: "light", primary: green } })

export default function Home() {
  return (
    <MuiThemeProvider theme={theme}>
      <Paper>
        <Scheduler data={appointments}>
          <ViewState currentDate="2021-01-29" />
          <DayView startDayHour={9} endDayHour={16} />
          <Appointments />
        </Scheduler>
      </Paper>
    </MuiThemeProvider>
  )
}
