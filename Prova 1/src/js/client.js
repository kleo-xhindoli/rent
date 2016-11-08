import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./Layout/Layout";
import MainPage from "./Layout/MainPage";
import Postimi from "./Layout/Postimi";
import Sorting from "./Layout/Sorting";

const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={Sorting}></IndexRoute>
      <Route path="mundesit(:Vendi,:Nrf)" name="Mundesit" component={Layout}></Route>
      <Route path="element(:Vendi,:Nrf)" name="postimi" component={Postimi}></Route>
    </Route>
  </Router>,
app);