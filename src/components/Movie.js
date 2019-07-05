import React from "react";
import Typography from "@material-ui/core/Typography";

const Movie = () => {
  return (
    <div>
      <div>
        <img
          src="https://image.tmdb.org/t/p/original/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
          alt="movie"
          style={{
            width: "100%",
            height: "80vh",
            objectFit: "cover",
            marginBottom: 30
          }}
        />
      </div>
      <Typography gutterBottom variant="h5" component="h2" align="center">
        Avengers: Infinity War
      </Typography>
      <Typography
        gutterBottom
        component="p"
        variant="subtitle1"
        style={{ padding: "0 20%" }}
      >
        As the Avengers and their allies have continued to protect the world
        from threats too large for any one hero to handle, a new danger has
        emerged from the cosmic shadows: Thanos. A despot of intergalactic
        infamy, his goal is to collect all six Infinity Stones, artifacts of
        unimaginable power, and use them to inflict his twisted will on all of
        reality. Everything the Avengers have fought for has led up to this
        moment - the fate of Earth and existence itself has never been more
        uncertain.
      </Typography>
    </div>
  );
};

export default Movie;
