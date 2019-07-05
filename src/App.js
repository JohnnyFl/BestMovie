import React, { useEffect } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import { downloadMovies } from "./Actions/actions";
import { connect } from "react-redux";
import "./App.css";

const mapDispatchToProps = {
  downloadMovies
};

const App = props => {
  const { downloadMovies } = props;
  useEffect(() => {
    downloadMovies();
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="container">
        <Main />
      </div>
    </div>
  );
};

export default connect(
  null,
  mapDispatchToProps
)(App);
