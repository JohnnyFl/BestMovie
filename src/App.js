import React, { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { downloadMovies } from "./Actions/actions";
import "./App.css";
import { connect } from "react-redux";

const mapDispatchToProps = {
  downloadMovies
};

const App = () => {
  useEffect(() => {
    downloadMovies();
  }, []);

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
