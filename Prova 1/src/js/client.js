import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Mundesite_E_Zgjedhjes from "./Layout/Mundesite_E_Zgjedhjes";
import MainPage from "./Layout/MainPage";
import Postimi from "./Layout/Postimi";
import Regjistrohu from "./Layout/Regjistrohu";
import FaqiaPare from "./Layout/Faqia Pare";
import Regjistrimi_OK from "./Layout/Regjistrimi_OK";


const app = document.getElementById('app');




ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={MainPage}>
      <IndexRoute component={FaqiaPare}></IndexRoute>
      <Route path="mundesit(:Vendi,:Nrf)" name="Mundesit" component={Mundesite_E_Zgjedhjes}></Route>
      <Route path="postimi(:Vendi,:Nrf)" name="Postimi" component={Postimi}></Route>
      <Route path="regjistrohu" name="Regjistrohu" component={Regjistrohu}></Route>
      <Route path="regjistrimi_ok" name="Regjistrimi_OK" component={Regjistrimi_OK}></Route>
    </Route>
  </Router>,
app);