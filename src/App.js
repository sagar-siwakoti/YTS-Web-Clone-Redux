import React from "react";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
