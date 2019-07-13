import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

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

const Movie = props => {
  const [movie, setMovie] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    setMovie(
      props.movies
        .filter(movie => movie.id === Number(props.match.params.id))
        .find(movie => movie.id === Number(props.match.params.id))
    );
  }, [props.match.params.id, props.movies]);

  return (
    <>
      {movie ? (
        <div>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="movie"
              style={{
                width: "100%",
                height: "80vh",
                objectFit: "contain",
                marginBottom: 30
              }}
            />
          </div>
          <Typography gutterBottom variant="h5" component="h2" align="center">
            {movie.original_title || movie.original_name}
          </Typography>
          <Typography
            gutterBottom
            component="p"
            variant="subtitle1"
            style={{ padding: "20px 20%" }}
          >
            {movie.overview}
          </Typography>
        </div>
      ) : (
        <div style={styles.progressBarStyle}>
          <CircularProgress className={classes.progress} />
        </div>
      )}
    </>
  );
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Movie));
