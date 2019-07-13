import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMovie from "./CardMovie";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

const mapStateToProps = ({ movies }) => {
  return { movies };
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  progress: {
    margin: theme.spacing(2),
    color: "#2196f3"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const styles = {
  progressBarStyle: {
    display: "flex",
    justifyContent: "center",
    width: "100%"
  }
};

const Movies = ({ movies }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {movies.length ? (
          movies.map(movie => (
            <Grid key={movie.id} item lg={2} md={3} sm={6} xs={12}>
              <CardMovie movie={movie} />
            </Grid>
          ))
        ) : (
          <div style={styles.progressBarStyle}>
            <CircularProgress className={classes.progress} />
          </div>
        )}
      </Grid>
    </div>
  );
};

export default connect(
  mapStateToProps,
  null
)(Movies);
