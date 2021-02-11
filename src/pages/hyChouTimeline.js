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
  avatar: { backgroundColor: "#E3B600" },
  paper: { padding: theme.spacing(2, 8) },
}));

export default function HyChouTimeline() {
  const data = useStaticQuery(graphql`
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
  const day = data.allContentfulTimelineData.edges[0].node.data.days;
  const day1 = day[0];
  const day1event1 = day[0].events[0];
  // return <pre>{JSON.stringify(day1, null, 4)}</pre>;

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
      return <BuildIcon />;
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
            <Box textAlign="right">
              <Typography color={props.data.color || "primary"}>
                {props.data.time || "error"}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box>
              <Avatar className={classes.avatar}>
                <TimelineIcon icon={props.data.icon} />
              </Avatar>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Typography color={props.data.color || "primary"}>
              <Box textAlign="left" overflow="visable" whiteSpace="nowrap">
                {props.data.text || "error"}
              </Box>
            </Typography>
          </Grid>
        </Grid>
        <Box my={-1.2} textAlign="center">
          <Typography color="primary">{props.data.end ? "" : "|"}</Typography>
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
              <Date date="5 / 8">
                <Event data={day[0].events[0]} />
                <Event data={day[0].events[1]} />
                <Event data={day[0].events[2]} />
                <Event data={day[0].events[3]} />
                <Event data={day[0].events[4]} />
                <Event data={day[0].events[5]} />
              </Date>
            </Grid>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
}
