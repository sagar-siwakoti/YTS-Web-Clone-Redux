import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/hoc/Layout/Layout";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import {connect} from "react-redux";

function App() {
  return (
    <>
      <Layout>
        <div className="app">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/result" component={MovieDetails} />
          </Switch>
        </div>
      </Layout>
    </>
  );
}
const mapStateToProps = state => {
    return {
        all: state.allMovies,
        single: state.singleMovie,
        searched: state.searchedMovies
    }
}

export default connect(mapStateToProps)(App);
