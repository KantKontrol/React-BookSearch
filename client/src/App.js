import React from "react";
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchPage from "./pages/SearchPage";
import SavedPage from "./pages/SavedPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
            <Redirect to="/search" />
        </Route>
        <Route exact path="/search">
            <SearchPage />
        </Route>
        <Route exact path="/saved">
            <SavedPage />
        </Route>
      </Switch>
    </BrowserRouter>
     
  );
}


export default App;
