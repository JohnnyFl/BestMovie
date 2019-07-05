import React from "react";
import { Route } from "react-router-dom";
import Movie from "./Movie";
import Movies from "./Movies";

const Main = () => {
  return (
    <>
      <Route exact path="/" component={Movies} />
      <Route path="/movie" component={Movie} />
    </>
  );
};

export default Main;
