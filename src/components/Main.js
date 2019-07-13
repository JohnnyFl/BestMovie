import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Movie from "./Movie";
import Movies from "./Movies";

const Main = () => {
  return (
    <main>
      <Switch>
      <Route exact path="/" component={Movies} />
      <Route
        path="/movie/:id"
        render={({
          match: {
            params: { id }
          }
        }) => <Movie id={id} />}
      />
    </Switch>
    </main>
    
  );
};

export default withRouter(Main);
