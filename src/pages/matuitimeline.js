import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import FiberManualRecordRoundedIcon from "@material-ui/icons/FiberManualRecordRounded";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";
import FastfoodOutlinedIcon from "@material-ui/icons/FastfoodOutlined";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function MatUITimeline() {
  const classes = useStyles();

  const TagDate = (props) => (
    <TimelineItem>
      <TimelineContent>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h3" component="h1">
            {props.date}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
  const EventPrimary = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h5" component="h1" color="textPrimary">
            {props.time}
          </Typography>
        </Paper>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <FiberManualRecordRoundedIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={5} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {props.text}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
  const EventSecondary = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h5" component="h1" color="secondary">
            {props.time}
          </Typography>
        </Paper>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="secondary">
          <BuildOutlinedIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={5} className={classes.paper}>
          <Typography variant="h6" component="h1" color="secondary">
            {props.text}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
  const EventLast = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h5" component="h1" color="textPrimary">
            {props.time}
          </Typography>
        </Paper>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <FiberManualRecordRoundedIcon />
        </TimelineDot>
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={5} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {props.text}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
  const EventMeal = (props) => (
    <TimelineItem>
      <TimelineOppositeContent>
        <Paper elevation={0} className={classes.paper}>
          <Typography variant="h5" component="h1" color="textPrimary">
            {props.time}
          </Typography>
        </Paper>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">
          <FastfoodOutlinedIcon />
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={5} className={classes.paper}>
          <Typography variant="h6" component="h1">
            {props.text}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );

  return (
    <div>
      <Timeline align="left">
        <TagDate date="5/8" />
        <EventPrimary time="09:00" text="報到" />
        <EventPrimary time="10:00" text="開幕" />
        <EventSecondary time="11:00" text="Start Making!" />
        <EventMeal time="12:00" text="午餐" />
        <EventMeal time="18:00" text="晚餐" />
        <EventMeal time="21:00" text="宵夜" />
      </Timeline>
      <Timeline align="left">
        <TagDate date="5/9" />
        <EventMeal time="07:00" text="早餐" />
        <EventSecondary time="11:00" text="End of Making!" />
        <EventMeal time="11:30" text="午餐" />
        <EventPrimary time="12:00" text="分組評選" />
        <EventPrimary time="16:00" text="八強決選" />
        <EventPrimary time="17:00" text="頒獎典禮" />
        <EventLast time="18:00" text="落幕" />
      </Timeline>
    </div>
  );
}
