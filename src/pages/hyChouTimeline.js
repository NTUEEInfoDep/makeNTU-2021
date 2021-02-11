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
            <Box textAlign="center">
              <Typography variant="subtitle1" color={props.color || "primary"}>
                {props.left || "error"}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <Box textAlign="center">
              <Avatar className={classes.avatar}>{props.children}</Avatar>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box textAlign="left" overflow="visible" whiteSpace="nowrap">
              <Typography variant="subtitle1" color={props.color || "primary"}>
                {props.right || "error"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box my={-1.5} textAlign="center">
          <Typography variant="subtitle1" color="primary">
            {props.next || "|"}
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
              <Date date="5 / 8">
                <Event left="09:00" right="報到" color="primary">
                  <HowToRegIcon />
                </Event>
                <Event left="10:00" right="開幕" color="primary">
                  <Brightness7Icon />
                </Event>
                <Event left="11:00" right="Start Making!" color="secondary">
                  <BuildIcon />
                </Event>
                <Event left="12:00" right="午餐" color="primary">
                  <RestaurantIcon />
                </Event>
                <Event left="18:00" right="晚餐" color="primary">
                  <RestaurantIcon />
                </Event>
                <Event left="21:00" right="宵夜" color="primary">
                  <RestaurantIcon />
                </Event>
              </Date>
              <Date date="5 / 9">
                <Event left="07:00" right="早餐" color="primary">
                  <RestaurantIcon />
                </Event>
                <Event left="11:00" right="Stop Making!" color="secondary">
                  <BuildIcon />
                </Event>
                <Event left="11:30" right="午餐" color="primary">
                  <RestaurantIcon />
                </Event>
                <Event left="12:00" right="分組評選" color="primary">
                  <PollIcon />
                </Event>
                <Event left="16:00" right="八強決選" color="primary">
                  <PollIcon />
                </Event>
                <Event left="17:00" right="頒獎典禮" color="primary">
                  <EqualizerIcon />
                </Event>
                <Event left="18:00" right="落幕" next=" " color="primary">
                  <Brightness2Icon />
                </Event>
              </Date>
            </Grid>
          </ThemeProvider>
        </div>
      </div>
    </section>
  );
}
