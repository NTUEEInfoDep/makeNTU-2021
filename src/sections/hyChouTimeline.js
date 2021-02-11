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

const theme = createMuiTheme({
  palette: {
    primary: { main: "#0081A8" },
    secondary: { main: "#CC0049" },
  },
});

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: "#E3B600",
  },
  paper: { padding: theme.spacing(2, 8) },
}));

export default function HyChouTimeline() {
  const data = useStaticQuery(graphql`
    {
      allContentfulTimeline {
        edges {
          node {
            id
            date
            events {
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
  `);
  const dateData = [
    data.allContentfulTimeline.edges[0].node.date,
    data.allContentfulTimeline.edges[1].node.date,
  ];
  const eventData = [
    data.allContentfulTimeline.edges[0].node.events.events,
    data.allContentfulTimeline.edges[1].node.events.events,
  ];

  const classes = useStyles();

  const TimelineIcon = (props) => {
    if (props.icon === "BuildIcon") {
      return <BuildIcon />;
    } else if (props.icon === "Brightness2Icon") {
      return <Brightness2Icon />;
    } else if (props.icon === "Brightness7Icon") {
      return <Brightness7Icon />;
    } else if (props.icon === "RestaurantIcon") {
      return <RestaurantIcon />;
    } else if (props.icon === "HowToRegIcon") {
      return <HowToRegIcon />;
    } else if (props.icon === "EqualizerIcon") {
      return <EqualizerIcon />;
    } else if (props.icon === "PollIcon") {
      return <PollIcon />;
    } else {
      return <svg />;
    }
  };

  const Event = (props) => {
    return (
      <Box>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={4}>
            <Typography variant="subtitle1" color={props.data.color}>
              <Box textAlign="right" letterSpacing={1}>
                {props.data.time}
              </Box>
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Avatar className={classes.avatar}>
              <TimelineIcon icon={props.data.icon} />
            </Avatar>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1" color={props.data.color}>
              <Box textAlign="left" overflow="visible" whiteSpace="nowrap">
                {props.data.text}
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Box my={-1.5} textAlign="center">
          <Typography variant="subtitle1" color="primary">
            {props.data.end ? "" : "|"}
          </Typography>
        </Box>
      </Box>
    );
  };

  const Date = (props) => {
    return (
      <Grid item>
        <Paper elevation={3} className={classes.paper}>
          <Box py={2}>
            <Box mb={3} textAlign="center">
              <Typography variant="h5" color="primary">
                {props.date}
              </Typography>
            </Box>
            {props.children}
          </Box>
        </Paper>
      </Grid>
    );
  };

  return (
    <section className="section bg-gray">
      <div className="container mx-auto">
        <div>
          <h2 className="text-center section__title mb-16">活動時程</h2>
        </div>
        <div className={classes.root}>
          <ThemeProvider theme={theme}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="flex-start"
              spacing={5}
            >
              <Date date={dateData[0]}>
                <Event data={eventData[0][0]} />
                <Event data={eventData[0][1]} />
                <Event data={eventData[0][2]} />
                <Event data={eventData[0][3]} />
                <Event data={eventData[0][4]} />
                <Event data={eventData[0][5]} />
              </Date>
              <Date date={dateData[1]}>
                <Event data={eventData[1][0]} />
                <Event data={eventData[1][1]} />
                <Event data={eventData[1][2]} />
                <Event data={eventData[1][3]} />
                <Event data={eventData[1][4]} />
                <Event data={eventData[1][5]} />
                <Event data={eventData[1][6]} />
              </Date>
            </Grid>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
}
