import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardMovie from "./CardMovie";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import InfiniteScroll from "react-infinite-scroller";
import { downloadMovies2 } from "../Actions/actions";

const mapStateToProps = ({ movies }) => {
  return { movies };
};

const mapDispatchToProps = {
  downloadMovies2
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

const Movies = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {props.movies.length ? (
        <InfiniteScroll
          pageStart={0}
          loadMore={props.downloadMovies2}
          hasMore={true}
          threshold={1000}
          loader={
            <div style={styles.progressBarStyle}>
              <CircularProgress className={classes.progress} />
            </div>
          }
        >
        {/* key prop issue. {items} we have {item} */}
          <Grid container spacing={3}>
            {props.movies.map(movie => (
              <Grid key={movie.id} item lg={2} md={3} sm={6} xs={12}>
                <CardMovie key={movie.id+1} movie={movie} />
              </Grid>
            ))}
          </Grid>
        </InfiniteScroll>
      ) : (
        <div style={styles.progressBarStyle}>
          <CircularProgress className={classes.progress} />
        </div>
      )}
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Movies);
