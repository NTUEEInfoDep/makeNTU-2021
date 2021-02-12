import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { Avatar, Box, Grid, Paper, Typography } from "@material-ui/core";

import BuildIcon from "@material-ui/icons/Build";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import RestaurantIcon from "@material-ui/icons/Restaurant";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import EqualizerIcon from "@material-ui/icons/Equalizer";
import PollIcon from "@material-ui/icons/Poll";
import { element } from "prop-types";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0081A8" },
    secondary: { main: "#CC0049" },
  },
});

const useStyles = makeStyles((theme) => ({
  avatar: { backgroundColor: "#E3B600" },
  paper: { padding: theme.spacing(2, 8) },
}));

export default function HyChouTimeline() {
  const staticQueryData = useStaticQuery(graphql`
    {
      allContentfulTimelineData {
        edges {
          node {
            id
            data {
              dayCount
              days {
                date
                eventCount
                events {
                  color
                  end
                  icon
                  text
                  time
                }
              }
            }
          }
        }
      }
    }
  `);
  const timeline = staticQueryData.allContentfulTimelineData.edges[0].node.data;

  const classes = useStyles();

  const TimelineIcon = (props) => {
    if (props.type === "BuildIcon") {
      return <BuildIcon />;
    } else if (props.type === "Brightness2Icon") {
      return <Brightness2Icon />;
    } else if (props.type === "Brightness7Icon") {
      return <Brightness7Icon />;
    } else if (props.type === "RestaurantIcon") {
      return <RestaurantIcon />;
    } else if (props.type === "HowToRegIcon") {
      return <HowToRegIcon />;
    } else if (props.type === "EqualizerIcon") {
      return <EqualizerIcon />;
    } else if (props.type === "PollIcon") {
      return <PollIcon />;
    } else {
      return <BuildIcon />;
    }
  };

  const Event = (props) => {
    return (
      <Box minWidth={250}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={4}>
            <Typography color={props.event.color || "primary"}>
              <Box textAlign="right">{props.event.time || "error"}</Box>
            </Typography>
          </Grid>
          <Grid item>
            <Box>
              <Avatar className={classes.avatar}>
                <TimelineIcon type={props.event.icon} />
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography color={props.event.color || "primary"}>
              <Box textAlign="left" overflow="visable" whiteSpace="nowrap">
                {props.event.text || "error"}
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Typography color="primary">
          <Box my={-1.2} textAlign="center">
            {props.event.end ? "" : "|"}
          </Box>
        </Typography>
      </Box>
    );
  };

  const Events = (props) => {
    if (props.events.length) {
      return (
        <>
          {props.events.map((element) => {
            return <Event event={element} />;
          })}
        </>
      );
    }
    return <>error</>;
  };

  const Day = (props) => {
    return (
      <Grid item>
        <Paper elevation={3} className={classes.paper}>
          <Box py={2}>
            <Typography variant="h5" color="primary">
              <Box mb={3} textAlign="center">
                {props.day.date}
              </Box>
            </Typography>
            <Events count={props.day.eventCount} events={props.day.events} />
          </Box>
        </Paper>
      </Grid>
    );
  };

  const TimelineDays = (props) => {
    if (props.days.length) {
      return (
        <>
          {props.days.map((element) => {
            return <Day day={element} />;
          })}
        </>
      );
    }
    return <>error</>;
  };

  return (
    <>
      <section className="section bg-gray">
        <div className="container mx-auto">
          <h2 className="text-center section__title mb-16">活動時程</h2>
          <div className={classes.root}>
            <ThemeProvider theme={theme}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="flex-start"
                spacing={5}
              >
                <TimelineDays count={timeline.dayCount} days={timeline.days} />
              </Grid>
            </ThemeProvider>
          </div>
        </div>
      </section>
    </>
  );
}
