import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./components/hoc/Layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <div className="app">
          <Switch>
            <Route path="/" component={HomePage} />
          </Switch>
        </div>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
