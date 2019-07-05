import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMovie from "./CardMovie";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Movies = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>

        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
        <Grid item lg={2} md={3} sm={6} xs={12}>
          <CardMovie />
        </Grid>
      </Grid>
    </div>
  );
};

export default Movies;
